import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Presse Vibrante',
    image: 'https://images.unsplash.com/photo-1531758958275-95d04459d6b5?auto=format&fit=crop&q=80',
    description: 'Presses vibrantes haute performance',
  },
  {
    id: 2,
    name: 'Ligne de Moulage Différé',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'Solutions complètes de moulage différé',
  },
  {
    id: 3,
    name: 'Ligne à Moulage Immédiat',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    description: 'Systèmes de moulage immédiat innovants',
  },
  {
    id: 4,
    name: 'Rectifieuse de Blocs',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80',
    description: 'Machines de rectification de précision',
  },
  {
    id: 5,
    name: 'Centrale à Béton',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    description: 'Centrales à béton automatisées',
  },
  {
    id: 6,
    name: 'Solution Robotique',
    image: 'https://images.unsplash.com/photo-1581091226825-c6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'Automatisation robotique industrielle',
  }
];

export default function ProductGrid() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Solutions Industrielles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              to={`/categorie/${category.id}`} 
              key={category.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}