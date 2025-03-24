import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MenuSectionProps {
  title: string;
  children: React.ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => {
  return (
    <View style={styles.sectionWrapper}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <View style={styles.section}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
    marginLeft: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default MenuSection; 