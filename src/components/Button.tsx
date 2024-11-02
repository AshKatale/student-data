import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  variant: 'transparent' | 'filled';
}

export default function Button({ onClick, text, disabled, variant }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg border-2 m-2 cursor-pointer
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        ${variant === 'transparent' ? 'bg-transparent text-black border-black hover:bg-gray-200 hover:text-black' 
                                    : 'bg-black text-white hover:bg-gray-700'}
      `}
    >
      <p>{text}</p>
    </button>
  );
}
