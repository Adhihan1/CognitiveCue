import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = ({navigation}) => {
  const [selected, setSelected] = React.useState(false);

  const styles = getStyles(selected);

  return (
    <SafeAreaView style={styles.welcome} 
      onPress={() => {
        //navigation.navigate('Rating');
      }}
    >
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/logo_big.svg")}
      />
      <Text style={styles.title}>Memory Lane</Text>
      <Text style={styles.subTitle}>Empowering minds, enriching lives</Text>
      <Text style={styles.welcomeText}>Welcome to Memory Lane: your personalized Alzhiemer's app. Manage activites, boost memory, find support. Start now!</Text>
      <TouchableOpacity 
        onPress={() => {
          setSelected(!selected);
          navigation.navigate('SignUp');
        }}
        style={[styles.buttonprimary, styles.getStarted]}
      >
        <Text style={styles.getStartedText}>Get Started!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const getStyles = (selected) => StyleSheet.create({
  welcome: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bgIcon: {
    marginTop: '15%',
    width: 206,
    height: 230
  },
  title: {
    fontSize: 50,
    fontFamily: FontFamily.novaRound,
    color: Color.white,
    textAlign: "center",
    marginBottom: 9
  },
  subTitle: {
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.novaRound,
    color: Color.white,
    textAlign: "center",
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 23,
    fontFamily: FontFamily.ramblaRegular,
    color: Color.white,
    textAlign: "center",
    marginBottom: 55,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  buttonprimary: {
    borderRadius: Border.br_81xl,
    backgroundColor: selected ? "#404263" : Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  getStarted: {
    width: "90%",
    height: "fit-content",
  },
  getStartedText: {
    fontSize: 35,
    fontFamily: FontFamily.rosarioRegular,
    color: Color.white,
    textAlign: "center",
  },
});

export default Welcome;
