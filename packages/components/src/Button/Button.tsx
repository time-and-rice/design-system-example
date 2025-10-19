import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../lib";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 dark:shadow-none",
  {
    variants: {
      size: {
        xs: "rounded-sm px-2 py-1 text-xs",
        sm: "rounded-sm px-2 py-1 text-sm",
        md: "rounded-md px-2.5 py-1.5 text-sm",
        lg: "rounded-md px-3 py-2 text-sm",
        xl: "rounded-md px-3.5 py-2.5 text-sm",
      },
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600 dark:bg-primary-500 dark:text-white dark:focus-visible:outline-primary-500 dark:hover:bg-primary-400",
        secondary:
          "inset-ring inset-ring-secondary-300 bg-white text-secondary-900 hover:bg-secondary-50 focus-visible:outline-secondary-300 dark:inset-ring-white/5 dark:bg-white/10 dark:text-white dark:focus-visible:outline-white/70 dark:hover:bg-white/20",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({
  className,
  size,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
