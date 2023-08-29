import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MainProfileContentContainer = () => {
  return (
    <View style={styles.mainprofilecontent}>
      <Image
        style={styles.profilepictureIcon}
        contentFit="cover"
        source={require("../assets/profilepicture.png")}
      />
      <View style={styles.nameandbio}>
        <Text style={[styles.victoriaRobertson, styles.aMantraGoesFlexBox]}>
          Victoria Robertson
        </Text>
        <Text style={[styles.aMantraGoes, styles.aMantraGoesFlexBox]}>
          A mantra goes here
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aMantraGoesFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  profilepictureIcon: {
    width: 198,
    height: 198,
  },
  victoriaRobertson: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poetsonOne,
  },
  aMantraGoes: {
    top: 44,
    left: 35,
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    display: "none",
  },
  nameandbio: {
    width: 221,
    height: 30,
    marginTop: 11,
  },
  vectorIcon: {
    width: 272,
    height: 50,
    marginTop: 11,
  },
  mainprofilecontent: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_28xl,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainProfileContentContainer;
