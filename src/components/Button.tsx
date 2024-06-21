import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: React.ReactNode;
  text: string;
};

export const Button = ({ icon, text, className, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className={twMerge(
      clsx(
        "flex items-center justify-center gap-2 rounded bg-black/90 p-2 text-slate-200 hover:bg-black hover:text-slate-50 disabled:opacity-40",
        className,
      ),
    )}
  >
    {icon}
    {text}
  </button>
);
