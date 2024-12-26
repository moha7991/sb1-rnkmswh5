import React from 'react';
import { useParams } from 'react-router-dom';

const products = {
  1: [ // Presse Vibrante
    {
      id: 1,
      name: 'Presse Vibrante PV-2000',
      image: 'https://images.unsplash.com/photo-1531758958275-95d04459d6b5?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Presse vibrante haute performance pour production intensive',
    },
    {
      id: 2,
      name: 'Presse Vibrante Compacte PV-1000',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution compacte pour espaces réduits',
    },
  ],
  2: [ // Ligne de Moulage Différé
    {
      id: 3,
      name: 'Ligne MD-3000',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Ligne complète de moulage différé automatisée',
    },
    {
      id: 4,
      name: 'Système de Démoulage Automatique',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution de démoulage robotisée',
    },
  ],
  3: [ // Ligne à Moulage Immédiat
    {
      id: 5,
      name: 'Ligne MI-2000',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Système complet de moulage immédiat',
    },
    {
      id: 6,
      name: 'Unité de Moulage Express',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution rapide et efficace',
    },
  ],
  4: [ // Rectifieuse de Blocs
    {
      id: 7,
      name: 'Rectifieuse RB-3000',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Haute précision pour blocs béton',
    },
    {
      id: 8,
      name: 'Rectifieuse Automatique RB-2000',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution automatisée de rectification',
    },
  ],
  5: [ // Centrale à Béton
    {
      id: 9,
      name: 'Centrale CB-5000',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Centrale à béton haute capacité',
    },
    {
      id: 10,
      name: 'Mini-Centrale CB-1000',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution compacte pour petites productions',
    },
  ],
  6: [ // Solution Robotique
    {
      id: 11,
      name: 'Robot de Palettisation RP-2000',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Automatisation complète de la palettisation',
    },
    {
      id: 12,
      name: 'Système de Manutention Robotisé',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      price: 'Sur devis',
      description: 'Solution robotique de manutention',
    },
  ],
};

const categoryNames = {
  1: 'Presse Vibrante',
  2: 'Ligne de Moulage Différé',
  3: 'Ligne à Moulage Immédiat',
  4: 'Rectifieuse de Blocs',
  5: 'Centrale à Béton',
  6: 'Solution Robotique',
};

export default function CategoryPage() {
  const { id } = useParams();
  const categoryId = Number(id);
  const categoryProducts = products[categoryId as keyof typeof products] || [];

  return (
    <div className="flex-grow bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {categoryNames[categoryId as keyof typeof categoryNames]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-2xl font-bold text-gray-900 mt-4">{product.price}</p>
                <button className="w-full mt-4 bg-yellow-500 text-gray-900 py-2 rounded hover:bg-yellow-400 transition-colors">
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}