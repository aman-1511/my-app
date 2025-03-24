import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import SectionHeader from './SectionHeader';

const RecommendationSection: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={styles.sectionContainer}>
      <SectionHeader title="Recommended For You" actionText="Customize" />

      <ThemedView style={styles.recommendationCard}>
        <LinearGradient
          colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
          style={styles.recommendationGradient}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=2513&auto=format&fit=crop",
          }}
          style={styles.recommendationImage}
        />
        <View style={styles.recommendationContent}>
          <ThemedText type="subtitle" style={styles.recommendationTitle}>
            30-Day Wellness Challenge
          </ThemedText>
          <ThemedText style={styles.recommendationDescription}>
            Join thousands of others in our guided monthly wellness program
            featuring daily activities for physical and mental health.
          </ThemedText>
          <TouchableOpacity style={styles.recommendationButton}>
            <LinearGradient
              colors={["#6366f1", "#818cf8"]}
              style={styles.recommendationButtonGradient}
            >
              <ThemedText style={styles.recommendationButtonText}>
                Join Challenge
              </ThemedText>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  recommendationCard: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
  },
  recommendationGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },
  recommendationImage: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  recommendationContent: {
    padding: 20,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  recommendationDescription: {
    fontSize: 14,
    color: "#777",
    lineHeight: 20,
    marginBottom: 16,
  },
  recommendationButton: {
    alignSelf: "flex-start",
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  recommendationButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  recommendationButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default RecommendationSection; 