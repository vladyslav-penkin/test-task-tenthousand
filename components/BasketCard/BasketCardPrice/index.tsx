import { FC } from 'react';
import { Box, Text, Pressable } from '@gluestack-ui/themed';
import { FeatherIcons } from '../../../types/Icons';
import { Feather } from '@expo/vector-icons';

interface Props {
  price: string;
  onRemove: () => void;
}

export const BasketCardPrice: FC<Props> = ({ price, onRemove }) => {
  return (
    <Box 
      minWidth={100} 
      p={10}
      borderRadius={5}
      display="flex" 
      flexDirection="row" 
      justifyContent="space-between" 
      alignItems="center" 
      gap={20}
      bgColor="$secondary50"
    >
      <Text fontWeight="600" fontSize={18} color="$green500">${price}</Text>
      <Pressable onPress={onRemove}>
        <Feather name={FeatherIcons.TRASH} size={18} color="black" />
      </Pressable>
    </Box>
  );
};