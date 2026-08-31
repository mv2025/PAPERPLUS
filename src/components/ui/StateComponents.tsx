import React from 'react';

export const LoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export const ErrorState = ({ message = 'Something went wrong.', onRetry }: { message?: string, onRetry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h3 className="text-xl font-heading font-bold text-red-500 mb-2">Error</h3>
      <p className="text-muted mb-4">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="px-6 py-2 bg-primary text-black font-semibold rounded hover:bg-primary-hover transition-colors">
          Try Again
        </button>
      )}
    </div>
  );
};

export const EmptyState = ({ title = 'No results found', description = 'Try adjusting your filters.' }: { title?: string, description?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
};
