import * as React from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { outlinedButton, fullButton, outlinedButtonLong } from '../SharedStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function WebLink() {
  let screenHeight = Dimensions.get('window').height;

  return (
    <View style={{ paddingHorizontal: 12 }} >
      <Caption><Ionicons name="share-social-sharp" size={20} color="#301b92" />Bagikan link ke pelanggan</Caption>
      <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }} >
        <TouchableHighlight style={outlinedButtonLong} >
          <Caption>https://persada.stores</Caption>
        </TouchableHighlight>
      </View>
      <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }} >
        <TouchableHighlight style={outlinedButton} >
          <Caption>Lihat Toko</Caption>
        </TouchableHighlight>
        <TouchableHighlight style={fullButton} >
          <Text style={{ color: 'white' }}>Bagikan Link Toko</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}