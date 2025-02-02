import { useState } from "react";
import { useSignupMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import FormContainer from "../Components/FormContainer";
import { signupSchema } from "../validations/signupSchema";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerSignup] = useSignupMutation();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const validation = signupSchema.validateSync(
        {
          email,
          password,
          confirmPassword,
        },
        { abortEarly: false }
      );

      const response = await triggerSignup({
        email,
        password,
      });
      if (response.data) {
        dispatch(
          setUser({
            data: {
              email: response.data.email,
              idToken: response.data.idToken,
              localId: response.data.localId,
            },
          })
        );
      } else {
        console.error("Error: Respuesta inesperada de la API", response);
      }
    } catch (err) {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      if (err.inner) {
        err.inner.forEach((error) => {
          switch (error.path) {
            case "email":
              setErrorMail(error.message);
              break;
            case "password":
              setErrorPassword(error.message);
              break;
            case "confirmPassword":
              setErrorConfirmPassword(error.message);
              break;
            default:
              break;
          }
        });
      }
    }
  };
  return (
    <FormContainer
      onSubmit={onSubmit}
      signup={true}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      errorMail={errorMail}
      errorPassword={errorPassword}
      errorConfirmPassword={errorConfirmPassword}
    />
  );
};

export default Signup;
