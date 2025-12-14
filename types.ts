export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string; // Simplified for this demo, usually an SVG or component
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  notes?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: 'credit-card' | 'wallet' | 'cash';
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}