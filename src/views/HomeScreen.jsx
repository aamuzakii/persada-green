import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Card from '../components/orders/Card'


const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'rgba(217, 217, 217, 0.8)',
    marginHorizontal: 20,
    flex: 1
  },
  text: {
    fontSize: 42,
  },
});

export default Home;