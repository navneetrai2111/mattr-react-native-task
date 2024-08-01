import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileCard = ({ name, age, location, topMatch }) => {
  return (
    <View style={styles.card}>
      {topMatch && <Text style={styles.topMatch}>TOP MATCH </Text>}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/free-nature-images.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>
        {name} , {age}
      </Text>
      <Text style={styles.location}>{location} </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Profile </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#faf7f7",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 80,
    paddingVertical: 20,
    position: "relative",
  },
  topMatch: {
    position: "absolute",
    top: 8,
    right: 6,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    zIndex: 12,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E91E63",
    marginTop: -20,
  },
  image: {
    height: 150,
  },
  name: {
    fontSize: 18,
    color: "#3b3838",
    marginBottom: 5,
    marginHorizontal: -66,
  },
  location: {
    fontSize: 14,
    color: "#171616",
    marginHorizontal: -66,
    marginBottom: 15,
  },
  button: {
    borderColor: "#E91E63",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: -66,
    alignItems: "center",
  },
  buttonText: {
    color: "#E91E63",
    fontSize: 14,
  },
});

export default ProfileCard;
