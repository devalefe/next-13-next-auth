import { FieldValues } from "react-hook-form";

export type FormInputs<T extends FieldValues> = {
  key: string;
  name: keyof T;
  label: string;
  placeholder: string;
  type: keyof T;
};
