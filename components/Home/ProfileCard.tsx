import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

interface ProfileCardProps {
  name: string;
  gender: string;
  age: string;
  height: string;
  treatmentPlans: number;
  profileImage: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  gender,
  age,
  height,
  treatmentPlans,
  profileImage,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.profileCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.profileInfo}>
        <View>
          <ThemedText type="subtitle" style={styles.profileName}>
            {name}
          </ThemedText>
          <ThemedText style={styles.profileDetails}>
            {gender}, {age}
          </ThemedText>
          <ThemedText style={styles.profileDetails}>
            Height: {height}
          </ThemedText>
          <LinearGradient
            colors={["#6366f1", "#818cf8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.treatmentPlanBadge}
          >
            <ThemedText style={styles.treatmentPlanText}>
              {treatmentPlans} Treatment Plans
            </ThemedText>
          </LinearGradient>
        </View>

        <Image
          source={profileImage}
          style={styles.profileImage}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    margin: 16,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
    overflow: "hidden",
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },
  profileDetails: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  treatmentPlanBadge: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginTop: 12,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  treatmentPlanText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  profileImage: {
    width: 150,
    height: 150,
  },
});

export default ProfileCard; 