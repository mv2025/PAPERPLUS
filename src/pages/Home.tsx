import React from 'react';
import { HeroSection } from '@/components/sections/Home/HeroSection';
import { ProductUniverseSection } from '@/components/sections/Home/ProductUniverseSection';
import { CraftsmanshipSection } from '@/components/sections/Home/TrustedBySection';
import { PrintingPrecisionSection } from '@/components/sections/Home/CategoriesSection';
import { ProductShowcaseSection } from '@/components/sections/Home/ProductShowcaseSection';
import { CorporateSuccessSection } from '@/components/sections/Home/CorporateSuccessSection';
import { JourneySection } from '@/components/sections/Home/JourneySection';
import { ThreeDZoomGallery } from '@/components/sections/ThreeDZoomGallery';
import { TestimonialsSection } from '@/components/sections/Home/TestimonialsSection';
import { FinalCtaSection } from '@/components/sections/Home/FinalCtaSection';

export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <HeroSection />
      <ProductUniverseSection />
      <CraftsmanshipSection />
      <PrintingPrecisionSection />
      <ProductShowcaseSection />
      <CorporateSuccessSection />
      <JourneySection />
      <ThreeDZoomGallery />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
};

export default Home;
