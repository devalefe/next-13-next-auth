"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singInSchema, SignInSchema } from "../constants/sign-in.schema";
import { useRouter } from "next/navigation";

export const useSignInHook = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: yupResolver(singInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = handleSubmit(async ({ email, password }) => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!response?.error) {
      return router.replace("/dashboard");
    }

    const { error: message } = JSON.parse(response.error);

    setError("email", { message: message });
    setError("password", { message: message });
  });

  return {
    control,
    errors,
    isSubmitting,
    submit,
  };
};
