import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, ITEMS_ENDPOINT } from '../../api/api';
import { Item } from '../../types/Item';
import axios from 'axios';

interface ItemsState {
  items: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const { data } = await axios.get(`${BASE_URL}/${ITEMS_ENDPOINT}`);
  return data;
});

export const updateItemQuantity = createAsyncThunk<Item, { id: string, quantity: number }>('items/updateItemQuantity', async ({ id, quantity }) => {
  const { data } = await axios.patch(`${BASE_URL}/${ITEMS_ENDPOINT}/${id}`, { quantity });
  return data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        const item = state.items.find((item: Item) => item.id === action.payload.id);
        if (item) item.quantity = action.payload.quantity;
      })
  },
});


export default itemsSlice.reducer;