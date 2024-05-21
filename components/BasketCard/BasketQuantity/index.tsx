import { FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { QuantityButton } from '../../QuantityButton';
import { QuantityMethods } from '../../../types/QuantityMethods';

interface Props {
  quantity: number;
  onChangeQuantity: (method: QuantityMethods) => void;
}

export const BasketQuantity: FC<Props> = ({ quantity, onChangeQuantity }) => {
  return (
    <Box 
      display="flex"
      flexDirection="row" 
      alignItems="center"
      justifyContent="space-between"
      minWidth={70} 
      gap={10}
      borderRadius={5}
    >
      <Box display="flex" flexDirection="row" gap={10}>
        <QuantityButton 
          method={QuantityMethods.INCREASE} 
          isDisabled={quantity >= 20} 
          onPress={() => onChangeQuantity(QuantityMethods.INCREASE)}
        />
        <Text margin={'auto'}>{quantity}</Text>
        <QuantityButton 
          method={QuantityMethods.DECREASE} 
          isDisabled={quantity <= 0} 
          onPress={() => onChangeQuantity(QuantityMethods.DECREASE)}
        />
      </Box>
    </Box>
  );
};