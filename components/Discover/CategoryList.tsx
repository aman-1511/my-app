import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { categories } from './data';

interface CategoryListProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryItem,
            activeCategory === category && styles.activeCategoryItem,
          ]}
          onPress={() => setActiveCategory(category)}
        >
          <ThemedText
            style={[
              styles.categoryText,
              activeCategory === category && styles.activeCategoryText,
            ]}
          >
            {category}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    marginBottom: 20,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "transparent",
  },
  activeCategoryItem: {
    backgroundColor: "#6366f1",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
});

export default CategoryList; 