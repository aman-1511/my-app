import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";

export interface SpecialtyItem {
  id: number;
  name: string;
  icon: string;
  color: string;
}

interface SpecialtyCardProps {
  specialty: SpecialtyItem;
  onPress?: (id: number) => void;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ 
  specialty,
  onPress 
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <TouchableOpacity 
      key={specialty.id} 
      style={styles.specialtyCard}
      onPress={() => onPress && onPress(specialty.id)}
    >
      <LinearGradient
        colors={isDark ? ["#2A2A2A", "#3D3D3D"] : ["#FFFFFF", "#F8F9FF"]}
        style={styles.specialtyCardGradient}
      />
      <View
        style={[
          styles.specialtyIconContainer,
          { backgroundColor: `${specialty.color}15` },
        ]}
      >
        <FontAwesome5
          name={specialty.icon}
          size={20}
          color={specialty.color}
        />
      </View>
      <ThemedText style={styles.specialtyName}>
        {specialty.name}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  specialtyCard: {
    width: 100,
    height: 110,
    borderRadius: 16,
    marginHorizontal: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 1,
    overflow: "hidden",
  },
  specialtyCardGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },
  specialtyIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  specialtyName: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default SpecialtyCard; 