import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { View } from 'react-native'

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginVertical: 15, paddingTop: 15 }} >
        <Checkbox.Item label="Lunas" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
        <Checkbox.Item label="Belum Lunas" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
      </View>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginVertical: 15, paddingTop: 15 }} >
        <Checkbox.Item label="Pesanan Baru" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
        <Checkbox.Item label="Gagal Diambil" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
      </View>
    </>
    
  );
};

export default MyComponent;