import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";

const DiscoverHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <View>
        <ThemedText type="title" style={styles.headerTitle}>
          Discover
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Explore health insights & resources
        </ThemedText>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <LinearGradient
          colors={["#6366f1", "#818cf8"]}
          style={styles.profileButtonGradient}
        >
          <Ionicons name="notifications" size={22} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  profileButton: {
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  profileButtonGradient: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DiscoverHeader; 