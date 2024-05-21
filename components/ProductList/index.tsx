import { FC } from 'react';
import { Item } from '../../types/Item';
import { FlatList } from 'react-native';
import { ProductCard } from '../ProductCard';

interface Props { 
  products: Item[];
}

export const ProductList: FC<Props> = ({ products }) => {

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: 'center', columnGap: 10, marginHorizontal: 10, marginBottom: 10 }}
      data={products}
      numColumns={2}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};