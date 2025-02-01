import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "padding-inline-3 padding-block-2",
  variants: {
    color: {
      primary: "bg-primary-1 border border-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition ease-in-out duration-100 rounded-full",
      secondary: "bg-transparent border border-black text-black hover:bg-primary-1 hover:text-white transition ease-in-out duration-300 rounded-full",
      tertiary: "bg-transparent text-gray-500 hover:text-black border-b border-transparent hover:border-black pb-1 transition ease-in-out duration-300",
    },
    border: {
      default: "rounded",
      full: "rounded-full",
      none: "rounded-none"
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
