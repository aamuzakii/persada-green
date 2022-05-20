import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

export default function OrderCard() {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ height: 190, width: screenWidth * 75 / 100, backgroundColor: 'white', margin: 5, borderRadius: 10, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65 }} >
      <View id="atas" >
        <View>
          <Text>Zaki</Text>
          <Text style={{ fontSize: 12 }} >05 Mei 2022, 01: 33 PM</Text>
        </View>
        <View></View>
      </View>
      <View id="atas" ></View>
    </View>
  );
}