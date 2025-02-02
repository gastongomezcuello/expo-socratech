import { StyleSheet, Text, View, Image } from "react-native";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";

import { useGetProfileImageQuery } from "../services/profileService";

const Profile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const profileImage = data?.image;

  const launchCamera = async () => {
    navigation.navigate("ImageSelector");
  };

  return (
    <View>
      {profileImage ? (
        <Image
          source={{ uri: profileImage }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require("../../assets/defaultUser.png")}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <AddButton
        title={
          profileImage ? "Cambiar foto de perfil" : "Agregar foto de perfil"
        }
        onPress={launchCamera}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    height: 200,
    aspectRatio: 1,
    alignSelf: "center",

    borderRadius: 100,
  },
});
