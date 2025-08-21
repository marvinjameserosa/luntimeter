"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Bell,
    ChevronDown,
    Cloud,
    Grid,
    Leaf,
    Menu,
    MessageSquare,
    PanelLeft,
    Plus,
    Search,
    Settings,
    TrendingUp,
    Users,
    X,
    Download,
    Sparkles,
    ArrowRight,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { recentReports } from "@/dummydata/data";
import { sidebarItems } from "@/dummydata/data";
import ChatbotButton from "@/components/sections/ChatbotButton";

import { Project, sensors } from "@/dummydata/data";
import sampleProjectsJSON from "@/dummydata/sample-projects.json";
import { ProjectsTab } from "@/components/sections/ProjectsTab";
import { ProjectCard } from "@/components/ProjectCard";

export default function LuntiMeterDashboard() {
    const [progress, setProgress] = useState(0);
    const [notifications, setNotifications] = useState(3);
    const [activeTab, setActiveTab] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
        {}
    );

    const [sampleProjects, setSampleProjects] = useState<Project[]>(sampleProjectsJSON as Project[])

    useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleExpanded = (title: string) => {
        setExpandedItems((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            {/* LuntiMeter: Animated gradient background */}
            <motion.div
                className="absolute inset-0 -z-10 opacity-10"
                animate={{
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(106, 207, 48, 0.4) 0%, rgba(176, 235, 142, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 30% 70%, rgba(135, 246, 70, 0.4) 0%, rgba(106, 207, 48, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 70% 30%, rgba(176, 235, 142, 0.4) 0%, rgba(135, 246, 70, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(106, 207, 48, 0.4) 0%, rgba(176, 235, 142, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                    ],
                }}
                transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Mobile */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-full flex-col border-r">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white">
                                <Leaf className="size-5" />
                            </div>
                            <div>
                                <h2 className="font-semibold">LuntiMeter</h2>
                                <p className="text-xs text-muted-foreground">ESG Dashboard</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="px-3 py-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
                            />
                        </div>
                    </div>

                    <ScrollArea className="flex-1 px-3 py-2">
                        <div className="space-y-1">
                            {sidebarItems.map((item) => (
                                <div key={item.title} className="mb-1">
                                    <button
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                                            item.isActive
                                                ? "bg-primary/10 text-primary"
                                                : "hover:bg-muted"
                                        )}
                                        onClick={() => item.items && toggleExpanded(item.title)}
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                        {item.badge && (
                                            <Badge
                                                variant="outline"
                                                className="ml-auto rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {item.badge}
                                            </Badge>
                                        )}
                                        {item.items && (
                                            <ChevronDown
                                                className={cn(
                                                    "ml-2 h-4 w-4 transition-transform",
                                                    expandedItems[item.title] ? "rotate-180" : ""
                                                )}
                                            />
                                        )}
                                    </button>

                                    {item.items && expandedItems[item.title] && (
                                        <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                                            {item.items.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.url}
                                                    className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                                                >
                                                    {subItem.title}
                                                    {subItem.badge && (
                                                        <Badge
                                                            variant="outline"
                                                            className="ml-auto rounded-full px-2 py-0.5 text-xs"
                                                        >
                                                            {subItem.badge}
                                                        </Badge>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="border-t p-3">
                        <div className="space-y-1">
                            <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </button>
                            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage
                                            src="/placeholder.svg?height=32&width=32"
                                            alt="User"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>Juan Dela Cruz</span>
                                </div>
                                <Badge variant="outline" className="ml-auto">
                                    Admin
                                </Badge>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar - Desktop */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-full flex-col">
                    <div className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white">
                                <Leaf className="size-5" />
                            </div>
                            <div>
                                <h2 className="font-semibold">LuntiMeter</h2>
                                <p className="text-xs text-muted-foreground">ESG Dashboard</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-3 py-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
                            />
                        </div>
                    </div>

                    <ScrollArea className="flex-1 px-3 py-2">
                        <div className="space-y-1">
                            {sidebarItems.map((item) => (
                                <div key={item.title} className="mb-1">
                                    <button
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                                            item.isActive
                                                ? "bg-primary/10 text-primary"
                                                : "hover:bg-muted"
                                        )}
                                        onClick={() => item.items && toggleExpanded(item.title)}
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                        {item.badge && (
                                            <Badge
                                                variant="outline"
                                                className="ml-auto rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {item.badge}
                                            </Badge>
                                        )}
                                        {item.items && (
                                            <ChevronDown
                                                className={cn(
                                                    "ml-2 h-4 w-4 transition-transform",
                                                    expandedItems[item.title] ? "rotate-180" : ""
                                                )}
                                            />
                                        )}
                                    </button>

                                    {item.items && expandedItems[item.title] && (
                                        <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                                            {item.items.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.url}
                                                    className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                                                >
                                                    {subItem.title}
                                                    {subItem.badge && (
                                                        <Badge
                                                            variant="outline"
                                                            className="ml-auto rounded-full px-2 py-0.5 text-xs"
                                                        >
                                                            {subItem.badge}
                                                        </Badge>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="border-t p-3">
                        <div className="space-y-1">
                            <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </button>
                            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage
                                            src="/placeholder.svg?height=32&width=32"
                                            alt="User"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>Juan Dela Cruz</span>
                                </div>
                                <Badge variant="outline" className="ml-auto">
                                    Admin
                                </Badge>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={cn(
                    "min-h-screen transition-all duration-300 ease-in-out",
                    sidebarOpen ? "md:pl-64" : "md:pl-0"
                )}
            >
                <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <PanelLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex flex-1 items-center justify-between">
                        <h1 className="text-xl font-semibold">LuntiMeter Dashboard</h1>
                        <div className="flex items-center gap-3">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-2xl">
                                            <Cloud className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Cloud Sync</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-2xl">
                                            <MessageSquare className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Messages</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-2xl relative"
                                        >
                                            <Bell className="h-5 w-5" />
                                            {notifications > 0 && (
                                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                                    {notifications}
                                                </span>
                                            )}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Notifications</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <Avatar className="h-9 w-9 border-2 border-primary">
                                <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="User"
                                />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-6">
                    <Tabs
                        defaultValue="home"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <TabsList className="grid w-full max-w-[600px] grid-cols-5 rounded-2xl p-1">
                                <TabsTrigger
                                    value="home"
                                    className="rounded-xl data-[state=active]:rounded-xl"
                                >
                                    Dashboard
                                </TabsTrigger>
                                <TabsTrigger
                                    value="sensors"
                                    className="rounded-xl data-[state=active]:rounded-xl"
                                >
                                    Sensors
                                </TabsTrigger>
                                <TabsTrigger
                                    value="reports"
                                    className="rounded-xl data-[state=active]:rounded-xl"
                                >
                                    Reports
                                </TabsTrigger>
                                <TabsTrigger
                                    value="projects"
                                    className="rounded-xl data-[state=active]:rounded-xl"
                                >
                                    Projects
                                </TabsTrigger>
                                <TabsTrigger
                                    value="improvements"
                                    className="rounded-xl data-[state=active]:rounded-xl"
                                >
                                    Improvements
                                </TabsTrigger>
                            </TabsList>
                            <div className="hidden md:flex gap-2">
                                <Button variant="outline" className="rounded-2xl">
                                    <Download className="mr-2 h-4 w-4" />
                                    Generate Report
                                </Button>
                                <Button className="rounded-2xl">
                                    <Plus className="mr-2 h-4 w-4" />
                                    New Project
                                </Button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* LuntiMeter: Home/Dashboard Tab */}
                                <TabsContent value="home" className="space-y-8 mt-0">
                                    <section>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#6ACF30] via-green-500 to-[#87F646] p-8 text-white"
                                        >
                                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                                <div className="space-y-4">
                                                    <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">
                                                        Overall Score: 85 (Excellent)
                                                    </Badge>
                                                    <h2 className="text-3xl font-bold">
                                                        Welcome to your LuntiMeter Dashboard
                                                    </h2>
                                                    <p className="max-w-[600px] text-white/80">
                                                        Monitor your ESG performance in real-time and turn
                                                        sustainability into your greatest asset.
                                                    </p>
                                                    <div className="flex flex-wrap gap-3">
                                                        <Button className="rounded-2xl bg-white text-green-700 hover:bg-white/90">
                                                            View Full Report
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                                                        >
                                                            Get AI Insights
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="hidden lg:block">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            duration: 50,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            ease: "linear",
                                                        }}
                                                        className="relative h-40 w-40"
                                                    >
                                                        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
                                                        <div className="absolute inset-4 rounded-full bg-white/20" />
                                                        <div className="absolute inset-8 rounded-full bg-white/30" />
                                                        <TrendingUp className="absolute inset-12 text-white/80" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-semibold">
                                                Recent Sensor Activity
                                            </h2>
                                            <Button variant="ghost" className="rounded-2xl">
                                                View All
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                            {sensors
                                                .filter((sensor) => sensor.recent)
                                                .map((sensor) => (
                                                    <motion.div
                                                        key={sensor.name}
                                                        whileHover={{ scale: 1.02, y: -5 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                                                            <CardHeader className="pb-2">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                                                                        {sensor.icon}
                                                                    </div>
                                                                    <Badge
                                                                        variant={
                                                                            sensor.status === "Active"
                                                                                ? "default"
                                                                                : "destructive"
                                                                        }
                                                                        className="rounded-xl"
                                                                    >
                                                                        {sensor.status}
                                                                    </Badge>
                                                                </div>
                                                            </CardHeader>
                                                            <CardContent className="pb-2">
                                                                <CardTitle className="text-lg">
                                                                    {sensor.name}
                                                                </CardTitle>
                                                                <CardDescription>
                                                                    {sensor.description}
                                                                </CardDescription>
                                                            </CardContent>
                                                            <CardFooter>
                                                                <Button
                                                                    variant="secondary"
                                                                    className="w-full rounded-2xl"
                                                                >
                                                                    View Data
                                                                </Button>
                                                            </CardFooter>
                                                        </Card>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-semibold">
                                                Completed Projects
                                            </h2>
                                            <Button
                                                variant="ghost"
                                                className="rounded-2xl"
                                            >
                                                View All
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                                            {sampleProjects
                                                .filter((project) => project.status === "completed")
                                                .slice(0, 3)
                                                .map((project) => (
                                                    <ProjectCard key={project.name} project={project} variant="default" />
                                                ))}
                                        </div>
                                    </section>

                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        <section className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-2xl font-semibold">
                                                    Recent Reports
                                                </h2>
                                                <Button variant="ghost" className="rounded-2xl" >
                                                    View All
                                                </Button>
                                            </div>
                                            <div className="rounded-3xl border">
                                                <div className="grid grid-cols-1 divide-y">
                                                    {recentReports.slice(0, 4).map((file) => (
                                                        <motion.div
                                                            key={file.name}
                                                            whileHover={{
                                                                backgroundColor: "rgba(0,0,0,0.02)",
                                                            }}
                                                            className="flex items-center justify-between p-4"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted">
                                                                    {file.icon}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium">{file.name}</p>
                                                                    <p className="text-sm text-muted-foreground">
                                                                        {file.project} • {file.modified}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {file.shared && (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="rounded-xl"
                                                                    >
                                                                        <Users className="mr-1 h-3 w-3" />
                                                                        {file.collaborators}
                                                                    </Badge>
                                                                )}
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="rounded-xl"
                                                                >
                                                                    Open
                                                                </Button>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>

                                        <section className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-2xl font-semibold">
                                                    Active Projects
                                                </h2>
                                                <Button
                                                    variant="ghost"
                                                    className="rounded-2xl"
                                                >
                                                    View All
                                                </Button>
                                            </div>
                                            <div className="rounded-3xl border">
                                                <div className="grid grid-cols-1 divide-y">
                                                    {sampleProjects
                                                        .filter(project => (project.status === "active"))
                                                        .slice(0, 3)
                                                        .map((project) => (
                                                            <motion.div
                                                                key={project.name}
                                                                whileHover={{
                                                                    backgroundColor: "rgba(0,0,0,0.02)",
                                                                }}
                                                                className="p-4"
                                                            >
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <h3 className="font-medium">{project.name}</h3>
                                                                    <Badge variant="outline" className="rounded-xl">
                                                                        Score: {project.esgScore}
                                                                    </Badge>
                                                                </div>
                                                                <p className="text-sm text-muted-foreground mb-3">
                                                                    {project.description}
                                                                </p>
                                                                <div className="space-y-2">
                                                                    <div className="flex items-center justify-between text-sm">
                                                                        <span>Completion Progress</span>
                                                                        <span>{project.progress}%</span>
                                                                    </div>
                                                                    <Progress
                                                                        value={project.progress}
                                                                        className="h-2 rounded-xl"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                                                                    <div className="flex items-center">
                                                                        <Users className="mr-1 h-4 w-4" />
                                                                        {project.members} crew
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <Grid className="mr-1 h-4 w-4" />
                                                                        {project.sensors} sensors
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    {/* New AI-Guided Improvements Section */}
                                    <section className="space-y-4 mt-8">
                                        <h2 className="text-2xl font-semibold">
                                            AI-Guided Improvements
                                        </h2>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <Card className="rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                                                <CardHeader>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                                                            <Sparkles className="h-5 w-5" />
                                                        </div>
                                                        <CardTitle>Energy Efficiency</CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Our AI suggests you can reduce energy consumption by
                                                        15% with targeted improvements.
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="outline" className="rounded-xl">
                                                            High Impact
                                                        </Badge>
                                                        <p className="text-sm text-green-600">
                                                            +12 ESG Score
                                                        </p>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button
                                                        className="w-full rounded-2xl"
                                                        variant="outline"
                                                    >
                                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </CardFooter>
                                            </Card>

                                            <Card className="rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                                                <CardHeader>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                                                            <Users className="h-5 w-5" />
                                                        </div>
                                                        <CardTitle>Social Impact</CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Implement community engagement program to improve
                                                        social metrics by 23%.
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="outline" className="rounded-xl">
                                                            Medium Impact
                                                        </Badge>
                                                        <p className="text-sm text-green-600">
                                                            +8 ESG Score
                                                        </p>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button
                                                        className="w-full rounded-2xl"
                                                        variant="outline"
                                                    >
                                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </CardFooter>
                                            </Card>

                                            <Card className="rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                                                <CardHeader>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                                                            <Settings className="h-5 w-5" />
                                                        </div>
                                                        <CardTitle>Governance</CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Update reporting procedures to align with latest ESG
                                                        regulations and frameworks.
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="outline" className="rounded-xl">
                                                            Critical
                                                        </Badge>
                                                        <p className="text-sm text-green-600">
                                                            +15 ESG Score
                                                        </p>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button
                                                        className="w-full rounded-2xl"
                                                        variant="outline"
                                                    >
                                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </section>
                                </TabsContent>

                                {/* Other Tabs Content can be filled in similarly */}
                                {/* For brevity, I've focused on the main dashboard tab. */}
                                {/* You can follow the same pattern to replace content in "apps", "files", "projects", and "learn" tabs. */}

                                <TabsContent value="sensors" className="mt-0">
                                    <p className="text-center p-8">
                                        Sensor management section would go here.
                                    </p>
                                </TabsContent>
                                <TabsContent value="reports" className="mt-0">
                                    <p className="text-center p-8">
                                        Report generation section would go here.
                                    </p>
                                </TabsContent>
                                <TabsContent value="projects" className="mt-0">
                                    <ProjectsTab />
                                </TabsContent>
                                <TabsContent value="improvements" className="mt-0">
                                    <p className="text-center p-8">
                                        AI recommendations and improvement tips would go here.
                                    </p>
                                </TabsContent>
                            </motion.div>
                        </AnimatePresence>
                    </Tabs>
                </main>
            </div>
            {/* Floating Chatbot Button */}
            <ChatbotButton />
        </div >
    );
}
