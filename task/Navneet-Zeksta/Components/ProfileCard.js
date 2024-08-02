import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";

const ProfileCard = ({
  first_name,
  last_name,
  dob,
  location,
  photos,
  onViewProfile,
}) => {
  const fullName = `${first_name} ${last_name}`;
  const fullLocation = `${location.city}, ${location.country}`;

  const calculateAge = (dob) => {
    return moment().diff(moment(dob, "DD/MM/YYYY"), "years");
  };

  const age = calculateAge(dob);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photos[0].path }} style={styles.image} />
      </View>
      <Text style={styles.name}>
        {fullName}, {age}
      </Text>
      <Text style={styles.location}>{fullLocation}</Text>
      <TouchableOpacity style={styles.button} onPress={onViewProfile}>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E91E63",
    marginTop: -20,
  },
  image: {
    height: 250,
    width: 350,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    color: "#3b3838",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#171616",
    marginBottom: 15,
  },
  button: {
    borderColor: "#E91E63",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 100,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#E91E63",
    fontSize: 14,
  },
});

export default ProfileCard;
