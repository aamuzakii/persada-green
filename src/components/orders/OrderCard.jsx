import * as React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

export default function OrderCard() {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  let a = { fontSize: 11, color: '#b4b2cb', fontWeight: '500'}
  let amei = { fontSize: 10, color: '#b4b2cb'}
  let bolde = { fontWeight: 'bold', fontSize: 13 }

  return (
    <View style={{ height: 150, width: screenWidth * 97 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65, justifyContent: 'space-evenly' }} >
      <View id="atas" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View style={{  }} >
          <Text style={bolde} >Zaki</Text>
          <Text style={amei} >05 Mei 2022, 01:32 PM</Text>
        </View>
        <View style={{ backgroundColor: '#fde7e9', borderRadius: 10, paddingHorizontal: 10, paddingBottom: 1, justifyContent: 'center', height: 25 }} ><Text style={{ color: 'red', fontSize: 10 }} >Belum Lunas</Text></View>
      </View>
      <View id="tengah" style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Image style={{ borderRadius: 12, marginRight: 10, marginVertical: 10 }} source={{uri:"https://picsum.photos/200", width:50, height:50 }}/>
        <Text style={bolde} >Honda Beat</Text>
      </View>
      <View style={{ backgroundColor: '#b4b2cb', height: 1 }} ></View>
      <View id="bawah" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Text style={amei} >Total Harga</Text>
        <Text style={bolde} >Rp10.000</Text>
      </View>
    </View>
  );
}