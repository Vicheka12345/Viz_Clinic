import React from 'react';
import { SquarePlus, Bandage, Activity,ShieldCheck, Clock, Users } from 'lucide-react';

// feacture service
export const data_services = [
    {
      title: "Maternal Care",
      desc: "Expert pregnancy & delivery support",
      image: "https://themewagon.github.io/Clinic/assets/img/health/maternal-2.webp",
    },
    {
      title: "Vaccination",
      desc: "Complete immunization programs",
      image: "https://themewagon.github.io/Clinic/assets/img/health/vaccination-3.webp",
    },
    {
      title: "Emergency Care",
      desc: "24/7 critical care services",
      image: "https://themewagon.github.io/Clinic/assets/img/health/emergency-1.webp",
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art medical equipment",
      image: "https://themewagon.github.io/Clinic/assets/img/health/facilities-6.webp",
    },
  ];
  export const services = [
  {
    id: 1,
    icon: SquarePlus,
    title: "Dermatology Clinic",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    icon: Bandage,
    title: "Surgery Center",
    description:
      "Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
  },
  {
    id: 3,
    icon: Activity,
    title: "Diagnostics Lab",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed magna.",
  },
];
//datacard doctor
export const doctors = [
    {
      name: "Dr. Amanda Foster",
      specialty: "Cardiology Specialist",
      experience: 14,
      rating: 4.9,
      reviews: 127,
      status: "online",
      actionType: "book",
      image: "https://themewagon.github.io/Clinic/assets/img/health/staff-2.webp"
    },
    {
      name: "Dr. Marcus Johnson",
      specialty: "Neurology Expert",
      experience: 16,
      rating: 4.8,
      reviews: 89,
      status: "away",
      actionType: "schedule",
      image: "https://themewagon.github.io/Clinic/assets/img/health/staff-6.webp"
    },
    {
      name: "Dr. Rachel Williams",
      specialty: "Pediatrics Care",
      experience: 11,
      rating: 5.0,
      reviews: 203,
      status: "online",
      actionType: "book",
      image: "https://themewagon.github.io/Clinic/assets/img/health/staff-4.webp"
    },
    // Add more doctors as needed...
  ];
  export const feature = [
    {
      icon: ShieldCheck,
      title: "Advanced Technology",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur."
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem."
    }
  ];