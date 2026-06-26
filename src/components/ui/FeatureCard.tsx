import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl glass-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        className
      )}
    >
      {/* Hover glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div className="relative">
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/20 transition-colors">
          <Icon className="size-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
