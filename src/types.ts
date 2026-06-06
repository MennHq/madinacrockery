export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  wholesalePrice?: number;
  category: string;
  imageUrl: string;
  stock?: number;
  isFeatured?: boolean;
  createdAt: any;
}

export interface Inquiry {
  id: string;
  customerName: string;
  phone: string;
  message: string;
  productId?: string;
  type: 'retail' | 'wholesale';
  status: 'new' | 'contacted' | 'closed';
  createdAt: any;
}

export interface UserProfile {
  uid: string;
  email: string;
  role: 'admin' | 'customer';
  displayName?: string;
}

export const CATEGORIES = [
  'Dinner Sets',
  'Glassware',
  'Stainless Steel Utensils',
  'Kitchen Accessories',
  'Serving Trays',
  'Cutlery',
  'Cooking Pots',
  'Storage Containers'
];
