import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";

// TODO: Ders ve öğretmeni veritabanından saate göre alıncak
const pastOfCurrent = 30;
const event = "Tenefüs";

export default function CountDownTimer({ navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => navigation.navigate("Countdown")}
    >
      <Text style={styles.countdownLabel}>{event}'e</Text>
      <CountDown
        until={pastOfCurrent}
        size={40}
        onFinish={() =>
          event == "Tenefüs" ? alert("Ders!") : alert("Tenefüs!")
        }
        digitStyle={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        digitTxtStyle={{ color: "#FFF" }}
        timeToShow={["H", "M", "S"]}
        timeLabels={{}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 2,
    paddingBottom: 5,
  },
  countdownLabel: {
    color: "#fff",
    fontSize: 30,
    opacity: 0.8,
    fontStyle: "italic",
    textAlign: "center",
    top: 15,
  },
});
