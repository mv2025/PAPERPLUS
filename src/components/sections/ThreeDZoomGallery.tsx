import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@/components/ui/Typography';

import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import asset27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import asset31 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';
import asset41 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_41_d2cfd4b09d1c.jpg';

const GALLERY_3D_IMAGES = [
  { url: asset21, title: 'Maha Ganpati Premium Series 2027', tag: 'Devotional' },
  { url: asset01, title: 'Navy Executive Memo Box', tag: 'Executive Desk' },
  { url: asset27, title: 'Shree Ganeshaya Namaha Edition', tag: 'Religious' },
  { url: asset31, title: 'Go Green — Breathe Clean 2027', tag: 'Lifestyle & Wellness' },
  { url: asset41, title: 'Travel & Heritage Vista', tag: 'Travel Art' },
  { url: asset02, title: 'Windmill Getaway Red Edition', tag: 'Prestige Desk' },
];

export const ThreeDZoomGallery: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      let progress = -rect.top / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spatial depth layout configs along Z-axis
  const cardConfigs = [
    { x: -220, y: -60, baseZ: -600 },
    { x: 220, y: 100, baseZ: -1600 },
    { x: -180, y: 140, baseZ: -2600 },
    { x: 190, y: -120, baseZ: -3600 },
    { x: -200, y: -40, baseZ: -4600 },
    { x: 160, y: 120, baseZ: -5600 },
  ];

  const maxZoomDistance = 6200;
  const currentZOffset = scrollProgress * maxZoomDistance;

  // Scene opacity: Fades entire scene to 0 opacity right at the end of scroll (between 94% and 99%)
  const sceneOpacity = scrollProgress > 0.94 ? Math.max(0, 1 - (scrollProgress - 0.94) / 0.05) : 1;

  return (
    <div ref={wrapperRef} className="relative h-[400vh] bg-[#0b0c10] text-white">
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1200px] transition-opacity duration-300"
        style={{ opacity: sceneOpacity }}
      >
        {/* Header Overlay */}
        <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none px-4">
          <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-sky-400 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-500/30 mb-3 inline-block shadow-lg">
            3D Spatial Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-md">
            2027 Calendar Collection
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Scroll down to zoom through space and inspect our premium designs
          </p>
        </div>

        {/* 3D Scene */}
        <div className="relative w-full h-full [transform-style:preserve-3d]">
          {GALLERY_3D_IMAGES.map((img, idx) => {
            const config = cardConfigs[idx];
            const currentZ = config.baseZ + currentZOffset;

            let opacity = 1;
            if (currentZ > 100) {
              opacity = 1 - (currentZ - 100) / 300;
            } else if (currentZ < -3500) {
              opacity = (currentZ + 4500) / 1000;
            }
            opacity = Math.max(0, Math.min(1, opacity));

            const rotateY = config.x > 0 ? -12 : 12;

            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] -mt-[160px] sm:-mt-[180px] -ml-[140px] sm:-ml-[160px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 transition-opacity duration-75 will-change-transform"
                style={{
                  transform: `translate3d(${config.x}px, ${config.y}px, ${currentZ}px) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                }}
              >
                <div className="w-full h-full bg-white p-3 flex items-center justify-center overflow-hidden">
                  <img src={img.url} alt={img.title} className="w-full h-full object-contain" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 block mb-1">
                    {img.tag}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{img.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
};
