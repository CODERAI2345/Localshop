import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/ui/CategoryCard';
import { categories, shops } from '../data/mockData';
import { getShopsByCategory } from '../utils/filterUtils';

const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categories/${categoryId}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">Shop Categories</h1>
          <p className="text-indigo-100 text-center mt-2">
            Browse shops by category to find exactly what you're looking for
          </p>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => {
            const categoryShops = getShopsByCategory(shops, category.id);
            
            return (
              <div key={category.id} className="flex flex-col">
                <CategoryCard 
                  category={category} 
                  onClick={() => handleCategoryClick(category.id)} 
                />
                <div className="mt-2 text-center">
                  <span className="text-sm text-gray-600">{categoryShops.length} shops</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Featured Category Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Popular Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grocery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-emerald-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Grocery Stores</h3>
                <p className="text-gray-600 mb-6">
                  Find fresh produce, organic foods, and everyday essentials at these local grocery stores.
                </p>
                <button 
                  onClick={() => handleCategoryClick('grocery')}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition duration-300"
                >
                  Browse Grocery Stores
                </button>
              </div>
            </div>
            
            {/* Electronics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Electronics Stores</h3>
                <p className="text-gray-600 mb-6">
                  Discover the latest gadgets, devices, and tech accessories at these electronics shops.
                </p>
                <button 
                  onClick={() => handleCategoryClick('electronics')}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition duration-300"
                >
                  Browse Electronics Stores
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;