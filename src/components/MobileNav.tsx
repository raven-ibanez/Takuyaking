import React from 'react';
import { useCategories } from '../hooks/useCategories';

interface MobileNavProps {
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeCategory, onCategoryClick }) => {
  const { categories } = useCategories();

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-takuya-white/95 backdrop-blur-sm border-b-2 border-takuya-red md:hidden shadow-lg">
      <div className="flex overflow-x-auto scrollbar-hide px-3 py-3 sm:px-4 sm:py-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`category-tab flex-shrink-0 flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 mr-2 sm:mr-3 transition-all duration-200 touch-manipulation ${
              activeCategory === category.id ? 'active' : ''
            }`}
          >
            <span className="text-base sm:text-lg">{category.icon}</span>
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;