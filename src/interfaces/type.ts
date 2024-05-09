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
    id:number,
    category?: string;
    title: string;
    description:string;
    image:string;
    price: number;
    alternative:string;
  }
  
  export interface ContentfulProduct {
    data: [] | null;
    error: string |null;
    loading: boolean;
  }
  