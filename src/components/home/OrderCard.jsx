import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

export default function OrderCard() {
  let screenHeight = Dimensions.get('window').height;

  return (
    <View style={{ height: 90, backgroundColor: 'white', margin: 5, borderRadius: 5, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65, }} >
      <Text>JJJ8888888888888J</Text>
    </View>
  );
}