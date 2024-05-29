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
  phonePrefix?: any;
}

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
export type Props = {
  id: number;
  category?: string;
  title: string;
  description: string;
  image: string;
  price: number;
  alternative: string;
  seeMoreButton?: any;
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
  image: string;
  name: string;
  shipment: number;
  cartQuantity: number;
  quantity: number;
  size: string;
}

export interface CartState {
  cartItems: Cart[];
  cartTotalQuantity: number;
  cartTotalPrice: number;
  shipment: number;
  loading: boolean;
  error: string | null;
  discount: number;
}

export interface SidebarCartType {
  closeSideCart: any;
}

export interface PropsForms {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  countryOptions: string[];
  prefixOptions: any;
  billing?: string;
  selectedCountry?: any;
  handleCountryChange?: any;
}

export interface LanguageSelectProps {
  handleLanguageChange: (locale: string) => void;
  handleCloseMenu: () => void;
}
export interface NavbarProps {
  changeLocale: (newLocale: string) => void;
}

export interface PaypalButtonProps {
  totalPrice: string | number
}

export interface Paypal {
  closeCheckOut: any;
}
export interface PromotionProps {
  contents: string[];
}

export interface CarouselProps {
  images: string[];
  names: string[];
  prices: string[];
  gender: string[];
  category?: string[];
  id: string[];
}
export interface CardProps {
  video: any;
  title: string;
  paragraph: string;
  linkUrl: string;
  linkLabel: string;
}

export interface DropdownProps {
  options: any;
  selectedOption: any;
  handleChange: any;
}

export interface ProductPDP {
  id: number | any;
  name: number | any;
  description: string;
  price: number | any;
  image: string;
  category: string;
  gender: string;
}
