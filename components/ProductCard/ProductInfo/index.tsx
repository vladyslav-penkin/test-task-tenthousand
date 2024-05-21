import { FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { ProductPrice } from '../ProductPrice';
import { ProductQuantity } from '../ProductQuantity';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addToCart, updateCartItemQuantity, removeFromCart } from '../../../store/slices/cartSlice';
import { updateItemQuantity } from '../../../store/slices/itemsSlice';
import { QuantityMethods } from '../../../types/QuantityMethods';
import { Item } from '../../../types/Item';

interface Props {
  product: Item;
}

export const ProductInfo: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleChangeQuantity = (method: QuantityMethods) => {
    const isIncrease = method === QuantityMethods.INCREASE;

    if (isIncrease && product.quantity === 0) {
      dispatch(addToCart({ ...product, quantity: 1 }));
      dispatch(updateItemQuantity({ id: product.id, quantity: 1 }));
    } else if (isIncrease && product.quantity < 20) {
      dispatch(updateItemQuantity({ id: product.id, quantity: product.quantity + 1 }));
      dispatch(updateCartItemQuantity({ id: product.id, quantity: product.quantity + 1 }));
    } else if (!isIncrease && product.quantity > 0) {
      const newQuantity = product.quantity === 1 ? 0 : product.quantity - 1;
      dispatch(updateItemQuantity({ id: product.id, quantity: newQuantity }));
      dispatch(updateCartItemQuantity({ id: product.id, quantity: newQuantity }));
      if (newQuantity === 0) {
        dispatch(removeFromCart(product.id))
      }
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={10}>
      <Box display="flex" gap={10}>
        <Text fontWeight={600} fontSize={18}>{product.name}</Text>
        <ProductPrice price={product.price} fullPrice={product.fullPrice} weight={product.weight} />
      </Box>
  
      <ProductQuantity quantity={product.quantity} onChangeQuantity={handleChangeQuantity} />
    </Box>
  );
};