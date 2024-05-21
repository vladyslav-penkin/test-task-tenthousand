import { FC } from 'react';
import { Text } from '@gluestack-ui/themed';

interface Props {
  title: string;
  size?: number;
  style?: object;
  otherProps?: object;
}

export const BasicText: FC<Props> = ({ title, size, style, otherProps }) => {
  return (
    <Text style={{ ...style, fontSize: size }} color="$secondary800" {...otherProps}>
      {title}
    </Text>
  );
};