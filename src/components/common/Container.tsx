import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px] w-full mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
