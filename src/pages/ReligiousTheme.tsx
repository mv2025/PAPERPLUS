import React, { useState } from 'react';
import { Typography } from '@/components/ui/Typography';
import { ChevronRight, X, Calendar, Mail, Printer, Tag, ZoomIn } from 'lucide-react';

// Real Images Imported from src/assets/foundation/
import religiousHero from '@/assets/foundation/religious.jpg';
import downloadImg from '@/assets/foundation/download.jpg';
import download1 from '@/assets/foundation/download (1).jpg';
import download2 from '@/assets/foundation/download (2).jpg';
import download3 from '@/assets/foundation/download (3).jpg';
import download4 from '@/assets/foundation/download (4).jpg';
import download5 from '@/assets/foundation/download (5).jpg';
import download6 from '@/assets/foundation/download (6).jpg';
import download7 from '@/assets/foundation/download (7).jpg';
import download8 from '@/assets/foundation/download (8).jpg';
import download9 from '@/assets/foundation/download (9).jpg';
import download10 from '@/assets/foundation/download (10).jpg';
import download11 from '@/assets/foundation/download (11).jpg';
import download12 from '@/assets/foundation/download (12).jpg';
import download13 from '@/assets/foundation/download (13).jpg';
import download14 from '@/assets/foundation/download (14).jpg';
import download15 from '@/assets/foundation/download (15).jpg';

// New Calendar Collection Images (download (16) to download (23))
import download16 from '@/assets/foundation/download (16).jpg';
import download17 from '@/assets/foundation/download (17).jpg';
import download18 from '@/assets/foundation/download (18).jpg';
import download19 from '@/assets/foundation/download (19).jpg';
import download20 from '@/assets/foundation/download (20).jpg';
import download21 from '@/assets/foundation/download (21).jpg';
import download22 from '@/assets/foundation/download (22).jpg';
import download23 from '@/assets/foundation/download (23).jpg';

const WALL_CALENDAR_COLLECTION = [
  {
    id: 'rel-01',
    title: 'Pratham Ganesh',
    category: 'Ganesh',
    desc: 'Golden foiled Panchang Pratham Ganesh artwork with 12-month panchang date grid.',
    number: '750',
    img: religiousHero,
    badge: 'NEW',
  },
  {
    id: 'rel-02',
    title: 'Mangal Ganesh',
    category: 'Ganesh',
    desc: 'Vibrant Mangal Ganesha devotional portrait for prosperity & auspicious beginnings.',
    number: '751',
    img: downloadImg,
    badge: 'BESTSELLER',
  },
  {
    id: 'rel-03',
    title: 'Shree Ganesh Aarti',
    category: 'Ganesh',
    desc: 'Devotional Shree Ganesh Aarti design with 12-month calendar grid.',
    number: '752',
    img: download1,
    badge: 'BEST',
  },
  {
    id: 'rel-04',
    title: 'Pilliyar Patti Ganesh',
    category: 'Ganesh',
    desc: 'Classic South Indian Pilliyar Patti Ganesha temple style calendar.',
    number: '753',
    img: download2,
    badge: 'TOP',
  },
  {
    id: 'rel-05',
    title: 'Tarini Mata',
    category: 'Mata',
    desc: 'Divine Tarini Mata devotional artwork with golden foil accents.',
    number: '792',
    img: download3,
  },
  {
    id: 'rel-06',
    title: 'Char Dham',
    category: 'Travel',
    desc: 'Char Dham pilgrim journey landscape and temple views.',
    number: '774',
    img: download4,
  },
  {
    id: 'rel-07',
    title: 'Om - Gayatri Mantra',
    category: 'Aarti',
    desc: 'Sacred Gayatri Mantra lettering with radiant sun burst background.',
    number: '781',
    img: download5,
  },
  {
    id: 'rel-08',
    title: 'Tirupati Bala Ji',
    category: 'Balaji',
    desc: 'Lord Venkateswara Tirupati Bala Ji rich devotional wall calendar.',
    number: '775',
    img: download6,
  },
  {
    id: 'rel-09',
    title: 'Tirupati Balaji Laxmi',
    category: 'Balaji',
    desc: 'Combined Tirupati Balaji and Goddess Mahalakshmi blessings.',
    number: '776',
    img: download7,
  },
  {
    id: 'rel-10',
    title: 'Bhagwan Murugan Swami',
    category: 'Multi Bhagwan',
    desc: 'Lord Murugan Swami iconography in vivid color.',
    number: '777',
    img: download8,
  },
  {
    id: 'rel-11',
    title: 'Neem Karoli Baba',
    category: 'Bhakti',
    desc: 'Shree Neem Karoli Baba Maharaj portrait series.',
    number: '793',
    img: download9,
  },
  {
    id: 'rel-12',
    title: 'Sai Baba',
    category: 'Bhakti',
    desc: 'Shirdi Sai Baba portrait with daily motivational and spiritual quotes.',
    number: '778',
    img: download10,
  },
  {
    id: 'rel-13',
    title: 'Baba Deep Singh Ji',
    category: 'Guruji',
    desc: 'Sikh Devotional artwork of Shaheed Baba Deep Singh Ji (Japuji Sahib).',
    number: '779',
    img: download11,
  },
  {
    id: 'rel-14',
    title: 'Diwali Pooja',
    category: 'Durga',
    desc: 'Diwali Pooja special gold foil embossed wall calendar.',
    number: '754',
    img: download12,
    badge: 'BESTSELLER',
  },
  {
    id: 'rel-15',
    title: 'Diwali Pooja Aarti',
    category: 'Durga',
    desc: 'Diwali Pooja Aarti with Vedic shlokas and protective mantras.',
    number: '755',
    img: download13,
    badge: 'BEST',
  },
  {
    id: 'rel-16',
    title: 'Saraswati Mata Aarti',
    category: 'Aarti',
    desc: 'Goddess Saraswati Mata Aarti devotional wall calendar artwork.',
    number: '756',
    img: download14,
    badge: 'TOP',
  },
  {
    id: 'rel-17',
    title: 'Nav Durga Mata',
    category: 'Durga',
    desc: 'Nav Durga Mata with nine forms of Goddess Durga in detailed devotional print.',
    number: '757',
    img: download15,
    badge: 'BESTSELLER',
  },
];

const NEW_CALENDAR_COLLECTION = [
  { id: 'new-01', code: 'P-101 • M-2101', title: 'P-101 • M-2101', desc: '12-Month Panchang Ganesh Edition', img: download16 },
  { id: 'new-02', code: 'P-102 • M-2102', title: 'P-102 • M-2102', desc: '12-Month Panchang Ganesh Edition', img: download17 },
  { id: 'new-03', code: 'P-103', title: 'P-103', desc: '12-Month Saraswati Mata Edition', img: download18 },
  { id: 'new-04', code: 'P-104 • M-2104', title: 'P-104 • M-2104', desc: '12-Month Mahalakshmi Edition', img: download19 },
  { id: 'new-05', code: 'P-105 • M-2105', title: 'P-105 • M-2105', desc: '12-Month Mahalakshmi & Ganesh Edition', img: download20 },
  { id: 'new-06', code: 'P-106 • M-2106', title: 'P-106 • M-2106', desc: '12-Month Lakshmi Ji Ki Aarti Edition', img: download21 },
  { id: 'new-07', code: 'P-107 • M-2107', title: 'P-107 • M-2107', desc: '12-Month Nav Durga Edition', img: download22 },
  { id: 'new-08', code: 'P-108 • M-2108', title: 'P-108 • M-2108', desc: '12-Month Nav Durga Sherawali Edition', img: download23 },
];

export default function ReligiousTheme() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxData, setLightboxData] = useState<{ img: string; title: string } | null>(null);

  const categories = [
    'All', 'Ganesh', 'Balaji', 'Bhakti', 'Multi Bhagwan', 'Aarti', 'Durga', 'Guruji', 'Scenery', 'Travel', 'Other'
  ];

  const filteredItems = activeCategory === 'All'
    ? WALL_CALENDAR_COLLECTION
    : WALL_CALENDAR_COLLECTION.filter(item => item.category === activeCategory);

  return (
    <div className="w-full bg-[#faf6ec] pt-28 pb-24 text-[#243252]">
      {/* Hero Banner */}
      <section className="relative min-h-[540px] bg-[#faf6ec] overflow-hidden pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-extrabold tracking-widest uppercase text-[#e5232e] mb-3 block">
              2027 WALL CALENDAR COLLECTION
            </span>
            <span className="font-serif italic text-2xl text-[#14244a] block mb-1">
              Made to stay on the wall
            </span>
            <Typography variant="h1" className="text-[#14244a] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none mb-6">
              Beautiful <span className="text-[#e5232e]">2027</span> Wall Calendars
            </Typography>
            <Typography variant="lead" className="text-[#68738b] text-base sm:text-lg mb-8 max-w-xl">
              A premium collection of devotional and decorative wall calendars designed to bring colour, tradition and everyday utility to homes, offices and gifting.
            </Typography>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#collection" className="px-7 py-3.5 rounded-full bg-[#e5232e] text-white font-bold hover:bg-[#c9172a] shadow-lg shadow-[#e5232e]/30 transition-all hover:-translate-y-0.5">
                Browse Collection
              </a>
              <a href="/quote" className="px-7 py-3.5 rounded-full border-2 border-[#14244a] text-[#14244a] font-bold hover:bg-[#14244a] hover:text-white transition-all hover:-translate-y-0.5">
                Get Bulk Pricing
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-[#e8dfd0] px-4 py-2 rounded-full text-xs font-bold text-[#14244a] flex items-center gap-1.5">
                <span className="text-[#e5232e]">✓</span> Premium Print Finish
              </div>
              <div className="bg-white border border-[#e8dfd0] px-4 py-2 rounded-full text-xs font-bold text-[#14244a] flex items-center gap-1.5">
                <span className="text-[#e5232e]">✓</span> Multiple Devotional Themes
              </div>
              <div className="bg-white border border-[#e8dfd0] px-4 py-2 rounded-full text-xs font-bold text-[#14244a] flex items-center gap-1.5">
                <span className="text-[#e5232e]">✓</span> Bulk Customization
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-[360px] h-[360px] bg-white/80 rounded-full blur-sm" />
            <div className="relative z-10 w-full max-w-md bg-white p-4 rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={religiousHero} 
                alt="2027 Panchram Ganesh Wall Calendar" 
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-[#e8dfd0] text-xs font-bold text-[#14244a]">
                2027 Wall Calendar
                <span className="block text-[10px] text-[#68738b] font-normal">Made to stay on the wall</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid ("Made to be useful, designed to be remembered") */}
      <section className="bg-white border-y border-[#e8dfd0] py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5232e] block mb-2">
              WHY TEAMS REORDER THIS ONE
            </span>
            <Typography variant="h2" className="text-[#14244a] text-3xl sm:text-4xl font-extrabold mb-3">
              Made to be useful, designed to be remembered
            </Typography>
            <Typography variant="muted" className="text-base">
              A classic 12-month calendar built to stay on the wall all year long. Perfect for home, office, and corporate gifting.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-[#e8dfd0] rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#e8dfd0] bg-white">
            <div className="p-6">
              <Calendar className="w-8 h-8 text-[#e5232e] mb-4" />
              <h3 className="text-base font-bold text-[#14244a] mb-2">12-month wall format</h3>
              <p className="text-xs text-[#68738b] leading-relaxed">Easy-to-read date grid with plenty of room for daily notes &amp; holiday markers.</p>
            </div>
            <div className="p-6">
              <Mail className="w-8 h-8 text-[#e5232e] mb-4" />
              <h3 className="text-base font-bold text-[#14244a] mb-2">Individual envelopes</h3>
              <p className="text-xs text-[#68738b] leading-relaxed">Each calendar is packed in its own clean paper envelope for easy distribution.</p>
            </div>
            <div className="p-6">
              <Printer className="w-8 h-8 text-[#e5232e] mb-4" />
              <h3 className="text-base font-bold text-[#14244a] mb-2">Free 1-colour print</h3>
              <p className="text-xs text-[#68738b] leading-relaxed">Add your company name, logo and address at no extra cost on every unit.</p>
            </div>
            <div className="p-6">
              <Tag className="w-8 h-8 text-[#e5232e] mb-4" />
              <h3 className="text-base font-bold text-[#14244a] mb-2">Clearing &amp; Hanging</h3>
              <p className="text-xs text-[#68738b] leading-relaxed">Fitted with a sturdy top tin rim and hanging loop that holds straight all year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Gallery ("Choose your calendar") */}
      <section id="collection" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5232e] block mb-2">
              100+ DESIGNS IN STOCK
            </span>
            <Typography variant="h2" className="text-[#14244a] text-3xl font-extrabold mb-2">
              Choose your calendar
            </Typography>
            <Typography variant="muted" className="text-sm">
              Click any calendar to inspect the full design, size &amp; bulk tier pricing for your order.
            </Typography>
          </div>

          <div className="flex gap-2 flex-wrap max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === cat ? 'bg-[#e5232e] text-white shadow-md' : 'bg-white border border-[#e8dfd0] text-[#14244a] hover:border-[#e5232e]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxData({ img: item.img, title: item.title })}
              className="bg-white border border-[#e8dfd0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[3/4] bg-white overflow-hidden relative p-3 flex items-center justify-center border-b border-[#e8dfd0]">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#e5232e] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {item.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#14244a]" />
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#14244a] group-hover:text-[#e5232e] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#68738b] line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e8dfd0] text-xs font-bold text-[#e5232e] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View calendar sheet <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Calendar Collection Previews (8 Grid Bottom Showcase using download 16 to 23) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5232e] block mb-2">
            NEW 2027 EDITION
          </span>
          <Typography variant="h2" className="text-[#14244a] text-3xl font-extrabold mb-3">
            New Calendar Collection
          </Typography>
          <p className="text-[#68738b] text-sm">
            Explore the latest 12-month devotional wall calendar numbered editions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {NEW_CALENDAR_COLLECTION.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-2xl border border-[#e8dfd0] shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() => setLightboxData({ img: item.img, title: item.title })}
            >
              <div className="aspect-[3/4] bg-white overflow-hidden relative flex items-center justify-center rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-[#14244a]" />
                </span>
              </div>
              <div className="mt-3 text-center border-t border-[#e8dfd0] pt-2">
                <h4 className="text-sm font-bold text-[#14244a] group-hover:text-[#e5232e] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#68738b] mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner ("Put your brand on something people see every day.") */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[#14244a] text-white rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff6870] mb-2 block">
              CUSTOM CORPORATE BRANDING
            </span>
            <Typography variant="h2" className="text-white text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Put your brand on something people see every day.
            </Typography>
            <p className="text-[#b9c2d3] text-sm sm:text-base">
              Add your company name, logo, address and phone number to any of our 2027 wall calendar designs. Instant bulk discounts available.
            </p>
          </div>
          <a href="/quote" className="relative z-10 px-8 py-4 rounded-full bg-[#e5232e] text-white font-bold hover:bg-[#c9172a] shadow-xl shadow-[#e5232e]/40 transition-all hover:scale-105 whitespace-nowrap">
            Request Quote in 24h
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxData(null)}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <button className="absolute -top-12 right-0 text-white p-2 rounded-full bg-white/20 hover:bg-white/40">
              <X className="w-6 h-6" />
            </button>
            <img src={lightboxData.img} alt={lightboxData.title} className="max-h-[80vh] rounded-xl shadow-2xl object-contain bg-white" />
            <p className="text-white text-center mt-3 font-bold text-base">{lightboxData.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
