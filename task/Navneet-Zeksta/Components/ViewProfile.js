import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import moment from "moment";

const ViewProfile = ({ route, navigation }) => {
  const { user } = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const viewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const keyExtractor = (item) => item.id.toString();

  const renderDot = (index) => (
    <View
      key={index}
      style={[styles.dot, currentIndex === index && styles.activeDot]}
    />
  );

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.path }} style={styles.image} />
  );

  const calculateAge = (dob) => {
    return moment().diff(moment(dob, "DD/MM/YYYY"), "years");
  };

  const age = calculateAge(user.dob);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={user.photos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        onViewableItemsChanged={viewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50, // Adjust as needed
        }}
      />
      <View style={styles.dotsContainer}>
        {user.photos.map((_, index) => renderDot(index))}
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>
          {user.first_name} {user.last_name}, {age}
        </Text>
        <Text style={styles.location}>
          {user.location.city}, {user.location.country}
        </Text>
        <Text style={styles.about}>{user.bio}</Text>
        <Text style={styles.interestText}>Interests</Text>
        <View style={styles.interestRow}>
          {user.interests.map((interest) => (
            <View key={interest.id} style={styles.intrestedON}>
              <Text style={styles.interest}>{interest.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#121111",
  },
  image: {
    width: 392,
    height: 650,
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
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 10,
    top: -24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c2c2c2",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#edebeb",
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

export default ViewProfile;
