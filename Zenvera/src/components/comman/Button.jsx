import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-zen-teal text-white hover:bg-opacity-90 shadow-md hover:shadow-lg',
    secondary: 'border-2 border-zen-teal text-zen-teal hover:bg-zen-teal hover:text-white',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-zen-teal hover:text-zen-teal'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;