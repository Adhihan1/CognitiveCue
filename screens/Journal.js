import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Journal = () => {
  return (
    <View style={styles.journal}>
      <View style={[styles.heading, styles.headingFlexBox]}>
        <Text style={[styles.journal1, styles.journal1FlexBox]}>Journal</Text>
      </View>
      <View style={styles.journals}>
        <Image
          style={styles.imageIconLayout}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
      </View>
      <Pressable style={[styles.newentry, styles.headingFlexBox]}>
        <Text style={[styles.newEntry, styles.journal1FlexBox]}>New Entry</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <TextInput style={[styles.entrytextinput, styles.headingBg]} />
      <BottomMenuBarContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  headingFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  journal1FlexBox: {
    zIndex: 0,
    display: "flex",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  imageIconLayout: {
    height: 156,
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_49xl,
    alignSelf: "stretch",
    width: "100%",
  },
  headingBg: {
    backgroundColor: Color.dimgray,
    justifyContent: "center",
  },
  journal1: {
    marginTop: -32.5,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.novaRound,
    width: 375,
    height: 65,
  },
  heading: {
    backgroundColor: Color.dimgray,
    justifyContent: "center",
  },
  imageIcon1: {
    marginTop: 22,
  },
  journals: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 43,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  newEntry: {
    top: 14,
    left: 31,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.redRoseRegular,
    width: 239,
    height: 45,
  },
  vectorIcon: {
    width: 53,
    height: 52,
    zIndex: 1,
    marginLeft: 10,
  },
  newentry: {
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_3xs,
  },
  entrytextinput: {
    padding: 11,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  journal: {
    backgroundColor: Color.slategray,
    height: 812,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});

export default Journal;
