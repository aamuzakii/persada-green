import React from 'react'
import { ImageBackground, StyleSheet, TextInput, View, TouchableHighlight } from "react-native";


function CustomInput() {
  return (
    <TextInput
          style={{
            height: 40,
            marginVertical: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderColor: '#626262'
          }}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Masukan nomor WhatsApp"
          keyboardType="numeric"
          selectionColor="red"
        >
        </TextInput>
  )
}

export default CustomInput