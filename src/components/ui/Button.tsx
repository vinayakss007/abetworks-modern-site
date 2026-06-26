"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark",

          variant === "primary" &&
            "gradient-bg text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]",

          variant === "secondary" &&
            "bg-bg-card text-text-primary border border-border hover:border-primary/30 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-black/20",

          variant === "ghost" &&
            "text-text-secondary hover:text-text-primary hover:bg-white/5",

          variant === "outline" &&
            "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50",

          size === "sm" && "px-4 py-1.5 text-xs",
          size === "md" && "px-5 py-2.5 text-sm",
          size === "lg" && "px-8 py-3.5 text-base",

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
