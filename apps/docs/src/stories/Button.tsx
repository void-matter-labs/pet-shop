import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Component's Variants */
  variant: 'primary' | 'secondary' | 'tertiary';
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  backgroundColor,
  size = 'medium',
  label,
  variant,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  const variantClasses = {
    primary: 'bg-primary-1 border border-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition ease-in-out duration-100 rounded-full',
    secondary: 'bg-transparent border border-black text-black hover:bg-primary-1 hover:text-white transition ease-in-out duration-300 rounded-full',
    tertiary: 'bg-transparent text-gray-500 hover:text-black border-b border-transparent hover:border-black pb-1 transition ease-in-out duration-300',
  };

  return (
    <button
      type="button"
      className={`${variantClasses[variant]} ${sizeClasses[size]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};