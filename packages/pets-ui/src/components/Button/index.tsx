import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "padding-inline-3 padding-block-2",
  variants: {
    color: {
      primary: "bg-primary-1 text-white",
      transparent: "bg-transparent text-primary-1",
    },
    border: {
      default: "rounded",
      full: "rounded-full",
    },
    fullWidth: {
      true: "w-full",
    }
  }
})

export interface ButtonProps extends Readonly<VariantProps<typeof button>>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export default function Button({
  border = 'default',
  color = 'primary',
  fullWidth,
  className,
  ...props
}:ButtonProps) {
  return <button className={button({
    border,
    fullWidth,
    color,
    className
  })} {...props} />;
}
