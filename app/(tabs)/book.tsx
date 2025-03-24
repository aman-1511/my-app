import React from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Header,
  Banner,
  SpecialtyList,
  DoctorList,
  TipsCard,
  SPECIALTIES,
  DOCTORS,
  TELEMEDICINE_TIPS
} from "@/components/Book";

export default function Book() {
  const insets = useSafeAreaInsets();

 
  const handleNotificationPress = () => {
    console.log("Notification pressed");
  };

  const handleBannerButtonPress = () => {
    console.log("Book Now pressed");
  };

  const handleSpecialtyPress = (id: number) => {
    console.log("Specialty pressed:", id);
  };

  const handleSpecialtySeeAllPress = () => {
    console.log("See all specialties pressed");
  };

  const handleDoctorSeeAllPress = () => {
    console.log("See all doctors pressed");
  };

  const handleMessagePress = (id: number) => {
    console.log("Message doctor pressed:", id);
  };

  const handleBookPress = (id: number) => {
    console.log("Book doctor pressed:", id);
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
          title="Telemedicine" 
          subtitle="Connect with doctors online"
          onNotificationPress={handleNotificationPress}
        />

        <Banner 
          imageUrl="https://img.freepik.com/free-photo/woman-having-video-call-with-doctor_23-2149061696.jpg?w=1380&t=st=1719913015~exp=1719913615~hmac=79e73dfc32f4ff9e6af3bef51de51a4c9e2cdf6d41a49b55f95cfece2d20ac2e"
          title="Virtual Care"
          subtitle="Consult with top specialists from the comfort of your home"
          buttonText="Book Now"
          onButtonPress={handleBannerButtonPress}
        />

        <SpecialtyList 
          specialties={SPECIALTIES}
          onSpecialtyPress={handleSpecialtyPress}
          onSeeAllPress={handleSpecialtySeeAllPress}
        />

        <DoctorList 
          doctors={DOCTORS}
          onMessagePress={handleMessagePress}
          onBookPress={handleBookPress}
          onSeeAllPress={handleDoctorSeeAllPress}
        />

        <TipsCard 
          title="Telemedicine Tips"
          tips={TELEMEDICINE_TIPS}
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
