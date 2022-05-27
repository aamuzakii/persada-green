import * as React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Subheading, Button, Searchbar, Caption, Switch   } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { grey } from '../SharedStyle';

export default function Card() {
  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;
  let boxSize = screenHeight * 10 /100
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [toggleText, setToggleText] = React.useState("Tidak aktif");

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
  };

  React.useEffect(() => {
    if (isSwitchOn) {
      setToggleText("Aktif")
    } else {
      setToggleText("Tidak Aktif")
    }
  }, [isSwitchOn]);

  return (
    <View style={{ flex: 1, width: screenWidth * 95 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: '#f4f4f4', borderWidth: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.27, shadowRadius: 4.65 }} >
      <View id="atas" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Image style={{ borderRadius: 12 }} source={{uri:"https://picsum.photos/200", width: boxSize , height: boxSize  }}/>
        <View style={{ alignItems: 'flex-start' }} >
          <View style={{ backgroundColor: '#eae8f5', borderRadius: 5, paddingHorizontal: 3 }} ><Text style={{ fontSize: 12, color: '#301b92' }} >Elektronik</Text></View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }} >Mouse Logitech</Text>
          <Caption>1 Variasi</Caption>
          <Subheading>Rp45.000</Subheading>
        </View>
        <Ionicons name="chevron-forward-sharp" size={30} color="#301b92" />
      </View>

      <View style={{ borderColor: '#f5f6f8', borderWidth: 1, marginVertical: 10 }} ></View>

      <View id="bawah" style={{ flexDirection: 'row', justifyContent: 'space-between', height: 25 }} >
        <View id="left"  style={{ flexDirection: 'row', alignItems: 'center' }} >
          <Ionicons name="share-social-sharp" size={20} color="#301b92" />
          <Text style={{ marginHorizontal: 10 }} >Bagikan Produk</Text>
        </View>
        <View style={{ padding: 0, flexDirection: 'row', alignItems: 'center' }} >
          <Text style={{ color: '#656565' }} >{toggleText}</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
    </View>
  );
}