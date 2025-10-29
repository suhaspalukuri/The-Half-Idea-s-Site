
import React, { useState } from 'react';

const NavItem: React.FC<{ href: string; children: React.ReactNode; isActive: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
  >
    {children}
  </a>
);

const Navbar: React.FC<{ currentRoute: string }> = ({ currentRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
  };

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-16 md:px-24 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#/" onClick={(e) => handleNavigate(e, '')} className="text-2xl font-bold text-white tracking-tighter">
              The Half Idea
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem href="#/about" isActive={currentRoute === '#/about'} onClick={(e) => handleNavigate(e, 'about')}>About</NavItem>
              <NavItem href="#/products" isActive={currentRoute === '#/products'} onClick={(e) => handleNavigate(e, 'products')}>Products</NavItem>
              <NavItem href="#/" isActive={false}>Community</NavItem>
              <NavItem href="#/" isActive={false}>Contact</NavItem>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#/about" onClick={(e) => { handleNavigate(e, 'about'); handleMobileLinkClick(); }} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${currentRoute === '#/about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</a>
            <a href="#/products" onClick={(e) => { handleNavigate(e, 'products'); handleMobileLinkClick(); }} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${currentRoute === '#/products' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Products</a>
            <a href="#/" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors duration-200">Community</a>
            <a href="#/" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
