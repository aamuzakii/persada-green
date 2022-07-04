import React from 'react'
import { ImageBackground, StyleSheet, TextInput, View, TouchableHighlight, Text } from "react-native";
import { passwordLogin } from '../../reducer/reducer'
import { useDispatch } from 'react-redux';
import { Checkbox } from 'react-native-paper';

function CustomInput() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [checked, setChecked] = React.useState(false);

  const dispatch = useDispatch()

  const handleTickCheckBox = () => {
    setChecked(!checked)
    setEmail('dev@persada.store')
    setPassword('123')
  }

  const onChangeNumber =() => {

  }

  const touchableHighlightStyle = {
    alignItems: "center",
    backgroundColor: "#311b92",
    padding: 10,
    borderRadius: 10,
  }

  const login = () => {
    dispatch(passwordLogin({ email, password }))
  }

  const inputStyle = {
    height: 40,
    marginVertical: 12,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#626262'
  }

  return (
    <>
      <Text>Email</Text>
      <TextInput style={inputStyle} onChangeText={onChangeNumber} value={email} placeholder="Password" selectionColor="red" />
      <Text>Password</Text>
      <TextInput style={inputStyle} onChangeText={onChangeNumber} value={password} placeholder="Masukan nomor WhatsApp" selectionColor="red" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={handleTickCheckBox} color="blue"  />
        <Text>Masuk sebagai tamu</Text>
      </View>
      <TouchableHighlight onPress={login} >
        <View style={touchableHighlightStyle}>
          <Text style={{ color: 'white', fontWeight: 'bold' }} >Masuk</Text>
        </View>
      </TouchableHighlight>
    </>
  )
}

export default CustomInput