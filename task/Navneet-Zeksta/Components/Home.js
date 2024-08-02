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
import { useNavigation, useRoute } from "@react-navigation/native";
import data from "../assets/data.json"; 

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [displayData, setDisplayData] = useState([]);

  
  const getRandomItems = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    if (route.params?.filteredData) {
      setDisplayData(route.params.filteredData); 
    } else {
      setDisplayData(getRandomItems());
    }
  }, [route.params?.filteredData]);

  const handleRefresh = useCallback(() => {
    setDisplayData(getRandomItems());
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
          {displayData.map((connection, index) => (
            <ProfileCard
              key={connection.id}
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
});

export default Home;
