import React from 'react';
import { HeroSection } from '@/components/sections/Home/HeroSection';
import { ProductUniverseSection } from '@/components/sections/Home/ProductUniverseSection';
import { PrintingPrecisionSection } from '@/components/sections/Home/CategoriesSection';
import { ProductShowcaseSection } from '@/components/sections/Home/ProductShowcaseSection';
import { CorporateSuccessSection } from '@/components/sections/Home/CorporateSuccessSection';
import { JourneySection } from '@/components/sections/Home/JourneySection';
import { TestimonialsSection } from '@/components/sections/Home/TestimonialsSection';
import { FinalCtaSection } from '@/components/sections/Home/FinalCtaSection';

export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <HeroSection />
      <ProductUniverseSection />
      <PrintingPrecisionSection />
      <ProductShowcaseSection />
      <CorporateSuccessSection />
      <JourneySection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
};

export default Home;
