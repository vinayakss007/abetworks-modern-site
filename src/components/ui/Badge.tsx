import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",

        variant === "default" && "bg-white/5 text-text-secondary border border-white/10",
        variant === "primary" && "bg-primary/10 text-primary border border-primary/20",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/20",
        variant === "success" && "bg-success/10 text-success border border-success/20",
        variant === "warning" && "bg-warning/10 text-warning border border-warning/20",

        className
      )}
    >
      {children}
    </span>
  );
}
