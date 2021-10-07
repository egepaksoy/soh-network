import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar as StatusBarReact,
  Platform,
  ScrollView,
  View,
  Button,
} from "react-native";
// ----------------------------------------------------------
import CurrentLesson from "./App/components/CurrentLesson";
import CountDownTimer from "./App/components/CountDownTimer";
import News from "./App/components/News";
import Footer from "./App/components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* function HomeScreen() {
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
  )

} */
// TODO: Bütün componentleri içine alan bir view yapmalı ama yukarıdaki gibi değil (veya yukarıda navigation objesini döndürmeli)
function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Hit ME!"
        onPress={() => {
          navigation.navigate("Countdown");
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Current Lesson" component={CurrentLesson} />
        <Stack.Screen name="Countdown" component={CountDownTimer} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
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
