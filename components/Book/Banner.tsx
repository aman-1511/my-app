import React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonPress?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonPress,
}) => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.banner}
      imageStyle={styles.bannerImage}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.7)"]}
        style={styles.bannerGradient}
      >
        <View style={styles.bannerContent}>
          <ThemedText style={styles.bannerTitle}>{title}</ThemedText>
          <ThemedText style={styles.bannerSubtitle}>
            {subtitle}
          </ThemedText>
          <TouchableOpacity 
            style={styles.bannerButton}
            onPress={onButtonPress}
          >
            <ThemedText style={styles.bannerButtonText}>
              {buttonText}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 180,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  bannerImage: {
    borderRadius: 20,
  },
  bannerGradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  bannerContent: {
    maxWidth: "80%",
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 16,
  },
  bannerButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: "#6366f1",
    fontWeight: "600",
  },
});

export default Banner; 