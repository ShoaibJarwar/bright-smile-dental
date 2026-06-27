"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize    = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary-500 to-secondary-600 text-white shadow-cta hover:shadow-lg hover:opacity-90",
  secondary:
    "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 hover:border-primary-300",
  outline:
    "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
  ghost:
    "bg-transparent text-primary-500 hover:bg-primary-50",
  accent:
    "bg-gradient-to-r from-accent-500 to-primary-500 text-white shadow-cta hover:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  "px-4 py-2 text-sm gap-1.5",
  md:  "px-6 py-3 text-sm gap-2",
  lg:  "px-8 py-4 text-base gap-2",
  xl:  "px-10 py-5 text-lg gap-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon: Icon,
  iconPosition = "right",
  className,
  disabled = false,
  onClick,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center font-semibold rounded-xl",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left"  && <Icon className="shrink-0" size={size === "xl" ? 22 : size === "lg" ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="shrink-0" size={size === "xl" ? 22 : size === "lg" ? 20 : 16} />}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={baseClass}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {content}
    </motion.button>
  );
}