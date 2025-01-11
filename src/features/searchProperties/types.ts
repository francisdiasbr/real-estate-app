export interface SearchResponse {
  results: SearchResult[];
  summary: string;
}

export interface SearchResult {
  anuncio: string;
  dados: PropertyData;
  id: string;
  score: number;
}

interface Location {
  city: string;
  neighborhood: string;
  state: string;
}

interface Features {
  area: number;
  bathrooms: number;
  bedrooms: number;
  parking_spots: number;
  suites: number;
}

interface Prices {
  condo_fee: number;
  property_tax: number;
  rent_price?: number;
  sale_price?: number;
}

export interface PropertyData {
  amenities: string[];
  business_type: string;
  description: string;
  features: Features;
  id: string;
  location: Location;
  prices: Prices;
  title: string;
  type: string;
}

export interface SearchResult {
  anuncio: string;
  dados: PropertyData;
  id: string;
  score: number;
}

export interface SearchResponse {
  results: SearchResult[];
}

export interface SearchState {
  results: SearchResult[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  summary: string;
}

export interface SearchParams {
  query: string;
  limit: number;
}
