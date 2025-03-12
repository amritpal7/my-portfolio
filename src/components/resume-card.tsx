// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  // logoUrl,
  // altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div>
      <a
        className="block cursor-pointer"
        href={href || "#"}
        onClick={handleClick}
      >
        {/* ✅ Make card content flex-row with items-center */}
        <Card className="flex items-start gap-4 p-4">
          {/* ✅ Avatar aligned inline */}
          {/* <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar> */}

          {/* ✅ Main content aligned beside avatar */}
          <div className="flex-grow">
            <CardHeader className="p-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="flex items-center flex-wrap font-semibold leading-none text-sm sm:text-base gap-2">
                  {title}
                  {badges && (
                    <span className="inline-flex gap-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                  <ChevronRightIcon
                    className={cn(
                      "ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground sm:text-right">
                  {period}
                </div>
              </div>

              {subtitle && (
                <p className="font-sans text-xs text-muted-foreground mt-1">
                  {subtitle}
                </p>
              )}
            </CardHeader>

            {/* ✅ Animated expandable description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </div>
        </Card>
      </a>
    </div>
  );
};
