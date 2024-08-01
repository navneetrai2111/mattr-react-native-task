import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const UserProfile = () => {
  return (
    <View>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/free-nature-images.jpg")}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>Frank Stark, 23</Text>
        <Text style={styles.location}>London, United Kingdom</Text>
        <Text style={styles.about}>
          Hey, I'm Frank, a 23-year-old marketing enthusiast who loves outdoor
          adventures. Whether it's hiking or a cozy night in, I embrace every
          moment with enthusiasm. My infectious humor and love for deep
          conversations define me. I'm seeking a partner ready for genuine
          connections and new adventures. Connect with me and let's dive in!
        </Text>
        <Text style={styles.interestText}> Interests </Text>
        <View style={styles.interestRow}>
          <View style={styles.intrestedON}>
            <Text style={styles.interest}> Running </Text>
          </View>
          <View style={styles.intrestedON}>
            <Text style={styles.interest}> Hiking </Text>
          </View>
          <View style={styles.intrestedON}>
            <Text style={styles.interest}> Outdoors </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#121111",
  },
  image: {
    width: 400,
    height: 400,
    top: -12,
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  location: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "400",
  },
  about: {
    paddingVertical: 20,
    fontSize: 14,
  },
  interestText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  interestRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
  intrestedON: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 3,
    backgroundColor: "#ce1694",
    borderRadius: 15,
  },
  interest: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 11,
  },
});

export default UserProfile;
