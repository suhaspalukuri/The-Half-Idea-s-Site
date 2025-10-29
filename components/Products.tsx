
import React from 'react';

const products = [
  { id: 1, name: 'Creative Suite Pro', url: '#' },
  { id: 2, name: 'Quantum UI Kit', url: '#' },
  { id: 3, name: 'Nexus Design System', url: '#' },
  { id: 4, name: 'Aether Icon Set', url: '#' },
  { id: 5, name: 'Vortex Motion Graphics Pack', url: '#' },
];

const Products: React.FC = () => {
  return (
    <div className="text-left">
      <div className="space-y-4">
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <div className="grid grid-cols-12 gap-4 py-2 items-center">
              <div className="col-span-1 text-gray-400">{index + 1}.</div>
              <div className="col-span-7 sm:col-span-8 font-medium">{product.name}</div>
              <div className="col-span-4 sm:col-span-3 text-right">
                <a href={product.url} className="underline hover:text-gray-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  View Product
                </a>
              </div>
            </div>
            {index < products.length - 1 && <hr className="border-gray-700" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;