import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.loginheader}>Log In</Text>
        <View style={[styles.inputs, styles.frameFlexBox]}>
          <TextInput
            style={styles.emailinputTypo}
            placeholder="Email"
            placeholderTextColor="#bdbdbd"
          />
          <TextInput
            style={[styles.passwordinput, styles.emailinputTypo]}
            placeholder="Password"
            placeholderTextColor="#bdbdbd"
          />
        </View>
        <Pressable style={[styles.loginbutton, styles.frameFlexBox]}>
          <Text style={[styles.loginbuttontext, styles.singuplinkTypo]}>
            Log In
          </Text>
        </Pressable>
        <Text style={[styles.singuplink, styles.singuplinkTypo]}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  emailinputTypo: {
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    height: 50,
    alignSelf: "stretch",
  },
  singuplinkTypo: {
    fontFamily: FontFamily.rosarioRegular,
    color: Color.white,
  },
  loginheader: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.novaRound,
    height: 74,
    textAlign: "center",
    color: Color.white,
    alignSelf: "stretch",
  },
  passwordinput: {
    marginTop: 38,
  },
  inputs: {
    marginTop: 31,
  },
  loginbuttontext: {
    fontSize: FontSize.size_16xl,
    textAlign: "center",
  },
  loginbutton: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    marginTop: 31,
  },
  singuplink: {
    fontSize: FontSize.size_11xl,
    textAlign: "right",
    marginTop: 31,
  },
  frame: {
    height: 368,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  logIn: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_49xl,
    paddingRight: 17,
    paddingBottom: 317,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LogIn;
