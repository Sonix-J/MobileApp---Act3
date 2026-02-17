import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHeightContext } from "@react-navigation/elements";
import { FontAwesome } from "@expo/vector-icons";

export default function Index2() {
  return (
    <View style={styles.screenLayout}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.push("/")}>
          {/* <Text style={{ color: "white" }}>Back</Text> */}
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.headerText}>Study</Text>
          <View style={styles.textContainer}>
            <Text style={{ color: "black", fontSize: 32, fontWeight: "bold" }}>
              hub
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/dan.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileText}>Dan Bejec Anton</Text>
          <Text style={{ fontSize: 16, color: "#d6d3d3", fontWeight: "bold" }}>
            3rd Year - BSIT Student
          </Text>
          <Text style={{ fontSize: 12, color: "#d6d3d3" }}>
            Cebu Technological Campus - Main Campus
          </Text>
        </View>
      </View>
      <View style={styles.personInfo}>
        <Text style={{ color: "white", fontSize: 16 }}>Age: 87</Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          Address: Canada, Chicago, France
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>Height: 9'0</Text>
        <View style={styles.socials}>
          <FontAwesome name="facebook" size={24} color="#ffa31a" />
          <FontAwesome name="instagram" size={24} color="#ffa31a" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1b1b1b",
    flexDirection: "column",
    gap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#292929",
    padding: 20,
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
  profileContainer: {
    gap: 20,
    flexDirection: "row",
    padding: 10,
  },
  profileInfoContainer: {
    gap: 10,
    // justifyContent: "center",
    flex: 1,
    flexShrink: 1,
  },
  profileText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  personInfo: {
    padding: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ffa31a",
    borderRadius: 15,
    gap: 20,
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignContent: "center",
  },
});
