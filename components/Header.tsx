
import React, { useState } from 'react';
import Icon from './Icon';
import CartBadge from './CartBadge';
import { megaMenuData } from '../constants';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { apiConfig } from '../config';

const Header: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const handleMouseEnter = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white" onMouseLeave={handleMouseLeave}>
      {/* Utility Nav */}
      <div className="bg-gray-100 text-xs text-gray-600">
        <div className="container mx-auto px-4 h-8 flex justify-between items-center">
          <button
            className="flex items-center space-x-2 hover:text-black"
            aria-label="Select location and language, current is United States, English"
            role="link"
          >
            <Icon name="usFlag" className="h-4 w-6" />
            <span>US | EN</span>
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-black" aria-label="Check Order Status" role="link">Order Status</a>
            {apiConfig.featureToggles.enableLiveChat && <a href="#" className="hover:text-black" aria-label="Open Live Chat" role="link">Live Chat</a>}
            <a href="#" className="hover:text-black" aria-label="Join XPLR Pass" role="link">Join XPLR Pass</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Icon name="menu" />
            </button>
          </div>
          
          {/* Desktop Menu - Left */}
          <nav className="hidden lg:flex items-center space-x-8">
            {megaMenuData.slice(0, 3).map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="font-bold tracking-wider uppercase text-sm py-6 border-b-4 border-transparent hover:border-black"
                onMouseEnter={() => handleMouseEnter(category.title)}
                aria-label={`Navigate to ${category.title} category`}
                role="link"
              >
                {category.title}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:left-0 lg:top-0 lg:translate-x-0 lg:translate-y-0">
            <a href="/" className="font-brand-mono text-3xl font-black tracking-tighter" aria-label="icoopapi homepage" role="link">
              icoopapi
            </a>
          </div>

          {/* Desktop Menu - Right */}
          <nav className="hidden lg:flex items-center space-x-8">
             {megaMenuData.slice(3).map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="font-bold tracking-wider uppercase text-sm py-6 border-b-4 border-transparent hover:border-black"
                onMouseEnter={() => handleMouseEnter(category.title)}
                aria-label={`Navigate to ${category.title} category`}
                role="link"
              >
                {category.title}
              </a>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hover:opacity-70" aria-label="Search" role="link">
              <Icon name="search" />
            </button>
            <button className="hidden md:block hover:opacity-70" aria-label="My Account" role="link">
              <Icon name="user" />
            </button>
            <button className="relative hover:opacity-70" aria-label="Shopping Cart" role="link">
              <Icon name="cart" />
              <CartBadge count={cartCount} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mega Menu */}
      <MegaMenu activeCategory={activeCategory} />
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
