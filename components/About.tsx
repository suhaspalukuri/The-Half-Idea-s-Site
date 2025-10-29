import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <div className="text-left text-justify max-w-5xl">
        <div className="space-y-4 text-base sm:text-lg">
          <p>
            Welcome to The Half Idea, a creative space dedicated to exploring the intersection of art, design, and technology. We believe that the most innovative ideas often start as fragments—half-formed thoughts that, with care and curiosity, can grow into something extraordinary.
          </p>
          <p>
            Our gallery is a curated collection of visual experiments, a testament to the beauty of the unfinished and the potential of the in-between. Each piece represents a moment in a journey of discovery, capturing a unique perspective and a fleeting inspiration.
          </p>
          <p>
            We invite you to browse, get inspired, and perhaps even find the missing half to your own great idea.
          </p>
        </div>

        <div className="mt-12">
          
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-base sm:text-lg">
            <a href="#" className="underline">Twitter</a>
            <a href="#" className="underline">Instagram</a>
            <a href="#" className="underline">LinkedIn</a>
            <a href="#" className="underline">Behance</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;