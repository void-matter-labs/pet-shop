import { HTMLAttributes, MouseEvent } from "react";
import { tv, VariantProps } from "tailwind-variants";

const quantityButton = tv({
  base: "px-3 py-2 rounded-md border-2 border-neutral-400 flex items-center gap-3",
  variants: {
    size: {
      'small': 'text-sm',
      'medium': 'text-base',
    }
  }
})

export interface QuantityProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof quantityButton> {
  currentValue: number;
  disabled?: boolean;
  delta?: number;
  onIncrease?: (newValue: number, event: MouseEvent<HTMLButtonElement>) => void;
  onDecrease?: (newValue: number, event: MouseEvent<HTMLButtonElement>) => void;
}

export default function QuantityButton({
  onIncrease,
  onDecrease,
  currentValue,
  delta = 1,
  disabled,
  className,
  size = 'medium',
  ...props
}: QuantityProps) {
  const resolvedClassName = quantityButton({
    className,
    size,
  })

  const handleOnIncrease = (event: MouseEvent<HTMLButtonElement>) => {
    const newValue = currentValue + delta;
    onIncrease?.(newValue, event);
  }

  const handleOnDecrease = (event: MouseEvent<HTMLButtonElement>) => {
    const newValue = currentValue - delta;
    onDecrease?.(newValue, event);
  }

  return (
    <div className={resolvedClassName} {...props}>
      <button className="px-1" disabled={disabled} onClick={handleOnDecrease}>-</button>
      <span>{currentValue}</span>
      <button className="px-1" disabled={disabled} onClick={handleOnIncrease}>+</button>
    </div>
  )
}
