export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'veg' | 'non-veg';
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra-hot';
  isVeg: boolean;
  rating: number;
  reviews: number;
  preparationTime: number;
  ingredients: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface User {
  id?: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentMethod: 'card' | 'upi' | 'cash';
  customer: User;
  createdAt: Date;
  updatedAt: Date;
  estimatedDeliveryTime: string;
  specialInstructions?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed';
  paymentMethod: string;
  stripePaymentIntentId?: string;
  createdAt: Date;
}

export interface FilterOptions {
  category?: 'all' | 'veg' | 'non-veg';
  priceRange?: {
    min: number;
    max: number;
  };
  spiceLevel?: 'all' | 'mild' | 'medium' | 'hot' | 'extra-hot';
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'popular';
}