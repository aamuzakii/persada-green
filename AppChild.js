import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/views/HomeScreen'
import OrderScreen from './src/views/OrderScreen'
import CatalogScreen from './src/views/CatalogScreen'
import AccountScreen from './src/views/AccountScreen'
import AddProductScreen from './src/views/AddProductScreen'
import LoginScreen from './src/views/LoginScreen'
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

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
  tabBarStyle: [{"display": "flex"}, null]
})

const Stack = createNativeStackNavigator(); 

function CatalogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainCatalog" component={CatalogScreen} ></Stack.Screen>
      <Stack.Screen name="Detail Produk Baru" component={AddProductScreen} ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {

  let a = useSelector( state => state)

  let isTokenValid = a

  if (isTokenValid) return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen name="Pesanan" component={OrderScreen} />
        <Tab.Screen options={{headerShown: false}} name="Katalog" component={CatalogStack} />
        <Tab.Screen name="Akun" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )

  if (!isTokenValid) return(
    <LoginScreen></LoginScreen>
  )
}