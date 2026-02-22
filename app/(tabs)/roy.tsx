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
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={styles.headerText}>Pinoy</Text>
          <View style={styles.textContainer}>
            <Text
              style={{
                color: "black",
                fontSize: 28,
                fontWeight: "900",
                letterSpacing: 1,
              }}
            >
              hub
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.accentBar} />

      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require("../../assets/images/royImg/roy.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileText}>Roy Adrian Rondina</Text>
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3rd Year · BSIT</Text>
            </View>
          </View>
          <Text style={styles.campusText}>
            Cebu Technological Campus — Main Campus
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Model Rank</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>69.69K</Text>
            <Text style={styles.statLabel}>Subscribers</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.aboutBlock}>
          <Text style={styles.aboutTitle}>About Roy</Text>
          <Text style={styles.aboutText}>
            Roy Adrian Rondina enjoys creativity and comfort in his daily life.
            He loves playing mobile games, reading manga and manhwa, and
            watching anime. Passionate about cooking and caring for his family,
            Roy balances his hobbies with heart and quality time with loved
            ones.
          </Text>
        </View>

        <View style={styles.socialsBlock}>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/royadrian.rondina")
            }
          >
            <View style={styles.socialIconBg}>
              <FontAwesome name="facebook" size={16} color="#ffa31a" />
            </View>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialItem}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/s_phinx74/")
            }
          >
            <View style={styles.socialIconBg}>
              <FontAwesome name="instagram" size={16} color="#ffa31a" />
            </View>
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBlock}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Birthday</Text>
            <Text style={styles.infoValue}>June 18, 2004</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Contact No.</Text>
            <Text style={styles.infoValue}>0945322297</Text>
          </View>
          <View style={[styles.infoContainer, { borderBottomWidth: 0 }]}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>rondina894@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.galleryContainer}>
        <View style={styles.galleryHeader}>
          <View style={styles.galleryAccent} />
          <Text style={styles.galleryTitle}>Uploaded Pictures</Text>
        </View>
        <View style={styles.galleryRow}>
          <View style={styles.gallery}>
            <View style={styles.imageCard}>
              <Image
                source={require("../../assets/images/royImg/royUpload1.jpg")}
                style={styles.uploadedPics}
              />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require("../../assets/images/royImg/royUpload2.jpg")}
                style={styles.uploadedPics}
              />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require("../../assets/images/royImg/royUpload3.jpg")}
                style={styles.uploadedPics}
              />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require("../../assets/images/royImg/royUpload4.jpg")}
                style={styles.uploadedPics}
              />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require("../../assets/images/royImg/royUpload5.jpg")}
                style={styles.uploadedPics}
              />
            </View>
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
          <Text style={styles.adsHeadline}>Roy wants to link up with you.</Text>
          <Text style={styles.adsSubText}>
            Roy is 5 minutes away from your location.
          </Text>
        </View>
        <View style={styles.adsContainer2}>
          <View style={styles.adsBadge}>
            <Text style={styles.adsBadgeText}>Sponsored</Text>
          </View>
          <Image
            source={require("../../assets/images/ads.jpg")}
            style={styles.adsImg}
          />
          <Text style={styles.adsCaption}>Gusto mo ba lumaki ang iyong</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: "#191919",
  },
  scrollContent: {
    flexDirection: "column",
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 54,
    backgroundColor: "#111111",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  textContainer: {
    backgroundColor: "#ffa31a",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  accentBar: {
    height: 3,
    backgroundColor: "#ffa31a",
    opacity: 0.85,
  },
  profileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    paddingVertical: 28,
    gap: 20,
    alignItems: "center",
    backgroundColor: "#191919",
  },
  profileImageWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 110,
    height: 110,
    resizeMode: "cover",
    borderRadius: 5,
  },
  profileInfoContainer: {
    flex: 1,
    minWidth: 150,
    flexShrink: 1,
    gap: 8,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    backgroundColor: "#141414",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  statItem: {
    alignItems: "center",
    gap: 2,
  },
  statNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  statLabel: {
    color: "#666",
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#2a2a2a",
  },
  profileText: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    flexWrap: "wrap",
    flexShrink: 1,
    letterSpacing: -0.5,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 6,
  },
  badge: {
    backgroundColor: "#ffa31a22",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#ffa31a55",
  },
  badgeText: {
    color: "#ffa31a",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  campusText: {
    fontSize: 12,
    color: "#555",
    fontWeight: "500",
  },
  infoSection: {
    flexDirection: "column",
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 0,
    borderTopWidth: 1,
    borderTopColor: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    backgroundColor: "#141414",
  },
  aboutBlock: {
    gap: 8,
    paddingBottom: 16,
  },
  aboutTitle: {
    color: "white",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  aboutText: {
    color: "#666",
    fontSize: 12.5,
    lineHeight: 20,
  },
  socialsBlock: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderTopWidth: 1,
    borderTopColor: "#1e1e1e",
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  socialIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
  },
  socialText: {
    color: "#ccc",
    fontSize: 13,
    fontWeight: "600",
  },
  infoBlock: {
    paddingTop: 16,
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 3,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  infoLabel: {
    color: "#444",
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  infoValue: {
    color: "#ddd",
    fontSize: 13,
    fontWeight: "500",
    flexWrap: "wrap",
  },
  galleryContainer: {
    padding: 24,
    gap: 20,
    backgroundColor: "#191919",
  },
  galleryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  galleryAccent: {
    width: 4,
    height: 24,
    backgroundColor: "#ffa31a",
    borderRadius: 2,
  },
  galleryTitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  galleryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gallery: {
    flexDirection: "row",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    flex: 1,
  },
  imageCard: {
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1e1e1e",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  uploadedPics: {
    width: 350,
    height: 300,
    resizeMode: "cover",
  },
  adsContainer1: {
    backgroundColor: "#ffa31a",
    padding: 16,
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  adsHeadline: {
    color: "#1a0a00",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  adsSubText: {
    color: "#5a3000",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 6,
  },
  adsContainer2: {
    gap: 6,
    width: 150,
    alignItems: "center",
  },
  adsBadge: {
    backgroundColor: "#00000022",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  adsBadgeText: {
    color: "#5a3000",
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  adsImg: {
    width: 150,
    height: 200,
    borderWidth: 1,
    borderColor: "#00000022",
  },
  adsCaption: {
    color: "#3a1a00",
    textAlign: "center",
    fontSize: 11,
    fontWeight: "600",
  },
});
