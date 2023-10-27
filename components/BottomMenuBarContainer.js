import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color } from "../GlobalStyles";

const BottomMenuBarContainer = (props) => {
  const navigation = props.navigation;
  return (
    <Pressable style={[styles.bottommenubar, styles.vectorParentFlexBox]}>
      <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
        <Pressable
          onPress={() => {
            navigation.navigate("Reminders");
          }}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Journal");
          }}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Games");
          }}
        >
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Rating");
          }}
        >
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
  },
  vectorIcon: {
    width: 64,
    height: 65,
  },
  vectorIcon1: {
    width: 48,
    marginLeft: 24,
    height: 67,
  },
  vectorIcon2: {
    height: 67,
    width: 45,
  },
  vectorIcon4: {
    height: 66,
  },
  vectorParent: {
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
  },
  bottommenubar: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
});

export default BottomMenuBarContainer;
