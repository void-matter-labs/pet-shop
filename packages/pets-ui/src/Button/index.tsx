import { cloneElement, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { PolymorphicComponentPropsWithAsChild } from 'util-types'

const button = tv({
  base: "padding-inline-3 padding-block-2",
  variants: {
    variantColor: {
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


export type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentPropsWithAsChild<T, VariantProps<typeof button>>

export default function Button<T extends ElementType = 'button'>({
  border = 'default',
  variantColor = 'primary',
  fullWidth,
  className,
  as,
  asChild,
  children,
  ...props
}:ButtonProps<T>) {
  console.log("Button")
  const resolvedClassName = button({
    border,
    fullWidth,
    variantColor,
    className
  })

  if(asChild)
    return cloneElement(children, {
      className: resolvedClassName,
      ...props
    })

  const Component = props.href? 'a' : (as ?? 'button')

  return <Component className={resolvedClassName}
    {...props}
  >
    {children}
  </Component>;
}
