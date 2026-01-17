
import React from 'react';
import { megaMenuData } from '../constants';
import { MegaMenuCategory } from '../types';

interface MegaMenuProps {
  activeCategory: string | null;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ activeCategory }) => {
  const categoryData = megaMenuData.find(cat => cat.title === activeCategory);

  if (!categoryData) {
    return null;
  }

  return (
    <div className="hidden lg:block absolute w-full bg-white shadow-lg border-t" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {categoryData.sections.map(section => (
              <div key={section.title}>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.title}>
                      <a href={link.href} className="text-sm text-gray-600 hover:text-black hover:underline" aria-label={link.title} role="link">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <a href={categoryData.promo.href} className="block group" aria-label={categoryData.promo.title} role="link">
              <img src={categoryData.promo.imageUrl} alt={categoryData.promo.title} className="w-full object-cover mb-4" />
              <h4 className="font-bold text-sm uppercase tracking-wider group-hover:underline">{categoryData.promo.title}</h4>
              <p className="text-sm text-gray-600">{categoryData.promo.description}</p>
            </a>
          </div>
        </div>
      </div>
      {/* Fix: Removed non-standard "jsx" prop from style tag. */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MegaMenu;
