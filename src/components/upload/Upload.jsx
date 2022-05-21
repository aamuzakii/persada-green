import * as React from "react";
import {
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import uplodImageFromDevice from "./uploadImageFromDevice";
import cloudinaryUpload from './cloudinary'
import { useUploadToCloudinary } from "./react-native-file-upload-copy";

export default function Upload() {
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
      }
      console.log("NYAMPEE")
  
    } catch (error) {
      console.log(error)
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
      console.log(a)

    } catch (error) {
      console.log(error)
    }


    // const blob = await getBlobFromUri(imgURI);

    // await manageFileUpload(blob, { onStart, onProgress, onComplete, onFail });
  };

  return (
    <View style={{ height: 200, backgroundColor: 'red'  }} >
      <Text >Attach and upload image</Text>
      {Boolean(imgURI) && (
        <View>
          <Image
            source={{ uri: imgURI }}
            resizeMode="contain"
            style={{ width, height: 100 }}
          />
        </View>
      )}

      {!isUploading && (
        <View >
          <AntDesign
            name="addfile"
            size={36}
            color={imgURI ? "green" : "black"}
            onPress={handleLocalImageUpload}
          />

          {Boolean(imgURI) && (
            <Feather
              name="upload-cloud"
              size={36}
              color="black"
              onPress={handleCloudImageUpload}
            />
          )}
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
