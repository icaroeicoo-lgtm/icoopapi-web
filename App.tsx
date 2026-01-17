
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black font-brand-sans">
      <Header />
      <main>
        <Hero />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
