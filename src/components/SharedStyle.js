import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export let outlinedButton = {
  // width: screenWidth * 35 / 100,
  backgroundColor: 'white',
  borderRadius: 10,
  borderWidth: 2.5,
  borderColor: '#301b92',
  color: '#301b92',
  flexDirection: 'row',
  justifyContent: 'center',
  flex: 1,
  marginRight: 6
}

export let outlinedButtonLong = {
  // width: screenWidth * 90 / 100,
  flex: 1,
  backgroundColor: 'white',
  borderRadius: 10,
  borderWidth: 1.5,
  height: 40,
  borderColor: '#c6c6c6',
  color: '#301b92',
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 9,
  alignItems: 'center'
}

export let fullButton = {
  // width: screenWidth * 45 / 100,
  flex: 1,
  backgroundColor: '#301b92',
  borderColor: '#301b92',
  borderRadius: 10,
  borderWidth: 2.5,
  color: '#301b92',
  flexDirection: 'row',
  justifyContent: 'center',
  marginleft: 6
}