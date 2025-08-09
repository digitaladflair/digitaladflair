import {
  Building2,
  Cloud,
  Globe,
  LucideIcon,
  Megaphone,
  Monitor,
  Smartphone,
} from "lucide-react";

export type TService = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  iconColor: string;
  bgColor: string;
  iconBgColor: string;
  image: string;
  gradient: string;
};

export const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Custom websites with stunning UI/UX, built with modern frameworks like React, Angular, and Laravel.",
    features: [
      "Custom Website Design",
      "Frontend & Backend Development",
      "CMS Development",
      "E-commerce Solutions",
    ],
    iconColor: "text-blue-500",
    iconBgColor: "bg-blue-100",
    bgColor: "bg-blue-400",
    image: "/images/services/web_dev.png",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform apps for Android and iOS with clean UI and robust performance.",
    features: [
      "Android & iOS Apps",
      "Flutter & React Native",
      "Enterprise Mobility",
      "App Maintenance",
    ],
    iconColor: "text-emerald-500",
    iconBgColor: "bg-emerald-100",
    bgColor: "bg-emerald-400",
    image: "/images/services/mobile_dev.png",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps",
    description:
      "Scale smart and stay secure in the cloud with AWS, Azure, and GCP solutions.",
    features: [
      "Cloud Migration",
      "DevOps Automation",
      "Server Management",
      "SaaS Deployment",
    ],
    iconColor: "text-indigo-500",
    iconBgColor: "bg-indigo-100",
    bgColor: "bg-indigo-400",
    image: "/images/services/cloud_service.png",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Monitor,
    title: "Web & Enterprise Applications",
    description:
      "Custom business solutions including ERP, CRM, and automation systems.",
    features: [
      "Custom Web Apps",
      "ERP & CRM Systems",
      "SaaS Products",
      "API Integrations",
    ],
    iconColor: "text-amber-500",
    iconBgColor: "bg-amber-100",
    bgColor: "bg-amber-400",
    image: "/images/services/web_enterprise.png",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Building2,
    title: "SAP & Enterprise Solutions",
    description:
      "Comprehensive SAP implementation and consulting services for modern enterprises.",
    features: [
      "SAP Implementation",
      "S/4 HANA Consulting",
      "Business Integration",
      "SAP Support",
    ],
    iconColor: "text-violet-500",
    iconBgColor: "bg-violet-100",
    bgColor: "bg-violet-400",
    image: "/images/services/sap_enterprise.png",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Complete digital marketing solutions to boost your online presence and growth.",
    features: [
      "SEO & Social Media",
      "Content Marketing",
      "Brand Design",
      "PPC Campaigns",
    ],
    iconColor: "text-red-500",
    iconBgColor: "bg-red-100",
    bgColor: "bg-red-400",
    image: "/images/services/digital_marketing.png",
    gradient: "from-red-400/20 to-red-400/5",
  },
];
