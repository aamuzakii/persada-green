import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView, ScrollView, StatusBar, View, Dimensions } from 'react-native';
import Card from '../components/catalog/Card'
import { Subheading, Button, Searchbar  } from 'react-native-paper';
import { grey } from '../components/SharedStyle';
import { fetchAllProducts } from '../reducer/reducer'
import { useDispatch, useSelector } from 'react-redux';

const Catalog = ({navigation}) => {

  let screenHeight = Dimensions.get('window').height;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);

  let productList = useSelector( state => state.allProducts)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', flexGrow: 1, padding: 10 }} >
        <Subheading >Produk</Subheading>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ borderRadius: 10 }}
        />
      </View>
      <View style={{ height: (screenHeight - 300), backgroundColor: 'green' }} >
        <ScrollView style={{ backgroundColor: '#f5f6f8' }} contentContainerStyle={{ alignItems: 'center' }} >
          {
            productList && productList.map((data, i) => (
              <Card {...data} key={i} />
            ))
          }
        </ScrollView>
      </View>
      <View style={{ backgroundColor: '#fafafa', flexGrow: 1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'  }} >
        <Button uppercase={false} mode="outlined" onPress={() => navigation.navigate('Details')} style={{ margin: 0, width: 150, height: 40 }} >Tambah Banyak</Button>
        <Button uppercase={false} mode="contained" onPress={() => navigation.navigate('Detail Produk Baru')} style={{ margin: 0, width: 150, height: 40 }} >Tambah Produk</Button>
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