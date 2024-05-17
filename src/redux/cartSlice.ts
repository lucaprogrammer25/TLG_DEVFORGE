import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interfaces/type";

interface CartState {
    cartItems: Cart[];
    quantity: number;
    cartTotalQuantity: number;
    cartTotalPrice: number;
    shipment: number;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    cartItems: [],
    quantity: 0,
    cartTotalPrice: 0,
    cartTotalQuantity: 0,
    shipment: 0,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.cartItems = state.cartItems.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                const newItem = { ...action.payload, quantity: 1, shipment: state.shipment };
                state.cartItems = [...state.cartItems, newItem];
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
            if (state.cartItems[itemIndex].quantity >= 1) {
                state.cartItems[itemIndex].quantity -= 1
            }
            if (state.cartItems[itemIndex].quantity < 1) {
                const nextCartItems = state.cartItems.filter((cartItem) =>
                    cartItem.id !== action.payload.id)
                state.cartItems = nextCartItems
            }
        },
        clearCart(state) {
            state.cartItems = []
        },
        addShipping(state, action) {
            state.cartItems = state.cartItems.map(item => ({
                ...item,
                shipment: item.shipment = 20.00
            }));
        },
        removeShipping(state, action) {
            state.cartItems = state.cartItems.map(item => ({
                ...item,
                shipment: item.shipment = 0
            }));
        }

    }
});

export const selectCartTotalPrice = (state: any) => {
    const totalPrice = state.cart.cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
};

export const selectCartTotalQuantity = (state: any) => {
    const totalQuantity = state.cart.cartItems.reduce((total: any, item: any) => total + item.quantity, 0);
    return totalQuantity;
};

export const { addToCart, removeFromCart, decrease, clearCart, addShipping, removeShipping } = cartSlice.actions;

export default cartSlice.reducer;
