import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interfaces/type";

interface CartState {
    cartItems: Cart[];
    quantity: number;
    cartTotalQuantity: number;
    cartTotalPrice: number;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    cartItems: [],
    quantity: 0,
    cartTotalPrice: 0,
    cartTotalQuantity: 0,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart(state, action) {
          const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (existingIndex >= 0) {
            state.cartItems[existingIndex] = {
              ...state.cartItems[existingIndex],
              quantity: state.cartItems[existingIndex].quantity + 1,
            };
          } else {
            let tempProductItem = { ...action.payload, quantity: 1 };
            state.cartItems.push(tempProductItem);
          }
        },
      removeFromCart(state, action) {
        const nextCartItems = state.cartItems.filter((cartItem) =>
         cartItem.id !== action.payload.id)

        state.cartItems = nextCartItems
      },
      decrease(state, action) {
        const itemIndex = state.cartItems.findIndex(cartItem => 
          cartItem.id === action.payload.id)
          if(state.cartItems[itemIndex].quantity >= 1){
            state.cartItems[itemIndex].quantity -= 1
          }if(state.cartItems[itemIndex].quantity < 1){
            const nextCartItems = state.cartItems.filter((cartItem) =>
              cartItem.id !== action.payload.id)
             state.cartItems = nextCartItems
          }
         
      },
      clearCart(state) {
        state.cartItems = []
      },
  },
  
});


export const selectCartTotalPrice = (state:any) => {
  const totalPrice = state.cart.cartItems.reduce((total:any, item:any) => total + item.price * item.quantity, 0); 
  return totalPrice.toFixed(2);
};

export const selectCartTotalQuantity = (state:any) => {
  const totalQuantity = state.cart.cartItems.reduce((total:any, item:any) => total + item.quantity, 0);
  return totalQuantity;
};


export const { addToCart, removeFromCart, decrease, clearCart  } = cartSlice.actions;

export default cartSlice.reducer;