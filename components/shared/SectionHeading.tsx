import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  titleGradient,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left:   "items-start text-left",
    center: "items-center text-center",
    right:  "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col", alignClass, className)}>
      {label && <span className="section-label">{label}</span>}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ color: "var(--text)" }}
      >
        {titleGradient ? (
          <>
            {title}{" "}
            <span className="text-gradient-primary">{titleGradient}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}