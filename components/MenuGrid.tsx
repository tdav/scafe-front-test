import React from 'react';
import { MenuItem, CartItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface MenuGridProps {
  items: MenuItem[];
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (item: MenuItem) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ items, cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="grid grid-cols-3 gap-6 pb-20">
      {items.map((item) => {
        const cartItem = cart.find(c => c.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div key={item.id} className="bg-white rounded-[20px] p-4 shadow-sm border border-white hover:shadow-lg transition-all duration-300 group">
            <div className="flex gap-4">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">{item.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3">
                  {item.description}
                </p>
                
              </div>
            </div>
            
            <div className="flex items-end justify-between mt-2">
              <span className="text-xl font-bold text-gray-800">
                ${item.price.toFixed(1)}
              </span>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onRemoveFromCart(item)}
                  disabled={quantity === 0}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center border transition-colors
                    ${quantity > 0 
                      ? 'border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200' 
                      : 'border-gray-100 text-gray-300 cursor-not-allowed'}
                  `}
                >
                  <Minus size={14} />
                </button>
                
                <span className={`text-sm font-bold w-4 text-center ${quantity > 0 ? 'text-gray-800' : 'text-gray-300'}`}>
                  {quantity}
                </span>
                
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};