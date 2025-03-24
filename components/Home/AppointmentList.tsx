import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SectionHeader from "./SectionHeader";
import AppointmentCard from "./AppointmentCard";

interface Appointment {
  id: number;
  iconName: keyof typeof Ionicons.glyphMap;
  month: string;
  day: string;
  type: string;
  subtext: string;
  doctorImage: any;
  doctorName: string;
  callIconName: keyof typeof Ionicons.glyphMap;
}

interface AppointmentListProps {
  appointments: Appointment[];
  onSeeAllPress?: () => void;
  onCallPress?: (id: number) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
  onSeeAllPress,
  onCallPress,
}) => {
  return (
    <>
      <SectionHeader
        title="My Checkup Schedule"
        icon={<Ionicons name="calendar" size={18} color="#6366f1" style={styles.sectionIcon} />}
        onSeeAllPress={onSeeAllPress}
      />

      <View style={styles.appointmentsContainer}>
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            iconName={appointment.iconName}
            month={appointment.month}
            day={appointment.day}
            type={appointment.type}
            subtext={appointment.subtext}
            doctorImage={appointment.doctorImage}
            doctorName={appointment.doctorName}
            callIconName={appointment.callIconName}
            onCallPress={() => onCallPress && onCallPress(appointment.id)}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appointmentsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionIcon: {
    marginRight: 8,
  },
});

export default AppointmentList; 