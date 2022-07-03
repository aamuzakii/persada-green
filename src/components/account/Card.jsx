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
    <View style={{ flex: 1, width: screenWidth * 95 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: 'black',  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
    }} >
      <View style={{ flexDirection:'row' }} >
        <Text>Logo</Text>
        <View style={{ height: '100%', justifyContent: 'space-around' }} >
          <Text style={{ fontWeight: '600' }} >Perlu Bantuan?</Text>
          <Text>Hubungi Kami</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward-sharp" size={30} color="#301b92" />
    </View>
  );
}