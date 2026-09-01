import React, { useState, useEffect, useMemo } from 'react';
import type { Product } from '@/types';
import { uploadProductImage } from '@/lib/supabase';
import { X, Upload, Check, Loader2, Image as ImageIcon, Search, CheckCircle2 } from 'lucide-react';

// Foundation Devotional Wall Calendar Assets
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

// New 2027 Wall Calendar Collection (P-101 to P-108)
import download16 from '@/assets/foundation/download (16).jpg';
import download17 from '@/assets/foundation/download (17).jpg';
import download18 from '@/assets/foundation/download (18).jpg';
import download19 from '@/assets/foundation/download (19).jpg';
import download20 from '@/assets/foundation/download (20).jpg';
import download21 from '@/assets/foundation/download (21).jpg';
import download22 from '@/assets/foundation/download (22).jpg';
import download23 from '@/assets/foundation/download (23).jpg';

// Desk Calendar & Big Wish Memo Box Assets
import desk01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import desk02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import desk03 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_03_39f8718b3f3a.png';
import desk21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import desk22 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_22_fc7a9002813f.png';
import desk23 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_23_3d59a55e4cf3.png';
import desk24 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_24_b169f7ce24ef.png';
import desk25 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_25_c9168ddbe608.png';
import desk26 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_26_9aa8ab1c50f4.png';
import desk27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import desk28 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_28_0ccfd02dfe29.jpg';
import desk29 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_29_e259bc1b5a9f.jpg';
import desk30 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_30_ae8d1cb7dc12.jpg';
import desk31 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';
import desk32 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_32_626e8d0f0f3d.jpg';

interface CatalogAsset {
  id: string;
  label: string;
  code: string;
  type: 'devotional' | 'new-edition' | 'desk';
  img: string;
}

const CATALOG_ASSETS: CatalogAsset[] = [
  // Devotional
  { id: 'rel-1', label: 'Pratham Ganesh', code: '750', type: 'devotional', img: religiousHero },
  { id: 'rel-2', label: 'Mangal Ganesh', code: '751', type: 'devotional', img: downloadImg },
  { id: 'rel-3', label: 'Ganesh Aarti', code: '752', type: 'devotional', img: download1 },
  { id: 'rel-4', label: 'Pilliyar Patti', code: '753', type: 'devotional', img: download2 },
  { id: 'rel-5', label: 'Ganesh Panchang', code: '754', type: 'devotional', img: download3 },
  { id: 'rel-6', label: 'Char Dham', code: '755', type: 'devotional', img: download4 },
  { id: 'rel-7', label: 'Laxmi Narayan', code: '756', type: 'devotional', img: download5 },
  { id: 'rel-8', label: 'Shree Krishna', code: '757', type: 'devotional', img: download6 },
  { id: 'rel-9', label: 'Radha Krishna', code: '758', type: 'devotional', img: download7 },
  { id: 'rel-10', label: 'Shree Ram Darbar', code: '759', type: 'devotional', img: download8 },
  { id: 'rel-11', label: 'Lord Shiva', code: '760', type: 'devotional', img: download9 },
  { id: 'rel-12', label: 'Tirupati Balaji', code: '761', type: 'devotional', img: download10 },
  { id: 'rel-13', label: 'Sai Baba', code: '762', type: 'devotional', img: download11 },
  { id: 'rel-14', label: 'Guru Nanak Dev Ji', code: '763', type: 'devotional', img: download12 },
  { id: 'rel-15', label: 'Diwali Pooja Aarti', code: '764', type: 'devotional', img: download13 },
  { id: 'rel-16', label: 'Golden Temple', code: '765', type: 'devotional', img: download14 },
  { id: 'rel-17', label: 'Nav Durga Mata', code: '766', type: 'devotional', img: download15 },

  // New 2027 Editions (Numbered P-101 to P-108)
  { id: 'new-101', label: 'P-101 Edition', code: 'P-101', type: 'new-edition', img: download16 },
  { id: 'new-102', label: 'P-102 Edition', code: 'P-102', type: 'new-edition', img: download17 },
  { id: 'new-103', label: 'P-103 Edition', code: 'P-103', type: 'new-edition', img: download18 },
  { id: 'new-104', label: 'P-104 Edition', code: 'P-104', type: 'new-edition', img: download19 },
  { id: 'new-105', label: 'P-105 Edition', code: 'P-105', type: 'new-edition', img: download20 },
  { id: 'new-106', label: 'P-106 Edition', code: 'P-106', type: 'new-edition', img: download21 },
  { id: 'new-107', label: 'P-107 Edition', code: 'P-107', type: 'new-edition', img: download22 },
  { id: 'new-108', label: 'P-108 Edition', code: 'P-108', type: 'new-edition', img: download23 },

  // Desk Calendars & Big Wish Memo Boxes
  { id: 'desk-1', label: 'Corporate Desk Memo Box (Navy)', code: 'BW-01', type: 'desk', img: desk01 },
  { id: 'desk-2', label: 'Executive Desk Memo Box (Red)', code: 'BW-02', type: 'desk', img: desk02 },
  { id: 'desk-3', label: 'Executive Desk Memo Box (Burgundy)', code: 'BW-03', type: 'desk', img: desk03 },
  { id: 'desk-21', label: 'Maha Ganpati Desk Series', code: '301', type: 'desk', img: desk21 },
  { id: 'desk-22', label: 'Bhakti Samarpan Desk Series', code: '302', type: 'desk', img: desk22 },
  { id: 'desk-23', label: 'Divine Blessings Desk Series', code: '303', type: 'desk', img: desk23 },
  { id: 'desk-24', label: 'Vedic Shloka Desk Series', code: '304', type: 'desk', img: desk24 },
  { id: 'desk-25', label: 'Sanskrit Wisdom Desk Series', code: '305', type: 'desk', img: desk25 },
  { id: 'desk-26', label: 'Anand Sagar Desk Series', code: '306', type: 'desk', img: desk26 },
  { id: 'desk-27', label: 'Shree Ganeshaya Desk', code: '307', type: 'desk', img: desk27 },
  { id: 'desk-28', label: 'Spiritual Heritage Desk', code: '308', type: 'desk', img: desk28 },
  { id: 'desk-29', label: 'Sacred Harmony Desk', code: '309', type: 'desk', img: desk29 },
  { id: 'desk-30', label: 'Floral Bloom Desktop', code: '310', type: 'desk', img: desk30 },
  { id: 'desk-31', label: 'Go Green Desktop Calendar', code: '311', type: 'desk', img: desk31 },
  { id: 'desk-32', label: 'Scenic Landscapes Desktop', code: '312', type: 'desk', img: desk32 },
];

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: Partial<Product>) => Promise<void>;
  productToEdit?: Product | null;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  productToEdit,
}) => {
  const isEditing = Boolean(productToEdit);

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    sku: '',
    categoryId: 'c1',
    material: 'Premium Art Paper',
    paperGsm: 250,
    size: '15x20 inches',
    orientation: 'Portrait',
    moq: 100,
    price: 250,
    stockStatus: 'In Stock',
    description: '',
    thumbnail: '',
    featured: false,
    bestSeller: false,
    newArrival: true,
    corporateEligible: true,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [assetFilter, setAssetFilter] = useState<'all' | 'devotional' | 'new-edition' | 'desk'>('all');
  const [assetSearch, setAssetSearch] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData({
        name: '',
        sku: `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
        categoryId: 'c1',
        material: 'Premium Art Paper',
        paperGsm: 250,
        size: '15x20 inches',
        orientation: 'Portrait',
        moq: 100,
        price: 250,
        stockStatus: 'In Stock',
        description: 'Premium quality calendar crafted with high-precision printing and durable finish.',
        thumbnail: religiousHero,
        featured: false,
        bestSeller: false,
        newArrival: true,
        corporateEligible: true,
      });
    }
  }, [productToEdit, isOpen]);

  // Prevent background page from scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Filtered Catalog Assets
  const filteredAssets = useMemo(() => {
    return CATALOG_ASSETS.filter((item) => {
      const matchType = assetFilter === 'all' || item.type === assetFilter;
      const q = assetSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.label.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q);
      return matchType && matchSearch;
    });
  }, [assetFilter, assetSearch]);

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const publicUrl = await uploadProductImage(file);
      setFormData((prev) => ({
        ...prev,
        thumbnail: publicUrl,
        hoverImage: publicUrl,
        gallery: [{ url: publicUrl, alt: prev.name || 'Product Image' }],
      }));
    } catch {
      // Fallback to local Data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          thumbnail: dataUrl,
          hoverImage: dataUrl,
          gallery: [{ url: dataUrl, alt: prev.name || 'Product Image' }],
        }));
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
      return;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.thumbnail) {
      alert('Please provide at least a Product Name and an Image.');
      return;
    }

    setIsSaving(true);
    try {
      await onSave(formData);
      onClose();
    } catch (err: any) {
      alert(err.message || 'Error saving product');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overscroll-contain"
    >
      <div
        data-lenis-prevent
        className="bg-white border border-[#E8E1D0] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden overscroll-contain"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E8E1D0] flex items-center justify-between bg-[#FAF6EC] flex-shrink-0">
          <div>
            <h2 className="text-xl font-extrabold text-[#141F42]">
              {isEditing ? 'Edit Product' : 'Add New Product to Catalogue'}
            </h2>
            <p className="text-xs text-[#5C6478]">
              {isEditing ? `Modifying ${productToEdit?.name}` : 'Creates a live product synced to Supabase database'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#5C6478] hover:bg-white hover:text-[#141F42] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form
          data-lenis-prevent
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 overscroll-contain"
        >
          {/* Main Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Product Title *
              </label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. 750 Pratham Ganesh"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Item Code / SKU *
              </label>
              <input
                type="text"
                required
                value={formData.sku || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, sku: e.target.value }))}
                placeholder="e.g. 750 or CAL-REL-1003"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>
          </div>

          {/* Category & Material */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Category
              </label>
              <select
                value={formData.categoryId || 'c1'}
                onChange={(e) => setFormData((prev) => ({ ...prev, categoryId: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              >
                <option value="c1">Wall Calendar</option>
                <option value="c2">Desk Calendar</option>
                <option value="c3">Corporate Series</option>
                <option value="c4">Religious Devotional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Paper Material
              </label>
              <input
                type="text"
                value={formData.material || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, material: e.target.value }))}
                placeholder="Premium Art Paper"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Paper Weight (GSM)
              </label>
              <input
                type="number"
                value={formData.paperGsm || 250}
                onChange={(e) => setFormData((prev) => ({ ...prev, paperGsm: Number(e.target.value) }))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>
          </div>

          {/* Pricing, MOQ & Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Price (INR ₹)
              </label>
              <input
                type="number"
                value={formData.price || 0}
                onChange={(e) => setFormData((prev) => ({ ...prev, price: Number(e.target.value) }))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Minimum Order (MOQ)
              </label>
              <input
                type="number"
                value={formData.moq || 100}
                onChange={(e) => setFormData((prev) => ({ ...prev, moq: Number(e.target.value) }))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
                Dimensions / Size
              </label>
              <input
                type="text"
                value={formData.size || '15x20 inches'}
                onChange={(e) => setFormData((prev) => ({ ...prev, size: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
              />
            </div>
          </div>

          {/* UPGRADED: Visual Catalog Asset Library & Upload Section */}
          <div className="bg-[#FAF6EC] border border-[#E8E1D0] rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#141F42]">
                  Select Product Artwork Image *
                </label>
                <span className="text-[11px] text-[#5C6478]">
                  Choose from official Paper Plus artworks or upload your own file
                </span>
              </div>

              {/* Upload New Custom Image */}
              <label className="px-4 py-2 rounded-xl bg-[#141F42] text-white text-xs font-bold hover:bg-[#DA2030] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm flex-shrink-0">
                {isUploading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" />
                    Upload Custom Photo
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>
            </div>

            {/* Currently Selected Preview Box */}
            <div className="bg-white border border-[#E8E1D0] rounded-xl p-3 mb-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FAF6EC] border border-[#E8E1D0] rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                {formData.thumbnail ? (
                  <img
                    src={formData.thumbnail}
                    alt="Active preview"
                    className="w-full h-full object-contain drop-shadow"
                  />
                ) : (
                  <ImageIcon className="w-6 h-6 text-[#8D96A8]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DA2030] block">
                  Active Selected Artwork
                </span>
                <span className="text-xs font-bold text-[#141F42] block truncate">
                  {formData.name || 'Unnamed Product'}
                </span>
                <input
                  type="text"
                  value={formData.thumbnail || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      thumbnail: e.target.value,
                      hoverImage: e.target.value,
                      gallery: [{ url: e.target.value, alt: prev.name || 'Product Image' }],
                    }))
                  }
                  placeholder="Or paste custom image URL..."
                  className="mt-1 w-full text-[11px] px-2.5 py-1 rounded-lg bg-[#FAF6EC] border border-[#E8E1D0] text-[#141F42] focus:outline-none focus:border-[#DA2030]"
                />
              </div>
            </div>

            {/* Visual Asset Library Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1 w-full sm:w-auto">
                {[
                  { key: 'all', label: 'All Assets' },
                  { key: 'devotional', label: 'Devotional Wall' },
                  { key: 'new-edition', label: 'New 2027 (P-101+)' },
                  { key: 'desk', label: 'Desk & Memo Boxes' },
                ].map((tab) => (
                  <button
                    type="button"
                    key={tab.key}
                    onClick={() => setAssetFilter(tab.key as any)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                      assetFilter === tab.key
                        ? 'bg-[#141F42] text-white shadow-sm'
                        : 'bg-white text-[#5C6478] border border-[#E8E1D0] hover:border-[#DA2030]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Quick Search */}
              <div className="relative w-full sm:w-48">
                <Search className="w-3 h-3 text-[#8D96A8] absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={assetSearch}
                  onChange={(e) => setAssetSearch(e.target.value)}
                  placeholder="Filter artwork..."
                  className="w-full pl-7 pr-2 py-1 rounded-lg bg-white border border-[#E8E1D0] text-[11px] text-[#141F42] focus:outline-none focus:border-[#DA2030]"
                />
              </div>
            </div>

            {/* Visual Asset Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 max-h-56 overflow-y-auto p-1 border border-[#E8E1D0] rounded-xl bg-white">
              {filteredAssets.map((asset) => {
                const isSelected = formData.thumbnail === asset.img;
                return (
                  <button
                    type="button"
                    key={asset.id}
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        thumbnail: asset.img,
                        hoverImage: asset.img,
                        gallery: [{ url: asset.img, alt: asset.label }],
                        // If creating new and name is empty, auto-fill title!
                        name: !prev.name ? asset.label : prev.name,
                      }));
                    }}
                    className={`p-2 rounded-xl border text-left transition-all duration-200 flex flex-col items-center relative group cursor-pointer ${
                      isSelected
                        ? 'bg-[#DA2030]/5 border-[#DA2030] ring-2 ring-[#DA2030]/30 shadow-md'
                        : 'bg-[#FAF6EC] border-[#E8E1D0] hover:border-[#DA2030]/50 hover:bg-white'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#DA2030] text-white flex items-center justify-center shadow">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                    <div className="w-full h-16 rounded-lg overflow-hidden bg-white border border-[#E8E1D0] p-1 mb-1.5 flex items-center justify-center">
                      <img
                        src={asset.img}
                        alt={asset.label}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#141F42] leading-tight text-center line-clamp-1 w-full">
                      {asset.label}
                    </span>
                    <span className="text-[9px] text-[#8D96A8] font-mono mt-0.5">
                      {asset.code}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141F42] mb-1.5">
              Product Description
            </label>
            <textarea
              rows={3}
              value={formData.description || ''}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Detailed information about the calendar, printing, finish, and packaging..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-sm text-[#141F42] focus:outline-none focus:border-[#DA2030]"
            />
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <label className="flex items-center gap-2 text-xs font-bold text-[#141F42] cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.featured)}
                onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 accent-[#DA2030] rounded"
              />
              Featured
            </label>

            <label className="flex items-center gap-2 text-xs font-bold text-[#141F42] cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.bestSeller)}
                onChange={(e) => setFormData((prev) => ({ ...prev, bestSeller: e.target.checked }))}
                className="w-4 h-4 accent-[#DA2030] rounded"
              />
              Best Seller
            </label>

            <label className="flex items-center gap-2 text-xs font-bold text-[#141F42] cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.newArrival)}
                onChange={(e) => setFormData((prev) => ({ ...prev, newArrival: e.target.checked }))}
                className="w-4 h-4 accent-[#DA2030] rounded"
              />
              New 2027
            </label>

            <label className="flex items-center gap-2 text-xs font-bold text-[#141F42] cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.corporateEligible)}
                onChange={(e) => setFormData((prev) => ({ ...prev, corporateEligible: e.target.checked }))}
                className="w-4 h-4 accent-[#DA2030] rounded"
              />
              Corporate Gifting
            </label>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-[#E8E1D0] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#E8E1D0] text-xs font-bold text-[#5C6478] hover:bg-[#FAF6EC] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving || isUploading}
              className="px-6 py-2.5 rounded-xl bg-[#DA2030] text-white text-xs font-bold hover:bg-[#c41b2a] transition-all flex items-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving to Supabase...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  {isEditing ? 'Save Changes' : 'Create Product'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
