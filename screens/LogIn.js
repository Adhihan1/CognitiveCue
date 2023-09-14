import * as React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import InputText from "../components/InputText";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LogIn = ({navigation}) => {
  const [selected, setSelected] = React.useState(false);

  const styles = getStyles(selected);

  const [Email, setEmail] = React.useState("")
  const [Password, setPassword] = React.useState("")

  return (
    <View style={[styles.logIn, styles.frameFlexBox]}>
      <Text style={[styles.LogIn1, styles.logIn1Typo]}>Log In</Text>
      <View style={styles.logininputsParent}>
        <View style={styles.logininputs}>
          <InputText
            inputTextWidth="unset"
            inputTextAlignSelf="stretch"
            inputTextMarginTop={38}
            defaultText="Email"
            secure={false}
            textValue={setEmail}
          />
          <InputText
            inputTextWidth="unset"
            inputTextAlignSelf="stretch"
            inputTextMarginTop={38}
            defaultText="Password"
            secure={true}
            textValue={setPassword}
          />
        </View>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <TouchableOpacity
            onPress={() => {
              setSelected(!selected);
              //Log In
              console.log(Email, Password)
            }}
            style={styles.loginbutton}
          >
            <Text style={styles.signinlinkTypo}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(!selected);
              navigation.navigate('SignUp');
            }}
            style={[styles.signinlink, styles.signinlinkTypo]}
          >SignUp</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const getStyles = (selected) => StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logIn1Typo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.novaRound,
  },
  signinlinkTypo: {
    fontFamily: FontFamily.rosarioRegular,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: selected ? "#FFFFFF" : Color.white,
  },
  LogIn1: {
    fontSize: FontSize.size_41xl,
    alignSelf: "stretch",
  },
  loginsubtext: {
    fontSize: 20,
    width: 343,
    height: 35,
    marginTop: 15,
  },
  logininputs: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginbutton: {
    borderRadius: Border.br_81xl,
    backgroundColor: selected ? "#404263" : Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signinlink: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  frame: {
    marginTop: 49,
    alignSelf: "stretch",
    alignItems: "center",
  },
  logininputsParent: {
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
  },
  logIn: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    paddingHorizontal: 13,
    paddingVertical: Padding.p_49xl,
    alignItems: "center",
  },
});

export default LogIn;