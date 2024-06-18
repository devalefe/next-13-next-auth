import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error?: string;
  name: string;
};

export const Input = ({ label, error, name, ...rest }: InputProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm font-bold">{label}</span>
    <input
      {...rest}
      className="rounded p-2 outline outline-1 outline-black disabled:cursor-none disabled:outline-gray-600"
    />
    <span className="text-xs text-red-700">{error}</span>
  </div>
);
