import { cn } from "../../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative app-container items-center justify-center transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora:linear-gradient(135deg,var(--blue-400)_20%,var(--violet-300)_60%)]
            [background-image:var(--aurora)]
            [background-size:150%]
            [background-position:50%_50%]
            filter blur-[8px]
            after:content-[""] after:absolute after:inset-0 
            after:[background-image:var(--aurora)]
            after:animate-aurora after:[background-attachment:fixed] 
            pointer-events-none
            absolute -inset-[5px] opacity-40 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
