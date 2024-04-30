import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
}

const orderSlice = createSlice({
    name: 'Orders',
    initialState,
    reducers: {
        addOrder: (state, { payload }) => {
            const isContain = state.items.some(item => item.id === payload.id)
            const newOrders = isContain ? state.items.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.items, { ...payload, qty: 1 }];
            state.items = newOrders;
        },
        removeOrder: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload);
        },
        removeAllOrders: (state) => {
            state.items = []
        }
    }
});

export const { addOrder, removeOrder, removeAllOrders } = orderSlice.actions

export default orderSlice.reducer