import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const newsTitle = "News Title";
const newsContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar augue non tincidunt porttitor. Suspendisse.";

export default function News() {
  return (
    <TouchableOpacity
      // TODO: onPress={() => navigator.navigate(News)} News Sayfasına navigate edilcek
      activeOpacity={0.7}
      style={styles.container}
    >
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
      <View style={styles.news}>
        <Text numberOfLines={1} style={styles.newsTitle}>
          {newsTitle}
        </Text>
        <Text numberOfLines={1} style={styles.newsContent}>
          {newsContent}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "darkgrey",
    padding: 5,
    marginTop: 30,
    marginBottom: 50,
    borderRadius: 20,
  },
  news: {
    width: "95%",
    height: "auto",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: "grey",
  },
  newsTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  newsContent: {
    color: "#fff",
    fontSize: 16,
  },
});
