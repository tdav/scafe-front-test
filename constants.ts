import { Category, MenuItem, PaymentMethod } from './types';

export const CATEGORIES: Category[] = [
  { id: 'breakfast', name: 'Breakfast', count: 12, icon: 'croissant' },
  { id: 'lunch', name: 'Lunch', count: 12, icon: 'soup' },
  { id: 'dinner', name: 'Dinner', count: 12, icon: 'cloche' },
  { id: 'soup', name: 'Soup', count: 12, icon: 'wind' },
  { id: 'desserts', name: 'Desserts', count: 12, icon: 'ice-cream' },
  { id: 'sides', name: 'Side Dish', count: 12, icon: 'drumstick' },
  { id: 'appetizer', name: 'Appetizer', count: 12, icon: 'pizza' },
  { id: 'beverages', name: 'Beverages', count: 12, icon: 'coffee' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Pasta Bolognese',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 50.5,
    image: 'https://images.unsplash.com/photo-1622973543052-b6d1b65b4458?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '2',
    name: 'Spicy Fried Chicken',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 45.7,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '3',
    name: 'Grilled Steak',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 80.0,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '4',
    name: 'Fish And Chips',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 90.4,
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '5',
    name: 'Beef Bourguignon',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 75.5,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '6',
    name: 'Spaghetti Carbonara',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 35.3,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '7',
    name: 'Ratatouille',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 26.7,
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '8',
    name: 'Kimchi Jjigae',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 45.7,
    image: 'https://images.unsplash.com/photo-1583225214464-9296e86a3c05?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  {
    id: '9',
    name: 'Tofu Scramble',
    description: 'Delicious beef lasagna with double chilli Delicious beef',
    price: 85.6,
    image: 'https://images.unsplash.com/photo-1624372957865-685567c9c228?q=80&w=200&auto=format&fit=crop',
    categoryId: 'lunch',
  },
  // Adding items for other categories so they aren't empty
  {
    id: '10',
    name: 'Pancakes',
    description: 'Fluffy pancakes with syrup',
    price: 15.0,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=200&auto=format&fit=crop',
    categoryId: 'breakfast',
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'credit', name: 'Credit Card', icon: 'credit-card' },
  { id: 'paylater', name: 'Paylater', icon: 'wallet' },
  { id: 'cash', name: 'Cash Payout', icon: 'cash' },
];