import { FC } from 'react';
import { Box } from '@gluestack-ui/themed';

interface Props {
  children: React.ReactNode;
  style?: object;
  otherProps?: object;
}

export const BasicCard: FC<Props> = ({ children, style, otherProps }) => {
  return (
    <Box flexGrow={1} p={20} borderRadius={10} bg="$white" style={style} {...otherProps}>
      {children}
    </Box>
  );
};