import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions } from 'react-native';
import Card from '../components/catalog/Card'
import { Subheading, Button, Searchbar, TextInput } from 'react-native-paper';

import { grey } from '../components/SharedStyle';

const Catalog = () => {

  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: (screenHeight - 300), backgroundColor: 'green' }} >
        <ScrollView style={{ backgroundColor: 'white' }}  contentContainerStyle={{ alignItems: 'center' }} >
          <TextInput dense={true} textStyle={{ height: 100 }} label="Nama Produk*" placeholder='Cth: Beras Premium' style={{ borderRadius: 0 }} caretHidden={true} mode='outlined'  value={text} onChangeText={text => setText(text)} />
          <TextInput textStyle={{ height: 100 }} label="Harga Produk*" placeholder='Cth: Beras Premium' style={{ borderRadius: 0 }} caretHidden={true} mode='outlined'  value={text} onChangeText={text => setText(text)} />
          <TextInput  numberOfLines={8} multiline={true} textStyle={{ height: 100 }} label="Harga Produk*" placeholder='Cth: Beras Premium' style={{ borderRadius: 0 }} caretHidden={true} mode='outlined'  value={text} onChangeText={text => setText(text)} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    backgroundColor: 'white',
    flex: 1
  },
  text: {
    fontSize: 42,
  },
  one: {
    backgroundColor: 'red',
    flexGrow: 1
    // height: 50
  },
  tengah: {
    backgroundColor: 'blue',
    flex: 6
    // height: 50
  },
  bwh: {
    backgroundColor: 'cyan',
    flexGrow: 1
    // height: 50
  }
});

export default Catalog;
// https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable