import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "accent" | "muted" | "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  primary:   { bg: "#EFF6FF", color: "#2563EB" },
  secondary: { bg: "#F0F9FF", color: "#0284C7" },
  accent:    { bg: "#F0FDFA", color: "#0D9488" },
  muted:     { bg: "var(--bg-surface-2)", color: "var(--text-muted)" },
  success:   { bg: "#F0FDF4", color: "#15803D" },
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const { bg, color } = variantStyles[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold",
        className
      )}
      style={{ background: bg, color }}
    >
      {children}
    </span>
  );
}