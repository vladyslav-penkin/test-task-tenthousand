import { Button, ButtonText } from '@gluestack-ui/themed';
import { FC } from 'react';

interface Props {
  title: string;
  width?: number;
  height?: number;
  fontSize?: number;
  onPress?: () => void;
}

export const BasicButton: FC<Props> = ({ title, width, height, fontSize = 14, onPress }) => {
  return (
    <Button w={width} h={height} bgColor="$green600" onPress={onPress}>
      <ButtonText fontSize={fontSize}>{title}</ButtonText>
    </Button>
  );
};