
import React from 'react';
import { ICONS } from '../constants';

interface IconProps {
  name: keyof typeof ICONS;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'h-6 w-6' }) => {
  const icon = ICONS[name];
  
  if (name === 'usFlag') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 28"
        className={className}
        aria-hidden="true"
      >
        {icon}
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
};

export default Icon;
