import {  forwardRef } from 'react';
import { cva } from 'class-variance-authority';

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border border-gray-700 hover:bg-gray-800 focus:ring-gray-500',
        ghost: 'bg-transparent text-white hover:bg-gray-800 focus:ring-gray-500',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
