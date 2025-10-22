import { useState, useRef, useEffect, useContext } from 'react';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language: currentLanguage, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const changeLanguage = (language) => {
    setLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          isOpen 
            ? 'bg-n-7/80 text-white' 
            : 'bg-n-8/50 text-n-2 hover:bg-n-7/50 hover:text-n-1'
        }`}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(71, 85, 105, 0.2)'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center">
          <Globe className="w-4 h-4 mr-2 text-primary-1" />
          <span className="font-medium">{currentLangData.name}</span>
        </div>
        <motion.span 
          className="ml-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden shadow-2xl z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              background: 'rgba(30, 41, 59, 0.9)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(71, 85, 105, 0.2)'
            }}
            role="listbox"
            aria-label="Select a language"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between ${
                  currentLanguage === language.code
                    ? 'bg-primary-1/10 text-primary-1 font-medium'
                    : 'text-n-2 hover:bg-n-7/50 hover:text-n-1'
                } transition-colors duration-200`}
                role="option"
                aria-selected={currentLanguage === language.code}
                whileHover={{ x: 4 }}
              >
                <span>{language.name}</span>
                {currentLanguage === language.code && (
                  <Check className="w-4 h-4 text-primary-1" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
