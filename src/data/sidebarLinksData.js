import {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  ChartPie,
  TestTube2,
  MessageSquare,
  HelpCircle,
  Settings
} from "lucide-react";

const sidebarLinks = {
  general: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "History", icon: Clock },
    { label: "Calendar", icon: Calendar },
    { label: "Appointments", icon: ClipboardList },
  ],
  tools: [
    { label: "Statistics", icon: ChartPie },
    { label: "Tests", icon: TestTube2 },
    { label: "Chat", icon: MessageSquare },
    { label: "Support", icon: HelpCircle },
  ],
  settings: [
    { label: "Setting", icon: Settings },
  ],
};

export default sidebarLinks;
