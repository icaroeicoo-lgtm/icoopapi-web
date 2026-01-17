
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://image2url.com/r2/default/images/1768605025803-96d9df9b-471c-4d24-b711-fc4f8e7c61be.png')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
          Seek Your Summit
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Pushing the limits of innovation so you can push yours. Explore our latest collection.
        </p>
        <button className="bg-white text-black font-bold uppercase tracking-wider py-3 px-8 hover:bg-gray-200 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
