import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { CategorySection } from './components/CategorySection';
import { MenuGrid } from './components/MenuGrid';
import { OrderPanel } from './components/OrderPanel';
import { AuthPage } from './components/AuthPage';
import { CATEGORIES, MENU_ITEMS } from './constants';
import { MenuItem, CartItem, User } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('lunch');
  const [cart, setCart] = useState<CartItem[]>([
    // Pre-populating cart based on the design screenshot
    { ...MENU_ITEMS[0], quantity: 2 },
    { ...MENU_ITEMS[1], quantity: 2 },
    { ...MENU_ITEMS[5], quantity: 2 }
  ]);

  const handleAuthenticate = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setCart([]);
  };

  // Show AuthPage if not authenticated
  if (!isAuthenticated) {
    return <AuthPage onAuthenticate={handleAuthenticate} />;
  }

  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== item.id);
    });
  };

  const handleRemoveCompletely = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const filteredItems = MENU_ITEMS.filter(item => item.categoryId === activeCategory);

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#F3F4F6]">
      {/* 1. Left Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <TopBar />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pt-6">
          <div className="max-w-5xl mx-auto">
            {/* Category Grid */}
            <CategorySection 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />

            {/* Menu Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {CATEGORIES.find(c => c.id === activeCategory)?.name} Menu
              </h2>
            </div>

            {/* Menu Items */}
            <MenuGrid 
              items={filteredItems} 
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        </div>
      </div>

      {/* 3. Right Order Panel */}
      <OrderPanel cart={cart} onRemove={handleRemoveCompletely} />
    </div>
  );
};

export default App;