import React from 'react'
import { ImageBackground, StyleSheet, TextInput, View, TouchableHighlight, Text } from "react-native";
import { passwordLogin } from '../../reducer/reducer'
import { useDispatch } from 'react-redux';


function CustomInput() {

  const [email, setEmail] = React.useState('dev@persada.store')
  const [password, setPassword] = React.useState('123')

  const dispatch = useDispatch()

  const login = () => {
    dispatch(passwordLogin({ email, password }))
  }

  return (
    <>
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
          value={email}
          placeholder="Password"
          // keyboardType="numeric"
          selectionColor="red"
        />
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
          value={password}
          placeholder="Masukan nomor WhatsApp"
          keyboardType="numeric"
          selectionColor="red"
        />

<TouchableHighlight onPress={login} >
          <View style={{
            alignItems: "center",
            backgroundColor: "#311b92",
            padding: 10,
            borderRadius: 10,
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }} >Verifikasi dengan SMS</Text>
          </View>
        </TouchableHighlight>
    </>
  )
}

export default CustomInput