import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

interface AppointmentCardProps {
  iconName: keyof typeof Ionicons.glyphMap;
  month: string;
  day: string;
  type: string;
  subtext: string;
  doctorImage: any;
  doctorName: string;
  callIconName: keyof typeof Ionicons.glyphMap;
  onCallPress?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  iconName,
  month,
  day,
  type,
  subtext,
  doctorImage,
  doctorName,
  callIconName,
  onCallPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.appointmentCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.calendarIcon}>
        <Ionicons name={iconName} size={22} color="#6366f1" />
      </View>
      <View style={styles.dateContainer}>
        <ThemedText style={styles.monthText}>{month}</ThemedText>
        <ThemedText type="title" style={styles.dayText}>
          {day}
        </ThemedText>
      </View>
      <View style={styles.appointmentDetails}>
        <ThemedText type="subtitle" style={styles.appointmentType}>
          {type}
        </ThemedText>
        <ThemedText style={styles.appointmentSubtext}>
          {subtext}
        </ThemedText>
        <View style={styles.doctorContainer}>
          <Image
            source={doctorImage}
            style={styles.smallDoctorImage}
          />
          <ThemedText style={styles.doctorName}>{doctorName}</ThemedText>
          <TouchableOpacity style={styles.callButton} onPress={onCallPress}>
            <Ionicons name={callIconName} size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  appointmentCard: {
    width: "48%",
    borderRadius: 16,
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
    borderRadius: 16,
  },
  calendarIcon: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  dateContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    alignItems: "center",
  },
  monthText: {
    fontSize: 12,
    color: "#777",
    fontWeight: "500",
  },
  dayText: {
    fontSize: 20,
    fontWeight: "700",
  },
  appointmentDetails: {
    marginTop: 40,
  },
  appointmentType: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  appointmentSubtext: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  smallDoctorImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  doctorName: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "600",
  },
  callButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default AppointmentCard; 