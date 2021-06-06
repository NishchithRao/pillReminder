import React, { useEffect, useState } from "react";
import { Dimensions, LogBox } from "react-native";
import { View, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import firebase from "firebase";
import "firebase/firestore";
import { init_firebase } from "./methods/firebase/init";
import "react-native-gesture-handler";
import Router from "./router";
import { NavigationContextProvider } from "./Contexts/NavigationContext";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
  console.reportErrorsAsExceptions = false;
  const [initialized, setInitialized] = useState(false);
  let [isFontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  useEffect(() => {
    if (!firebase.apps.length) {
      init_firebase();
    } else {
      firebase.app();
    }
    setInitialized(true);
  }, []);

  return !isFontsLoaded ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
    <Router />
  );
}
