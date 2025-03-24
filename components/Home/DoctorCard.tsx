import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  doctorImage: any;
  onVisitPress?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  experience,
  rating,
  doctorImage,
  onVisitPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.doctorCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.doctorCardContent}>
        <View style={styles.doctorImageContainer}>
          <LinearGradient
            colors={["#e0e7ff", "#c7d2fe"]}
            style={styles.doctorImageBackground}
          />
          <Image
            source={doctorImage}
            style={styles.doctorImage}
          />
        </View>
        <View style={styles.doctorInfo}>
          <ThemedText type="subtitle" style={styles.doctorName}>
            {name}
          </ThemedText>
          <View style={styles.doctorSpecialtyContainer}>
            <MaterialIcons name="medical-services" size={14} color="#6366f1" />
            <ThemedText style={styles.specialtyText}>{specialty}</ThemedText>
          </View>
          <View style={styles.doctorExperienceContainer}>
            <Ionicons name="time-outline" size={14} color="#777" />
            <ThemedText style={styles.experienceText}>{experience}</ThemedText>
          </View>
          <View style={styles.doctorRating}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Ionicons
                key={index}
                name={index < rating ? "star" : "star-outline"}
                size={14}
                color={index < rating ? "#FFD700" : "#ccc"}
                style={{ marginRight: 2 }}
              />
            ))}
            <ThemedText style={styles.ratingText}>{rating}.0</ThemedText>
          </View>
          <TouchableOpacity 
            style={styles.visitButtonWrapper}
            onPress={onVisitPress}
          >
            <LinearGradient
              colors={["#6366f1", "#818cf8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.visitButton}
            >
              <ThemedText style={styles.visitButtonText}>Visit Now</ThemedText>
              <Ionicons
                name="arrow-forward"
                size={16}
                color="#fff"
                style={{ marginLeft: 4 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  doctorCard: {
    margin: 16,
    marginTop: 8,
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
  doctorCardContent: {
    flexDirection: "row",
  },
  doctorImageContainer: {
    position: "relative",
    marginRight: 16,
  },
  doctorImageBackground: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 45,
    zIndex: -1,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    borderWidth: 2,
    borderColor: "#6C63FF",
  },
  doctorInfo: {
    flex: 1,
    justifyContent: "center",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "600",
  },
  doctorSpecialtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  specialtyText: {
    fontSize: 14,
    color: "#6366f1",
    marginLeft: 6,
    fontWeight: "500",
  },
  doctorExperienceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  experienceText: {
    fontSize: 14,
    color: "#777",
    marginLeft: 6,
  },
  doctorRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#777",
  },
  visitButtonWrapper: {
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  visitButton: {
    flexDirection: "row",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  visitButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default DoctorCard; 