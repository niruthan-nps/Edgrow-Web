import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export const EdGrowLogo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const textClass = variant === "light" ? "text-dark-foreground" : "text-foreground";
  
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <span className={`font-heading text-2xl font-bold ${textClass}`}>
          <span className="relative inline-block">
            E
            <GraduationCap className="absolute -top-3 -left-0.5 w-5 h-5 text-primary" />
          </span>
          d
          <span className="text-primary">Grow</span>
        </span>
      </div>
    </Link>
  );
};
