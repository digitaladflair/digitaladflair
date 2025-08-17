import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <h1 className="inline-block text-4xl text-center font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
