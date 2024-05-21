import { Button, ButtonText, Pressable } from '@gluestack-ui/themed';
import { FC } from 'react';
import { QuantityMethods } from '../../types/QuantityMethods';

interface Props {
  method: QuantityMethods;
  isDisabled: boolean;
  onPress: () => void;
}

export const QuantityButton: FC<Props> = ({ method, isDisabled, onPress }) => {
  const isEqualIncrease = method === QuantityMethods.INCREASE;
  return (
    <Pressable
      $active-backgroundColor="$secondary200"
      width={32}
      height={32}
      borderWidth={1}
      paddingHorizontal={0}
      paddingVertical={0}
      padding={10}
      borderColor="$secondary200"
      borderStyle="solid"
      bgColor="transparent"
      disabled={isDisabled} 
      onPress={onPress}
    >
      <ButtonText color="black" textAlign="center" lineHeight={28} fontSize={16}>
        {isEqualIncrease ? '+' : '-'}
      </ButtonText>
    </Pressable>
  );
};