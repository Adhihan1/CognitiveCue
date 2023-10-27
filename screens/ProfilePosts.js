import * as React from "react";
import { Pressable, Text, StyleSheet, View, Modal } from "react-native";
import { Image } from "expo-image";
import MainProfileContentContainer from "../components/MainProfileContentContainer";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";

const ProfilePosts = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState("error");
  return (
    <SafeAreaView style={styles.profileposts}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Text
          style={styles.settings}
          onPress={() => {
            // DISPLAY SETTINGS HERE
          }}
        >
          Settings
        </Text>
        <Text style={[styles.profile, styles.logoutSpaceBlock]}>Profile</Text>
        <Text
          style={[styles.logout, styles.logoutSpaceBlock]}
          onPress={() => {
            // LOGOUT
            navigation.navigate("LogIn");
          }}
        >
          Logout
        </Text>
      </View>
      <MainProfileContentContainer />
      <Pressable
        onPress={() => {
          // Open Notification Prefrences
          setModalText("Would You Like to Allow Notifications?");
          setModalVisible(true);
        }}
        style={[styles.optionButton, styles.privacybuttonFlexBox]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.privacy, styles.privacyTypo]}>
          Notification Preferences
        </Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          // Open Privacy
          setModalText("Would You Like to Allow Tracking?");
          setModalVisible(true);
        }}
        style={[styles.optionButton, styles.privacybuttonFlexBox]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.privacy, styles.privacyTypo]}>Privacy</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.profilepostsChild} />
      <BottomMenuBarContainer navigation={navigation} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>
            <View style={styles.modalButtons}>
              <ModalButton text="Yes" x={{ modalVisible, setModalVisible }} />
              <ModalButton text="No" x={{ modalVisible, setModalVisible }} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

function ModalButton(props) {
  return (
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => {
        props.x.setModalVisible(!props.x.modalVisible);
      }}
    >
      <Text style={styles.textStyle}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoutSpaceBlock: {
    marginLeft: 68,
    color: Color.white,
  },
  privacybuttonFlexBox: {
    borderColor: "#000",
    borderStyle: "solid",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  privacyTypo: {
    display: "flex",
    fontSize: FontSize.size_2xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poetsonOne,
    justifyContent: "center",
    alignItems: "center",
  },
  settings: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.poetsonOne,
    fontSize: FontSize.uI16Semi_size,
  },
  profile: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.novaRound,
    textAlign: "center",
    marginLeft: 68,
  },
  logout: {
    textAlign: "right",
    marginLeft: 68,
    fontFamily: FontFamily.poetsonOne,
    fontSize: FontSize.uI16Semi_size,
  },
  header: {
    backgroundColor: Color.dimgray,
    height: 69,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 43,
    height: 43,
    marginRight: "auto",
    marginLeft: 15,
  },
  notificationPreferences: {
    width: 240,
    marginLeft: 35,
  },
  arrowIcon: {
    height: 31,
    width: 22,
    marginRight: 15,
    marginLeft: "auto",
  },
  notificationprefrencesbutton: {
    borderWidth: 1,
  },
  privacy: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  vectorIcon3: {
    height: 27,
    marginLeft: 117,
    width: 22,
  },
  optionButton: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 70,
  },
  profilepostsChild: {
    width: 375,
    flex: 1,
    backgroundColor: Color.slategray,
  },
  vectorIcon4: {
    width: 64,
    height: 65,
  },
  vectorIcon5: {
    width: 48,
    marginLeft: 24,
    height: 67,
  },
  vectorIcon6: {
    height: 67,
    width: 45,
  },
  vectorIcon8: {
    height: 66,
  },
  vectorParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  bottommenubar: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  profileposts: {
    width: "100%",
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.slategray,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtons: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: FontFamily.poetsonOne,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProfilePosts;
