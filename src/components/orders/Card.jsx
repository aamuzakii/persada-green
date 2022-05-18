import * as React from 'react';
import { View, Text } from 'react-native';
import { Subheading, Caption, Paragraph } from 'react-native-paper';


export default function Card() {
  return (
    <View style={{ width: '90vw', backgroundColor: 'red', borderRadius: 8, margin: 2, padding: 8 }} >
      <View>
        <Caption>Indra Birowo Subin</Caption>
      </View>
      <Text>Motor</Text>
      <Text>Total Pesanan</Text>
      <Text>Rp. 100.000</Text>
      <Text>Kirim ke Pelanggan</Text>
    </View>
  );
}