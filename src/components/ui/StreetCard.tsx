import React from 'react';
import { MapPin } from 'lucide-react';
import { Street } from '../../types';

interface StreetCardProps {
  street: Street;
  isActive?: boolean;
  onClick: () => void;
}

const StreetCard: React.FC<StreetCardProps> = ({ street, isActive = false, onClick }) => {
  const { name, shops } = street;
  
  const baseClasses = "flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:shadow-md";
  const activeClasses = isActive 
    ? "bg-indigo-600 text-white" 
    : "bg-white text-gray-700 border border-gray-200 hover:bg-indigo-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} w-full`}
      aria-pressed={isActive}
    >
      <div className="flex items-center">
        <MapPin size={18} className={isActive ? "text-white" : "text-indigo-500"} />
        <span className="ml-2 font-medium">{name}</span>
      </div>
      <span className={`text-sm py-1 px-2 rounded-full ${isActive ? "bg-indigo-800" : "bg-indigo-100 text-indigo-800"}`}>
        {shops} shops
      </span>
    </button>
  );
};

export default StreetCard;