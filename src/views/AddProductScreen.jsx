import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Dimensions } from 'react-native';
import Card from '../components/catalog/Card'
import { Subheading, Button, Searchbar, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { postNewProduct } from '../reducer/reducer';
import * as MediaLibrary from 'expo-media-library';
import ProductPicture from '../components/upload/ProductPicture';
import { useUploadToCloudinary } from '../components/upload/cloudinaryUploadTwo';

const Catalog = ({ navigation }) => {

  let screenHeight = Dimensions.get('window').height;
  let screenWidth = Dimensions.get('window').width;

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    let secureURL = await useUploadToCloudinary(imageURI)
    console.log(secureURL, `<<<<`)
    dispatch(postNewProduct({ name, price, desc }))
    if ("success post") {
      setName("")
      setPrice("")
      setDesc("")
    }
  }

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [imageURI, setImageURI] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: (screenHeight - 300), backgroundColor: 'green' }} >
        <ScrollView style={{ backgroundColor: 'white' }}  contentContainerStyle={{ alignItems: 'center' }} >
          <View style={{ alignItems: 'flex-start', flexDirection: 'row', width: screenWidth * 90 /100, backgroundColor: 'green' }} >
            <ProductPicture setImageURIParent={setImageURI} />
          </View>
          <TextInput dense={true} textStyle={{ height: 100 }} label="Nama Produk*" placeholder='Cth: Beras Premium' caretHidden={true} mode='outlined'  value={name} onChangeText={name => setName(name)} style={{ width: screenWidth * 90 /100 }} />
          <TextInput textStyle={{ height: 100 }} label="Harga Produk*" placeholder='Cth: Beras Premium' caretHidden={true} mode='outlined'  value={price} onChangeText={price => setPrice(price)} style={{ width: screenWidth * 90 /100 }} />
          <TextInput  numberOfLines={8} multiline={true} textStyle={{ height: 100 }} label="Harga Produk*" placeholder='Cth: Beras Premium' caretHidden={true} mode='outlined'  value={desc} onChangeText={desc => setDesc(desc)} style={{ width: screenWidth * 90 /100 }} />
          <Button uppercase={false} mode="contained" onPress={handleSubmit} style={{ margin: 10, width: 150, height: 40 }} >Tambah</Button>
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

export default Catalog;
// https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable