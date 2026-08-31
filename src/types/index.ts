export interface GalleryImage {
  url: string;
  alt: string;
  isHero?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  bannerImage?: string;
  parentId?: string | null;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  categoryId: string;
  material: string;
  paperGsm: number;
  printingType: string;
  size: string;
  orientation: 'Portrait' | 'Landscape' | 'Square';
  moq: number;
  stockStatus: 'In Stock' | 'Out of Stock' | 'Pre-order';
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  corporateEligible: boolean;
  sampleAvailable: boolean;
  rating: number;
  reviewsCount: number;
  thumbnail: string;
  hoverImage: string;
  gallery: GalleryImage[];
  description: string;
  specifications: Record<string, string>;
  price: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export interface Catalogue {
  id: string;
  title: string;
  year: number;
  thumbnail: string;
  pdfUrl: string;
  flipbookUrl: string;
}

export interface Quote {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  gstNumber?: string;
  productId: string;
  quantity: number;
  customizationDetails: string;
  status: 'Pending' | 'Reviewed' | 'Approved' | 'Rejected';
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  year: number;
}

export interface ManufacturingStep {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'Customer' | 'Corporate' | 'Admin';
}

export interface Address {
  id: string;
  userId: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: string;
}

export interface Wishlist {
  userId: string;
  productIds: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  customizationNotes?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  image?: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
