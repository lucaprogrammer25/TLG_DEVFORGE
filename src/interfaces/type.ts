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

export interface FormData {
  email: string;
  name: string;
  lastName: string;
  address: string;
  postalCode: string;
  country: string;
  province: string;
  phoneNumber: string;
  phonePrefix?:number;
  
}

export interface FormDataBilling {
  billingAddress: string;
  billingPostalCode: string;
  billingCountry: string;
  billingProvince: string;
  billingPhoneNumber: string;
  billingPrefix: string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
export type Props = {
  id: number;
  category?: string;
  title: string;
  description: string;
  image: string;
  price: number;
  alternative: string;
  addToCart?: any;
  goToPDP?: any;
};

export interface Product {
  data: [] | null;
  error: string | null;
  loading?: boolean;
}

export interface Contentful {
  data: any;
  error: string | null;
  loading?: boolean;
}

export interface Cart {
  id: number;
  price: number;
  image:string;
  name:string;
  cartQuantity: number;
  quantity: number;
}

export interface SidebarCartType {
  label: string;
  closeSideCart: any;
}
