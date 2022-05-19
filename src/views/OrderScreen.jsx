import * as React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/orders/Card'
import { Dimensions } from 'react-native';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function OrderScreen() {
  return (
    <View style={{ width: width, backgroundColor: 'grey' }} >

      {/* <Card></Card> */}
      {/* <Card></Card> */}
      {/* <Card></Card> */}
    </View>
  );
}