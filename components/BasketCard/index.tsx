import { FC } from 'react';
import { Pressable } from 'react-native';
import { BasicCard } from '../BasicCard';
import { Box, Text } from '@gluestack-ui/themed';
import { CartItem } from '../../types/CartItem';
import { BasicText } from '../BasicText';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { QuantityMethods } from '../../types/QuantityMethods';
import { addToCart, removeFromCart, updateCartItemQuantity } from '../../store/slices/cartSlice';
import { updateItemQuantity } from '../../store/slices/itemsSlice';
import { BasketQuantity } from './BasketQuantity';
import { Feather } from '@expo/vector-icons';
import { FeatherIcons } from '../../types/Icons';
import { BasketCardPrice } from './BasketCardPrice';
import { BasketCardInfo } from './BasketCardInfo';

interface Props {
  cartItem: CartItem;
  onAddToEditItem: (item: CartItem) => void;
}

export const BasketCard: FC<Props> = ({ cartItem, onAddToEditItem }) => {
  const dispatch = useAppDispatch();

  const handleChangeQuantity = (method: QuantityMethods) => {
    const isIncrease = method === QuantityMethods.INCREASE;

    if (isIncrease && cartItem.quantity === 0) {
      dispatch(addToCart({ ...cartItem, quantity: 1 }));
      dispatch(updateItemQuantity({ id: cartItem.id, quantity: 1 }));
    } else if (isIncrease && cartItem.quantity < 20) {
      dispatch(updateItemQuantity({ id: cartItem.id, quantity: cartItem.quantity + 1 }));
      dispatch(updateCartItemQuantity({ id: cartItem.id, quantity: cartItem.quantity + 1 }));
    } else if (!isIncrease && cartItem.quantity > 0) {
      const newQuantity = cartItem.quantity === 1 ? 0 : cartItem.quantity - 1;
      dispatch(updateItemQuantity({ id: cartItem.id, quantity: newQuantity }));
      dispatch(updateCartItemQuantity({ id: cartItem.id, quantity: newQuantity }));
      if (newQuantity === 0) {
        dispatch(removeFromCart(cartItem.id))
      }
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
    dispatch(updateItemQuantity({ id: cartItem.id, quantity: 0 }));
  };
  return (
    <BasicCard style={{ margin: 10 }}>
      <Box 
        display="flex" 
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={20}>
          <Box w={50} h={50} borderRadius={20} bgColor="$secondary200" />
          <Box display="flex" gap={10}>
            <BasketCardInfo cartItem={cartItem} onAdd={onAddToEditItem} />
            <BasketQuantity quantity={cartItem.quantity} onChangeQuantity={handleChangeQuantity} />
          </Box>
        </Box>
        <BasketCardPrice price={cartItem.price} onRemove={handleRemoveFromCart} />
      </Box>
    </BasicCard>
  );
};