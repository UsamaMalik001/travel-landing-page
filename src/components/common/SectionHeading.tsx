import React from "react";

interface SectionHeadingProps {
  subTitle: string;
  title: string;
  center?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subTitle,
  title,
  center = true,
  children,
  className = "",
}) => {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""} ${className}`}>
      <p className="text-[18px] text-[#5E6282] font-semibold">{subTitle}</p>
      <h1 className="text-3xl md:text-[50px] font-bold text-[#14183E] mt-[8px]">
        {title}
      </h1>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeading;
