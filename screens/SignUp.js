import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import InputText from "../components/InputText";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={[styles.signUp, styles.frameFlexBox]}>
      <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
      <Text style={[styles.signupsubtext, styles.signUp1Typo]}>
        to join the community
      </Text>
      <View style={styles.signupinputsParent}>
        <View style={styles.signupinputs}>
          <InputText
            inputTextWidth="unset"
            inputTextAlignSelf="stretch"
            inputTextMarginTop="unset"
          />
          <InputText
            inputTextWidth="unset"
            inputTextAlignSelf="stretch"
            inputTextMarginTop={38}
          />
          <InputText
            inputTextWidth="unset"
            inputTextAlignSelf="stretch"
            inputTextMarginTop={38}
          />
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Pressable style={styles.signupbutton}>
            <Text style={styles.loginlinkTypo}>Sign Up</Text>
          </Pressable>
          <Text style={[styles.loginlink, styles.loginlinkTypo]}>Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  signUp1Typo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.novaRound,
  },
  loginlinkTypo: {
    fontFamily: FontFamily.rosarioRegular,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.white,
  },
  signUp1: {
    fontSize: FontSize.size_41xl,
    alignSelf: "stretch",
  },
  signupsubtext: {
    fontSize: 20,
    width: 343,
    height: 35,
    marginTop: 15,
  },
  signupinputs: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  signupbutton: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginlink: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  frame: {
    marginTop: 49,
    alignSelf: "stretch",
    alignItems: "center",
  },
  signupinputsParent: {
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUp: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    paddingHorizontal: 13,
    paddingVertical: Padding.p_49xl,
    alignItems: "center",
  },
});

export default SignUp;
