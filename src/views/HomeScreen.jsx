import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import Statistic from '../components/home/Statistic'
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';
import { outlinedButton, fullButton, outlinedButtonLong } from '../components/SharedStyle';
import OrderCard from '../components/home/OrderCard';

const Home = () => {

  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', flexGrow: 1 }} >
        <Subheading >Tombol Kilat</Subheading>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          {/* https://materialdesignicons.com/ */}
          <Button icon="package-variant" compact="true" mode="contained"  uppercase="false" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Produk</Button>
          <Button icon="camera" compact="true" mode="contained"  uppercase="false" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Banyak</Button>
        </View>
      </View>
      {/* SCROLL SECTION */}
      <View style={{ height: (screenHeight - 100), borderColor: 'green' }} >
        <ScrollView >
          <Statistic></Statistic>

          {/* component share link */}
          <View>
            <Caption>Bagikan link ke pelanggan</Caption>
            <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }} >
              <TouchableHighlight style={outlinedButtonLong} >
                <Caption>https://persada.store</Caption>
              </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row',  justifyContent: 'space-around' }} >
              <TouchableHighlight style={outlinedButton} >
                <Caption>Lihat Toko</Caption>
              </TouchableHighlight>
              <TouchableHighlight style={fullButton} >
                <Text style={{ color: 'white' }}>Bagikan Link Toko</Text>
              </TouchableHighlight>
            </View>
          </View>

          <ScrollView horizontal={true} style={{ backgroundColor: 'white', paddingHorizontal: 20, marginVertical: 15 }}>
            {
              [1,2,3,4].map((key, i) => (
                <OrderCard key={i} ></OrderCard>
              ))
            }
          </ScrollView>

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