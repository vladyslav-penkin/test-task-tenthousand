import { FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { QuantityButton } from '../../QuantityButton';
import { QuantityMethods } from '../../../types/QuantityMethods';

interface Props {
  quantity: number;
  onChangeQuantity: (method: QuantityMethods) => void;
}

export const ProductQuantity: FC<Props> = ({ quantity, onChangeQuantity }) => {
  return (
    <Box 
      display="flex"
      flexDirection="row" 
      alignItems="center"
      justifyContent="space-between"
      minWidth={70} 
      bg="$secondary50" 
      gap={10}
      padding={10} 
      borderRadius={5}
    >
      <Text margin={'auto'}>{quantity}</Text>
      <Box display="flex" flexDirection="row" gap={10}>
        <QuantityButton 
          method={QuantityMethods.INCREASE} 
          isDisabled={quantity >= 20} 
          onPress={() => onChangeQuantity(QuantityMethods.INCREASE)}
        />
        <QuantityButton 
          method={QuantityMethods.DECREASE} 
          isDisabled={quantity <= 0} 
          onPress={() => onChangeQuantity(QuantityMethods.DECREASE)}
        />
      </Box>
    </Box>
  );
};