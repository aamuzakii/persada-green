import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import Statistic from '../components/home/Statistic'
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { outlinedButton, fullButton, outlinedButtonLong } from '../components/SharedStyle';
import OrderCard from '../components/home/OrderCard';
import WebLink from '../components/home/WebLink';

const Home = () => {

  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'white', flexGrow: 1, padding: 8, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
        <Subheading style={{ fontWeight: 'bold' }} >Tombol Kilat</Subheading>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          {/* https://materialdesignicons.com/ */}
          <Button icon="package-variant" compact="true" mode="contained"  uppercase="false" onPress={() => console.warn('Pressed')} style={{ margin: 10 }} >Tambah Produk</Button>
          <Button icon="camera" compact="true" mode="contained"  uppercase="false" onPress={() => console.warn('Pressed')} style={{ margin: 10 }} >Tambah Banyak</Button>
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
                [1,2,3,4].map((key, i) => (
                  <OrderCard key={i} ></OrderCard>
                ))
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