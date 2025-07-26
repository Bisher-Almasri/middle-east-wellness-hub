
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Languages, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [educationMenuOpen, setEducationMenuOpen] = useState(false);
  const [physicianMenuOpen, setPhysicianMenuOpen] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const toggleEducationMenu = () => {
    setEducationMenuOpen(!educationMenuOpen);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ku', name: 'کوردی', flag: '' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="bg-healthDarkBlue text-white relative z-50 w-full">
      <div className="w-full max-w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src="/lovable-uploads/c221afaa-ecb5-4dda-9bc5-99fb5191312e.png" alt="SHAMS Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <div className="text-xl font-bold">
                  {language === 'ar' ? "شمس" : "SHAMS"}
                </div>
                <div className="text-xs text-healthGold opacity-90">
                  Supporting Health & Advocacy for Middle Eastern Societies
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8 mx-8">
            <Link to="/" className="hover:text-healthTeal transition-colors font-medium text-sm">
              {t("header.home")}
            </Link>
            <Link to="/about" className="hover:text-healthTeal transition-colors font-medium text-sm">
              {t("header.aboutUs")}
            </Link>
            <Link to="/services" className="hover:text-healthTeal transition-colors font-medium text-sm">
              {t("header.forCommunity")}
            </Link>
            <Link to="/resources" className="hover:text-healthTeal transition-colors font-medium text-sm">
              {t("header.forClinicians")}
            </Link>
            
            {/* Education Dropdown */}
            <div className="relative">
              <button
                onClick={toggleEducationMenu}
                className="flex items-center space-x-1 hover:text-healthTeal transition-colors font-medium text-sm"
              >
                <span>Education</span>
                <ChevronDown size={14} />
              </button>
              
              {educationMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                  <Link
                    to="/diseases"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setEducationMenuOpen(false)}
                  >
                    {t("header.diseases")}
                  </Link>
                  <Link
                    to="/webinars"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setEducationMenuOpen(false)}
                  >
                    Webinars
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="hover:text-healthTeal transition-colors font-medium text-sm">
              Contact
            </Link>
            <Link to="/support-us" className="hover:text-healthTeal transition-colors font-medium text-sm">
              Support Us
            </Link>
            
            {/* Physician Directory Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPhysicianMenuOpen(!physicianMenuOpen)}
                className="flex items-center space-x-1 hover:text-healthTeal transition-colors font-medium text-sm"
              >
                <span>Physician Directory</span>
                <ChevronDown size={14} />
              </button>
              
              {physicianMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                  <Link
                    to="/physician-directory"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setPhysicianMenuOpen(false)}
                  >
                    Find Physician
                  </Link>
                  <Link
                    to="/family-physician"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setPhysicianMenuOpen(false)}
                  >
                    Family Physician
                  </Link>
                </div>
              )}
            </div>
          </nav>
          
          {/* Language Selector - Right Side */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-healthTeal transition-colors"
                aria-label="Select language"
              >
                <Languages size={16} />
                <span>{currentLanguage?.flag}</span>
                <ChevronDown size={14} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-1 z-50 border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                        language === lang.code ? 'bg-healthTeal text-white' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Language & Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-healthTeal transition-colors"
                aria-label="Select language"
              >
                <Languages size={14} />
                <span>{currentLanguage?.flag}</span>
                <ChevronDown size={12} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 z-50 border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-100 flex items-center space-x-2 ${
                        language === lang.code ? 'bg-healthTeal text-white' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button className="text-white" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 space-y-2">
            <Link to="/" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              {t("header.home")}
            </Link>
            <Link to="/about" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              {t("header.aboutUs")}
            </Link>
            <Link to="/services" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              {t("header.forCommunity")}
            </Link>
            <Link to="/resources" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              {t("header.forClinicians")}
            </Link>
            <div className="py-2">
              <span className="text-healthTeal font-medium text-sm">Education</span>
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/diseases" className="block py-1 hover:text-healthTeal transition-colors">
                  {t("header.diseases")}
                </Link>
                <Link to="/webinars" className="block py-1 hover:text-healthTeal transition-colors">
                  Webinars
                </Link>
              </div>
            </div>
            <Link to="/contact" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              Contact
            </Link>
            <Link to="/support-us" className="block py-2 hover:text-healthTeal transition-colors font-medium">
              Support Us
            </Link>
            <div className="py-2">
              <span className="text-healthTeal font-medium text-sm">Physician Directory</span>
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/physician-directory" className="block py-1 hover:text-healthTeal transition-colors">
                  Find Physician
                </Link>
                <Link to="/family-physician" className="block py-1 hover:text-healthTeal transition-colors">
                  Family Physician
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
