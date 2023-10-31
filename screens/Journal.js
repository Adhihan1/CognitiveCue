import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";
import TopHeader from "../components/TopHeader";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const UserContext = React.createContext(null);

const Journal = ({ navigation }) => {
  var [numEntries, setNumEntries] = React.useState(1);
  const [entries, setEntry] = React.useState([]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <UserContext.Provider value={{ entries: entries, setEntry: setEntry }}>
        <SafeAreaView style={styles.journal}>
          <TopHeader title="Journal" />
          <ScrollView>
            <View
              onStartShouldSetResponder={() => true}
              style={styles.journals}
            >
              {entries}
            </View>
          </ScrollView>
          <Pressable
            onPress={() => {
              var timeData = new Date();
              var date =
                timeData.getMonth() +
                1 +
                "/" +
                timeData.getDate() +
                "/" +
                timeData.getFullYear().toString().slice(-2);
              var time = timeData.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              });
              setNumEntries(numEntries + 1);
              console.log(numEntries);
              setEntry([
                ...entries,
                <JournalEntry
                  data={date + " - " + time}
                  entries={entries}
                  setEntry={setEntry}
                  index={numEntries}
                >
                  Edit Text Here
                </JournalEntry>,
              ]);
            }}
            style={[styles.newentry]}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
            <Text style={[styles.newEntry]}>New Entry</Text>
          </Pressable>
          <View style={[styles.entrytextinput, styles.headingBg]} />
          <BottomMenuBarContainer navigation={navigation} />
        </SafeAreaView>
      </UserContext.Provider>
    </TouchableWithoutFeedback>
  );
};

function JournalEntry(props) {
  const { entries, setEntry } = React.useContext(UserContext);
  return (
    <Pressable
      onLongPress={(e) => {
        console.log(props.index);
        console.log(entries);
        initarr = [];
        for (i in entries) {
          //console.log(entries[i].props.index);
          //console.log(props.index);
          if (entries[i].props.index == props.index) {
            console.log("to delete " + entries[i].props.index);
          } else {
            initarr.push(entries[i]);
          }
        }
        setEntry(initarr);
      }}
      delayLongPress={1000}
      style={styles.imageIconLayout}
    >
      <TextInput style={styles.entryText} multiline>
        {props.children}
      </TextInput>
      <Text style={styles.entryData}>{props.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageIconLayout: {
    borderRadius: 40,
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    marginBottom: 20,
  },
  entryText: {
    fontSize: 20,
    fontFamily: FontFamily.redRoseRegular,
  },
  entryData: {
    textAlign: "right",
  },
  headingBg: {
    backgroundColor: Color.dimgray,
    justifyContent: "center",
  },
  imageIcon1: {
    marginTop: 22,
  },
  journals: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 43,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  newEntry: {
    color: "white",
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,

    marginLeft: 15,
    alignSelf: "center",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.redRoseRegular,
  },
  vectorIcon: {
    width: 53,
    height: 52,
    zIndex: 1,
    marginLeft: 10,
  },
  newentry: {
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_3xs,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  entrytextinput: {
    padding: 21,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  journal: {
    backgroundColor: Color.slategray,
    height: 812,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});

export default Journal;
