import * as yup from "yup";

export const singInSchema = yup.object({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Insira um e-mail válido")
    .default(""),
  password: yup
    .string()
    .min(8, "Insira uma senha válida")
    .required("Insira uma senha válida")
    .default(""),
});

export type SignInSchema = yup.InferType<typeof singInSchema>;
