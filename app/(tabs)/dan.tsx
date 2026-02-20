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
import { FontAwesome } from "@expo/vector-icons";

export default function Index2() {
  return (
    <ScrollView
      style={styles.screenLayout}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
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

      {/* Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/danImg/dan.jpg")}
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
      <View style={styles.infoSection}>
        <View style={styles.aboutBlock}>
          <Text style={styles.aboutTitle}>About Dan</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat obcaecati quas adipisci error at consectetur atque eum
            possimus nulla voluptatibus facere dolorum quaerat, illum sit
            ducimus hic dolorem libero!
          </Text>
        </View>
        <View style={styles.socialsBlock}>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/dan.bejec")
            }
          >
            <FontAwesome name="facebook" size={18} color="#ffa31a" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/dxn_xnt/")
            }
          >
            <FontAwesome name="instagram" size={18} color="#ffa31a" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        {/* Column 3: Info fields */}
        <View style={styles.infoBlock}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Birthday:</Text>
            <Text style={styles.infoValue}>87</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Contact No.:</Text>
            <Text style={styles.infoValue}>0912515512</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>dananton@gmail.com</Text>
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
              source={require("../../assets/images/danImg/danUpload1.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danImg/danUpload2.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danImg/danUpload3.jpg")}
              style={styles.uploadedPics}
            />
            <Image
              source={require("../../assets/images/danImg/danUpload4.jpg")}
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
            Dan wants to link up with you.
          </Text>
          <Text style={{ color: "black", fontSize: 16 }}>
            Dan is 5 minutes away from your location.
          </Text>
        </View>

        <View style={styles.adsContainer2}>
          <Text style={{ color: "black" }}>Ads</Text>
          <Image
            source={require("../../assets/images/ads.jpg")}
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
    // gap: 20,
    paddingBottom: 40,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
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
    padding: 30,
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
  },
  infoSection: {
    flexDirection: "row",
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
    flex: 1.2,
    flexShrink: 1,
    gap: 8,
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: "#2a2a2a",
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
    flexShrink: 1,
    justifyContent: "center",
    paddingLeft: 12,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 4,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
    flexWrap: "wrap",
  },
  infoLabel: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoValue: {
    color: "white",
    fontSize: 12,
    flexShrink: 1,
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

  /* Gallery */
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
  uploadedPics: {
    width: 350,
    height: 300,
    resizeMode: "cover",
    borderColor: "black",
  },
});
