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
    size: "",
    discount: 0 
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

const calculateDiscount = (cartItems: any[]): number => {
    const itemPrices: number[] = [];

    cartItems.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            itemPrices.push(item.price);
        }
    });

    if (itemPrices.length < 2) return 0;

    itemPrices.sort((a, b) => a - b);

    const discount = itemPrices[0] + itemPrices[1];
    return discount;
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem) {
                state.cartItems = state.cartItems.map(item =>
                    item.id === action.payload.id && item.size === action.payload.size ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                const newItem = { ...action.payload, quantity: 1, shipment: state.shipment };
                state.cartItems = [...state.cartItems, newItem];
            }
            const totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.discount = totalPrice > 1000 ? calculateDiscount(state.cartItems) : 0;
            saveStateToLocalStorage(state);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id || cartItem.size !== action.payload.size);
            const totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.discount = totalPrice > 1000 ? calculateDiscount(state.cartItems) : 0;
            saveStateToLocalStorage(state);
        },
        decrease(state, action) {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id && cartItem.size === action.payload.size);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id || cartItem.size !== action.payload.size);
            }
            const totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.discount = totalPrice > 1000 ? calculateDiscount(state.cartItems) : 0;
            saveStateToLocalStorage(state);
        },
        clearCart(state) {
            state.cartItems = [];
            state.discount = 0;
            saveStateToLocalStorage(state);
        },
        addShipping(state) {
            state.cartItems = state.cartItems.map(item => ({
                ...item,
                shipment: 10
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
    const totalPrice = state.cart.cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    const discount = totalPrice > 1000 ? calculateDiscount(state.cart.cartItems) : 0;
    const finalPrice = totalPrice - discount;
    return finalPrice.toFixed(2);
};

export const selectCartDiscount = (state: any) => {
    return state.cart.discount;
};



export const selectCartTotalQuantity = (state: any) => {
    const totalQuantity = state.cart.cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
    return totalQuantity;
};

export const { addToCart, removeFromCart, decrease, clearCart, addShipping, removeShipping } = cartSlice.actions;

export default cartSlice.reducer;
