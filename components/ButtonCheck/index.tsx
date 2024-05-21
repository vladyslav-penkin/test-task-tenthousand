import { FC } from 'react';
import { Button, Text } from '@gluestack-ui/themed';

interface Props {
  isSelected: boolean;
  title: string;
  onPress: () => void;
}

export const ButtonCheck: FC<Props> = ({ isSelected, title, onPress }) => {
  return (
    <Button 
      flexGrow={1}
      borderColor={isSelected ? '$green600' : '$green200'} 
      borderWidth={1} 
      borderStyle="solid"
      borderRadius={10}
      bgColor={isSelected ? '$green600' : '$green200'}
      onPress={onPress}
    >
      <Text fontSize={16} fontWeight={600} color={isSelected ? 'white' : '$secondary800'}>
        {title}
      </Text>
    </Button>
  );
};