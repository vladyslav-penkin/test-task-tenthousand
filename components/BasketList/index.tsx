import { FC } from 'react';
import { FlatList } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { BasketCard } from '../BasketCard';

interface Props {
  cartItems: CartItem[];
  onAddToEditItem: (item: CartItem) => void;
}

export const BasketList: FC<Props> = ({ cartItems, onAddToEditItem }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cartItems}
      renderItem={({ item }) => <BasketCard cartItem={item} onAddToEditItem={onAddToEditItem} />}
      keyExtractor={(item) => item.id}
    />
  );
};