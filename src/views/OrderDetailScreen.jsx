import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function OrderDetailScreen({route}) {

  // const BASE_URI = 'https://dev-api.persada.store'
  const BASE_URI = 'https://3f9e-140-213-35-169.ap.ngrok.io'

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