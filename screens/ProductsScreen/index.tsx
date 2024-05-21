import { FC, useEffect, useState } from 'react';
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchItems } from '../../store/slices/itemsSlice';
import { Category } from '../../types/Category';
import { Item } from '../../types/Item';
import { ProductList } from '../../components/ProductList';
import { CategoryFilter } from '../../components/CategoryFilter';

export const ProductsScreen: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.items);
  const [category, setCategory] = useState<Category>(Category.ALL);
  const filteredItems = category === Category.ALL ? items : items.filter((item: Item) => item.category === category);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <Box display="flex" width={'100%'} height={'100%'} bg="$secondary100">
        <CategoryFilter category={category} setCategory={setCategory} />
        <ProductList products={filteredItems} />
      </Box>
    </GluestackUIProvider>
  );
};