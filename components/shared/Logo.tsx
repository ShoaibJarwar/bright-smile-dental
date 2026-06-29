import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-lg",  sub: "text-[9px]"  },
    md: { icon: 36, text: "text-xl",  sub: "text-[10px]" },
    lg: { icon: 44, text: "text-2xl", sub: "text-xs"     },
  };
  const s = sizeMap[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      {/* Icon mark */}
      <div
        className="relative rounded-xl flex items-center justify-center shrink-0
                   bg-gradient-to-br from-primary-400 to-secondary-600 shadow-md
                   group-hover:shadow-lg transition-shadow duration-200"
        style={{ width: s.icon, height: s.icon }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: s.icon * 0.6, height: s.icon * 0.6 }}
        >
          <path
            d="M12 2C9.5 2 7.5 3.5 6 5.5C4.5 3.5 2 4 2 7C2 10 4 13 5 16C6 19 6.5 22 8 22C9 22 9.5 20 10 18C10.5 16 11 15 12 15C13 15 13.5 16 14 18C14.5 20 15 22 16 22C17.5 22 18 19 19 16C20 13 22 10 22 7C22 4 19.5 3.5 18 5.5C16.5 3.5 14.5 2 12 2Z"
            fill="white"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Text — uses CSS variables so it responds to dark mode automatically */}
      <div className="flex flex-col leading-none">
        <span
          className={cn("font-display font-bold tracking-tight", s.text)}
          style={{ color: "var(--text)" }}
        >
          Bright Smile
        </span>
        <span
          className={cn(
            "font-sans font-semibold uppercase tracking-widest mt-0.5",
            s.sub
          )}
          style={{ color: "var(--color-primary)" }}
        >
          Dental Clinic
        </span>
      </div>
    </Link>
  );
}