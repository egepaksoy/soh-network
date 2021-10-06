import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text>
          <Icon name="home" size={60} color="dodgerblue" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text>
          <Icon name="list" size={60} color="dodgerblue" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text>
          <Icon name="calendar" size={60} color="dodgerblue" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text>
          <Icon name="user" size={60} color="dodgerblue" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
