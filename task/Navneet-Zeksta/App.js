import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import Filter from "./Components/Filter";

export default function App() {
  return (
    <View style={styles.container}>
 
      {/* <Home /> */}
      <Filter/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
