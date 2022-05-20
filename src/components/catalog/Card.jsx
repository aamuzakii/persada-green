import * as React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Card() {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ height: 190, width: screenWidth * 95 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65 }} >
      <View id="atas" ><Image style={{ borderRadius: 12 }} source={{uri:"https://picsum.photos/200", width:50, height:50 }}/></View>
      
      <View id="bawah" style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View id="left"  style={{ flexDirection: 'row' }} >
          <Ionicons name="share-social-sharp" size={20} color="#301b92" />
          <Text>Zaki</Text>
        </View>
        <View style={{ backgroundColor: 'pink', borderRadius: 10, padding: 7 }} ><Text style={{ color: 'red' }} >Belum Lunas</Text></View>
      </View>
    </View>
  );
}