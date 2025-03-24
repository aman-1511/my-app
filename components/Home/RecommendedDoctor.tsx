import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import SectionHeader from "./SectionHeader";
import DoctorCard from "./DoctorCard";

interface RecommendedDoctorProps {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  doctorImage: any;
  onSeeAllPress?: () => void;
  onVisitPress?: () => void;
}

const RecommendedDoctor: React.FC<RecommendedDoctorProps> = ({
  name,
  specialty,
  experience,
  rating,
  doctorImage,
  onSeeAllPress,
  onVisitPress,
}) => {
  return (
    <>
      <SectionHeader
        title="Recommend Doctor"
        icon={<FontAwesome5 name="stethoscope" size={16} color="#6366f1" style={styles.sectionIcon} />}
        onSeeAllPress={onSeeAllPress}
      />

      <DoctorCard
        name={name}
        specialty={specialty}
        experience={experience}
        rating={rating}
        doctorImage={doctorImage}
        onVisitPress={onVisitPress}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionIcon: {
    marginRight: 8,
  },
});

export default RecommendedDoctor; 