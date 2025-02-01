import { InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import './style/index.css';

const radio = tv({
  base: "radio",
  variants: {
    size: {
      small: "small",
      medium: "medium",
      large: "large",
    },
  },
});

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>, Readonly<VariantProps<typeof radio>> {}

export default function Radio({
  size: radioSize = 'medium',
  className,
  ...props
}: RadioProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="radio" className={`${radio({ size: radioSize, className })}`} {...props} />
    </label>
  );
}