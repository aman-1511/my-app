import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";

interface SectionHeaderProps {
  title: string;
  actionText: string;
  onActionPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  actionText, 
  onActionPress = () => {} 
}) => {
  return (
    <View style={styles.sectionHeader}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        {title}
      </ThemedText>
      <TouchableOpacity onPress={onActionPress}>
        <ThemedText style={styles.seeAllText}>{actionText}</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  seeAllText: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "500",
  },
});

export default SectionHeader; 