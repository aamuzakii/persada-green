import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import Statistic from '../components/home/Statistic'
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { outlinedButton, fullButton, outlinedButtonLong } from '../components/SharedStyle';
import OrderCard from '../components/home/OrderCard';
import WebLink from '../components/home/WebLink';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { fetchOrderByStatus } from '../reducer/reducer';
import { useSelector } from 'react-redux';


const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {

    dispatch(fetchOrderByStatus("all"))

  }, [])

  let orderList = useSelector( state => state.orderByType)


  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  async function setToken() {
    await SecureStore.setItemAsync("foo", "ateeeem");
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'white', flexGrow: 1, padding: 8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
        <Subheading style={{ fontWeight: 'bold' }} >Tombol Kilat</Subheading>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          {/* https://materialdesignicons.com/ */}
          <Button icon="package-variant" compact="true" mode="contained"  uppercase="false" onPress={() => setToken()} style={{ margin: 10 }} >Tambah Produk</Button>
          <Button icon="camera" compact="true" mode="contained"  uppercase="false" onPress={() => getValueFor("token")} style={{ margin: 10 }} >Tambah Banyak</Button>
        </View>
      </View>
      {/* SCROLL SECTION */}
      <View style={{ height: (screenHeight - 100), borderColor: 'green' }} >
        <ScrollView >
          {/* <Statistic></Statistic> */}

          {/* component share link */}
          <WebLink></WebLink>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginVertical: 15, paddingTop: 15 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
              <Text style={{ fontWeight: 'bold' }} >Pesanan Baru</Text>
              <Text style={{ fontWeight: 'bold', color: '#301b92' }} >Lihat Semua</Text>
            </View>
            <ScrollView horizontal={true} style={{ marginVertical: 15 }}>
              {
                orderList.map((commonProps, index) => {
                  return (
                  <OrderCard {...commonProps} key={index}></OrderCard>
                )})
              }
            </ScrollView> 
          </View>
         

          <View id='bemper' style={{ height: 80 }} ></View>


        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Home;