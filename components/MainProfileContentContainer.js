import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import * as ImagePicker from  'expo-image-picker'
import DialogInput from 'react-native-dialog-input'

const MainProfileContentContainer = () => {
  const [image, setImage] = React.useState(require("../assets/profilepicture.jpg"));
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);
  const [profileName, setProfileName] = React.useState("Victoria Robertson");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.mainprofilecontent}>
      <View 
        style={styles.profilepicture}
      >
        <Image
          style={styles.profilepictureIcon}
          contentFit="cover"
          source={image}
        />
      </View>
      <View style={styles.nameandbio}>
        <Text style={[styles.victoriaRobertson, styles.aMantraGoesFlexBox]}>
          {profileName}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          // Change Image Prompt
          setIsDialogVisible(true)
        }}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <DialogInput isDialogVisible={isDialogVisible}
        title={"New Name"}
        message={"Type a new name for your profile"}
        hintInput ={"HINT INPUT"}
        submitInput={ (inputText) => {
          setProfileName(inputText);
          setIsDialogVisible(false);
          pickImage()
        } }
        closeDialog={ () => {setIsDialogVisible(false)}}>
      </DialogInput>
    </View>
  );
};

const styles = StyleSheet.create({
  aMantraGoesFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  profilepicture: {
    width: 250,
    height: 250,
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 200,
    borderColor: Color.white,
    overflow: "hidden",
    position: "relative",
    marginBottom: 10
  },
  profilepictureIcon: {
    width: 250,
    height: 250,
  },
  victoriaRobertson: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poetsonOne,
  },
  nameandbio: {
    width: 221,
  },
  vectorIcon: {
    width: 272,
    height: 50,
    marginTop: 10,
  },
  mainprofilecontent: {
    alignSelf: "stretch",
    paddingHorizontal: 26,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
});

export default MainProfileContentContainer;
