import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";

interface HeaderProps {
  title: string;
  subtitle: string;
  onNotificationPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onNotificationPress,
}) => {
  return (
    <View style={styles.header}>
      <View>
        <ThemedText type="subtitle" style={styles.headerTitle}>
          {title}
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          {subtitle}
        </ThemedText>
      </View>
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={onNotificationPress}
      >
        <Ionicons name="notifications-outline" size={22} color="#555" />
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  notificationButton: {
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
});

export default Header; 