import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/utils/cn';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
}

const variantStyles = {
  default: "bg-surface border-surface-hover text-foreground",
  success: "bg-black border-[#10B981]/50 text-foreground",
  error: "bg-black border-[#EF4444]/50 text-foreground",
  warning: "bg-black border-[#F59E0B]/50 text-foreground",
  info: "bg-black border-[#3B82F6]/50 text-foreground",
};

const icons = {
  default: null,
  success: <CheckCircle className="w-5 h-5 text-[#10B981]" />,
  error: <AlertCircle className="w-5 h-5 text-[#EF4444]" />,
  warning: <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />,
  info: <Info className="w-5 h-5 text-[#3B82F6]" />,
};

export const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastProps>(
  ({ className, variant = 'default', title, description, ...props }, ref) => {
    return (
      <ToastPrimitive.Root
        ref={ref}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          {icons[variant]}
          <div className="flex flex-col gap-1">
            {title && (
              <ToastPrimitive.Title className="text-sm font-semibold">
                {title}
              </ToastPrimitive.Title>
            )}
            {description && (
              <ToastPrimitive.Description className="text-sm opacity-90">
                {description}
              </ToastPrimitive.Description>
            )}
          </div>
        </div>
        <ToastPrimitive.Close className="absolute right-2 top-2 rounded-md p-1 text-muted opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100">
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
    );
  }
);
Toast.displayName = ToastPrimitive.Root.displayName;
