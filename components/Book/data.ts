import { SpecialtyItem } from "./SpecialtyCard";
import { DoctorItem } from "./DoctorCard";
import { TipItem } from "./TipsCard";

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 1,
    name: "Primary Care",
    icon: "stethoscope",
    color: "#6366f1",
  },
  {
    id: 2,
    name: "Mental Health",
    icon: "brain",
    color: "#10b981",
  },
  {
    id: 3,
    name: "Pediatrics",
    icon: "baby",
    color: "#fbbf24",
  },
  {
    id: 4,
    name: "Cardiology",
    icon: "heartbeat",
    color: "#ef4444",
  },
  {
    id: 5,
    name: "More",
    icon: "plus",
    color: "#8b5cf6",
  },
  {
    id: 6,
    name: "Dermatology",
    icon: "allergies",
    color: "#f43f5e",
  },
];

export const DOCTORS: DoctorItem[] = [
  {
    id: 1,
    name: "Dr. Jessica Chen",
    specialty: "Primary Care",
    rating: 4.9,
    reviews: 142,
    availability: "Available today",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Michael Wilson",
    specialty: "Dermatology",
    rating: 4.8,
    reviews: 98,
    availability: "Next available: Tomorrow",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Mental Health",
    rating: 4.9,
    reviews: 156,
    availability: "Available today",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=987&auto=format&fit=crop",
  },
];

export const TELEMEDICINE_TIPS: TipItem[] = [
  {
    id: 1,
    text: "Find a quiet, well-lit place for your call",
  },
  {
    id: 2,
    text: "Test your camera and microphone before the appointment",
  },
  {
    id: 3,
    text: "Have your medication list and symptoms ready to discuss",
  },
]; 