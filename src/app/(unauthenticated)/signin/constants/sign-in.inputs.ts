import { v4 as randomID } from "uuid";
import { SignInSchema } from "./sign-in.schema";
import { FormInputs } from "@/types/input.type";

export const signInFormInputs: FormInputs<SignInSchema>[] = [
  {
    key: randomID(),
    name: "email",
    type: "email",
    label: "E-mail",
    placeholder: "exemplo@email.com",
  },
  {
    key: randomID(),
    name: "password",
    type: "password",
    label: "Senha",
    placeholder: "*****************",
  },
];
