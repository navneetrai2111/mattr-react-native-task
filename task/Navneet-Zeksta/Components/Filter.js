import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
const Filter = () => {
  const navigate = useNavigation();

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState("Score");

  const genders = ["MALE", "FEMALE"];
  const ageRanges = ["20-24 ", "25-30 ", "30-40 ", "40+ "];
  const sortByOptions = ["Score", "Date Joined"];

  const handleGenderPress = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeRangePress = (ageRange) => {
    setSelectedAgeRange(ageRange);
  };

  const handleSortByPress = (sortBy) => {
    setSelectedSortBy(sortBy);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <Text style={styles.headerText}>Cancel </Text>
            </TouchableOpacity>
            <Text style={styles.filterText}>Filter </Text>
            <TouchableOpacity>
              <Text style={styles.headerText}>Clear All </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gender</Text>
            <View style={styles.optionsContainer}>
              {genders.map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.optionButton,
                    selectedGender === gender && styles.optionButtonSelected,
                  ]}
                  onPress={() => handleGenderPress(gender)}
                >
                  <Text
                    style={[
                      styles.optionButtonText,
                      selectedGender === gender &&
                        styles.optionButtonTextSelected,
                    ]}
                  >
                    {gender}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Age Ranges</Text>
            <View style={styles.optionsContainer}>
              {ageRanges.map((range) => (
                <TouchableOpacity
                  key={range}
                  style={[
                    styles.optionButton,
                    selectedAgeRange === range && styles.optionButtonSelected,
                  ]}
                  onPress={() => handleAgeRangePress(range)}
                >
                  <Text
                    style={[
                      styles.optionButtonText,
                      selectedAgeRange === range &&
                        styles.optionButtonTextSelected,
                    ]}
                  >
                    {range}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sort by</Text>
            <View style={styles.sortByPickerContainer}>
              <Picker
                selectedValue={selectedSortBy}
                onValueChange={(itemValue) => handleSortByPress(itemValue)}
                style={styles.picker}
              >
                {sortByOptions.map((option) => (
                  <Picker.Item
                    key={option}
                    label={option}
                    value={option}
                    style={styles.pickerItems}
                    // color={selectedSortBy === option ? '#fff' : '#000'}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 24,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  headerText: {
    fontSize: 16,
    color: "#D81B60",
  },
  filterText: {
    fontSize: 16,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 18,
    marginHorizontal: -18,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionButton: {
    backgroundColor: "#ffe8fa",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 4,
  },
  optionButtonSelected: {
    backgroundColor: "#d6139c",
  },
  optionButtonText: {
    color: "#c936a8",
    fontSize: 14,
  },
  optionButtonTextSelected: {
    color: "#fff",
  },
  sortByPickerContainer: {
    borderColor: "#8f3273",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: -18,
  },
  picker: {
    // height: 50,
    // width: '100%',
    // color: '#000',
  },
  applyButton: {
    backgroundColor: "#d6139c",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    margin: 12,
    marginBottom: 44,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Filter;
