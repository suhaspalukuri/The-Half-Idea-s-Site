
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#/about':
        return <About />;
      case '#/products':
        return <Products />;
      default:
        return <ImageGrid />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Navbar currentRoute={route} />
      <main className="flex-grow container mx-auto px-4 sm:px-16 md:px-24 py-8 max-w-6xl">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
