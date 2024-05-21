import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Box, Button, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreen } from '../../screens/ProductsScreen';
import { CartScreen } from '../../screens/CartScreen';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { RootState } from '../../store/store';
import { fetchCart } from '../../store/slices/cartSlice';
import { IoniconsIcons } from '../../types/Icons';

const Stack = createNativeStackNavigator();

export const ProductsStack: FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home"
        component={ProductsScreen}
        options={{
          headerTitle: 'Products',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 22, color: '#16a34a' },
          headerRight: () => (
            <Button 
              position="relative" 
              bgColor="transparent" 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              borderRadius={50}
              onPress={() => navigation.navigate('Cart')}
            >
              <Ionicons name={IoniconsIcons.CART} size={30} color={'#16a34a'} />
              {cartItems.length > 0 && (
                <Box position="absolute" top={0} right={10} display="flex" alignItems="center" justifyContent="center" w={20} h={20} borderRadius={50} bgColor="$red500">
                  <Text color="white" fontSize={10}>{cartItems.length}</Text>
                </Box>
              )}
            </Button>
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};