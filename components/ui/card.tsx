import React from 'react';
import { cn } from '@/lib/utils'; // Utility for merging Tailwind classes (optional, see notes)

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'border rounded-lg shadow-sm p-4 bg-white dark:bg-gray-800',
        className
      )}
    >
      {title && (
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};