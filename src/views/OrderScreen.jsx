import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, RefreshControl } from 'react-native';
import OrderCard from '../components/orders/OrderCard';
import { Subheading, Button, Searchbar  } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { fetchOrderByStatus } from '../reducer/reducer';
import { useSelector } from 'react-redux';



const OrderScreen = () => {

  let screenHeight = Dimensions.get('window').height;

  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  React.useEffect(() => {
    dispatch(fetchOrderByStatus("all"))
  }, [])

  let orderList = useSelector( state => state.orderByType)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', flexGrow: 1, padding: 10 }} >
      </View>
      <View style={{ height: (screenHeight - 300), borderColor: 'green' }} >
        <ScrollView >
          {
            orderList.map((commonProps, index) => {
              return (
              <OrderCard {...commonProps} key={index}></OrderCard>
            )})
          }
        </ScrollView>
      </View>
      <View style={{ backgroundColor: '#fafafa', flexGrow: 1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'  }} >
        <Button mode="outlined" onPress={() => console.warn('Pressed')} style={{ margin: 0, width: 150, height: 40 }} >Tambah Banyak</Button>
        <Button mode="contained" onPress={() => console.warn('Pressed')} style={{ margin: 0, width: 150, height: 40 }} >Tambah Produk</Button>
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

export default OrderScreen;
// https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable