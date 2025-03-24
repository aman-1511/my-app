import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

interface MedicationCardProps {
  time: string;
  name: string;
  dosage: string;
  medicationImage: any;
  onReminderPress?: () => void;
}

const MedicationCard: React.FC<MedicationCardProps> = ({
  time,
  name,
  dosage,
  medicationImage,
  onReminderPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.medicationCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.medicationHeader}>
        <View style={styles.medicationTimeContainer}>
          <Ionicons name="time-outline" size={18} color="#6366f1" />
          <ThemedText style={styles.medicationTime}>{time}</ThemedText>
        </View>
        <TouchableOpacity 
          style={styles.medicationReminderButton}
          onPress={onReminderPress}
        >
          <ThemedText style={styles.reminderButtonText}>Set Reminder</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.medicationDetails}>
        <Image source={medicationImage} style={styles.medicationImage} />
        <View style={styles.medicationInfo}>
          <ThemedText type="subtitle">{name}</ThemedText>
          <ThemedText style={styles.medicationDosage}>{dosage}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  medicationCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
    overflow: "hidden",
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  medicationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  medicationTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  medicationTime: {
    marginLeft: 6,
    color: "#6366f1",
    fontWeight: "500",
  },
  medicationReminderButton: {
    backgroundColor: "#e0e7ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  reminderButtonText: {
    color: "#6366f1",
    fontSize: 12,
    fontWeight: "500",
  },
  medicationDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  medicationImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationDosage: {
    color: "#777",
    marginTop: 2,
  },
});

export default MedicationCard; 