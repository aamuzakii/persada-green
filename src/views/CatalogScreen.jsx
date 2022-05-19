import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions } from 'react-native';
import Card from '../components/orders/Card'
import { Subheading, Button, Searchbar  } from 'react-native-paper';

  

const Catalog = () => {

  let screenHeight = Dimensions.get('window').height;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', flexGrow: 1, padding: 10 }} >
        <Subheading >Produk</Subheading>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ height: (screenHeight - 200), borderColor: 'green' }} >
        <ScrollView >
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: '#fafafa', flexGrow: 1, flexDirection: 'row', padding: 10  }} >
        <Button mode="contained" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Produk</Button>
        <Button mode="contained" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Banyak</Button>
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