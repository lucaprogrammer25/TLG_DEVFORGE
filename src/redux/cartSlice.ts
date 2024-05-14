import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interfaces/type";

interface CartState {
    cartItems: Cart[];
    cartQuantity: number;
    cartTotalPrice: number;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    cartItems: [],
    cartQuantity: 0,
    cartTotalPrice: 0,
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
                cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
              };
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProductItem);
            }
          },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
