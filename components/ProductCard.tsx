
// Fix: Corrected syntax error in React import statement.
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-center object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.hoverImageUrl}
          alt={product.name}
          className="w-full h-full object-center object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.badge && (
          <div className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wider py-1 px-2 ${product.badge === 'Sale' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-white text-black font-bold text-sm py-3 px-4 uppercase tracking-wider hover:bg-gray-200">
            Quick Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold text-gray-900 group-hover:underline">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-700">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
