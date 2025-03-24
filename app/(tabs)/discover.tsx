import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/useColorScheme";


import {
  DiscoverHeader,
  SearchBar,
  CategoryList,
  HealthNewsSection,
  WellnessTipsSection,
  TrendingTopicsSection,
  HealthCalculatorsSection,
  RecommendationSection
} from "@/components/Discover";

const { width, height } = Dimensions.get("window");

export default function DiscoverScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [activeCategory, setActiveCategory] = useState("For You");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#f5f7fa" },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 20 },
        ]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDark ? "#ffffff" : "#6366f1"}
          />
        }
      >
       
        <DiscoverHeader />

        
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

       
        <CategoryList 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

      
        <HealthNewsSection />


        <WellnessTipsSection />

       
        <TrendingTopicsSection />

      
        <HealthCalculatorsSection />

      
        <RecommendationSection />

     
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bottomPadding: {
    height: 100,
  },
});
