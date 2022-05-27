import * as React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

export default function OrderCard() {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ height: 190, width: screenWidth * 75 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65, justifyContent: 'space-evenly' }} >
      <View id="atas" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View style={{  }} >
          <Text>Zaki</Text>
          <Text style={{ fontSize: 12 }} >05 Mei 2022, 01: 33 PM</Text>
        </View>
        <View style={{ backgroundColor: 'pink', borderRadius: 10, padding: 0, justifyContent: 'center' }} ><Text style={{ color: 'red' }} >Belum Lunas</Text></View>
      </View>
      <View id="tengah" style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Image style={{ borderRadius: 12, marginRight: 10 }} source={{uri:"https://picsum.photos/200", width:50, height:50 }}/>
        <Text>Honda Beat</Text>
      </View>
      <View id="bawah" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <Text>Total Harga</Text>
        <Text>Rp. 10.000</Text>
      </View>
    </View>
  );
}