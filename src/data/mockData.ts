import { Shop, Category, Street } from '../types';

export const categories: Category[] = [
  { 
    id: 'grocery', 
    name: 'Grocery', 
    icon: 'ShoppingBagIcon',
    color: 'bg-orange-500'
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    icon: 'LaptopIcon',
    color: 'bg-blue-500'
  },
  { 
    id: 'fancy', 
    name: 'Fancy Store', 
    icon: 'ShirtIcon',
    color: 'bg-pink-500'
  },
  { 
    id: 'bikerepair', 
    name: 'Bike Repair', 
    icon: 'WrenchIcon',
    color: 'bg-gray-700'
  },
  { 
    id: 'dairy', 
    name: 'Milk Dairy', 
    icon: 'MilkIcon',
    color: 'bg-cyan-500'
  },
  { 
    id: 'stationery', 
    name: 'Stationery', 
    icon: 'PenToolIcon',
    color: 'bg-violet-500'
  },
  { 
    id: 'bakery', 
    name: 'Bakery', 
    icon: 'CakeIcon',
    color: 'bg-yellow-600'
  },
  { 
    id: 'vegetables', 
    name: 'Vegetable Stores', 
    icon: 'LeafIcon',
    color: 'bg-green-600'
  },
  { 
    id: 'tiffin', 
    name: 'Tiffin Centre', 
    icon: 'UtensilsIcon',
    color: 'bg-red-600'
  }
];

export const shops: Shop[] = [
  // Existing grocery shops
  {
    id: 'vijetha',
    name: 'Vijetha',
    category: 'grocery',
    street: 'jayalakshmi-nagar',
    address: 'Jayalakshmi Nagar',
    contact: '9876543210'
  },
  {
    id: 'venkateswara',
    name: 'Venkateswara General Stores',
    category: 'grocery',
    street: 'mallareddy-nagar',
    address: 'Mallareddy Nagar',
    contact: '9876543211'
  },
  {
    id: 'karthik',
    name: 'Karthik Kirana Stores',
    category: 'grocery',
    street: 'icrisat-colony',
    address: 'ICRISAT Colony',
    contact: '9876543212'
  },
  {
    id: 'pavan',
    name: 'Pavan Quality Provisional Store',
    category: 'grocery',
    street: 'greenmeadows-colony',
    address: 'Greenmeadows Colony',
    contact: '9876543213'
  },
  {
    id: 'jinta',
    name: 'Sri Jinta Kirana and General Stores',
    category: 'grocery',
    street: 'raghavendra-colony',
    address: 'Raghavendra Colony',
    contact: '9876543214'
  },
  {
    id: 'lucky',
    name: 'Lucky Kirana and General Stores',
    category: 'grocery',
    street: 'sainagar-colony',
    address: 'Sainagar Colony',
    contact: '9876543215'
  },
  {
    id: 'mahalakshmi',
    name: 'Mahalakshmi Kirana Stores',
    category: 'grocery',
    street: 'jayalakshmi-nagar',
    address: 'Jayalakshmi Nagar',
    contact: '9876543216'
  },
  // Existing electronics shops
  {
    id: 'laasya',
    name: 'Laasya Mobiles',
    category: 'electronics',
    street: 'mallareddy-nagar',
    address: 'Mallareddy Nagar',
    contact: '9876543217'
  },
  {
    id: 'ramdev',
    name: 'Ramdev Electrical',
    category: 'electronics',
    street: 'icrisat-colony',
    address: 'ICRISAT Colony',
    contact: '9876543218'
  },
  {
    id: 'sv-mobiles',
    name: 'SV Mobiles',
    category: 'electronics',
    street: 'greenmeadows-colony',
    address: 'Greenmeadows Colony',
    contact: '9876543219'
  },
  {
    id: 'venkataraman',
    name: 'Sri Venkata Raman Electricals',
    category: 'electronics',
    street: 'raghavendra-colony',
    address: 'Raghavendra Colony',
    contact: '9876543220'
  },
  // New fancy stores
  {
    id: 'lakshmi-fancy',
    name: 'Lakshmi Fancy Store',
    category: 'fancy',
    street: 'sainagar-colony',
    address: 'Sainagar Colony',
    contact: '9876543221'
  },
  {
    id: 'srinivasa-fancy',
    name: 'Srinivasa Fancy Store',
    category: 'fancy',
    street: 'jayalakshmi-nagar',
    address: 'Jayalakshmi Nagar',
    contact: '9876543222'
  },
  // Bike repair shops
  {
    id: 'krishna-bikes',
    name: 'Krishna Bike Service',
    category: 'bikerepair',
    street: 'mallareddy-nagar',
    address: 'Mallareddy Nagar',
    contact: '9876543223'
  },
  {
    id: 'sai-bikes',
    name: 'Sai Bike Repairs',
    category: 'bikerepair',
    street: 'icrisat-colony',
    address: 'ICRISAT Colony',
    contact: '9876543224'
  },
  // Dairy shops
  {
    id: 'vijaya-dairy',
    name: 'Vijaya Dairy',
    category: 'dairy',
    street: 'greenmeadows-colony',
    address: 'Greenmeadows Colony',
    contact: '9876543225'
  },
  {
    id: 'heritage-dairy',
    name: 'Heritage Dairy',
    category: 'dairy',
    street: 'raghavendra-colony',
    address: 'Raghavendra Colony',
    contact: '9876543226'
  },
  // Stationery shops
  {
    id: 'student-corner',
    name: 'Student Corner',
    category: 'stationery',
    street: 'sainagar-colony',
    address: 'Sainagar Colony',
    contact: '9876543227'
  },
  {
    id: 'books-more',
    name: 'Books & More',
    category: 'stationery',
    street: 'jayalakshmi-nagar',
    address: 'Jayalakshmi Nagar',
    contact: '9876543228'
  },
  // Bakeries
  {
    id: 'sweet-tooth',
    name: 'Sweet Tooth Bakery',
    category: 'bakery',
    street: 'mallareddy-nagar',
    address: 'Mallareddy Nagar',
    contact: '9876543229'
  },
  {
    id: 'cake-house',
    name: 'Cake House',
    category: 'bakery',
    street: 'icrisat-colony',
    address: 'ICRISAT Colony',
    contact: '9876543230'
  },
  // Vegetable stores
  {
    id: 'fresh-veggies',
    name: 'Fresh Veggies',
    category: 'vegetables',
    street: 'greenmeadows-colony',
    address: 'Greenmeadows Colony',
    contact: '9876543231'
  },
  {
    id: 'green-mart',
    name: 'Green Mart',
    category: 'vegetables',
    street: 'raghavendra-colony',
    address: 'Raghavendra Colony',
    contact: '9876543232'
  },
  // Tiffin centres
  {
    id: 'annapurna',
    name: 'Annapurna Tiffins',
    category: 'tiffin',
    street: 'sainagar-colony',
    address: 'Sainagar Colony',
    contact: '9876543233'
  },
  {
    id: 'udupi-tiffins',
    name: 'Udupi Tiffins',
    category: 'tiffin',
    street: 'jayalakshmi-nagar',
    address: 'Jayalakshmi Nagar',
    contact: '9876543234'
  }
];

export const streets: Street[] = [
  { id: 'jayalakshmi-nagar', name: 'Jayalakshmi Nagar', shops: 15 },
  { id: 'mallareddy-nagar', name: 'Mallareddy Nagar', shops: 12 },
  { id: 'icrisat-colony', name: 'ICRISAT Colony', shops: 8 },
  { id: 'greenmeadows-colony', name: 'Greenmeadows Colony', shops: 10 },
  { id: 'raghavendra-colony', name: 'Raghavendra Colony', shops: 7 },
  { id: 'sainagar-colony', name: 'Sainagar Colony', shops: 9 }
];