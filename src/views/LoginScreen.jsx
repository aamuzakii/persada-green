import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import CustomInput from "../components/login/CustomInput";
import { requestOTP } from '../reducer/reducer';
import { useDispatch } from 'react-redux';

const image = { uri: "https://res.cloudinary.com/dm9ufmxnq/image/upload/v1653724772/wp3152237_tzuzzj.png" };

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('dev@mail.com')

  const onChangeNumber = (props) => {
    setEmail(props)
  }

  return ( 
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ padding: 25, backgroundColor: 'white', height: 400, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} >
        <Text style={{ fontWeight:'bold', fontSize: 17 }} >Silahkan masukkan email dan password admin</Text>
        <Text style={{ color: '#626262', fontSize: 15, marginVertical: 25 }} >Atau centang testing untuk masuk sebagai tamu</Text>
        <CustomInput/>
        <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center', marginHorizontal: 20 }} >
          {/* left side */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <MaterialCommunityIcons name="shield-check" size={30} color="#aeaeae" />
            <View>
              <Text style={{ fontWeight: 'bold', color: "#aeaeae", fontSize: 18 }} >100%</Text>
              <Text style={{ fontWeight: '500', color: "#aeaeae", fontSize: 14 }} >aman</Text>
            </View>
          </View>
          {/* border line */}
          <View style={{ backgroundColor: '#aeaeae', height: 80, width: 1.5, marginHorizontal: 10 }} ></View>
          {/* border line */}
          <Text style={{ color: '#aeaeae', fontWeight: '400', flexShrink: 1, fontSize: 16 }} >Kami tidak akan mengirim iklan atau spam ke nomormu.</Text>
        </View>
      </View>
    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default LoginScreen;