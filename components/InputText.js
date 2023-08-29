import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputText = ({
  inputTextWidth,
  inputTextAlignSelf,
  inputTextMarginTop,
}) => {
  const inputTextStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputTextWidth),
      ...getStyleValue("alignSelf", inputTextAlignSelf),
      ...getStyleValue("marginTop", inputTextMarginTop),
    };
  }, [inputTextWidth, inputTextAlignSelf, inputTextMarginTop]);

  return (
    <View style={[styles.inputtext, inputTextStyle]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.show, styles.nameTypo]}>Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  name: {
    left: 16,
    color: Color.gray03,
    textAlign: "left",
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    display: "none",
  },
  inputtext: {
    width: 343,
    height: 50,
  },
});

export default InputText;
