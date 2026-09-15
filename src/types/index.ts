export interface Shop {
  id: string;
  name: string;
  category: string;
  street: string;
  address: string;
  contact: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Street {
  id: string;
  name: string;
  shops: number;
}

export interface EnquiryFormData {
  shopName: string;
  category: string;
  street: string;
  address: string;
  contact: string;
  submitterName: string;
  submitterEmail: string;
  additionalInfo: string;
}