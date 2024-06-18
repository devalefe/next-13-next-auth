"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singInSchema, SignInSchema } from "../constants/sign-in.schema";
import { useRouter } from "next/navigation";

export const useSignInHook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: yupResolver(singInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = handleSubmit(async ({ email, password }) => {
    setIsSubmitting(true);

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

    setIsSubmitting(false);
  });

  return {
    control,
    errors,
    isSubmitting,
    submit,
  };
};
