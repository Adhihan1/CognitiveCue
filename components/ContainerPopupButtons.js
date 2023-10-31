import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ContainerPopupButtons = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.popup}>
      <View style={styles.bg}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.howAreYou, styles.text1Clr]}>
            HOW ARE YOU LIKING OUR APP SO FAR?
          </Text>
          <Text style={[styles.text1, styles.text1Clr]} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={[styles.buttonprimary, styles.notRightNowPosition]}
        >
          <Text style={styles.iLoveIt}>I love it!</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={[styles.notRightNow, styles.notRightNowPosition]}>
            Not right now.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notRightNowPosition: {
    width: 311,
  },
  textLayout: {
    width: 315,
  },
  text1Clr: {
    color: Color.black,
    textAlign: "center",
  },
  bg: {
    borderRadius: Border.br_5xs,
    width: 383,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 50,
  },
  iLoveIt: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poetsonOne,
    color: Color.white,
    textAlign: "center",
  },
  buttonprimary: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
  },
  notRightNow: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.redRoseBold,
    color: Color.dimgray,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
  },
  howAreYou: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.openSansBold,
    width: 315,
    fontWeight: "700",
    textAlign: "center",
  },
  text1: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "800",
    fontFamily: FontFamily.ostrich,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    marginTop: 20,
  },
  vectorIcon: {
    width: 322,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  popup: {
    width: 343,
    height: 427,
    display: "flex",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default ContainerPopupButtons;
