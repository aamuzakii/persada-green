import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/views/HomeScreen'
import OrderScreen from './src/views/OrderScreen'
import CatalogScreen from './src/views/CatalogScreen'
import AccountScreen from './src/views/AccountScreen'
import AddProductScreen from './src/views/AddProductScreen'
import LoginScreen from './src/views/LoginScreen'
import FilterScreen from './src/views/FilterScreen'
import OrderDetailScreen from './src/views/OrderDetailScreen'
import { useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "Beranda":
        iconName = focused ? 'md-home' : 'md-home-outline'
        break;
      case "Pesanan Saya":
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
  tabBarStyle: [{"display": "flex", height: 50}, null]
})

const Stack = createNativeStackNavigator(); 

const optionObject = ({ navigation }) => ({
  // title: 'Awesome app',
  headerRight: () => (
    <MaterialIcons name="filter-alt" size={20}  onPress={() => navigation.navigate('Filter')} />
  ),
})

function CatalogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Katalog Utama" component={CatalogScreen} options={optionObject} ></Stack.Screen>
      <Stack.Screen name="Detail Produk Baru" component={AddProductScreen} ></Stack.Screen>
      <Stack.Screen name="Filter" component={FilterScreen} ></Stack.Screen>
    </Stack.Navigator>
  )
}

function OrderStack() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Katalog Utama" component={OrderScreen} ></Stack.Screen>
    <Stack.Screen name="Detail Order" component={OrderDetailScreen} ></Stack.Screen>
  </Stack.Navigator>
  )
}

export default function App() {

  let a = useSelector( state => state.adminToken)

  let isTokenValid = a

  if (isTokenValid) return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name="Pesanan Saya" component={OrderStack} />
        <Tab.Screen options={{headerShown: false}} name="Katalog" component={CatalogStack} />
        <Tab.Screen name="Akun" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )

  if (!isTokenValid) return(
    <LoginScreen></LoginScreen>
  )
}