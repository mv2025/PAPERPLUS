import React, { useState } from 'react';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Check, ShieldCheck, Sparkles, Box, RefreshCw, X, ShoppingBag, ZoomIn } from 'lucide-react';

// Assets imported directly from user provided Desk_Calender_Premium_All_Assets/assets
import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import asset03 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_03_39f8718b3f3a.png';
import asset04 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_04_d63402e89e59.png';
import asset05 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_05_48754b090041.png';
import asset06 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_06_3c8400189653.png';
import asset07 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_07_34f659ded564.png';
import asset08 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_08_6ffb634797eb.png';
import asset09 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_09_a9e40c740a48.png';
import asset10 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_10_e57c12c4fbc9.png';
import asset11 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_11_2726cb46b89c.png';
import asset12 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_12_2b92baf92633.png';
import asset13 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_13_450c5b41a0d2.png';
import asset14 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_14_68918cabe40b.png';
import asset15 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_15_064d507aa534.png';
import asset16 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_16_ad042c5a9e12.png';
import asset17 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_17_ce4497b2f894.png';
import asset18 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_18_2759aa0b1bec.png';
import asset19 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_19_125c742a038f.png';
import asset20 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_20_78014560dcdc.png';

// Corporate series images (21-45)
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import asset22 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_22_fc7a9002813f.png';
import asset23 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_23_3d59a55e4cf3.png';
import asset24 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_24_b169f7ce24ef.png';
import asset25 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_25_c9168ddbe608.png';
import asset26 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_26_9aa8ab1c50f4.png';
import asset27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import asset28 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_28_0ccfd02dfe29.jpg';
import asset29 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_29_e259bc1b5a9f.jpg';
import asset30 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_30_ae8d1cb7dc12.jpg';
import asset31 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';
import asset32 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_32_626e8d0f0f3d.jpg';
import asset33 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_33_c43d04ff816d.jpg';
import asset34 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_34_318a2d2844c1.jpg';
import asset35 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_35_3e48bfef482d.jpg';
import asset36 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_36_bbd680d90bdc.jpg';
import asset37 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_37_3dc458d379ba.jpg';
import asset38 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_38_cadc85f19878.jpg';
import asset39 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_39_14bbe5e5a2f1.jpg';
import asset40 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_40_cd91005e88a0.jpg';
import asset41 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_41_d2cfd4b09d1c.jpg';
import asset42 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_42_74a914016a0f.jpg';
import asset43 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_43_cef8d754fd60.jpg';
import asset44 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_44_11c03e7f3028.jpg';
import asset45 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_45_251cd5d74bd2.jpg';

const DESIGNS = [
  {
    id: 'classic',
    name: 'Happy New Year Classic',
    tagline: 'A hand-lettered "calendar" script and bold split-colour 2027 numerals — clean enough for finance, warm enough for the front desk.',
    inside: asset03,
    colors: [
      { name: 'Navy', hex: '#1B2A56', img: asset01 },
      { name: 'Black', hex: '#202124', img: asset04 },
      { name: 'Red', hex: '#C81E2C', img: asset05 },
      { name: 'Teal', hex: '#127A82', img: asset06 },
      { name: 'Orange', hex: '#E07A1F', img: asset07 },
      { name: 'Green', hex: '#1F7A3D', img: asset08 },
      { name: 'Grey', hex: '#9BA1A6', img: asset09 },
      { name: 'Yellow', hex: '#E7B33E', img: asset10 },
      { name: 'Aqua', hex: '#3FB8C4', img: asset11 },
    ],
  },
  {
    id: 'windmill',
    name: 'Windmill Getaway',
    tagline: 'A full-colour travel photo framed in a fine geometric border — a New Year cover with somewhere to go.',
    inside: asset12,
    colors: [
      { name: 'Navy', hex: '#1B2A56', img: asset13 },
      { name: 'Red', hex: '#C81E2C', img: asset02 },
      { name: 'Black', hex: '#202124', img: asset14 },
      { name: 'Teal', hex: '#127A82', img: asset15 },
      { name: 'Orange', hex: '#E07A1F', img: asset16 },
      { name: 'Green', hex: '#1F7A3D', img: asset17 },
      { name: 'Grey', hex: '#9BA1A6', img: asset18 },
      { name: 'Yellow', hex: '#E7B33E', img: asset19 },
      { name: 'Aqua', hex: '#3FB8C4', img: asset20 },
    ],
  },
];

const CORP_ITEMS = [
  { code: '300', name: 'MAHA GANPATI', cat: 'premium', catLabel: 'Desk Accessories', img: asset21 },
  { code: '301', name: 'EXECUTIVE TABLE CALENDAR', cat: 'premium', catLabel: 'Desk Accessories', img: asset22 },
  { code: '302', name: 'AARTI SANGRAH', cat: 'premium', catLabel: 'Desk Accessories', img: asset23 },
  { code: '303', name: 'RADHA MADHAV', cat: 'premium', catLabel: 'Premium', img: asset24 },
  { code: '304', name: 'SAI BABA', cat: 'premium', catLabel: 'Premium', img: asset25 },
  { code: '305', name: 'JAI JAI JAGANNATH PRABHU', cat: 'premium', catLabel: 'Premium', img: asset26 },
  { code: '1501', name: 'Shree Ganeshaya Namaha', cat: 'devotional', catLabel: 'Devotional', img: asset27 },
  { code: '1502', name: 'Prabhu Aradhana — Aarti Sangrah', cat: 'devotional', catLabel: 'Devotional', img: asset28 },
  { code: '1503', name: 'Radha Krishna', cat: 'devotional', catLabel: 'Devotional', img: asset29 },
  { code: '1504', name: 'Sai Baba — Sabka Malik Ek', cat: 'devotional', catLabel: 'Devotional', img: asset30 },
  { code: '1505', name: 'Go Green — Breathe Clean', cat: 'wellness', catLabel: 'Lifestyle & Wellness', img: asset31 },
  { code: '1506', name: 'Health & Wellness', cat: 'wellness', catLabel: 'Lifestyle & Wellness', img: asset32 },
  { code: '1507', name: 'A Motivational Desk Calendar', cat: 'motivational', catLabel: 'Motivational', img: asset33 },
  { code: '1508', name: 'Motivation — The Will To Win', cat: 'motivational', catLabel: 'Motivational', img: asset34 },
  { code: '1509', name: 'Inspiration — Stay Strong, Be Brave', cat: 'motivational', catLabel: 'Motivational', img: asset35 },
  { code: '1510', name: 'Don’t Give Up', cat: 'motivational', catLabel: 'Motivational', img: asset36 },
  { code: '1511', name: 'Mindful Escape — Unplug. Recharge.', cat: 'wellness', catLabel: 'Lifestyle & Wellness', img: asset37 },
  { code: '1512', name: 'Dream It, Believe It, Achieve It', cat: 'motivational', catLabel: 'Motivational', img: asset38 },
  { code: '1513', name: 'Do It Now', cat: 'motivational', catLabel: 'Motivational', img: asset39 },
  { code: '1514', name: 'Royal Heritage — Glimpse Into Past', cat: 'travel', catLabel: 'Travel & Heritage', img: asset40 },
  { code: '1515', name: 'Travel — Discover Who You Are', cat: 'travel', catLabel: 'Travel & Heritage', img: asset41 },
  { code: '1516', name: 'Nature & Horizons', cat: 'travel', catLabel: 'Travel & Heritage', img: asset42 },
  { code: '1517', name: 'Travel Vista', cat: 'travel', catLabel: 'Travel & Heritage', img: asset43 },
  { code: '1518', name: 'Wonderful Nature', cat: 'travel', catLabel: 'Travel & Heritage', img: asset44 },
  { code: '1519', name: 'World Monuments 2027', cat: 'travel', catLabel: 'Travel & Heritage', img: asset45 },
];

export default function DeskCalendar() {
  const [activeDesignIndex, setActiveDesignIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [showingInside, setShowingInside] = useState(false);

  const [corpFilter, setCorpFilter] = useState('all');
  const [lightboxData, setLightboxData] = useState<{ img: string; caption: string } | null>(null);
  const [enquiryList, setEnquiryList] = useState<Array<{ title: string; subtitle: string; img: string }>>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentDesign = DESIGNS[activeDesignIndex];
  const currentColor = currentDesign.colors[activeColorIndex] || currentDesign.colors[0];

  const filteredCorpItems = corpFilter === 'all'
    ? CORP_ITEMS
    : CORP_ITEMS.filter(it => it.cat === corpFilter);

  const addToEnquiry = (title: string, subtitle: string, img: string) => {
    setEnquiryList(prev => [...prev, { title, subtitle, img }]);
    setDrawerOpen(true);
  };

  return (
    <div className="w-full bg-[#FAF6EC] pt-28 pb-24 text-[#141F42]">
      {/* Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto mb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#DA2030] mb-2 block">
              2027 Corporate Gifting Collection
            </span>
            <span className="font-serif italic text-3xl text-[#1B2A56] block mb-2">calendar</span>
            <Typography variant="h1" className="text-[#141F42] text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-[#1B2A56]">20</span><span className="text-[#DA2030]">27</span> Flip Calendar Memo Box
            </Typography>
            <Typography variant="lead" className="text-[#5C6478] text-base sm:text-lg mb-8 max-w-xl">
              A spiral flip calendar sits on a fabric-bound memo cube stocked with 400 note sheets — one desk set your clients will open every single morning of the year.
            </Typography>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#configurator" className="px-6 py-3.5 rounded-full bg-[#DA2030] text-white font-bold shadow-lg shadow-[#DA2030]/30 hover:bg-[#c41b2a] transition-all hover:-translate-y-0.5">
                Browse the 9 colorways
              </a>
              <a href="#corporate-series" className="px-6 py-3.5 rounded-full border-2 border-[#141F42] text-[#141F42] font-bold hover:bg-[#141F42] hover:text-white transition-all hover:-translate-y-0.5">
                Corporate Desk Series
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E8E1D0] text-xs font-semibold">
                <Check className="w-4 h-4 text-[#DA2030]" /> 9 fabric colorways
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E8E1D0] text-xs font-semibold">
                <Check className="w-4 h-4 text-[#DA2030]" /> Custom logo on cover
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E8E1D0] text-xs font-semibold">
                <Check className="w-4 h-4 text-[#DA2030]" /> 400-sheet memo refill
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-[#E9AF3C]/30 to-transparent blur-2xl rounded-full" />
            <div className="relative z-10">
              <img src={asset01} alt="Navy 2027 flip calendar memo box" className="w-[88%] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              <img src={asset02} alt="Red 2027 flip calendar memo box" className="absolute -bottom-4 right-0 w-44 rounded-xl shadow-2xl border-2 border-white drop-shadow-xl hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white border-y border-[#E8E1D0] py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DA2030] block mb-2">Why teams reorder this one</span>
            <Typography variant="h2" className="text-[#141F42] text-3xl font-extrabold">
              Built like a desk fixture, priced like a giveaway
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF6EC] p-8 rounded-2xl border border-[#E8E1D0]">
              <Box className="w-8 h-8 text-[#DA2030] mb-4" />
              <h3 className="text-lg font-bold text-[#141F42] mb-2">Full 12-month spiral calendar</h3>
              <p className="text-sm text-[#5C6478]">Jan – Dec 2027, wire-bound and hinged to flip flat against the memo box lid.</p>
            </div>
            <div className="bg-[#FAF6EC] p-8 rounded-2xl border border-[#E8E1D0]">
              <RefreshCw className="w-8 h-8 text-[#DA2030] mb-4" />
              <h3 className="text-lg font-bold text-[#141F42] mb-2">400-sheet memo cube</h3>
              <p className="text-sm text-[#5C6478]">The base doubles as a refillable notepad box — cream stock, cut flush in a fabric tray.</p>
            </div>
            <div className="bg-[#FAF6EC] p-8 rounded-2xl border border-[#E8E1D0]">
              <Sparkles className="w-8 h-8 text-[#DA2030] mb-4" />
              <h3 className="text-lg font-bold text-[#141F42] mb-2">Full-colour logo print</h3>
              <p className="text-sm text-[#5C6478]">Your mark goes on the calendar cover, the memo box lid, or both placements.</p>
            </div>
            <div className="bg-[#FAF6EC] p-8 rounded-2xl border border-[#E8E1D0]">
              <ShieldCheck className="w-8 h-8 text-[#DA2030] mb-4" />
              <h3 className="text-lg font-bold text-[#141F42] mb-2">Ships boxed and ready</h3>
              <p className="text-sm text-[#5C6478]">Each set arrives pre-assembled and individually sleeved — straight to their desk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Configurator */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DA2030] block mb-2">Pick a cover story</span>
          <Typography variant="h2" className="text-[#141F42] text-3xl font-extrabold mb-3">
            Two designs. Nine colorways each.
          </Typography>
          <p className="text-[#5C6478] text-sm sm:text-base">
            Preview the exact cover art and box fabric before committing to a production run. Tap a swatch to change color, or flip open for January layout.
          </p>
        </div>

        <div className="flex gap-3 mb-8">
          {DESIGNS.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveDesignIndex(idx);
                setActiveColorIndex(0);
                setShowingInside(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeDesignIndex === idx ? 'bg-[#141F42] text-white shadow-md' : 'bg-white border border-[#E8E1D0] text-[#5C6478] hover:border-[#141F42]'}`}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#E8E1D0] rounded-3xl p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-b from-white to-[#f4efe2] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[380px] border border-[#E8E1D0]">
            <img 
              src={showingInside ? currentDesign.inside : currentColor.img} 
              alt={`${currentDesign.name} in ${currentColor.name}`} 
              className="max-h-80 object-contain drop-shadow-2xl transition-all duration-300 mb-6" 
            />
            <button
              onClick={() => setShowingInside(!showingInside)}
              className="px-5 py-2 rounded-full border-2 border-[#1B2A56] text-[#1B2A56] text-xs font-bold hover:bg-[#1B2A56] hover:text-white transition-colors"
            >
              {showingInside ? 'Back to cover' : 'See inside — January layout'}
            </button>
          </div>

          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#5C6478] block mb-1">
              {currentColor.name}
            </span>
            <h3 className="text-2xl font-extrabold text-[#141F42] mb-3">{currentDesign.name}</h3>
            <p className="text-[#5C6478] text-sm mb-6 leading-relaxed">{currentDesign.tagline}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {currentDesign.colors.map((c, idx) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setActiveColorIndex(idx);
                    setShowingInside(false);
                  }}
                  className={`w-10 h-10 rounded-full border-2 transition-transform ${activeColorIndex === idx ? 'scale-110 border-[#141F42] shadow-md' : 'border-transparent hover:scale-105'}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>

            <dl className="border-t border-b border-[#E8E1D0] divide-y divide-[#E8E1D0] mb-8 text-sm">
              <div className="py-3 flex justify-between">
                <dt className="text-[#5C6478]">Box footprint</dt>
                <dd className="font-semibold text-[#141F42]">6.5 × 6 × 3.5 in</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#5C6478]">Calendar</dt>
                <dd className="font-semibold text-[#141F42]">Spiral-bound, Jan–Dec 2027</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#5C6478]">Memo pad</dt>
                <dd className="font-semibold text-[#141F42]">400 sheets, cream stock</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#5C6478]">Cover fabric</dt>
                <dd className="font-semibold text-[#141F42]">Textured leatherette</dd>
              </div>
            </dl>

            <button
              onClick={() => addToEnquiry(currentDesign.name, currentColor.name, currentColor.img)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#DA2030] text-white font-bold hover:bg-[#c41b2a] shadow-lg shadow-[#DA2030]/30 transition-all hover:scale-105"
            >
              Add to enquiry list
            </button>
          </div>
        </div>
      </section>

      {/* CORPORATE SERIES DESK CALENDARS SECTION (Matching User Screenshot!) */}
      <section id="corporate-series" className="bg-white border-y border-[#E8E1D0] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#DA2030] block mb-2">
              Another way to gift the year ahead
            </span>
            <Typography variant="h2" className="text-[#141F42] text-3xl sm:text-4xl font-extrabold mb-4">
              Corporate Series Desk Calendars
            </Typography>
            <p className="text-[#5C6478] text-base leading-relaxed">
              13-sheeter spiral desk calendars with a 4-colour back planner, printed UV &amp; Hybrid at 23 × 21cm. Nineteen ready-made themes across devotional, motivational, wellness and travel art — each one open to your own logo and branding.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex gap-2 flex-wrap mb-10">
            {[
              { id: 'all', label: 'All themes' },
              { id: 'devotional', label: 'Devotional' },
              { id: 'motivational', label: 'Motivational' },
              { id: 'wellness', label: 'Lifestyle & Wellness' },
              { id: 'travel', label: 'Travel & Heritage' },
              { id: 'premium', label: 'Premium Series' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCorpFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${corpFilter === cat.id ? 'bg-[#DA2030] text-white shadow-md' : 'bg-[#FAF6EC] border border-[#E8E1D0] text-[#5C6478] hover:border-[#DA2030]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Corporate Series Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCorpItems.map((item) => (
              <div
                key={item.code}
                onClick={() => setLightboxData({ img: item.img, caption: `${item.name} (${item.code})` })}
                className={`bg-[#FAF6EC] border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${item.cat === 'premium' ? 'border-[#E9AF3C]/60 hover:border-[#E9AF3C]' : 'border-[#E8E1D0] hover:border-[#141F42]'}`}
              >
                <div className="relative bg-white aspect-[3/2] overflow-hidden p-2 flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#141F42]" />
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-1 ${item.cat === 'premium' ? 'text-[#B77900]' : 'text-[#DA2030]'}`}>
                      {item.catLabel}
                    </span>
                    <h3 className="text-base font-bold text-[#141F42] group-hover:text-[#DA2030] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E8E1D0] text-[11px] text-[#5C6478] flex justify-between items-center">
                    <span>Code #{item.code}</span>
                    <span className="font-semibold">{item.cat === 'premium' ? '21.5 × 19cm' : '23 × 21cm'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#5C6478] mt-8 text-center italic">
            Tap any calendar to view high resolution artwork. Premium Series items are 13-sheeter spiral desk calendars with planner layouts.
          </p>
        </div>
      </section>

      {/* Floating Enquiry List Button & Drawer */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed right-6 bottom-6 z-40 bg-[#DA2030] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-2xl shadow-[#DA2030]/50 flex items-center gap-3 hover:scale-105 transition-all"
      >
        <ShoppingBag className="w-4 h-4" />
        Enquiry list
        <span className="w-6 h-6 rounded-full bg-white text-[#DA2030] font-bold text-xs flex items-center justify-center">
          {enquiryList.length}
        </span>
      </button>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end" onClick={() => setDrawerOpen(false)}>
          <div className="w-full max-w-md bg-white h-full p-6 shadow-2xl flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#E8E1D0] mb-6">
                <h3 className="text-xl font-bold text-[#141F42]">Your Enquiry List</h3>
                <button onClick={() => setDrawerOpen(false)} className="p-1 rounded-full hover:bg-black/5">
                  <X className="w-5 h-5 text-[#5C6478]" />
                </button>
              </div>

              {enquiryList.length === 0 ? (
                <p className="text-sm text-[#5C6478] text-center py-12">
                  Nothing added yet — pick a colorway above and hit "Add to enquiry list".
                </p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {enquiryList.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center p-3 bg-[#FAF6EC] rounded-xl border border-[#E8E1D0]">
                      <img src={item.img} alt={item.title} className="w-14 h-14 object-contain" />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#141F42]">{item.title}</h4>
                        <span className="text-xs text-[#5C6478]">{item.subtitle}</span>
                      </div>
                      <button
                        onClick={() => setEnquiryList(prev => prev.filter((_, i) => i !== idx))}
                        className="text-xs text-red-500 font-bold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#E8E1D0]">
              <a
                href="/quote"
                className="w-full py-4 rounded-full bg-[#DA2030] text-white font-bold text-center block hover:bg-[#c41b2a] transition-all shadow-lg"
              >
                Send Request for Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxData && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxData(null)}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <button className="absolute -top-12 right-0 text-white p-2 rounded-full bg-white/20 hover:bg-white/40">
              <X className="w-6 h-6" />
            </button>
            <img src={lightboxData.img} alt={lightboxData.caption} className="max-h-[80vh] rounded-xl shadow-2xl object-contain bg-white" />
            <p className="text-white text-center mt-3 font-semibold text-sm">{lightboxData.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
