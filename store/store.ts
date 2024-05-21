import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';
import cartReducer from './slices/cartSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
