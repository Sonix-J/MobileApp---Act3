import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { router } from "expo-router";
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
          source={require("../../assets/images/edImg/ed.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileText}>Edmark Talingting</Text>
          <Text style={{ fontSize: 16, color: "#d6d3d3", fontWeight: "bold" }}>
            3rd Year - BSIT Student
          </Text>
          <Text style={{ fontSize: 12, color: "#d6d3d3" }}>
            Cebu Technological Campus - Main Campus
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              123
            </Text>
            <Text style={{ color: "#d6d3d3", fontSize: 12 }}>Model Rank</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              1M
            </Text>
            <Text style={{ color: "#d6d3d3", fontSize: 12 }}>Subscribers</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.aboutBlock}>
          <Text style={styles.aboutTitle}>About Edmark</Text>
          <Text style={styles.aboutText}>
            Edmark Talingting is a tech enthusiast passionate about programming
            and exploring new digital trends. He enjoys gaming, watching
            K-dramas, and staying entertained with live videos on Facebook and
            TikTok. Combining tech curiosity with a love for fun, Edmark
            balances innovation and relaxation.
          </Text>
        </View>
        <View style={styles.socialsBlock}>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/wcz.realtrader")
            }
          >
            <FontAwesome name="facebook" size={18} color="#ffa31a" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/edmark.talingting/")
            }
          >
            <FontAwesome name="instagram" size={18} color="#ffa31a" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Birthday:</Text>
            <Text style={styles.infoValue}>October 27, 2005</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Contact No.:</Text>
            <Text style={styles.infoValue}>09106682418</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>edmarktalingting0@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.galleryContainer}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Uploaded Pictures
        </Text>
        <View style={styles.galleryRow}>
          <View style={styles.gallery}>
            <Image
              source={require("../../assets/images/edImg/edUpload1.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/edImg/edUpload2.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/edImg/edUpload3.jpg")}
              style={styles.uploadedPics}
            />
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
              color: "black",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Edmark wants to link up with you.
          </Text>
          <Text style={{ color: "black", fontSize: 16 }}>
            Edmark is 5 minutes away from your location.
          </Text>
        </View>
        <View style={styles.adsContainer2}>
          <Text style={{ color: "black" }}>Ads</Text>
          <Image
            source={require("../../assets/images/ads2.jpg")}
            style={styles.adsImg}
          />
          <Text style={{ color: "black", textAlign: "center" }}>
            Gusto mo ba lumaki ang iyong
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContent: {
    flexDirection: "column",
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 30,
    gap: 20,
    alignItems: "center",
  },
  profileInfoContainer: {
    flex: 1,
    minWidth: 150,
    flexShrink: 1,
    gap: 10,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
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
  },
  infoSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
    backgroundColor: "#292929",
  },
  aboutBlock: {
    flex: 1,
    minWidth: 200,
    flexShrink: 1,
    gap: 8,
    paddingRight: 12,
  },
  aboutTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  aboutText: {
    color: "#aaa",
    fontSize: 12,
    lineHeight: 18,
  },
  socialsBlock: {
    minWidth: 120,
    justifyContent: "center",
    gap: 18,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: "#2a2a2a",
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  socialText: {
    color: "white",
    fontSize: 13,
  },
  infoBlock: {
    flex: 1,
    minWidth: 150,
    flexShrink: 1,
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 2,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
  },
  infoLabel: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoValue: {
    color: "white",
    fontSize: 12,
    flexWrap: "wrap",
  },
  adsContainer1: {
    backgroundColor: "#ffa31a",
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
    height: 200,
    borderWidth: 1,
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
  },
  uploadedPics: {
    width: 350,
    height: 300,
    resizeMode: "cover",
    borderColor: "black",
  },
});
