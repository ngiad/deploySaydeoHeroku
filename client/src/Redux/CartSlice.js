import { createSlice } from "@reduxjs/toolkit";

export const CartRedux = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    AddProduct: (state, action) => {
      if (CheckProduct(state, action)) {
        return [...state].map((product) =>
          product._id === action.payload._id
            ? { ...product, amount: product.amount + 1,priceByQuantity:product.price*(product.amount + 1) }
            : product
        );
      }
      return [...state, action.payload];
    },
    RemoveProduct: (state, action) => {
      return state.filter((product) => product._id !== action.payload._id);
    },
    UpdateProduct: (state, action) => {
      return state.map((product) =>{
        return product._id === action.payload._id ? {...action.payload,priceByQuantity:product.price * action.payload.amount}  : product
        }
      );
    },
  },
});

function CheckProduct(state, action) {
  const check = state.find((product) => product._id === action.payload._id);
  if (check === undefined) {
    return false;
  }
  return true;
}

export const { AddProduct, RemoveProduct, UpdateProduct } = CartRedux.actions;
export default CartRedux.reducer;
