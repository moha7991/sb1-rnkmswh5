import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            F.S.C Factory Sale Company
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Des machines et équipements de qualité pour tous vos chantiers. 
            Vente et location de matériel professionnel.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
            Découvrir nos produits
          </button>
        </div>
      </div>
    </div>
  );
}