
import React, { useState } from 'react';
import { megaMenuData } from '../constants';
import Icon from './Icon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative h-full w-full max-w-sm bg-white shadow-xl p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <a href="/" className="font-brand-mono text-2xl font-black tracking-tighter">icoopapi</a>
          <button onClick={onClose} aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>
        <nav>
          <ul>
            {megaMenuData.map(category => (
              <li key={category.title} className="border-b">
                <div className="flex justify-between items-center py-4">
                  <a href={category.href} className="font-bold uppercase tracking-wider">{category.title}</a>
                  <button onClick={() => toggleCategory(category.title)} aria-label={`Expand ${category.title} links`}>
                    <Icon name="chevronDown" className={`h-5 w-5 transition-transform ${openCategory === category.title ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {openCategory === category.title && (
                  <div className="pb-4 pl-4">
                    {category.sections.map(section => (
                      <div key={section.title} className="mb-4">
                        <h4 className="font-bold text-sm mb-2">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.links.map(link => (
                            <li key={link.title}>
                              <a href={link.href} className="text-gray-600 hover:text-black">{link.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
