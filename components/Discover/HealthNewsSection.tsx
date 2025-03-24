import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";
import SectionHeader from './SectionHeader';
import { healthNews } from './data';

const { width } = Dimensions.get("window");
const cardWidth = width * 0.85;

const HealthNewsSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <SectionHeader title="Latest Health News" actionText="See All" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.newsContainer}
      >
        {healthNews.map((item) => (
          <TouchableOpacity key={item.id} style={styles.newsCard}>
            <Image source={{ uri: item.image }} style={styles.newsImage} />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.newsGradient}
            />
            <View style={styles.newsContent}>
              <ThemedText style={styles.newsTitle}>{item.title}</ThemedText>
              <View style={styles.newsFooter}>
                <ThemedText style={styles.newsSource}>
                  {item.source}
                </ThemedText>
                <ThemedText style={styles.newsDate}>{item.date}</ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  newsContainer: {
    paddingBottom: 8,
  },
  newsCard: {
    width: cardWidth,
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  newsImage: {
    width: "100%",
    height: "100%",
  },
  newsGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  newsContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  newsFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newsSource: {
    fontSize: 12,
    color: "#f0f0f0",
  },
  newsDate: {
    fontSize: 12,
    color: "#f0f0f0",
  },
});

export default HealthNewsSection; 