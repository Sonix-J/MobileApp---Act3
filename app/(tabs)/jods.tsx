import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
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
          <Text style={styles.headerText}>Pinoy</Text>
          <View style={styles.textContainer}>
            <Text style={{ color: "black", fontSize: 32, fontWeight: "bold" }}>
              hub
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/jodsImg/jods.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileText}>Jodeci Pacibe</Text>
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
          <Text style={{ color: "white", fontSize: 16 }}>Birthday: July 25, 2004</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Contact No#: 09273034964
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>Email: pacibejodeci@gmail.com</Text>
        </View>
        <View>
          <View style={styles.socials}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.facebook.com/jodisi123")
              }
            >
              <FontAwesome name="facebook" size={24} color="#ffa31a" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/the.allseeing/")
              }
            >
              <FontAwesome name="instagram" size={24} color="#ffa31a" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.adsContainer1}>
        <View
          style={{
            flex: 1,
            flexShrink: 1,
            paddingRight: 10,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Jodeci wants to link up with you.
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Jodeci is 5 minutes away from your location.
          </Text>
        </View>

        <View style={styles.adsContainer2}>
          <Text style={{ color: "white" }}>Ads</Text>
          <Image
            source={require("../../assets/images/ads.jpg")}
            style={styles.adsImg}
          />
          <Text style={{ color: "white", textAlign: "center" }}>
            Gusto mo ba lumaki ang iyong
          </Text>
        </View>
      </View>
      <View style={styles.galleryContainer}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Uploaded Pictures
        </Text>

        <View style={styles.galleryRow}>
          <View style={styles.gallery}>
            <Image
              source={require("../../assets/images/jodsImg/jodsUpload1.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/jodsImg/jodsUpload2.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/jodsImg/jodsUpload3.jpg")}
              style={styles.uploadedPics}
            />
            {/* <Image
              source={require("../../assets/images/jodsImg/danUpload4.jpg")}
              style={styles.uploadedPics}
            /> */}
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
    paddingTop: 50,
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
    alignItems: "center",
  },
  gallery: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    flex: 1,
    marginRight: 10,
  },
  adsContainer1: {
    backgroundColor: "black",
    padding: 10,
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  adsContainer2: {
    gap: 5,
    width: 150,
  },
  adsImg: {
    width: 150,
    height: 200
  },
  uploadedPics: {
    width: 350,
    height: 300,
    resizeMode: "cover",
    borderColor: "black",
  },
});
