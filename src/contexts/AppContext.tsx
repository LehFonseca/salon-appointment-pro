
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Business, Service, Appointment, Review } from '@/types';

interface AppContextType {
  // Users
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  getUserById: (id: string) => User | undefined;
  
  // Businesses
  businesses: Business[];
  addBusiness: (business: Business) => void;
  updateBusiness: (id: string, business: Partial<Business>) => void;
  deleteBusiness: (id: string) => void;
  getBusinessById: (id: string) => Business | undefined;
  
  // Services
  services: Service[];
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  getServiceById: (id: string) => Service | undefined;
  
  // Appointments
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  getAppointmentById: (id: string) => Appointment | undefined;
  
  // Reviews
  reviews: Review[];
  addReview: (review: Review) => void;
  updateReview: (id: string, review: Partial<Review>) => void;
  deleteReview: (id: string) => void;
  getReviewById: (id: string) => Review | undefined;
  
  // Current user
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('glampro_users');
    const savedBusinesses = localStorage.getItem('glampro_businesses');
    const savedServices = localStorage.getItem('glampro_services');
    const savedAppointments = localStorage.getItem('glampro_appointments');
    const savedReviews = localStorage.getItem('glampro_reviews');
    const savedCurrentUser = localStorage.getItem('glampro_current_user');

    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedBusinesses) setBusinesses(JSON.parse(savedBusinesses));
    if (savedServices) setServices(JSON.parse(savedServices));
    if (savedAppointments) setAppointments(JSON.parse(savedAppointments));
    if (savedReviews) setReviews(JSON.parse(savedReviews));
    if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('glampro_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('glampro_businesses', JSON.stringify(businesses));
  }, [businesses]);

  useEffect(() => {
    localStorage.setItem('glampro_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('glampro_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('glampro_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('glampro_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('glampro_current_user');
    }
  }, [currentUser]);

  // User CRUD operations
  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const updateUser = (id: string, userUpdate: Partial<User>) => {
    setUsers(prev => prev.map(user => user.id === id ? { ...user, ...userUpdate } : user));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const getUserById = (id: string) => {
    return users.find(user => user.id === id);
  };

  // Business CRUD operations
  const addBusiness = (business: Business) => {
    setBusinesses(prev => [...prev, business]);
  };

  const updateBusiness = (id: string, businessUpdate: Partial<Business>) => {
    setBusinesses(prev => prev.map(business => business.id === id ? { ...business, ...businessUpdate } : business));
  };

  const deleteBusiness = (id: string) => {
    setBusinesses(prev => prev.filter(business => business.id !== id));
  };

  const getBusinessById = (id: string) => {
    return businesses.find(business => business.id === id);
  };

  // Service CRUD operations
  const addService = (service: Service) => {
    setServices(prev => [...prev, service]);
  };

  const updateService = (id: string, serviceUpdate: Partial<Service>) => {
    setServices(prev => prev.map(service => service.id === id ? { ...service, ...serviceUpdate } : service));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const getServiceById = (id: string) => {
    return services.find(service => service.id === id);
  };

  // Appointment CRUD operations
  const addAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  const updateAppointment = (id: string, appointmentUpdate: Partial<Appointment>) => {
    setAppointments(prev => prev.map(appointment => appointment.id === id ? { ...appointment, ...appointmentUpdate } : appointment));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(appointment => appointment.id !== id));
  };

  const getAppointmentById = (id: string) => {
    return appointments.find(appointment => appointment.id === id);
  };

  // Review CRUD operations
  const addReview = (review: Review) => {
    setReviews(prev => [...prev, review]);
  };

  const updateReview = (id: string, reviewUpdate: Partial<Review>) => {
    setReviews(prev => prev.map(review => review.id === id ? { ...review, ...reviewUpdate } : review));
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(review => review.id !== id));
  };

  const getReviewById = (id: string) => {
    return reviews.find(review => review.id === id);
  };

  const value: AppContextType = {
    users,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    
    businesses,
    addBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinessById,
    
    services,
    addService,
    updateService,
    deleteService,
    getServiceById,
    
    appointments,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentById,
    
    reviews,
    addReview,
    updateReview,
    deleteReview,
    getReviewById,
    
    currentUser,
    setCurrentUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
