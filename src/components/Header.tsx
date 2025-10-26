import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="takuya-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-2 sm:space-x-4 text-takuya-black hover:text-takuya-red transition-colors duration-200 group min-w-0 flex-1"
          >
            {/* Site Logo */}
            <div className="relative flex-shrink-0">
              {loading ? (
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-takuya-white rounded-full border-2 border-takuya-gray flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                </div>
              ) : (
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-takuya-white rounded-full border-2 border-takuya-gray flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden">
                  <img 
                    src={siteSettings?.site_logo || "/logo.jpg"} 
                    alt={siteSettings?.site_name || "Takuya King"}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = "/logo.jpg";
                    }}
                  />
                </div>
              )}
              {/* Subtle Crown Badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-takuya-red rounded-full flex items-center justify-center shadow-sm border border-takuya-white">
                <div className="text-white text-xs">👑</div>
              </div>
            </div>
            
            {/* Brand Text */}
            <div className="text-left min-w-0 flex-1">
              <h1 className="text-lg sm:text-2xl font-bold text-takuya-red tracking-wide truncate">
                {loading ? (
                  <div className="w-20 sm:w-28 h-4 sm:h-6 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  siteSettings?.site_name || "TAKUYA KING"
                )}
              </h1>
              <p className="text-xs text-takuya-gray font-medium hidden sm:block">
                Banlic Calamba Laguna
              </p>
            </div>
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button 
              onClick={onCartClick}
              className="relative p-2 sm:p-3 text-takuya-gray hover:text-takuya-red hover:bg-takuya-light-gray rounded-lg transition-all duration-300 border border-takuya-gray group touch-manipulation"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-105 transition-transform duration-300" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-takuya-red text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;