export interface Dish {
    name: string;
    description: string;
    price: number;
    currency: string;
    image?: string;
}
  
export interface Category {
    name: string;
    dishes?: Dish[];
}
  
export interface Menu {
    categories: Category[];
}
  