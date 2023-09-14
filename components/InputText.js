import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputText = ({
  inputTextWidth,
  inputTextAlignSelf,
  inputTextMarginTop,
  defaultText,
  secure,
  textValue
}) => {
  const inputTextStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputTextWidth),
      ...getStyleValue("alignSelf", inputTextAlignSelf),
      ...getStyleValue("marginTop", inputTextMarginTop),
    };
  }, [inputTextWidth, inputTextAlignSelf, inputTextMarginTop]);

  const [isSecure, setSecure] = React.useState(secure)

  const styles = getStyles(secure);

  return (
    <View style={[styles.inputtext, inputTextStyle]}>
      <TextInput
        style={[styles.name]}
        placeholder={defaultText}
        placeholderTextColor={"#bdbdbd"}
        secureTextEntry={isSecure}
        onChangeText={newText => textValue(newText)}
      ></TextInput>
      <Text
        onPress={() => {
          console.log("pressed", isSecure)
          if (isSecure == false) {
            setSecure(true)
          } else {
            setSecure(false)
          }
        }}
        style={[styles.show]}
      >Show</Text>
    </View>
  );
};

const getStyles = (secure) => StyleSheet.create({
  name: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    color: Color.gray03,
    textAlign: "left",
    width: "100%"
  },
  inputtext: {
    width: 343,
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: 15
  },
  show: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    color: Color.slategray,
    textAlign: "right",
    right: 15,
    display: secure ? "block" : "none",
    position: "absolute"
  }
});

export default InputText;
