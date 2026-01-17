
import React from 'react';

interface CartBadgeProps {
  count: number;
}

const CartBadge: React.FC<CartBadgeProps> = ({ count }) => {
  if (count === 0) return null;
  return (
    <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
      {count}
    </span>
  );
};

export default CartBadge;
