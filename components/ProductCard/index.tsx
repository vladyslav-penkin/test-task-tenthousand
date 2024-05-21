import { FC } from 'react';
import { BasicCard } from '../BasicCard';
import { Box } from '@gluestack-ui/themed';
import { Item } from '../../types/Item';
import { ProductInfo } from './ProductInfo';

interface Props {
  product: Item;
}

export const ProductCard: FC<Props> = ({ product }) => (
  <BasicCard style={{ maxWidth: 200 }}>
    <Box display="flex" gap={10} bg="$white" minHeight={150}>
      <Box width={'100%'} minHeight={150} bgColor="$secondary200" />
      <ProductInfo product={product} />
    </Box>
  </BasicCard>
)