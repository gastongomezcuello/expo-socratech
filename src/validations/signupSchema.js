import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("Campo obligatorio").email("Email inválido"),
  password: string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Campo obligatorio"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "La contraseña no coincide")
    .required("Campo obligatorio"),
});
