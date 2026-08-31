import React from 'react';
import { cn } from '@/utils/cn';

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-surface-hover", className)}
      {...props}
    />
  );
};

export const ProductCardSkeleton = () => (
  <div className="flex flex-col bg-surface border border-surface-hover rounded-xl overflow-hidden h-[400px]">
    <Skeleton className="w-full h-[60%] rounded-none" />
    <div className="p-4 flex flex-col gap-3 flex-1">
      <Skeleton className="w-1/3 h-3" />
      <Skeleton className="w-3/4 h-5" />
      <Skeleton className="w-full h-4 mt-auto" />
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="w-full h-[70vh] bg-surface relative overflow-hidden flex flex-col justify-center px-10">
    <Skeleton className="w-full h-full absolute inset-0 rounded-none opacity-50" />
    <Skeleton className="w-1/2 h-16 z-10 mb-4" />
    <Skeleton className="w-1/3 h-6 z-10 mb-8" />
    <Skeleton className="w-32 h-12 z-10" />
  </div>
);
