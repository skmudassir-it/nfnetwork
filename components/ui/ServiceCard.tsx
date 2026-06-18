import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="h-full border-border/60 hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6 sm:p-8">
          <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
