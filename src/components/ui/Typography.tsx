import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight',
      h2: 'font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
      h3: 'font-heading text-2xl sm:text-3xl font-semibold',
      h4: 'font-heading text-xl sm:text-2xl font-semibold',
      p: 'font-sans text-base leading-7',
      lead: 'font-sans text-lg sm:text-xl text-muted',
      large: 'font-sans text-lg font-semibold',
      small: 'font-sans text-sm font-medium leading-none',
      muted: 'font-sans text-sm text-muted',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, as, children, ...props }, ref) => {
    // Sensible defaults based on variant
    const defaultAs = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      p: 'p',
      lead: 'p',
      large: 'div',
      small: 'small',
      muted: 'p',
    }[variant || 'p'] as React.ElementType;

    const Component = as || defaultAs;

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, align, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Typography.displayName = 'Typography';
