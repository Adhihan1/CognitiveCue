import React, { useMemo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PriceCard = ({ textMarginTop }) => {
  const row1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", textMarginTop),
    };
  }, [textMarginTop]);

  return (
    <View style={[styles.row1, row1Style]}>
      <Pressable style={[styles.item3, styles.itemPosition]}>
        <View style={styles.item3Child} />
        <Text style={[styles.item3Name, styles.textTypo]}>{`Final Game`}</Text>
        <Text style={[styles.text, styles.textTypo]}>Play</Text>
      </Pressable>
      <Pressable style={[styles.item2, styles.itemPosition]}>
        <View style={styles.item3Child} />
        <Text style={[styles.item3Name, styles.textTypo]}>{`Other Game`}</Text>
        <Text style={[styles.text, styles.textTypo]}>Play</Text>
      </Pressable>
      <Pressable style={[styles.item1, styles.itemPosition]}>
        <View style={styles.item3Child} />
        <Text
          style={[styles.item3Name, styles.textTypo]}
        >{`Example Game`}</Text>
        <Text style={[styles.text, styles.textTypo]}>Play</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    marginTop: 8,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.uI14Semi_size,
  },
  item3Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    height: 110,
    width: 110,
  },
  item3Name: {
    fontFamily: FontFamily.uI14Regular,
    width: 110,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
  },
  item3: {
    left: 246,
  },
  item2: {
    left: 123,
  },
  item1: {
    left: 0,
  },
  row1: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default PriceCard;
