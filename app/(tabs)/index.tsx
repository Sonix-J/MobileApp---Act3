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
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screenLayout}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Study</Text>
        <View style={styles.textContainer}>
          <Text style={{ color: "black", fontSize: 32, fontWeight: "bold" }}>
            hub
          </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() => router.push("/dan")}
        >
          <Image
            source={require("../../assets/images/danImg/dan.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Dan Anton Bejec</Text>
            <FontAwesome name="check-circle" size={24} color="#ffa31a" />
          </View>
          <Text style={{ color: 'white', fontSize: 12}}>Nag-Marites sa Gabi, Nabisto ang Katabi!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() => router.push("/jods")}
        >
          <Image
            source={require("../../assets/images/jodsImg/jods.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Jodice Pacibe</Text>
            <FontAwesome name="check-circle" size={24} color="#ffa31a" />
          </View>
          <Text style={{ color: 'white', fontSize: 12}}>Sa Kanto Nagkwento, Sa Huli May Eskandalo!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() => router.push("/roy")}
        >
          <Image
            source={require("../../assets/images/royImg/roy.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Roy Adrian Rondina</Text>
            <FontAwesome name="check-circle" size={24} color="#ffa31a" />
          </View>
          <Text style={{ color: 'white', fontSize: 12}}>Sa Story Nag-Glory, Sa Huli May Sorry!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() => router.push("/ed")}
        >
          <Image
            source={require("../../assets/images/edImg/ed.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Edmark Talingting</Text>
            <FontAwesome name="check-circle" size={24} color="#ffa31a" />
          </View>
          <Text style={{ color: 'white', fontSize: 12}}>May Mister sa Dilim, May Lihim sa Ilalim!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() => router.push("/enzo")}
        >
          <Image
            source={require("../../assets/images/enzoImg/enzo.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>John Lorenzo Flores</Text>
            <FontAwesome name="check-circle" size={24} color="#ffa31a" />
          </View>
          <Text style={{ color: 'white', fontSize: 12}}>Si Kabit na Makulit, Nahuli sa Sulok ng Pilit!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#292929",
    padding: 20,
    gap: 5,
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: "#ffa31a",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  cardContainer: {
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "center", 
    gap: 20,
    padding: 20,
  },
  cardWrapper: {
    minWidth: 280, 
    maxWidth: 350, 
    flex: 1, 
    gap: 5,
  },
  profileImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 16,
    color: "white",
    flex: 1,
  },
});
