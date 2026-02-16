import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHeightContext } from "@react-navigation/elements";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screenLayout}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Top 5 Trending</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => router.push("/dan")}>
          <Image
            source={require("../../assets/images/dan.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/dan")}>
          <Image
            source={require("../../assets/images/jods.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/dan")}>
          <Image
            source={require("../../assets/images/roy.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/dan")}>
          <Image
            source={require("../../assets/images/ed.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/dan")}>
          <Image
            source={require("../../assets/images/enzo.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 50,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingBottom: 50, // Add padding at bottom for better scrolling
  },
  profileImage: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
});
