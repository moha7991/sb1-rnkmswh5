import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Menu, ShoppingCart } from 'lucide-react';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <header className="bg-yellow-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <HardHat className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-bold text-gray-900">F.S.C</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-700">Accueil</Link>
            <Link to="/categorie/1" className="text-gray-900 hover:text-gray-700">Presse Vibrante</Link>
            <Link to="/categorie/2" className="text-gray-900 hover:text-gray-700">Moulage Différé</Link>
            <Link to="/categorie/3" className="text-gray-900 hover:text-gray-700">Moulage Immédiat</Link>
            <Link to="/categorie/4" className="text-gray-900 hover:text-gray-700">Rectifieuse</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <UserMenu />
            <button className="text-gray-900 hover:text-gray-700">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="md:hidden text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}