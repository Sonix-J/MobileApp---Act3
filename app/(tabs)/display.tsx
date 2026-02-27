import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

function calculateAge(dob: string): string {
  if (!dob) return "N/A";

  const birthDate = new Date(dob);
  if (isNaN(birthDate.getTime())) return "Invalid date";

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return `${age} years old`;
}

export default function Index2() {
  const { fullName, dob, address, email, contactNumber } =
    useLocalSearchParams<{
      fullName: string;
      dob: string;
      address: string;
      email: string;
      contactNumber: string;
    }>();

  const age = calculateAge(dob);

  type Field = {
    label: string;
    value: string;
  };

  const fields: Field[] = [
    { label: "Full Name", value: fullName },
    { label: "Date of Birth", value: dob },
    { label: "Age", value: age },
    { label: "Home Address", value: address },
    { label: "Email", value: email },
    { label: "Contact Number", value: contactNumber },
  ];

  return (
    <ScrollView
      style={styles.screenLayout}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
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
        <View style={{ width: 38 }} />
      </View>
      <View style={styles.accentBar} />

      <View style={styles.content}>
        <Text style={styles.pageTitle}>Submitted Details</Text>

        <View style={styles.card}>
          {fields.map(({ label, value }) => (
            <View key={label} style={styles.fieldRow}>
              <View style={styles.fieldText}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <Text style={styles.fieldValue}>
                  {value || <Text style={styles.empty}>Not provided</Text>}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: { flex: 1, backgroundColor: "#191919" },
  scrollContent: { flexDirection: "column", paddingBottom: 60 },
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
  accentBar: { height: 3, backgroundColor: "#ffa31a", opacity: 0.85 },
  content: { padding: 20, gap: 20 },
  pageTitle: { color: "white", fontSize: 22, fontWeight: "bold" },
  card: {
    backgroundColor: "#292929",
    borderRadius: 12,
    padding: 20,
    gap: 16,
    alignItems: "center",
  },
  avatarText: { fontSize: 32, fontWeight: "900", color: "black" },
  fieldRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  fieldText: { flex: 1, gap: 2 },
  fieldLabel: { color: "#888", fontSize: 12 },
  fieldValue: { color: "white", fontSize: 15, fontWeight: "600" },
  empty: { color: "#555", fontStyle: "italic" },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ffa31a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
  },
  backBtnText: { fontWeight: "bold", fontSize: 15, color: "black" },
});
