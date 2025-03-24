import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemedView style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={20}
        color={isDark ? "#888" : "#666"}
        style={styles.searchIcon}
      />
      <TextInput
        style={[styles.searchInput, { color: isDark ? "#f5f5f5" : "#333" }]}
        placeholder="Search health topics, news, tips..."
        placeholderTextColor={isDark ? "#888" : "#999"}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={() => setSearchQuery("")}>
          <Ionicons
            name="close-circle"
            size={20}
            color={isDark ? "#888" : "#666"}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 4,
  },
  clearIcon: {
    marginLeft: 8,
  },
});

export default SearchBar; 