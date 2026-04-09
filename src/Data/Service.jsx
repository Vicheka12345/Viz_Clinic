import React from 'react';
import { SquarePlus, Bandage, Activity } from 'lucide-react';

// feacture service
export const data_services = [
    {
      title: "Maternal Care",
      desc: "Expert pregnancy & delivery support",
      image: "https://images.unsplash.com/photo-1531053270060-6643c5e707fe?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      title: "Vaccination",
      desc: "Complete immunization programs",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      title: "Emergency Care",
      desc: "24/7 critical care services",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art medical equipment",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=200&h=200",
    },
  ];
  export const services = [
  {
    id: 1,
    icon: (
      <SquarePlus className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
    ),
    title: "Dermatology Clinic",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    icon: (
      <Bandage  className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
    ),
    title: "Surgery Center",
    description:
      "Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
  },
  {
    id: 3,
    icon: (
      <Activity className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
    ),
    title: "Diagnostics Lab",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed magna.",
  },
];