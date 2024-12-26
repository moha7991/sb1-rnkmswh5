import React, { useState } from 'react';
import { User, LogOut, Settings, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-900 hover:text-gray-700 focus:outline-none"
      >
        <User className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {isLoggedIn ? (
            <>
              <Link
                to="/mon-compte"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="h-4 w-4 mr-2" />
                Mon Compte
              </Link>
              <Link
                to="/parametres"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link
                to="/connexion"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="h-4 w-4 mr-2" />
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Inscription
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}