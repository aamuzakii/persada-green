import * as React from 'react';
import { Text, View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { setAdminToken } from '../reducer/reducer';
import { useDispatch } from 'react-redux';
import  Card  from '../components/account/Card'



export default function AccountScreen() {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Card title="Jam Operasional" body="Atur waktu toko menjadi offline" icon="ios-time-outline" ></Card>
      <Card title="Pembayaran" body="Atur metode pembayaran yang didukung" icon="ios-card-outline" ></Card>
      <Card title="WA" body="Pengaturan Whatsapp" icon="logo-whatsapp" ></Card>
      <Card title="Bagikan" body="Bagikan aplikasi" icon="share" ></Card>
      <Card title="Tentang Persada" body="Pelajari lebih lanjut tentang persda.store" icon="information-circle-outline" ></Card>
      <Card title="Pembayaran" body="Atur metode pembayaran yang didukung" icon="ios-card-outline" ></Card>
      <Card title="Pembayaran" body="Atur metode pembayaran yang didukung" icon="ios-card-outline" ></Card>
      <Text>KELUAR</Text>
      <Button title='LOGOUT'  onPress={removeItemValue} ></Button>
    </View>
  );
}