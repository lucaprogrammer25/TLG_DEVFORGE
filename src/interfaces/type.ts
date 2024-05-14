export interface ProductJson {
    category: string;
    description: string;
    gender: string;
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: string;
  }

  
export type Props = {
    id:number;
    category?: string;
    title: string;
    description:string;
    image:string;
    price: number;
    alternative:string;
    addToCart?: any;
    goToPDP?:any;
  }
  
  export interface Product {
    data: [] | null;
    error: string |null;
    loading?: boolean;
  }


  
  export interface Contentful {
    data:any;
    error:string | null ;
    loading?: boolean;
   }

   export interface Cart {
    id: number;
    title: string;
    price: number;
    cartQuantity: number;
    quantity:number
}

