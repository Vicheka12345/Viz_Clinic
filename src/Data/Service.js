import React from 'react';
import { SquarePlus, Bandage, Activity,ShieldCheck, Clock, Users } from 'lucide-react';
import care from '../images/care.webp';
import maternal2 from '../images/maternal-2.webp';
import excellenceImg from '../images/Excellence-in-Medical.png';
import emergency1 from '../images/emergency-1.webp';
import facilities6 from '../images/facilities-6.webp';
import doctorFemale1 from '../images/doctor_female1.png';
import doctorMale1 from '../images/doctor_male1.png';
import doctorFemale2 from '../images/doctor_female2.png';
// feacture service
export const data_services = [
    {
      title: "Maternal Care",
      desc: "Expert pregnancy & delivery support",
      image: maternal2,
    },
    {
      title: "Vaccination",
      desc: "Complete immunization programs",
      image: excellenceImg,
    },
    {
      title: "Emergency Care",
      desc: "24/7 critical care services",
      image: emergency1,
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art medical equipment",
      image: facilities6,
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
      name: "បណ្ឌិត សុខ ស្រីពេជ្រ",
      specialty: "Cardiology Specialist",
      experience: 14,
      rating: 4.9,
      reviews: 127,
      status: "online",
      actionType: "book",
      image: doctorFemale1
    },
    {
      name: "បណ្ឌិត សុខ វិចិត្រ",
      specialty: "Neurology Expert",
      experience: 16,
      rating: 4.8,
      reviews: 89,
      status: "away",
      actionType: "schedule",
      image: doctorMale1
    },
    {
      name: "បណ្ឌិត សៀង សុវណ្ណារី",
      specialty: "Pediatrics Care",
      experience: 11,
      rating: 5.0,
      reviews: 203,
      status: "online",
      actionType: "book",
      image: doctorFemale2
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
   export const servicesData = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular conditions.',
    features: ['ECG Testing', 'Heart Surgery'],
    image: care,
  },
  {
    id: 2,
    title: 'Neurology',
    description: 'Specialized care for neurological disorders with cutting-edge technology and expert consultations.',
    features: ['Brain Imaging', 'Nerve Tests'],
    image: care,
  },
  {
    id: 3,
    title: 'Pediatrics',
    description: 'Dedicated healthcare services for children, ensuring their growth and well-being from infancy to adolescence.',
    features: ['Vaccinations', 'Growth Monitoring'],
    image: care,
  },
  {
    id: 4,
    title: 'Orthopedics',
    description: 'Treatment for bone and joint conditions, including sports injuries and degenerative diseases.',
    features: ['Joint Replacement', 'Physical Therapy'],
    image: care,
  },
  {
    id: 5,
    title: 'Dermatology',
    description: 'Expert care for skin, hair, and nail conditions, providing both medical and aesthetic treatments.',
    features: ['Skin Cancer Screening', 'Laser Therapy'],
    image: care,
  },
  {
    id: 6,
    title: 'Gastroenterology',
    description: 'Comprehensive diagnosis and treatment for digestive system and liver disorders.',
    features: ['Endoscopy', 'Liver Care'],
    image: care,
  },
];