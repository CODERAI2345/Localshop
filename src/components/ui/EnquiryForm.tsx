import React, { useState } from 'react';
import { categories, streets } from '../../data/mockData';
import { EnquiryFormData } from '../../types';

interface EnquiryFormProps {
  onSubmit: (data: EnquiryFormData) => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    shopName: '',
    category: '',
    street: '',
    address: '',
    contact: '',
    submitterName: '',
    submitterEmail: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.shopName.trim()) {
      newErrors.shopName = 'Shop name is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.street) {
      newErrors.street = 'Street is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.submitterName.trim()) {
      newErrors.submitterName = 'Your name is required';
    }
    
    if (!formData.submitterEmail.trim()) {
      newErrors.submitterEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.submitterEmail)) {
      newErrors.submitterEmail = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      
      // Reset form after successful submission
      setFormData({
        shopName: '',
        category: '',
        street: '',
        address: '',
        contact: '',
        submitterName: '',
        submitterEmail: '',
        additionalInfo: ''
      });
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Suggest a Shop</h2>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your submission! We'll review your shop suggestion shortly.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">
              Shop Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="shopName"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.shopName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            {errors.shopName && <p className="text-red-500 text-xs">{errors.shopName}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-xs">{errors.category}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">
              Street <span className="text-red-500">*</span>
            </label>
            <select
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.street ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
            >
              <option value="">Select a street</option>
              {streets.map(street => (
                <option key={street.id} value={street.id}>
                  {street.name}
                </option>
              ))}
            </select>
            {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="e.g., 123 Main Street"
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g., (555) 123-4567"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="submitterName"
              name="submitterName"
              value={formData.submitterName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.submitterName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            {errors.submitterName && <p className="text-red-500 text-xs">{errors.submitterName}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="submitterEmail"
              name="submitterEmail"
              value={formData.submitterEmail}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.submitterEmail ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            {errors.submitterEmail && <p className="text-red-500 text-xs">{errors.submitterEmail}</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Any additional details about the shop..."
            ></textarea>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Shop Suggestion'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;