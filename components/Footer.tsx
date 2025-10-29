
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black mt-12">
      <div className="container mx-auto py-4 px-4 sm:px-16 md:px-24 text-center text-white max-w-6xl">
        <p>&copy; {new Date().getFullYear()} The Half Idea. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
