import * as React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { integerToRupiah } from '../../../helpers/General';

export default function OrderCard({order_date, customer_info, products_ordereds, total}) {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  let a = { fontSize: 11, color: '#b4b2cb', fontWeight: '500'}
  let amei = { fontSize: 10, color: '#b4b2cb'}
  let bolde = { fontWeight: 'bold', fontSize: 13 }

  let firstProduct = products_ordereds[0]

  const container = { height: 150, width: screenWidth * 75 / 100, backgroundColor: 'white', margin: 5, marginBottom: 10, padding: 10, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65, justifyContent: 'space-evenly', shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5 }

  return (
    <View style={container} >
      <View id="atas" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View style={{  }} >
          <Text style={bolde} >{customer_info.name}</Text>
          <Text style={amei} >{order_date}</Text>
        </View>
        <View style={{ backgroundColor: '#fde7e9', borderRadius: 10, paddingHorizontal: 10, paddingBottom: 1, justifyContent: 'center', height: 25 }} ><Text style={{ color: 'red', fontSize: 10 }} >Belum Lunas</Text></View>
      </View>
      <View id="tengah" style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Image style={{ borderRadius: 12, marginRight: 10, marginVertical: 10 }} source={{uri: firstProduct.image_url, width:50, height:50 }}/>
        <Text style={bolde} >{firstProduct.name}</Text>
      </View>
      <View style={{ backgroundColor: '#b4b2cb', height: 1 }} ></View>
      <View id="bawah" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Text style={amei} >Total Harga</Text>
        <Text style={bolde} >{integerToRupiah(total)}</Text>
      </View>
    </View>
  );
}