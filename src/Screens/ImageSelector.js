import { StyleSheet, View, Image, Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { usePutProfileImageMutation } from "../services/profileService";
import AddButton from "../Components/AddButton";
import { setCameraImage } from "../features/auth/authSlice";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const localId = useSelector((state) => state.auth.value.localId);
  const [triggerSaveProfileImage] = usePutProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (result.canceled) {
        return;
      }
      setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
    }
  };
  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <AddButton title="Tomar otra fotografía" onPress={pickImage} />
          <AddButton title="Confirmar fotografía" onPress={confirmImage} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text>Sin imagen para mostrar</Text>
          </View>
          <AddButton title="Tomar fotografía" onPress={pickImage} />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    aspectRatio: 1,
    borderRadius: 100,
  },
  noPhotoContainer: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
  },
});
