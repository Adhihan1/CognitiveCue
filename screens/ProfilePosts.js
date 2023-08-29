import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import MainProfileContentContainer from "../components/MainProfileContentContainer";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ProfilePosts = () => {
  return (
    <View style={styles.profileposts}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Text style={styles.settings}>Settings</Text>
        <Text style={[styles.profile, styles.logoutSpaceBlock]}>Profile</Text>
        <Text style={[styles.logout, styles.logoutSpaceBlock]}>Logout</Text>
      </View>
      <MainProfileContentContainer />
      <Pressable
        style={[
          styles.notificationprefrencesbutton,
          styles.privacybuttonFlexBox,
        ]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text
          style={[styles.notificationPreferences, styles.privacyTypo]}
        >{`Notification Preferences `}</Text>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable style={[styles.privacybutton, styles.privacybuttonFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.privacy, styles.privacyTypo]}>Privacy</Text>
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <View style={styles.profilepostsChild} />
      <View style={[styles.bottommenubar, styles.headerFlexBox]}>
        <View style={[styles.vectorParent, styles.headerFlexBox]}>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={styles.vectorIcon5}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Image
            style={[styles.vectorIcon8, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
    </View>
  );
};

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
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  privacyTypo: {
    height: 50,
    display: "flex",
    fontSize: FontSize.size_2xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poetsonOne,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
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
  },
  notificationPreferences: {
    width: 240,
    marginLeft: 35,
  },
  vectorIcon1: {
    height: 31,
    width: 22,
    marginLeft: 35,
  },
  notificationprefrencesbutton: {
    borderWidth: 1,
  },
  privacy: {
    width: 76,
    marginLeft: 117,
  },
  vectorIcon3: {
    height: 27,
    marginLeft: 117,
    width: 22,
  },
  privacybutton: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
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
});

export default ProfilePosts;
