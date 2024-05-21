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
  phoneNumber?: string;
  phonePrefix?:any;
  
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
  shipment: number;
  cartQuantity: number;
  quantity: number;
  size:string
}

export interface CartState {
  cartItems: Cart[];
  quantity: number;
  cartTotalQuantity: number;
  cartTotalPrice: number;
  shipment: number;
  loading: boolean;
  error: string | null;
  size:string
}

export interface SidebarCartType {
  closeSideCart: any;
}

export interface PropsForms {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  countryOptions: string[];
  prefixOptions: any,
  billing?:string;
  selectedCountry?:any,
  handleCountryChange?:any;
}

export interface LanguageSelectProps {
  handleLanguageChange: (locale: string) => void;
  handleCloseMenu: () => void; 
}
export interface NavbarProps {
  changeLocale: (newLocale: string) => void;
}


export interface PromotionProps {
  contents: string[];
}