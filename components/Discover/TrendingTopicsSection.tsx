import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SectionHeader from './SectionHeader';
import { trendingTopics } from './data';

const { width } = Dimensions.get("window");
const topicCardWidth = width * 0.42;

const TrendingTopicsSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <SectionHeader title="Trending Health Topics" actionText="Explore" />

      <View style={styles.topicsGrid}>
        {trendingTopics.map((item) => (
          <ThemedView key={item.id} style={styles.topicCard}>
            <View
              style={[
                styles.topicIconContainer,
                { backgroundColor: item.color + "20" },
              ]}
            >
              <FontAwesome5 name={item.icon} size={22} color={item.color} />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.topicTitle}>
              {item.title}
            </ThemedText>
            <ThemedText style={styles.topicSearches}>
              {item.searches}
            </ThemedText>
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
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  topicCard: {
    width: topicCardWidth,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: "center",
  },
  topicIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  topicTitle: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },
  topicSearches: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
});

export default TrendingTopicsSection; 