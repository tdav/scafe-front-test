import React from 'react';
import { Category } from '../types';
import { Coffee, Soup, UtensilsCrossed, Pizza, IceCream, Drumstick, Utensils } from 'lucide-react';

interface CategorySectionProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

const getIcon = (iconName: string, isActive: boolean) => {
  const props = { size: 24, className: isActive ? 'text-white' : 'text-gray-600' };
  switch (iconName) {
    case 'croissant': return <Coffee {...props} />;
    case 'soup': return <Soup {...props} />;
    case 'cloche': return <Utensils {...props} />;
    case 'wind': return <Soup {...props} />; // Placeholder
    case 'ice-cream': return <IceCream {...props} />;
    case 'drumstick': return <Drumstick {...props} />;
    case 'pizza': return <Pizza {...props} />;
    case 'coffee': return <Coffee {...props} />;
    default: return <UtensilsCrossed {...props} />;
  }
};

export const CategorySection: React.FC<CategorySectionProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`
              flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200
              ${isActive 
                ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200' 
                : 'bg-white border-white hover:border-blue-100 shadow-sm hover:shadow-md'
              }
            `}
          >
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center
              ${isActive ? 'bg-white/20' : 'bg-gray-100'}
            `}>
              {getIcon(category.icon, isActive)}
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>
                {category.name}
              </span>
              <span className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
                {category.count} Menu In Stock
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};