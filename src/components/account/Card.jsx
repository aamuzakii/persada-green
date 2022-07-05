import * as React from 'react';
import { Text, View, Dimensions, Image, TouchableHighlight } from 'react-native';
import { Subheading, Button, Searchbar, Caption, Switch   } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { grey } from '../SharedStyle';

export default function Card({ title, body, icon, isMaterialIcon, isLogOut, removeItemValue }) {

  title = title || 'Perlu Bantuan'
  body = body || 'Perlu Bantuan'
  icon = icon || 'ios-call-outline'


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
    <TouchableHighlight style={{ flex: 1, width: screenWidth * 95 / 100, backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 10, borderColor: 'black',  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    }} 
    
    onPress={removeItemValue}
    >

    
    <View style={{ flex: 1, width: screenWidth * 95 / 100, backgroundColor: 'white', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    }} >
      <View style={{ flexDirection:'row', alignItems: 'center' }} >
        {
          isLogOut ? <MaterialIcons name={icon} size={25} color="red" /> : <Ionicons name={icon} size={25} color="#301b92" />
        }
        <View style={{ height: '100%', justifyContent: 'space-around', marginHorizontal: 12 }} >
          <Text style={{ fontWeight: '600' }} >{ title }</Text>
          <Text style={{ fontSize: 12 }} >{ body }</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward-sharp" size={30} color="#ddd" />
    </View>
    </TouchableHighlight>
  );
}