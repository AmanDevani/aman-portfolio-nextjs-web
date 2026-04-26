import React from "react";

const SectionHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      {title && <div className="font-bold text-3xl mb-5">{title}</div>}
      {description && (
        <div className="text-muted-foreground mb-3">{description}</div>
      )}
    </div>
  );
};

export default SectionHeader;
