import { FC, memo } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BasicButton } from '../../components/BasicButton';
import { MaterialIcons as MaterialIconsType } from '../../types/Icons';
import { Center } from '@gluestack-ui/themed';
import { BasicText } from '../BasicText';

type Props = {
  icon: MaterialIconsType;
  iconColor: string;
  iconSize?: number;
  title: string;
  subtitle?: string;
  buttonText?: string;
  onPress?: () => void;
}

export const BasicBanner: FC<Props> = memo(({ 
  icon, 
  iconColor, 
  iconSize = 70, 
  title, 
  subtitle, 
  buttonText, 
  onPress,
}) => {
  return (
    <Center display="flex" gap={20} w="100%" h="100%">
      <MaterialIcons name={icon} size={iconSize} color={iconColor} />
      <BasicText title={title} size={18} />
      {subtitle && (
        <BasicText title={subtitle} size={14} />
      )}
      {buttonText && (
        <BasicButton 
          title={buttonText} 
          width={260}
          height={44} 
          fontSize={16}
          onPress={onPress}
        />
      )}
    </Center>
  );
});