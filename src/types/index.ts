export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'service_consumer' | 'vehicle_owner' | 'material_supplier';
  isAuthenticated: boolean;
  address?: string;
  district?: string;
  businessName?: string;
  businessType?: string;
  experience?: string;
  description?: string;
  bio?: string;
  profileImage?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerHour: number;
  pricePerDay: number;
  image: string;
  available: boolean;
  specifications: string[];
  supplier: {
    name: string;
    location: string;
    district: string;
    phone: string;
    rating: number;
    totalJobs: number;
  };
}

export interface MaterialItem {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerUnit: number;
  unit: string;
  image: string;
  available: boolean;
  supplier: {
    name: string;
    location: string;
    district: string;
    phone: string;
    rating: number;
    totalOrders: number;
  };
}

export interface ServiceRequest {
  id: string;
  userId: string;
  type: 'material' | 'vehicle';
  itemId: string;
  quantity?: number;
  duration?: number;
  durationType?: 'hours' | 'days';
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  requestDate: string;
  requiredDate: string;
  address: string;
  notes?: string;
}