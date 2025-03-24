import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

export interface DoctorItem {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  availability: string;
  image: string;
}

interface DoctorCardProps {
  doctor: DoctorItem;
  onMessagePress?: (id: number) => void;
  onBookPress?: (id: number) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onMessagePress,
  onBookPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView key={doctor.id} style={styles.doctorCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.doctorCardContent}>
        <Image
          source={{ uri: doctor.image }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <ThemedText type="subtitle" style={styles.doctorName}>
            {doctor.name}
          </ThemedText>
          <ThemedText style={styles.doctorSpecialty}>
            {doctor.specialty}
          </ThemedText>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <ThemedText style={styles.ratingText}>
              {doctor.rating}
            </ThemedText>
            <ThemedText style={styles.reviewsText}>
              ({doctor.reviews} reviews)
            </ThemedText>
          </View>
          <View style={styles.availabilityContainer}>
            <View
              style={[
                styles.availabilityDot,
                {
                  backgroundColor: doctor.availability.includes(
                    "Available"
                  )
                    ? "#10b981"
                    : "#f59e0b",
                },
              ]}
            />
            <ThemedText style={styles.availabilityText}>
              {doctor.availability}
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.doctorCardActions}>
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => onMessagePress && onMessagePress(doctor.id)}
        >
          <Ionicons name="chatbubble-outline" size={18} color="#6366f1" />
          <ThemedText style={styles.actionButtonText}>Message</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => onBookPress && onBookPress(doctor.id)}
        >
          <LinearGradient
            colors={["#6366f1", "#818cf8"]}
            style={styles.bookButtonGradient}
          >
            <ThemedText style={styles.bookButtonText}>
              Book Video Call
            </ThemedText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  doctorCard: {
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
  doctorCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f0f0f0",
  },
  doctorInfo: {
    marginLeft: 16,
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "600",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "600",
  },
  reviewsText: {
    fontSize: 13,
    color: "#777",
    marginLeft: 4,
  },
  availabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  availabilityText: {
    fontSize: 13,
    color: "#777",
  },
  doctorCardActions: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
  },
  messageButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(99, 102, 241, 0.3)",
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#6366f1",
  },
  bookButton: {
    flex: 1.5,
    marginLeft: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  bookButtonGradient: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default DoctorCard; 