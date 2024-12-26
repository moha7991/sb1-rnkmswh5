import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@factory-sale-company.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Rue du Commerce, Paris</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Vente d'équipement</a></li>
              <li><a href="#" className="hover:text-yellow-500">Location</a></li>
              <li><a href="#" className="hover:text-yellow-500">Maintenance</a></li>
              <li><a href="#" className="hover:text-yellow-500">Formation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li>Lundi - Vendredi: 8h - 18h</li>
              <li>Samedi: 9h - 12h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 F.S.C Factory Sale Company. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}