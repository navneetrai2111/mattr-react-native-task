import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ProfileCard = ({ user }) => {
  const calculateAge = (dob) => {
    return moment().diff(moment(dob, "DD/MM/YYYY"), "years");
  };
  const navigation = useNavigation();

  const age = calculateAge(user.dob);

  return (
    <View style={styles.card}>
      <Image source={{ uri: user.photos[0].path }} style={styles.image} />
      <Text style={styles.name}>
        {user.first_name} {user.last_name}, {age}
      </Text>
      <Text style={styles.location}>
        {user.location.city}, {user.location.country}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ViewProfile", { user });
        }}
      >
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
