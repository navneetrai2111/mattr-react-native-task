// HomeScreen.js
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ProfileCard from "./ProfileCard";

const HomeScreen = () => {
  const connections = [
    {
      name: "Frank Stark",
      age: 23,
      location: "London, United Kingdom",
      topMatch: true,
    },
    {
      name: "Andreea Miles",
      age: 26,
      location: "London, United Kingdom",
      topMatch: false,
    },
    {
      name: "Miles",
      age: 26,
      location: "London, United Kingdom",
      topMatch: false,
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter </Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Daily Connections </Text>
        </View>
        <TouchableOpacity style={styles.refreshButton}>
          <Text style={styles.refreshButtonText}>Refresh </Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {connections.map((connection, index) => (
            <ProfileCard key={index} {...connection} />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Activity </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterButton: {
    padding: 10,
    alignSelf: "flex-end",
    top: 14,
  },
  filterButtonText: {
    color: "#E91E63",
  },
  refreshButton: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 44,
    borderWidth: 1,
    borderColor: "#E91E63",
    borderRadius: 5,
    alignSelf: "center",
  },
  refreshButtonText: {
    color: "#E91E63",
  },
  scrollView: {
    paddingBottom: 24,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#E91E63",
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: "#E91E63",
  },
});

export default HomeScreen;
