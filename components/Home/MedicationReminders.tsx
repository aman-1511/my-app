import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SectionHeader from "./SectionHeader";
import MedicationCard from "./MedicationCard";

interface Medication {
  id: number;
  time: string;
  name: string;
  dosage: string;
  medicationImage: any;
}

interface MedicationRemindersProps {
  medications: Medication[];
  onSeeAllPress?: () => void;
  onReminderPress?: (id: number) => void;
}

const MedicationReminders: React.FC<MedicationRemindersProps> = ({
  medications,
  onSeeAllPress,
  onReminderPress,
}) => {
  return (
    <>
      <SectionHeader
        title="Medication Reminders"
        icon={<Ionicons name="medkit-outline" size={18} color="#6366f1" style={styles.sectionIcon} />}
        onSeeAllPress={onSeeAllPress}
      />

      {medications.map((medication) => (
        <MedicationCard
          key={medication.id}
          time={medication.time}
          name={medication.name}
          dosage={medication.dosage}
          medicationImage={medication.medicationImage}
          onReminderPress={() => onReminderPress && onReminderPress(medication.id)}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  sectionIcon: {
    marginRight: 8,
  },
});

export default MedicationReminders; 