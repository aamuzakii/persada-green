import * as React from 'react';
import { Text, View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { setAdminToken } from '../reducer/reducer';
import { useDispatch } from 'react-redux';



export default function OrderScreen() {
  const dispatch = useDispatch()

  const removeItemValue = async (key) => {
    try {
        await SecureStore.deleteItemAsync("token")
        dispatch(setAdminToken(null))
        return true;
    }
    catch(exception) {
        alert(exception)
        return false;
    }
}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home! dari k121om11p</Text>
      <Button title='LOGOUT'  onPress={removeItemValue} ></Button>
    </View>
  );
}