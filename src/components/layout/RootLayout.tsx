import React from 'react';
import { AnnouncementBar } from '../navigation/AnnouncementBar';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';
import { FloatingQuoteCTA } from '../ui/FloatingQuoteCTA';
import { ScrollProgress, BackToTop } from '../ui/ScrollProgress';
import { ToastProvider, ToastViewport } from '../ui/Toast';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 relative">
        <ScrollProgress />
        
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
          <AnnouncementBar />
          <Navbar />
        </header>
        
        <main className="flex-1 w-full flex flex-col pt-0">
          {children}
        </main>

        <Footer />
        
        <BackToTop />
        
        <ToastViewport />
      </div>
    </ToastProvider>
  );
};
