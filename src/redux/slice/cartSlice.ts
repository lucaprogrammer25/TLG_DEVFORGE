import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../interfaces/type";

const defaultInitialState: CartState = {
    cartItems: [],
    quantity: 0,
    cartTotalPrice: 0,
    cartTotalQuantity: 0,
    shipment: 0,
    loading: false,
    error: null,
};

const loadStateFromLocalStorage = (): CartState => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return defaultInitialState;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
        return defaultInitialState;
    }
};

const initialState: CartState = loadStateFromLocalStorage();

const saveStateToLocalStorage = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
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
            saveStateToLocalStorage(state);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            saveStateToLocalStorage(state);
        },
        decrease(state, action) {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            }
            saveStateToLocalStorage(state);
        },
        clearCart(state) {
            state.cartItems = [];
            saveStateToLocalStorage(state);
        },
        addShipping(state) {
            state.cartItems = state.cartItems.map(item => ({
                ...item,
                shipment: 20
            }));
            saveStateToLocalStorage(state);
        },
        removeShipping(state) {
            state.cartItems = state.cartItems.map(item => ({
                ...item,
                shipment: 0
            }));
            saveStateToLocalStorage(state);
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