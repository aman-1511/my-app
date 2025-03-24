import React from "react";

import DoctorCard, { DoctorItem } from "./DoctorCard";
import SectionHeader from "./SectionHeader";

interface DoctorListProps {
  doctors: DoctorItem[];
  onMessagePress?: (id: number) => void;
  onBookPress?: (id: number) => void;
  onSeeAllPress?: () => void;
}

const DoctorList: React.FC<DoctorListProps> = ({
  doctors,
  onMessagePress,
  onBookPress,
  onSeeAllPress,
}) => {
  return (
    <>
      <SectionHeader 
        title="Top Doctors" 
        onSeeAll={onSeeAllPress} 
      />

      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onMessagePress={onMessagePress}
          onBookPress={onBookPress}
        />
      ))}
    </>
  );
};

export default DoctorList; 