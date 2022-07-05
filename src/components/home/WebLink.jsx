import * as React from 'react';
import { Text, View, Dimensions, TouchableHighlight, Clipboard } from 'react-native';
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { outlinedButton, fullButton, outlinedButtonLong } from '../SharedStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function WebLink() {
  let screenHeight = Dimensions.get('window').height;

  const [copiedText, setCopiedText] = React.useState('')

  const copyToClipboard = () => {
    Clipboard.setString('www.persada.store')
  }
  return (
    <View style={{ padding: 12, backgroundColor: 'white' }} >
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Ionicons name="share-social-sharp" size={20} color="#301b92" style={{ marginHorizontal: 5 }}  />
        <Caption>Bagikan link ke pelanggan</Caption>
      </View>
      <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }} >
        <TouchableHighlight style={outlinedButtonLong} onPress={() => copyToClipboard()} activeOpacity={0.6} underlayColor="#DDDDDD" >
          <Caption>www.persada.store</Caption>
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