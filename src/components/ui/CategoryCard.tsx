import React from 'react';
import { 
  ShoppingBag, 
  Shirt, 
  Wrench, 
  Milk, 
  PenTool, 
  Cake,
  Leaf,
  Utensils 
} from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive = false, onClick }) => {
  const { name, icon, color } = category;
  
  const getIcon = () => {
    switch (icon) {
      case 'ShoppingBagIcon':
        return <ShoppingBag size={24} />;
      case 'ShirtIcon':
        return <Shirt size={24} />;
      case 'WrenchIcon':
        return <Wrench size={24} />;
      case 'MilkIcon':
        return <Milk size={24} />;
      case 'PenToolIcon':
        return <PenTool size={24} />;
      case 'CakeIcon':
        return <Cake size={24} />;
      case 'LeafIcon':
        return <Leaf size={24} />;
      case 'UtensilsIcon':
        return <Utensils size={24} />;
      default:
        return <ShoppingBag size={24} />;
    }
  };

  const baseClasses = "flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md";
  const activeClasses = isActive 
    ? `${color.replace('bg-', 'bg-')} text-white ring-4 ring-opacity-50 ${color.replace('bg-', 'ring-')}` 
    : `bg-white text-gray-700 border border-gray-200 hover:${color.replace('bg-', 'bg-')} hover:text-white`;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses}`}
      aria-pressed={isActive}
    >
      <div className="mb-2">
        {getIcon()}
      </div>
      <span className="font-medium text-sm">{name}</span>
    </button>
  );
};

export default CategoryCard;