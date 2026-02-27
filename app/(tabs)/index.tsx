import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useCallback } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function HomeScreen() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    address: "",
    email: "",
    contactNumber: "",
  });

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setForm({
        fullName: "",
        dob: "",
        address: "",
        email: "",
        contactNumber: "",
      });
      setDate(new Date());
    }, []),
  );

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
      return;
    }
    const picked = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(picked);
    const formatted = picked.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setForm((prev) => ({ ...prev, dob: formatted }));
  };

  const handleSubmit = () => {
    router.push({
      pathname: "/display",
      params: form,
    });
  };

  return (
    <ScrollView style={styles.screenLayout}>
      <View style={styles.headerContainer}>
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

      <View style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Top Pinoy in the Philippines
        </Text>
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
          <Text style={{ color: "white", fontSize: 12 }}>
            Nag-Marites sa Gabi, Nabisto ang Katabi!
          </Text>
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
          <Text style={{ color: "white", fontSize: 12 }}>
            Sa Kanto Nagkwento, Sa Huli May Eskandalo!
          </Text>
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
          <Text style={{ color: "white", fontSize: 12 }}>
            Sa Story Nag-Glory, Sa Huli May Sorry!
          </Text>
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
          <Text style={{ color: "white", fontSize: 12 }}>
            May Mister sa Dilim, May Lihim sa Ilalim!
          </Text>
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
          <Text style={{ color: "white", fontSize: 12 }}>
            Si Kabit na Makulit, Nahuli sa Sulok ng Pilit!
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputsCard}>
          <Text style={styles.formTitle}>Enter Your Details</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name"
            placeholderTextColor="#666"
            value={form.fullName}
            onChangeText={(val) => setForm({ ...form, fullName: val })}
          />

          <Text style={styles.label}>Date of Birth</Text>
          {Platform.OS === "web" ? (
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                const picked = new Date(e.target.value);
                const formatted = picked.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                setForm({ ...form, dob: formatted });
              }}
              style={{
                backgroundColor: "#1e1e1e",
                color: "white",
                borderRadius: 8,
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 12,
                paddingBottom: 12,
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#333",
                borderStyle: "solid",
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
                cursor: "pointer",
              }}
            />
          ) : (
            <>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowPicker(true)}
              >
                <Text
                  style={form.dob ? styles.dateText : styles.datePlaceholder}
                >
                  {form.dob || "Select date of birth"}
                </Text>
                <FontAwesome name="calendar" size={16} color="#666" />
              </TouchableOpacity>

              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  maximumDate={new Date()}
                  onChange={handleDateChange}
                />
              )}
            </>
          )}

          <Text style={styles.label}>Home Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            placeholderTextColor="#666"
            value={form.address}
            onChangeText={(val) => setForm({ ...form, address: val })}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. juan@email.com"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(val) => setForm({ ...form, email: val })}
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 09XXXXXXXXX"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            maxLength={11}
            value={form.contactNumber}
            onChangeText={(val) => {
              const numericOnly = val.replace(/[^0-9]/g, "");
              setForm({ ...form, contactNumber: numericOnly });
            }}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenLayout: { flex: 1, backgroundColor: "#191919" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 54,
    backgroundColor: "#111111",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  accentBar: { height: 3, backgroundColor: "#ffa31a", opacity: 0.85 },
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
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  cardWrapper: { minWidth: 280, maxWidth: 350, flex: 1, gap: 5 },
  profileImage: { width: "100%", height: 200 },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: { fontSize: 16, color: "white", flex: 1 },
  inputsContainer: { padding: 20, gap: 16 },
  inputsCard: {
    padding: 20,
    backgroundColor: "#292929",
    borderRadius: 10,
    gap: 6,
  },
  formTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: { color: "#aaa", fontSize: 13, marginTop: 8 },
  input: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  dateInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: { color: "white", fontSize: 15 },
  datePlaceholder: { color: "#666", fontSize: 15 },
  submitButton: {
    backgroundColor: "#ffa31a",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
});
