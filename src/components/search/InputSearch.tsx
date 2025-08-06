import React, { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

interface InputSearchProps {
  value: string;
  onChange(value: string): void;
}

const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <div
      className={`w-full max-w- mx-auto flex shadow items-center h-[60px] px-5 rounded-xl border-2 ${
        isFocused ? 'border-blue-100' : 'border-transparent'
      } bg-gray-50`}
    >
      <FaSearch
        className={`w-5 h-5 mr-2 text-gray-500 transition-opacity ${
          isFocused ? 'opacity-100' : 'opacity-80'
        }`}
      />
      <input
        placeholder={isFocused ? '' : 'Quel Pokémon cherchez-vous?'}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="flex-1 text-2xl text-gray-500 bg-transparent border-none outline-none placeholder:text-gray-400 sm:text-[16px]"
      />
    </div>
  );
};

export default InputSearch;
