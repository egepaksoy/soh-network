import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// TODO: Ders ve öğretmeni veritabanından saate göre alıncak
const lesson = "Matematik";
const teacher = "Hasan Ünal";

export default function CurrentLesson({ navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => navigation.navigate("Current Lesson")}
    >
      <View>
        <Text style={styles.lesson}>{lesson}</Text>
        <Text style={styles.teacher}>{teacher}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    borderRadius: 20,
    marginTop: 30,
  },
  lesson: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
  },
  teacher: {
    fontSize: 20,
    fontStyle: "italic",
    opacity: 0.7,
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});
