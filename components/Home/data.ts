
import { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export interface Appointment {
  id: number;
  iconName: keyof typeof Ionicons.glyphMap;
  month: string;
  day: string;
  type: string;
  subtext: string;
  doctorImage: ImageSourcePropType;
  doctorName: string;
  callIconName: keyof typeof Ionicons.glyphMap;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: ImageSourcePropType;
}

export interface Medication {
  id: number;
  time: string;
  name: string;
  dosage: string;
  image: ImageSourcePropType;
}


export const APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    iconName: "calendar-outline",
    month: "Sep",
    day: "07",
    type: "Clinic Visit",
    subtext: "Appointment",
    doctorImage: require("../../assets/images/doctor2.png"),
    doctorName: "Dr. Jenni",
    callIconName: "call",
  },
  {
    id: 2,
    iconName: "videocam-outline",
    month: "Sep",
    day: "15",
    type: "Video",
    subtext: "Consulting",
    doctorImage: require("../../assets/images/doctor3.png"),
    doctorName: "Dr. Jaff",
    callIconName: "videocam",
  },
];

export const RECOMMENDED_DOCTOR: Doctor = {
  id: 1,
  name: "Dr. Roman Novara",
  specialty: "Pulmonologist",
  experience: "5 years experience",
  rating: 4,
  image: require("../../assets/images/doctor1.png"),
};

export const MEDICATIONS: Medication[] = [
  {
    id: 1,
    time: "Today, 9:00 PM",
    name: "Amoxicillin",
    dosage: "500mg, 1 tablet after dinner",
    image: require("../../assets/images/medicine.png"),
  },
]; 