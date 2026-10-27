export interface Product {
  id: string | number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  images?: string[];
}

export interface CategoriyItem {
  id: string;
  title: string;
  image: string;
  quantity: number;
}
