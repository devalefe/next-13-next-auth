import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

type AvatarProps = Omit<ImageProps, "alt"> & {
  size: number;
  alt?: string;
};

export const Avatar = ({ size, alt, className, ...rest }: AvatarProps) => (
  <Image
    {...rest}
    width={size}
    height={size}
    quality={60}
    priority={false}
    alt={"Avatar"}
    className={twMerge(clsx("rounded-full", className))}
  />
);
