import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import TopHeader from "../components/TopHeader";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const Reminders = ({ navigation }) => {
  const [entries, setEntry] = React.useState([
    <Bullet>Example Reminder - 12:08</Bullet>,
  ]);
  return (
    <SafeAreaView style={[styles.reminders, styles.remindersFlexBox]}>
      <TopHeader title="Reminders" />
      <View style={[styles.date, styles.dateFlexBox]}>
        <Text style={[styles.today, styles.todayFlexBox]}>Today</Text>
      </View>
      <ScrollView>
        <View style={styles.list}>{entries}</View>
      </ScrollView>
      <Pressable
        onPress={() => {
          var timeData = new Date();
          var time = timeData.toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
          setEntry([...entries, <Bullet data={time}>Edit Text Here</Bullet>]);
        }}
        style={[styles.newentry, styles.dateFlexBox]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.newReminder, styles.thisTypo]}>New Reminder</Text>
      </Pressable>
      <View style={[styles.entrytextinput, styles.headingBg]} />
      <BottomMenuBarContainer navigation={navigation} />
    </SafeAreaView>
  );
};

function Bullet(props) {
  return (
    <View style={[styles.bullet, styles.bulletLayout]}>
      <View style={styles.bulletChild} />
      <TextInput multiline style={[styles.doThis, styles.thisTypo]}>
        {props.children}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  headingBg: {
    backgroundColor: Color.dimgray,
    justifyContent: "center",
  },
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
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
  },
  thisTypo: {
    fontFamily: FontFamily.redRoseRegular,
    textAlign: "left",
    color: Color.white,
    width: 300,
    paddingTop: 0,
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
    width: 47,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: "auto",
  },
  doThis: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redRoseRegular,
    padding: 0,
    marginLeft: 10,
  },
  bullet: {},
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
    width: 400,
  },
  newReminder: {
    color: "white",
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,

    marginLeft: 15,
    alignSelf: "center",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.redRoseRegular,
  },
  entrytextinput: {
    padding: 21,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 53,
    height: 53,
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
