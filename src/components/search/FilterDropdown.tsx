import React, { useState } from "react";

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (filter: string) => {
    onChange(filter);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center w-full h-[60px] px-4 py-2 text-gray-500 bg-gray-100 border-2 border-transparent rounded-[10px] hover:border-blue-100 focus:outline-none"
        >
          Filter: {value === "" ? "None" : value}
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSelect("")}
          >
            None
          </button>
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSelect("A-Z")}
          >
            A - Z
          </button>
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSelect("Z-A")}
          >
            Z - A
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
