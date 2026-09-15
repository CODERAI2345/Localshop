import React from 'react';
import { Phone } from 'lucide-react';
import { Shop } from '../../types';
import { categories } from '../../data/mockData';
import { getCategoryColor } from '../../utils/filterUtils';

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { name, category, contact } = shop;
  const categoryColor = getCategoryColor(category, categories);
  const categoryName = categories.find(cat => cat.id === category)?.name || 'Unknown';

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`${categoryColor} h-2 rounded-t-lg`} />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className={`text-sm px-2 py-1 rounded-full ${categoryColor} text-white`}>
            {categoryName}
          </span>
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-1" />
            <span className="text-sm">{contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;