import { FC } from 'react';
import { Box, Pressable } from '@gluestack-ui/themed';
import { Feather } from '@expo/vector-icons';
import { BasicText } from '../../BasicText';
import { FeatherIcons } from '../../../types/Icons';
import { CartItem } from '../../../types/CartItem';

interface Props {
  cartItem: CartItem;
  onAdd: (item: CartItem) => void;
}

export const BasketCardInfo: FC<Props> = ({ cartItem, onAdd }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={10} maxWidth={80}>
      <BasicText title={cartItem.temporaryName} size={18} />
      <Pressable onPress={() => onAdd(cartItem)}>
        <Feather name={FeatherIcons.EDIT} size={18} color="black" />
      </Pressable>
    </Box>
  );
};