import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import SpecialtyCard, { SpecialtyItem } from "./SpecialtyCard";
import SectionHeader from "./SectionHeader";

interface SpecialtyListProps {
  specialties: SpecialtyItem[];
  onSpecialtyPress?: (id: number) => void;
  onSeeAllPress?: () => void;
}

const SpecialtyList: React.FC<SpecialtyListProps> = ({
  specialties,
  onSpecialtyPress,
  onSeeAllPress,
}) => {
  return (
    <>
      <SectionHeader 
        title="Browse Specialties" 
        onSeeAll={onSeeAllPress} 
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.specialtiesContainer}
      >
        {specialties.map((specialty) => (
          <SpecialtyCard 
            key={specialty.id}
            specialty={specialty}
            onPress={onSpecialtyPress}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  specialtiesContainer: {
    paddingBottom:15,
    paddingHorizontal: 12,
  },
});

export default SpecialtyList; 