import { FC } from 'react';
import { Box, Text } from '@gluestack-ui/themed';

interface Props {
  price: string;
  fullPrice: string;
  weight: string
}

export const ProductPrice: FC<Props> = ({ price, fullPrice, weight }) => {
  return (
    <Box>
      <Text textDecorationLine="line-through" color="$secondary400">${fullPrice}</Text>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Text fontWeight={600} fontSize={18} color="$green500">${price}</Text>
        <Text marginLeft={5} fontSize={14}>/{weight}</Text>
      </Box>
    </Box>
  );
};