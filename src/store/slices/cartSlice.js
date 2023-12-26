import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers : {
        addToCart(state , action) {
            state.cartItems.push(action.payload)
        },
        removeItem(state , action) {
           state.cartItems = state.cartItems.filter(res => res.id !== action.payload)
        },
        clearCart(state) {
            state.cartItems.length = []
        }
    }
})

export const { addToCart , removeItem , clearCart } = cartSlice.actions; 
export default cartSlice.reducer;