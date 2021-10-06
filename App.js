import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar as StatusBarReact,
  Platform,
  ScrollView,
} from "react-native";
// ----------------------------------------------------------
import CurrentLesson from "./App/components/CurrentLesson";
import CountDownTimer from "./App/components/CountDownTimer";
import News from "./App/components/News";
import Footer from "./App/components/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CurrentLesson />
        <CountDownTimer />
        <News />
        <StatusBar style="auto" />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
  scrollView: {
    paddingLeft: "8%",
    paddingRight: "8%",
  },
});
