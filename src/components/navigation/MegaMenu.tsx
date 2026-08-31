import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDown, ArrowRight, Calendar, Bookmark, Gift } from 'lucide-react';
import { Typography } from '../ui/Typography';

import religiousHero from '@/assets/foundation/religious.jpg';
import deskCalendarHero from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';

export const MegaMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-[100] flex w-full justify-center">
      <NavigationMenu.List className="center m-0 flex items-center list-none rounded-full bg-surface border border-surface-hover shadow-sm p-1.5 gap-1">
        
        {/* Simple Link */}
        <NavigationMenu.Item>
          <NavigationMenu.Link className="block select-none whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 outline-none transition-all duration-300" href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="block select-none whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 outline-none transition-all duration-300" href="/about">
            About Us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Mega Menu Dropdown */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="group flex select-none whitespace-nowrap items-center justify-between gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 outline-none transition-all duration-300">
            Products <ChevronDown className="relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180 w-4 h-4" aria-hidden />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] max-w-[90vw] bg-surface border border-surface-hover shadow-2xl rounded-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-fadeIn">
            <div className="col-span-5 border-r border-surface-hover pr-5">
              <Typography variant="h4" className="mb-3 text-sm font-extrabold uppercase tracking-wider text-primary">
                Categories
              </Typography>
              <ul className="flex flex-col gap-2.5 text-xs font-semibold text-foreground">
                <li>
                  <a href="/religious-theme" className="flex items-center gap-2 py-1 hover:text-primary transition-colors group">
                    <Calendar className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    Wall &amp; Religious 2027
                  </a>
                </li>
                <li>
                  <a href="/desk-calendar" className="flex items-center gap-2 py-1 hover:text-primary transition-colors group">
                    <Gift className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    Desk Calendar Memo Box
                  </a>
                </li>
                <li>
                  <a href="/corporate" className="flex items-center gap-2 py-1 hover:text-primary transition-colors group">
                    <Bookmark className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    Corporate Solutions
                  </a>
                </li>
                <li>
                  <a href="/religious-theme" className="flex items-center gap-2 py-1 hover:text-primary transition-colors group">
                    <Calendar className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    Religious Themes
                  </a>
                </li>
              </ul>
              <a href="/products" className="mt-5 text-primary flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider group hover:text-primary-hover">
                View All Products <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="col-span-7">
              <Typography variant="h4" className="mb-3 text-sm font-extrabold uppercase tracking-wider text-primary">
                Featured Highlights
              </Typography>
              <div className="grid grid-cols-2 gap-3">
                <a href="/religious-theme" className="bg-background rounded-xl p-3 border border-surface-hover group hover:border-primary transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
                  <div className="w-full h-24 bg-surface rounded-lg mb-2 overflow-hidden flex items-center justify-center border border-surface-hover">
                    <img src={religiousHero} alt="Wall Collection 2027" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <Typography variant="small" className="text-foreground text-xs font-bold group-hover:text-primary transition-colors">
                    Wall Collection 2027
                  </Typography>
                  <span className="text-[10px] text-muted mt-0.5">Devotional &amp; scenery</span>
                </a>

                <a href="/desk-calendar" className="bg-background rounded-xl p-3 border border-surface-hover group hover:border-primary transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
                  <div className="w-full h-24 bg-surface rounded-lg mb-2 overflow-hidden flex items-center justify-center border border-surface-hover p-1">
                    <img src={deskCalendarHero} alt="Executive Desktop Series" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <Typography variant="small" className="text-foreground text-xs font-bold group-hover:text-primary transition-colors">
                    Executive Desktop
                  </Typography>
                  <span className="text-[10px] text-muted mt-0.5">Twin flip box set</span>
                </a>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="block select-none whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 outline-none transition-all duration-300" href="/corporate">
            Corporate Solutions
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
