import * as React from "react";
import {
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import uplodImageFromDevice from "./uploadImageFromDevice";
import { useUploadToCloudinary } from "./cloudinaryUpload";

export default function ProductPicture({ setImageURIParent }) {
  const [imgURI, setImageURI] = React.useState(null);

  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [remoteURL, setRemoteURL] = React.useState("");

  const [error, setError] = React.useState(null);
  const { width, height } = useWindowDimensions();

  const handleLocalImageUpload = async () => {
    try {
      const fileURI = await uplodImageFromDevice();

      if (fileURI) {
        setImageURI(fileURI);
        setImageURIParent(fileURI)
      }
  
    } catch (error) {
      console.error(error)
    }
  };

  const onStart = () => {
    setIsUploading(true);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const onComplete = (fileUrl) => {
    setRemoteURL(fileUrl);
    setIsUploading(false);
    setImageURI(null);
  };

  const onFail = (error) => {
    setError(error);
    setIsUploading(false);
  };

  const handleCloudImageUpload = async () => {
    if (!imgURI) return;

    try {

      let a = useUploadToCloudinary(imgURI)

    } catch (error) {
      console.error(error)
    }
  };

  let boxSize = width * 23 /100

  return (
    <View style={{ height: 150, flexDirection: 'row', alignItems: 'center'  }} >
      {Boolean(imgURI) && (
        <View style={{ width: boxSize, marginHorizontal: 10 }} >
          <View style={{ position: 'absolute', zIndex: 100, right: 0 }} ><Ionicons
            name="ios-close-circle"
            size={20}
            color="white"
            // onPress={deleteFromURI}
          /></View>
          <Image
            source={{ uri: imgURI }}
            resizeMode="contain"
            style={{ height: boxSize, borderRadius: 10 }}
          />
        </View>
      )}

      {!isUploading && (
        <View style={{ borderColor: 'grey', borderStyle: 'dashed', borderWidth: 2, borderRadius: 8, height: boxSize, width: boxSize, alignItems: 'center', justifyContent: 'center' }} >
          <Ionicons
            name="ios-camera"
            // name="ios-camera-reverse"
            size={23}
            color={imgURI ? "#301b92" : "black"}
            onPress={handleLocalImageUpload}
          />
        </View>
      )}

      {isUploading && (
        <View >
          <Text> Upload {progress} of 100% </Text>
        </View>
      )}

      {Boolean(remoteURL) && (
        <View style={{ paddingVertical: 20 }}>
          <Text>
            Image has been uploaded at
            <Text style={{ color: "blue" }}> {remoteURL} </Text>
          </Text>
        </View>
      )}
    </View>
  );
}
