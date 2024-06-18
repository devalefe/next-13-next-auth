import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
};

export const Button = ({ text, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className="rounded bg-black/90 p-2 text-slate-200 hover:bg-black hover:text-slate-50 disabled:opacity-40"
  >
    {text}
  </button>
);
