import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/views/HomeScreen'
import OrderScreen from './src/views/OrderScreen'
import CatalogScreen from './src/views/CatalogScreen'
import AccountScreen from './src/views/AccountScreen'

const Tab = createBottomTabNavigator();

let tabBarOptions = {
  style: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 0
  },
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "Beranda":
        iconName = focused ? 'md-home' : 'md-home-outline'
        break;
      case "Pesanan":
        iconName = focused ? 'cart' : 'cart-outline'
        break
      case "Akun":
        iconName = focused ? 'ios-settings-sharp' : 'md-settings-outline'
        break
      case "Katalog":
        iconName = focused ? 'md-search-circle' : 'md-search-circle-outline'
        break
      default:
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray',
})

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}
        >
        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen name="Pesanan" component={OrderScreen} />
        <Tab.Screen name="Akun" component={HomeScreen} />
        <Tab.Screen name="Katalog" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

