import { FC } from 'react';
import { Box } from '@gluestack-ui/themed';
import { ButtonCheck } from '../ButtonCheck';
import { Category } from '../../types/Category';

interface Props {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

export const CategoryFilter: FC<Props> = ({ category, setCategory }) => {
  const capitalizeFirstLetter = (word: Category) => word.charAt(0) + word.slice(1);
  const toggleCategory = (currCategory: Category) => setCategory(currCategory === category ? Category.ALL : currCategory);
  const categories = [
    { isSelected: category === Category.FRUITS, title: capitalizeFirstLetter(Category.FRUITS), onPress: () => toggleCategory(Category.FRUITS) },
    { isSelected: category === Category.VEGETABLES, title: capitalizeFirstLetter(Category.VEGETABLES), onPress: () => toggleCategory(Category.VEGETABLES) },
  ];
  return (
    <Box
      display="flex" 
      flexDirection="row" 
      gap={20} 
      justifyContent="center" 
      padding={15}
      borderWidth={1}
      borderStyle="solid"
      borderColor={'$secondary200'}
    >
      {categories.map(({ isSelected, title, onPress }) => (
        <ButtonCheck
          key={title}
          isSelected={isSelected}
          title={title}
          onPress={onPress}
        />
      ))}
    </Box>
  );
};