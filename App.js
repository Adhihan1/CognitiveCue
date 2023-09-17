const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import InputText from "./components/InputText";
import ProfilePosts from "./screens/ProfilePosts";
import HomeScreen from "./screens/HomeScreen";
import Journal from "./screens/Journal";
import Reminders from "./screens/Reminders";
import Rating from "./screens/Rating";
import Games from "./screens/Games";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    NovaRound: require("./assets/fonts/NovaRound.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Rosario-Regular": require("./assets/fonts/Rosario-Regular.ttf"),
    "PoetsenOne-Regular": require("./assets/fonts/PoetsenOne-Regular.otf"),
    "Rambla-Regular": require("./assets/fonts/Rambla-Regular.ttf"),
    "RedRose-Regular": require("./assets/fonts/RedRose-Regular.ttf"),
    "RedRose-Bold": require("./assets/fonts/RedRose-Bold.ttf"),
    "Amaranth-Bold": require("./assets/fonts/Amaranth-Bold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OstrichSans-Heavy": require("./assets/fonts/OstrichSans-Heavy.otf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePosts"
              component={ProfilePosts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Journal"
              component={Journal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reminders"
              component={Reminders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rating"
              component={Rating}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Games"
              component={Games}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
