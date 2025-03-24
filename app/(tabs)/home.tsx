import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Header,
  ProfileCard,
  AppointmentList,
  RecommendedDoctor,
  MedicationReminders,
  APPOINTMENTS,
  RECOMMENDED_DOCTOR,
  MEDICATIONS
} from "@/components/Home";

export default function Home() {
  const insets = useSafeAreaInsets();

  
  const handleBackPress = () => {
    console.log("Back button pressed");
  };
  
  const handleMenuPress = () => {
    console.log("Menu button pressed");
  };
  
  const handleAppointmentSeeAllPress = () => {
    console.log("See all appointments pressed");
  };
  
  const handleAppointmentCallPress = (id: number) => {
    console.log("Call appointment pressed:", id);
  };
  
  const handleDoctorSeeAllPress = () => {
    console.log("See all doctors pressed");
  };
  
  const handleDoctorVisitPress = () => {
    console.log("Visit doctor pressed");
  };
  
  const handleMedicationSeeAllPress = () => {
    console.log("See all medications pressed");
  };
  
  const handleMedicationReminderPress = (id: number) => {
    console.log("Set reminder pressed for medication:", id);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={[styles.container, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Header 
          title="My Treatment" 
          onBackPress={handleBackPress}
          onMenuPress={handleMenuPress}
        />
        
        <ProfileCard 
          name="Esther Howard"
          gender="Female"
          age="23y.o"
          height='5.4"'
          treatmentPlans={3}
          profileImage={require("../../assets/images/men.png")}
        />
        
        <AppointmentList 
          appointments={APPOINTMENTS}
          onSeeAllPress={handleAppointmentSeeAllPress}
          onCallPress={handleAppointmentCallPress}
        />
        
        <RecommendedDoctor 
          name={RECOMMENDED_DOCTOR.name}
          specialty={RECOMMENDED_DOCTOR.specialty}
          experience={RECOMMENDED_DOCTOR.experience}
          rating={RECOMMENDED_DOCTOR.rating}
          doctorImage={RECOMMENDED_DOCTOR.image}
          onSeeAllPress={handleDoctorSeeAllPress}
          onVisitPress={handleDoctorVisitPress}
        />
        
        <MedicationReminders 
          medications={MEDICATIONS.map(med => ({
            id: med.id,
            time: med.time,
            name: med.name,
            dosage: med.dosage,
            medicationImage: med.image
          }))}
          onSeeAllPress={handleMedicationSeeAllPress}
          onReminderPress={handleMedicationReminderPress}
        />

        <View style={styles.tabBarSpacing} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  tabBarSpacing: {
    height: 80,
  },
});
