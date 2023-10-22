import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Reminders = () => {
  return (
    <View style={[styles.reminders, styles.remindersFlexBox]}>
      <View style={[styles.header, styles.dateFlexBox]}>
        <Text style={[styles.reminders1, styles.todayFlexBox]}>Reminders</Text>
      </View>
      <View style={[styles.date, styles.dateFlexBox]}>
        <Text style={[styles.today, styles.todayFlexBox]}>Today</Text>
      </View>
      <View style={styles.list}>
        <View style={[styles.bullet, styles.bulletLayout]}>
          <Image
            style={styles.bulletChild}
            contentFit="cover"
            source={require("../assets/ellipse-116.png")}
          />
          <Text style={[styles.doThis, styles.thisTypo]}>Do this</Text>
        </View>
        <View style={[styles.bullet1, styles.bulletLayout]}>
          <Image
            style={styles.bulletChild}
            contentFit="cover"
            source={require("../assets/ellipse-116.png")}
          />
          <Text style={[styles.doThis1, styles.thisTypo]}>Do this</Text>
        </View>
        <View style={[styles.bullet1, styles.bulletLayout]}>
          <Image
            style={styles.bulletChild}
            contentFit="cover"
            source={require("../assets/ellipse-116.png")}
          />
          <Text style={[styles.doThis, styles.thisTypo]}>Do this</Text>
        </View>
      </View>
      <Pressable style={[styles.newentry, styles.dateFlexBox]}>
        <Text style={[styles.newReminder, styles.thisTypo]}>New Reminder</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={[styles.bottommenubar, styles.remindersFlexBox]}>
        <View style={[styles.vectorParent, styles.dateFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  remindersFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  dateFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  todayFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  bulletLayout: {
    width: 172,
    height: 48,
  },
  thisTypo: {
    fontFamily: FontFamily.redRoseRegular,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
  },
  reminders1: {
    marginTop: -23.5,
    marginLeft: -84.53,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.novaRound,
    transform: [
      {
        rotate: "1.32deg",
      },
    ],
    zIndex: 0,
    position: "absolute",
  },
  header: {
    backgroundColor: Color.dimgray,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  today: {
    fontSize: 50,
    fontWeight: "700",
    fontFamily: FontFamily.amaranthBold,
  },
  date: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  bulletChild: {
    top: 0,
    left: 0,
    width: 47,
    height: 48,
    position: "absolute",
  },
  doThis: {
    top: 2,
    fontSize: FontSize.size_11xl,
    left: 70,
    fontFamily: FontFamily.redRoseRegular,
  },
  bullet: {
    height: 48,
  },
  doThis1: {
    top: 6,
    fontSize: FontSize.size_11xl,
    left: 70,
    fontFamily: FontFamily.redRoseRegular,
  },
  bullet1: {
    marginTop: 30,
    height: 48,
  },
  list: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 40,
    alignSelf: "stretch",
    flex: 1,
  },
  newReminder: {
    top: 14,
    left: 56,
    fontSize: FontSize.size_6xl,
    display: "flex",
    width: 239,
    height: 45,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon: {
    width: 53,
    height: 52,
    zIndex: 1,
    marginLeft: 10,
  },
  newentry: {
    height: 68,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  vectorIcon1: {
    width: 64,
    height: 65,
  },
  vectorIcon2: {
    width: 48,
    marginLeft: 24,
    height: 67,
  },
  vectorIcon3: {
    height: 67,
    width: 45,
  },
  vectorIcon5: {
    height: 66,
  },
  vectorParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  bottommenubar: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  reminders: {
    backgroundColor: Color.slategray,
    width: "100%",
    height: 823,
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Reminders;
