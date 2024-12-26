import React from 'react';
import { User, FileText, Truck, Clock } from 'lucide-react';

export default function Account() {
  return (
    <div className="flex-grow bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mon Compte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <User className="h-5 w-5 mr-2" />
                Informations de l'entreprise
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Entreprise:</strong> F.S.C SARL</p>
                <p><strong>SIRET:</strong> 123 456 789 00001</p>
                <p><strong>Email:</strong> contact@factory-sale-company.com</p>
                <button className="mt-2 text-yellow-600 hover:text-yellow-700">
                  Modifier mes informations
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Mes devis
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <div className="space-y-2">
                  <p>Devis #123 - En attente</p>
                  <p>Devis #122 - Accepté</p>
                  <p>Devis #121 - Refusé</p>
                </div>
                <button className="mt-2 text-yellow-600 hover:text-yellow-700">
                  Voir tous mes devis
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Mes locations en cours
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <div className="space-y-2">
                  <p>Pelle mécanique - Jusqu'au 15/04/2024</p>
                  <p>Chariot élévateur - Jusqu'au 20/04/2024</p>
                </div>
                <button className="mt-2 text-yellow-600 hover:text-yellow-700">
                  Gérer mes locations
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Historique
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <div className="space-y-2">
                  <p>Location terminée - Bétonnière (01/03/2024)</p>
                  <p>Achat - Outillage (15/02/2024)</p>
                </div>
                <button className="mt-2 text-yellow-600 hover:text-yellow-700">
                  Voir tout l'historique
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}