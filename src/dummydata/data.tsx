import {
  FileText,
  Grid,
  HardHat,
  Home,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  Droplets,
  Wind,
  Building,
  FilePieChart,
  Recycle,
} from "lucide-react";
import { ReactNode } from "react";

interface Sensor {
  name: string;
  icon: ReactNode;
  description: string;
  category: string;
  recent: boolean;
  status: string;
}

interface Report {
  name: string;
  project: string;
  modified: string;
  icon: ReactNode;
  shared: boolean;
  size: string;
  collaborators: number;
}

interface Project {
  name: string;
  description: string;
  progress: number;
  esgScore: number;
  dueDate: string;
  members: number;
  sensors: number;
}

interface ImprovementTip {
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  impact: string;
}

interface SidebarSubItem {
  title: string;
  url: string;
  badge?: string;
}

interface SidebarItem {
  title: string;
  icon: ReactNode;
  isActive?: boolean;
  badge?: string;
  items?: SidebarSubItem[];
}

export const sensors: Sensor[] = [
  {
    name: "Energy Meter",
    icon: <Zap className="text-yellow-500" />,
    description: "Tracks kWh consumption on-site",
    category: "Environmental",
    recent: true,
    status: "Active",
  },
  {
    name: "Water Flow Sensor",
    icon: <Droplets className="text-blue-500" />,
    description: "Monitors daily water usage in liters",
    category: "Environmental",
    recent: true,
    status: "Active",
  },
  {
    name: "Air Quality Monitor",
    icon: <Wind className="text-slate-500" />,
    description: "Measures PM2.5 and CO₂ levels",
    category: "Environmental",
    recent: true,
    status: "Active",
  },
  {
    name: "Safety Compliance Cam",
    icon: <HardHat className="text-orange-500" />,
    description: "Detects PPE usage and safety incidents",
    category: "Social",
    recent: false,
    status: "Needs Calibration",
  },
  {
    name: "Waste Volume Sensor",
    icon: <Recycle className="text-green-500" />,
    description: "Measures segregated vs. unsegregated waste",
    category: "Environmental",
    recent: false,
    status: "Active",
  },
];

export const recentReports: Report[] = [
  {
    name: "Q2 ESG Summary.pdf",
    project: "Makati Tower Build",
    modified: "2 hours ago",
    icon: <FilePieChart className="text-green-600" />,
    shared: true,
    size: "2.5 MB",
    collaborators: 2,
  },
  {
    name: "Aurora Site Compliance.pdf",
    project: "Baler Housing Project",
    modified: "Yesterday",
    icon: <ShieldCheck className="text-blue-600" />,
    shared: true,
    size: "1.2 MB",
    collaborators: 3,
  },
  {
    name: "Energy Usage Analysis.csv",
    project: "All Projects",
    modified: "3 days ago",
    icon: <Zap className="text-yellow-600" />,
    shared: false,
    size: "850 KB",
    collaborators: 0,
  },
  {
    name: "Worker Safety Log.docx",
    project: "Makati Tower Build",
    modified: "Last week",
    icon: <HardHat className="text-orange-600" />,
    shared: true,
    size: "345 KB",
    collaborators: 4,
  },
];

export const projects: Project[] = [
  {
    name: "Makati Tower Build",
    description: "High-rise commercial building construction",
    progress: 75,
    esgScore: 88,
    dueDate: "Dec 15, 2025",
    members: 15,
    sensors: 8,
  },
  {
    name: "Baler Housing Project",
    description: "Low-cost, climate-resilient housing development",
    progress: 60,
    esgScore: 92,
    dueDate: "Jan 30, 2026",
    members: 25,
    sensors: 12,
  },
  {
    name: "Cavite Warehouse Expansion",
    description: "Industrial warehouse and logistics hub",
    progress: 90,
    esgScore: 75,
    dueDate: "Oct 25, 2025",
    members: 12,
    sensors: 6,
  },
];

export const improvementTips: ImprovementTip[] = [
  {
    title: "Reducing On-Site Energy Use",
    description:
      "Learn to optimize machinery schedules and switch to LED lighting.",
    duration: "15m Read",
    level: "Beginner",
    category: "Environmental",
    impact: "+5 Score Pts",
  },
  {
    title: "Effective Waste Segregation",
    description:
      "Best practices for separating materials to increase your recycling rate.",
    duration: "20m Read",
    level: "Intermediate",
    category: "Environmental",
    impact: "+8 Score Pts",
  },
  {
    title: "Enhancing Worker Safety",
    description:
      "Implement daily safety briefings and PPE checks to lower incident rates.",
    duration: "30m Read",
    level: "Intermediate",
    category: "Social",
    impact: "+10 Score Pts",
  },
];

// LuntiMeter: Sample data for sidebar navigation
export const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: <Home />,
    isActive: true,
  },
  {
    title: "Sensors",
    icon: <Grid />,
    badge: "1", // e.g. 1 sensor needs calibration
    items: [
      { title: "All Sensors", url: "#" },
      { title: "Active", url: "#" },
      { title: "Needs Calibration", url: "#", badge: "1" },
    ],
  },
  {
    title: "Reports",
    icon: <FileText />,
    items: [
      { title: "Recent", url: "#" },
      { title: "Generated", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
  {
    title: "Projects",
    icon: <Building />,
    badge: "3",
    items: [
      { title: "Active Projects", url: "#", badge: "3" },
      { title: "Completed", url: "#" },
      { title: "Archived", url: "#" },
    ],
  },
  {
    title: "Improvements",
    icon: <Lightbulb />,
    items: [
      { title: "AI Recommendations", url: "#" },
      { title: "Best Practices", url: "#" },
      { title: "Resource Hub", url: "#" },
    ],
  },
  {
    title: "Partners",
    icon: <Users />,
    items: [
      { title: "Financial Institutions", url: "#" },
      { title: "Material Suppliers", url: "#" },
    ],
  },
];
