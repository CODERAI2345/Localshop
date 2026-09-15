import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import StreetCard from '../components/ui/StreetCard';
import { streets, shops } from '../data/mockData';
import { getShopsByStreet } from '../utils/filterUtils';

const StreetsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleStreetClick = (streetId: string) => {
    navigate(`/streets/${streetId}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">Streets Directory</h1>
          <p className="text-indigo-100 text-center mt-2">
            Browse shops by street location to find businesses in your area
          </p>
        </div>
      </section>
      
      {/* Streets Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {streets.map(street => (
            <StreetCard 
              key={street.id} 
              street={street} 
              onClick={() => handleStreetClick(street.id)} 
            />
          ))}
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Town Map</h2>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-indigo-50">
              {/* Map placeholder - in a real app, this would be an actual map */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-lg p-8">
                  <MapPin size={64} className="text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Town Map</h3>
                  <p className="text-gray-600 mb-6">
                    Interactive town map showing all streets and shop locations would be displayed here.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {streets.slice(0, 4).map(street => (
                      <button
                        key={street.id}
                        onClick={() => handleStreetClick(street.id)}
                        className="px-3 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-md transition duration-300 text-sm"
                      >
                        {street.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Streets */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Streets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Street */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="text-indigo-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Main Street</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  The busiest street in town with a diverse range of shops, restaurants, and services.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600 font-medium">
                    {getShopsByStreet(shops, 'main-street').length} shops
                  </span>
                  <button 
                    onClick={() => handleStreetClick('main-street')}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition duration-300"
                  >
                    View Shops
                  </button>
                </div>
              </div>
            </div>
            
            {/* Oak Avenue */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="text-indigo-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Oak Avenue</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A charming street with boutique shops, cafes, and specialty stores.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600 font-medium">
                    {getShopsByStreet(shops, 'oak-avenue').length} shops
                  </span>
                  <button 
                    onClick={() => handleStreetClick('oak-avenue')}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition duration-300"
                  >
                    View Shops
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreetsPage;