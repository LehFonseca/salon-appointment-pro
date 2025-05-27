export type UserRole = 'client' | 'business';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Added password field
  role: UserRole;
  phone?: string;
  cpf?: string;
  profileImage?: string;
  createdAt: string; // Changed from Date to string for localStorage compatibility
  updatedAt?: string; // Added updatedAt field as string
}

export interface Business extends User {
  businessName: string;
  cnpj: string;
  address: Address;
  category: BusinessCategory;
  description?: string;
  photos: string[];
  services: Service[];
  employees?: Employee[];
  rating?: number;
  reviewCount?: number;
}

export type BusinessCategory = 
  | 'hair_salon'
  | 'barbershop'
  | 'nail_salon'
  | 'spa'
  | 'esthetic_clinic'
  | 'makeup_studio'
  | 'other';

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  duration: number; // in minutes
  category: ServiceCategory;
  imageUrl?: string;
}

export type ServiceCategory = 
  | 'haircut'
  | 'hair_coloring'
  | 'hair_treatment'
  | 'beard'
  | 'facial'
  | 'nails'
  | 'makeup'
  | 'massage'
  | 'other';

export interface Employee {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  services: string[]; // service ids
}

export interface Appointment {
  id: string;
  businessId: string;
  userId: string;
  serviceId: string;
  employeeId?: string;
  date: Date;
  status: AppointmentStatus;
  note?: string;
}

export type AppointmentStatus = 
  | 'scheduled'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  appointmentId: string;
  rating: number; // 1-5
  comment?: string;
  photos?: string[];
  serviceIds: string[];
  createdAt: Date;
}
