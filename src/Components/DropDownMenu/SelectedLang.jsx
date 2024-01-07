import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const languageOptions = [
  'Assamese', 'Bengali', 'Bodo', 'Dogri', 'English', 'Gujarati', 'Hindi',
  'Kannada', 'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Manipuri',
  'Marathi', 'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi',
  'Tamil', 'Telugu', 'Urdu'
];

const SelectedLang = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('English');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (lang) => {
    setSelectedOption(lang);
    onSelect(lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center justify-between w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span>{selectedOption}</span>
          <IoIosArrowDropupCircle className={`ml-1 w-4 h-6 ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-bottom-right absolute right-0 bottom-full mb-1 w-32 h-36 overflow-y-auto rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languageOptions.map((lang) => (
              <div
                key={lang}
                onClick={() => handleOptionSelect(lang)}
                className="block px-3 py-2 text-sm text-white hover:bg-gray-600 cursor-pointer"
                role="menuitem"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedLang;
