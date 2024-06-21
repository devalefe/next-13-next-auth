"use client";

import { Controller } from "react-hook-form";
import { useSignInHook } from "@/app/(unauthenticated)/signin/hooks/use-sign-in.hook";
import { signInFormInputs } from "@/app/(unauthenticated)/signin/constants/sign-in.inputs";
import { SignIn } from "@phosphor-icons/react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Singin() {
  const { control, errors, isSubmitting, submit } = useSignInHook();

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        onSubmit={submit}
        className="flex min-w-[400px] flex-col gap-4 rounded p-8 shadow-xl"
      >
        <h1 className="text-xl font-bold">Entrar</h1>

        <span className="text-sm font-normal text-gray-700">
          Necessário autenticar-se para prosseguir
        </span>

        {signInFormInputs.map(({ key, name, type, label, placeholder }) => (
          <Controller
            key={key}
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type={type}
                name={name}
                value={value}
                label={label}
                onBlur={onBlur}
                disabled={isSubmitting}
                placeholder={placeholder}
                error={errors[name]?.message}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
        ))}

        <Button
          icon={<SignIn />}
          text="Entrar"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}
