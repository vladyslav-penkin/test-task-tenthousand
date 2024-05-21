import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItem } from '../../types/CartItem';
import { BASE_URL, CART_ENDPOINT } from '../../api/api';

export const fetchCart = createAsyncThunk<CartItem[]>('cart/fetchCart', async () => {
  const { data } = await axios.get<CartItem[]>(`${BASE_URL}/${CART_ENDPOINT}`);
  return data;
});

export const addToCart = createAsyncThunk<CartItem, CartItem>('cart/addToCart', async (item: CartItem) => {
  const { data } = await axios.post<CartItem>(`${BASE_URL}/${CART_ENDPOINT}`, item);
  return data;
});

export const removeFromCart = createAsyncThunk<string, string>('cart/removeFromCart', async (id: string) => {
  await axios.delete(`${BASE_URL}/${CART_ENDPOINT}/${id}`);
  return id;
});

export const updateCartItemTemporaryName = createAsyncThunk<CartItem, { id: string, temporaryName: string }>('cart/updateCartItem', async ({ id, temporaryName }) => {
  const { data } = await axios.patch(`${BASE_URL}/${CART_ENDPOINT}/${id}`, { temporaryName });
  return data;
});

export const updateCartItemQuantity = createAsyncThunk<CartItem, { id: string, quantity: number }>('cart/updateCartItemQuantity', async ({ id, quantity }) => {
  const { data } = await axios.patch(`${BASE_URL}/${CART_ENDPOINT}/${id}`, { quantity });
  return data;
});

interface CartState {
  cartItems: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCart.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cart';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems[state.cartItems.length] = action.payload;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        const item = state.cartItems.find(item => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addCase(updateCartItemTemporaryName.fulfilled, (state, action) => {
        const item = state.cartItems.find((item: CartItem) => item.id === action.payload.id)
        if (item) item.temporaryName = action.payload.temporaryName;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload);
      })
    },
});

export default cartSlice.reducer;
