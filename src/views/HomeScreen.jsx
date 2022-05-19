import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import Statistic from '../components/home/Statistic'
import { Subheading, Button, Searchbar, Caption  } from 'react-native-paper';

const Home = () => {

  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#f4f6f8', flexGrow: 1, padding: 10 }} >
        <Subheading >Tombol Kilat</Subheading>
        <View style={{ flexDirection: 'row' }} >
          <TouchableHighlight style={{
            width: screenWidth * 45 / 100,
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2.5,
            borderColor: '#301b92',
            color: '#301b92',
            flexDirection: 'row',
            justifyContent: 'center'
          }} >
            <Subheading>Lihat Toko</Subheading>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ height: (screenHeight - 100), borderColor: 'green' }} >
        <ScrollView >
          <Statistic></Statistic>
          <View>
            <Caption>Bagikan link ke pelanggan</Caption>
            <View></View>
            <View style={{ flexDirection: 'row' }} >
              
              {/* <Button mode="contained" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Produk</Button>
              <Button mode="contained" onPress={() => console.log('Pressed')} style={{ margin: 10 }} >Tambah Banyak</Button> */}
            </View>
          </View>
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

export default Home;