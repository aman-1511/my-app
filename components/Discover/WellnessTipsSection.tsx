import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SectionHeader from './SectionHeader';
import IconRenderer from './IconRenderer';
import { wellnessTips } from './data';

const WellnessTipsSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <SectionHeader title="Daily Wellness Tips" actionText="See All" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tipsContainer}
      >
        {wellnessTips.map((item) => (
          <ThemedView key={item.id} style={styles.tipCard}>
            <View
              style={[
                styles.tipIconContainer,
                { backgroundColor: item.color + "20" },
              ]}
            >
              <IconRenderer name={item.icon} type={item.iconType} size={24} color={item.color} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.tipTitle}>
              {item.title}
            </ThemedText>
            <ThemedText style={styles.tipDescription}>
              {item.description}
            </ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  tipsContainer: {
    paddingBottom: 8,
  },
  tipCard: {
    width: 220,
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tipIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  tipTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  tipDescription: {
    fontSize: 13,
    color: "#777",
    lineHeight: 18,
  },
});

export default WellnessTipsSection; 