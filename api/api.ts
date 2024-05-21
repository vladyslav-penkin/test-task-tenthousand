import axios from 'axios';

export const BASE_URL = 'http://192.168.0.104:3000';
export const ITEMS_ENDPOINT = 'items';
export const CART_ENDPOINT = 'cart';

export const fetchItems = async () => {
  const { data } = await axios.get(`${BASE_URL}/${ITEMS_ENDPOINT}`);
  return data
};
