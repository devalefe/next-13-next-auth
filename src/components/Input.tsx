import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error?: string;
  name: string;
};

export const Input = ({
  label,
  error,
  name,
  className,
  ...rest
}: InputProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm font-bold">{label}</span>
    <input
      {...rest}
      className={twMerge(
        clsx(
          "rounded p-2 outline outline-1 outline-black disabled:cursor-none disabled:outline-gray-600",
          className,
        ),
      )}
    />
    <span className="h-4 text-xs text-red-700">{error}</span>
  </div>
);
