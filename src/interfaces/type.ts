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

export interface PaypalButtonProps {
  totalPrice: number 
}

export interface PayPalScriptQueryParameters {
  buyerCountry?: string;
  clientId: string;
  commit?: boolean;
  components?: string[] | string;
  currency?: string;
  debug?: boolean | string;
  // loadScript() supports an array and will convert it
  // to the correct disable-funding and enable-funding string values
  disableFunding?: string[] | string;
  enableFunding?: string[] | string;
  integrationDate?: string;
  intent?: string;
  locale?: string;
  // loadScript() supports an array for merchantId, even though
  // merchant-id technically may not contain multiple values.
  // For an array with a length of > 1 it automatically sets
  // merchantId to "*" and moves the actual values to dataMerchantId
  merchantId?: string[] | string;
  vault?: boolean | string;
}