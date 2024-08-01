import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import UserProfile from "./Components/UserProfile";
import ViewProfile from "./Components/ViewProfile";

export default function App() {
  return (
    <View style={styles.container}>
 
      {/* <Home /> */}
      {/* <Filter/>  */}
      {/* <UserProfile/> */}
      <ViewProfile/>
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
