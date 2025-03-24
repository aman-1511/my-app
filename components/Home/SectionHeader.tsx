import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";

interface SectionHeaderProps {
  title: string;
  icon: React.ReactNode;
  onSeeAllPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitleWrapper}>
        {icon}
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          {title}
        </ThemedText>
      </View>
      <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
        <ThemedText style={styles.seeAllText}>See All</ThemedText>
        <Ionicons name="chevron-forward" size={16} color="#6366f1" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    color: "#6366f1",
    marginRight: 4,
    fontWeight: "500",
  },
});

export default SectionHeader; 