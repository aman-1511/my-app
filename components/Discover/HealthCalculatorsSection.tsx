import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SectionHeader from './SectionHeader';
import { healthCalculators } from './data';

const HealthCalculatorsSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <SectionHeader title="Health Calculators" actionText="More" />

      <View style={styles.calculatorsContainer}>
        {healthCalculators.map((item) => (
          <ThemedView key={item.id} style={styles.calculatorCard}>
            <View style={styles.calculatorContent}>
              <View
                style={[
                  styles.calculatorIconContainer,
                  { backgroundColor: item.color + "20" },
                ]}
              >
                <FontAwesome5
                  name={item.icon}
                  size={22}
                  color={item.color}
                />
              </View>
              <View style={styles.calculatorTextContainer}>
                <ThemedText
                  type="defaultSemiBold"
                  style={styles.calculatorTitle}
                >
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.calculatorDescription}>
                  {item.description}
                </ThemedText>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#888" />
          </ThemedView>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  calculatorsContainer: {
    marginTop: 4,
  },
  calculatorCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingRight: 30,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  calculatorContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  calculatorIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  calculatorTextContainer: {
    flex: 1,
  },
  calculatorTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  calculatorDescription: {
    fontSize: 13,
    color: "#777",
  },
});

export default HealthCalculatorsSection; 