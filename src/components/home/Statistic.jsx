import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

export default function OrderScreen() {
  let screenHeight = Dimensions.get('window').height;

  return (
    <View style={{ height: (screenHeight - 500), borderColor: 'green', flexDirection: 'row' }} >
      <View >
        <Text>Total Penjualan</Text>
        <Text>Toko Dilihat</Text>
        <Text>Lihat analitik1212</Text>
      </View>
      <View>
        <Text>Total Pesanan</Text>
        <Text>Jumlah Produk1</Text>
      </View>
    </View>
  );
}