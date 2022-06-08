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

  const statuses = [{name: 'Semua Pesanan', val: 'all'}, {name: 'Pesanan Baru', val: 'new'}, {name: 'Dikirim', val: 'delivering'}, {name: 'Selesai', val: 'finish'}, {name: 'Gagal', val: 'failed'}]

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', padding: 3 }} >
        <ScrollView horizontal={true} style={{ marginVertical: 15 }}>
          {
            statuses.map((item, i)=> (
              <View key={i} style={{ backgroundColor: '#301b92', borderRadius: 10, paddingHorizontal: 10, paddingBottom: 1, justifyContent: 'center', height: 25, marginHorizontal: 5 }} ><Text style={{ color: 'white', fontSize: 10 }} >{item.name}</Text></View>
            ))
          }
        </ScrollView>
      </View>
      <View style={{ height: (screenHeight - 170), borderColor: 'green' }} >
        <ScrollView >
          {
            orderList.map((commonProps, index) => {
              return (
              <OrderCard {...commonProps} key={index}></OrderCard>
            )})
          }
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