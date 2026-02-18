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

export default function Index2() {
  return (
    <ScrollView
      style={styles.screenLayout}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.push("/")}>
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
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>Age: 87</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Address: Canada, Chicago, France
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>Height: 9'0</Text>
        </View>
        <View>
          <View style={styles.socials}>
            <FontAwesome name="facebook" size={24} color="#ffa31a" />
            <FontAwesome name="instagram" size={24} color="#ffa31a" />
          </View>
        </View>
      </View>
      <View style={styles.adsContainer1}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Dan wants to link up with you.</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Dan is 5 minutes away from your location.</Text>
      </View>
      <View style={styles.galleryContainer}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Uploaded Pictures
        </Text>

        <View style={styles.galleryRow}>
          {/* Left: uploaded pictures grid */}
          <View style={styles.gallery}>
            <Image
              source={require("../../assets/images/danUpload1.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danUpload2.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danUpload3.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danUpload4.jpg")}
              style={styles.uploadedPics}
            />
          </View>

          {/* Right: ads */}
          <View style={styles.adsContainer2}>
            <Text style={{ color: "white" }}>Ads</Text>
            <Image
              source={require("../../assets/images/ads.jpg")}
              style={styles.uploadedPics}
            />
            <Text style={{ color: "white", textAlign: 'center' }}>Gusto mo ba lumaki ang iyong</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  scrollContent: {
    flexDirection: "column",
    gap: 20,
    paddingBottom: 40,
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
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: "#ffa31a",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  socials: {
    flexDirection: "row",
    gap: 15,
  },
  galleryContainer: {
    padding: 20,
    gap: 20,
  },
  galleryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  gallery: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flex: 1,
    marginRight: 10,
  },
  adsContainer1: {
    backgroundColor: 'black',
    padding: 10,
    gap: 20
  },
  adsContainer2: {
    gap: 5,
    width: 150
  },
  uploadedPics: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderColor: "black",
  },
});
