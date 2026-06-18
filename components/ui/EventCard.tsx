import Link from "next/link";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description?: string;
  href: string;
  className?: string;
}

function parseDate(dateStr: string) {
  const parts = dateStr.split(" ");
  const month = parts[0] || "";
  const day = parts[1]?.replace(",", "") || "";
  return { month, day };
}

export default function EventCard({
  title,
  date,
  location,
  description,
  href,
  className,
}: EventCardProps) {
  const { month, day } = parseDate(date);

  return (
    <Link
      href={href}
      className={cn(
        "group flex gap-4 p-5 rounded-xl border border-border/60 hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 bg-white",
        className
      )}
    >
      <div className="shrink-0 w-16 h-16 rounded-lg bg-teal-light flex flex-col items-center justify-center text-navy font-bold">
        <span className="text-xs uppercase">{month}</span>
        <span className="text-xl leading-none">{day}</span>
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{location}</p>
        {description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}
