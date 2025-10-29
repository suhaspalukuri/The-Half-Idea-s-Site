
import React from 'react';

// Replace the placeholder image URLs below with your own custom links.
const images = [
  { id: 1, src: '/path/to/your/image1.jpg', alt: 'Custom image 1' },
  { id: 2, src: '/path/to/your/image2.jpg', alt: 'Custom image 2' },
  { id: 3, src: '/path/to/your/image3.jpg', alt: 'Custom image 3' },
  { id: 4, src: '/path/to/your/image4.jpg', alt: 'Custom image 4' },
  { id: 5, src: '/path/to/your/image5.jpg', alt: 'Custom image 5' },
  { id: 6, src: '/path/to/your/image6.jpg', alt: 'Custom image 6' },
  { id: 7, src: '/path/to/your/image7.jpg', alt: 'Custom image 7' },
  { id: 8, src: '/path/to/your/image8.jpg', alt: 'Custom image 8' },
  { id: 9, src: '/path/to/your/image9.jpg', alt: 'Custom image 9' },
  { id: 10, src: '/path/to/your/image10.jpg', alt: 'Custom image 10' },
  { id: 11, src: '/path/to/your/image11.jpg', alt: 'Custom image 11' },
  { id: 12, src: '/path/to/your/image12.jpg', alt: 'Custom image 12' },
  { id: 13, src: '/path/to/your/image13.jpg', alt: 'Custom image 13' },
  { id: 14, src: '/path/to/your/image14.jpg', alt: 'Custom image 14' },
  { id: 15, src: '/path/to/your/image15.jpg', alt: 'Custom image 15' },
  { id: 16, src: '/path/to/your/image16.jpg', alt: 'Custom image 16' },
  { id: 17, src: '/path/to/your/image17.jpg', alt: 'Custom image 17' },
  { id: 18, src: '/path/to/your/image18.jpg', alt: 'Custom image 18' },
  { id: 19, src: '/path/to/your/image19.jpg', alt: 'Custom image 19' },
  { id: 20, src: '/path/to/your/image20.jpg', alt: 'Custom image 20' },
  { id: 21, src: '/path/to/your/image21.jpg', alt: 'Custom image 21' },
  { id: 22, src: '/path/to/your/image22.jpg', alt: 'Custom image 22' },
  { id: 23, src: '/path/to/your/image23.jpg', alt: 'Custom image 23' },
  { id: 24, src: '/path/to/your/image24.jpg', alt: 'Custom image 24' },
];

const ImageGrid: React.FC = () => {
  return (
    // A uniform grid is used. A gap has been added for spacing.
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {images.map((image, index) => (
        <div 
          key={image.id} 
          // The container is used to enforce the 4:3 aspect ratio.
          className="relative overflow-hidden"
          style={{ 
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`, 
              opacity: 0,
              // The "padding-top" hack enforces a 4:3 aspect ratio (3 / 4 * 100 = 75%)
              paddingTop: '75%',
            }}
        >
          <img
            src={image.src}
            alt={image.alt}
            // The image is absolutely positioned to fill the container.
            className="w-full h-full object-cover absolute top-0 left-0"
            loading="lazy"
          />
        </div>
      ))}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGrid;
