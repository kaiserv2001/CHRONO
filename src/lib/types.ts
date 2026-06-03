export interface WatchSpec {
  movement: string;
  caseDiameter: string;
  caseThickness: string;
  caseMaterial: string;
  dialColor: string;
  crystal: string;
  waterResistance: string;
  powerReserve: string;
  bracelet: string;
  functions: string[];
}

export interface Watch {
  id: string;
  slug: string;
  name: string;
  brand: string;
  collection: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  shortDescription: string;
  specs: WatchSpec;
  tags: string[];
  featured: boolean;
  new: boolean;
}

export type WatchCollection = "heritage" | "sport" | "dress" | "limited";
