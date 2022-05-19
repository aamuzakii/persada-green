import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions } from 'react-native';
import Card from '../components/orders/Card'
import { Subheading } from 'react-native-paper';

  

const Catalog = () => {

  let screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ backgroundColor: 'orange', flex: 1 }} >
        <Subheading style={{ padding: 100 }} >Produk</Subheading>
      </Text>
      <View style={{ height: (screenHeight - 200), borderColor: 'green' }} >
        <ScrollView >
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: 'blue', flex: 1 }} >
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