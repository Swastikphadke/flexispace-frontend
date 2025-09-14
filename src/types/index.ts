export interface Space {
  id: string;
  title: string;
  description: string;
  images: string[];
  virtualTour?: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    city: string;
    zip: string;
  };
  owner: {
    id: string;
    name: string;
    avatar?: string;
    verified: boolean;
    rating: number;
  };
  amenities: string[];
  capacity: number;
  area: number; // in square feet
  spaceType: 'parking' | 'hall' | 'playground' | 'office' | 'outdoor' | 'other';
  pricing: {
    basePrice: number; // per hour
    currency: 'USD';
    dynamicPricing: boolean;
    minimumHours: number;
    maximumHours: number;
  };
  availability: {
    timeSlots: TimeSlot[];
    bookingBuffer: number; // hours between bookings
  };
  rules: string[];
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  price: number;
  demandLevel: 'low' | 'medium' | 'high';
}

export interface Booking {
  id: string;
  spaceId: string;
  userId: string;
  timeSlots: TimeSlot[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  services: BookedService[];
  paymentMethod: string;
  smartContractAddress?: string;
  accessCode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookedService {
  id: string;
  name: string;
  provider: string;
  category: 'cleaning' | 'security' | 'equipment' | 'catering';
  price: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phoneNumber?: string;
  loyaltyPoints: number;
  memberSince: string;
  bookingHistory: Booking[];
  favoriteSpaces: string[];
  isAssetOwner: boolean;
  ownedSpaces?: Space[];
}

export interface Service {
  id: string;
  name: string;
  provider: {
    id: string;
    name: string;
    rating: number;
    verified: boolean;
  };
  category: 'cleaning' | 'security' | 'equipment' | 'catering';
  description: string;
  price: number;
  priceUnit: 'hour' | 'fixed' | 'per_person';
  images: string[];
  availability: string[];
  rating: number;
  reviewCount: number;
}

export interface SearchFilters {
  location?: string;
  spaceType?: string[];
  capacity?: {
    min: number;
    max: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  amenities?: string[];
  date?: string;
  startTime?: string;
  endTime?: string;
  radius?: number; // in miles
}

export interface AISearchQuery {
  query: string;
  context?: {
    eventType?: string;
    guestCount?: number;
    duration?: number;
    preferredLocation?: string;
  };
}