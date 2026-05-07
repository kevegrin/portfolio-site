
"use client";

// this atom defines the core button component, providing a reusable and typed interaction element that scales across the portfolio.
/*
React.ButtonHTMLAttributes<HTMLButtonElement>: This is TypeScript at its best. Instead of manually typing out every possible button attribute (type, onClick, aria-label), we inherit them directly from React's core definitions. This saves time and ensures standard accessibility practices.

The variant Prop: This limits the button styles to specific, predictable designs (primary, secondary, outline). If you or a collaborator tries to pass variant="danger", TypeScript will immediately throw an error, preventing inconsistencies in the UI.

The className Prop: We accept an optional className string and append it to combinedClasses. This gives you an escape hatch to add one-off margins or positional utilities (like mt-4 or w-full) when placing the Button in different layouts without breaking its core design.
*/

import React from 'react';



// define the typescript interface for the button props, extending standard html button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  // base styles applied to all button variants
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out';
  
  // styles specific to the chosen variant, using our custom css variables
  const variants = {
    primary: 'bg-primary text-background hover:opacity-90',
    secondary: 'bg-accent text-background hover:opacity-90',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
  };

  // combine the base, variant, and any custom classes passed in via props
  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};