import { useState } from "react";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import FormContainer from "../Components/FormContainer";
import { insertSession } from "../db";
import { loginSchema } from "../validations/loginSchema";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorApi, setErrorApi] = useState("");

  const [triggerLogin] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    console.log("Valores antes de validar:", { email, password });

    try {
      const validation = loginSchema.validateSync(
        {
          email,
          password,
        },
        { abortEarly: false }
      );

      const response = await triggerLogin({
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
        insertSession(
          response.data.localId,
          response.data.email,
          response.data.idToken
        );
      } else {
        setErrorApi("Credenciales no válidas");
      }
    } catch (err) {
      setErrorMail("");
      setErrorPassword("");

      if (err.inner) {
        err.inner.forEach((error) => {
          switch (error.path) {
            case "email":
              setErrorMail(error.message);
              break;
            case "password":
              setErrorPassword(error.message);
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
      signup={false}
      setEmail={setEmail}
      setPassword={setPassword}
      errorMail={errorMail}
      errorPassword={errorPassword}
      errorApi={errorApi}
    />
  );
};

export default Login;
