import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  onMenuPress,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Ionicons name="chevron-back" size={22} color="#555" />
      </TouchableOpacity>
      <ThemedText type="subtitle" style={styles.headerTitle}>
        {title}
      </ThemedText>
      <TouchableOpacity style={styles.backButton} onPress={onMenuPress}>
        <Ionicons name="ellipsis-vertical" size={22} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Header; 