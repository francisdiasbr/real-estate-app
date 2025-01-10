export interface Property {
  id: string;
  dados: {
    id: string;
    title: string;
    description: string;
    business_type: 'sale' | 'rent' | 'sale_rent';
    type: string;
    prices: {
      rent_price?: number;
      sale_price?: number;
      condo_fee?: number;
      property_tax?: number;
    };
    location: {
      neighborhood: string;
      city: string;
      state: string;
    };
    features: {
      bedrooms: number;
      bathrooms: number;
      area: number;
      parking_spots: number;
      suites: number;
    };
    amenities: string[];
  };
  anuncio: string;
}

export interface PropertyState {
  currentProperty: Property | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
} 