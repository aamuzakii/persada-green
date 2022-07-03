import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function OrderDetailScreen({route}) {

  const BASE_URI = 'https://1517-112-215-170-26.ap.ngrok.io/'

  const order_number = route.params

  let url = `${BASE_URI}/orders/${order_number}`

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  // fetch(url, requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //   })
  //   .catch(error => console.error('error', error));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginVertical: 15, paddingTop: 15 }} >

      </View>
    </View>
  );
}