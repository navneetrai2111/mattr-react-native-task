import React, { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ProfileCard from "./ProfileCard";
import connections from "../assets/data.json";

const getRandomConnections = (data) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

const Home = ({ navigation, route }) => {
  const [displayedConnections, setDisplayedConnections] = useState([]);

  useEffect(() => {
    setDisplayedConnections(getRandomConnections(connections));
  }, []);

  const handleRefresh = useCallback(() => {
    setDisplayedConnections(getRandomConnections(connections));
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filter")}
        >
          <Text style={styles.filterButtonText}>Filter </Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Daily Connections </Text>
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
          <Text style={styles.refreshButtonText}>Refresh </Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {displayedConnections.map((connection, index) => (
            <ProfileCard
              key={index}
              user={connection}
              isTopMatch={index === 0}
            />
          ))}
        </ScrollView>
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
  activeButton: {
    backgroundColor: "#E91E63",
    borderRadius: 5,
  },
  activeButtonText: {
    color: "#fff",
  },
});

export default Home;
