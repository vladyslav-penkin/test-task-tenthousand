import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProductsStack } from './stacks/ProductsStack';
import { StatusBar, View } from 'react-native';
import { IoniconsIcons } from './types/Icons';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const Tab = createBottomTabNavigator();

const TabGroup: FC = () => {
  return (
    <Tab.Navigator initialRouteName="Products" screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 0,
        borderColor: 'transparent',
      },
      tabBarIcon: ({ color, focused, size }: { color: string, focused: boolean, size: number}) => {
        if (route.name === 'Products') {
          return <Ionicons name={focused ? IoniconsIcons.HOME : IoniconsIcons.HOMELINE} size={size} color={color} />
        }
      },
    })}>
      <Tab.Screen 
        name="Products" 
        component={ProductsStack}
        options={{}} 
      />
    </Tab.Navigator>
  );
};

const App: FC = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <StatusBar
        barStyle={'light-content'}
      />
      <GluestackUIProvider config={config}>
        <Provider store={store}>
          <NavigationContainer>
            <TabGroup />
          </NavigationContainer>
        </Provider>
      </GluestackUIProvider>
    </View>
  );
}

export default App;