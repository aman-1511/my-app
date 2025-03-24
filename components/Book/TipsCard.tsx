import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

export interface TipItem {
  id: number;
  text: string;
}

interface TipsCardProps {
  title: string;
  tips: TipItem[];
}

const TipsCard: React.FC<TipsCardProps> = ({ title, tips }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.tipsCard}>
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.cardGradient}
      />
      <View style={styles.tipsHeader}>
        <MaterialIcons name="lightbulb" size={22} color="#f59e0b" />
        <ThemedText type="subtitle" style={styles.tipsTitle}>
          {title}
        </ThemedText>
      </View>
      <View style={styles.tipsList}>
        {tips.map((tip) => (
          <View key={tip.id} style={styles.tipItem}>
            <View style={styles.tipBullet} />
            <ThemedText style={styles.tipText}>
              {tip.text}
            </ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  tipsCard: {
    marginHorizontal: 16,
    marginVertical: 16,
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
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tipsTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  tipsList: {
    marginLeft: 5,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f59e0b",
    marginTop: 6,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TipsCard; 