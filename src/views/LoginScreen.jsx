import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";

const image = { uri: "https://res.cloudinary.com/dm9ufmxnq/image/upload/v1653724772/wp3152237_tzuzzj.png" };

const submitPhoneNumber = () => {

}

const LoginScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ padding: 25, backgroundColor: 'white', height: 400, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} >
        <Text style={{ fontWeight:'bold', fontSize: 17 }} >Silakan Masukkan nomor telepon kamu</Text>
        <Text style={{ color: '#626262', fontSize: 15, marginVertical: 25 }} >Nomor WhatsApp valid dibutuhkan untuk mengatur pesanan dan toko</Text>
        <Text>Nomor WhatsApp</Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderColor: '#626262'
          }}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
          selectionColor="red"
        >
        </TextInput>
        <TouchableHighlight>
          <View style={{
            alignItems: "center",
            backgroundColor: "#311b92",
            padding: 10,
            borderRadius: 10,
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }} >Verifikasi dengan SMS</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  </View>
);

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