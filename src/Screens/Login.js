import { useState } from "react";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import FormContainer from "../Components/FormContainer";
import { insertSession } from "../db";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [triggerLogin] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
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
        console.error("Error: Respuesta inesperada de la API", response);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <FormContainer
      onSubmit={onSubmit}
      signup={false}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
