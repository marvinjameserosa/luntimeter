import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Project } from "@/dummydata/data";
import sampleProjectsJSON from "@/dummydata/sample-projects.json";
import { ProjectCard } from "@/components/ProjectCard";


type ProjectsTabProps = {
    defaultTab?: "active" | "completed" | "archived";
}
export function ProjectsTab({ defaultTab }: ProjectsTabProps) {
    const [sampleProjects, setSampleProjects] = useState<Project[]>(sampleProjectsJSON as Project[])

    const [activeProj, setActiveProj] = useState<Project[]>(
        sampleProjects.filter((project) => (project.status === "active"))
    );
    const [completedProj, setCompletedProj] = useState<Project[]>(
        sampleProjects.filter((project) => (project.status === "completed"))
    );
    const [archivedProj, setArchivedProj] = useState<Project[]>(
        sampleProjects.filter((project) => (project.status === "archived"))
    );
    const [selectedTab, setSelectedTab] = useState<"active" | "completed" | "archived">(defaultTab || "active");
    const [projects, setProjects] = useState<Project[]>(activeProj)

    function handleTabChange(tab: "active" | "completed" | "archived") {
        setSelectedTab(tab);
        if (tab === "active") {
            setActiveProj(sampleProjects.filter((project) => project.status === "active"));
            setProjects(activeProj)
        } else if (tab === "completed") {
            setCompletedProj(sampleProjects.filter((project) => project.status === "completed"));
            setProjects(completedProj)
        } else {
            setArchivedProj(sampleProjects.filter((project) => project.status === "archived"));
            setProjects(archivedProj)
        }
    }

    return (
        <div>
            <section className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold capitalize">
                    {selectedTab} Projects
                </h2>
                <div className="flex items-center space-x-2">
                    <Button
                        variant={`${selectedTab === "active" ? "default" : "outline"}`}
                        className="rounded-2xl hover:cursor-pointer"
                        onClick={() => handleTabChange("active")}
                    >
                        Active
                    </Button>
                    <Button
                        variant={`${selectedTab === "completed" ? "default" : "outline"}`}
                        className="rounded-2xl hover:cursor-pointer"
                        onClick={() => handleTabChange("completed")}
                    >
                        Completed
                    </Button>
                    <Button
                        variant={`${selectedTab === "archived" ? "default" : "outline"}`}
                        className="rounded-2xl hover:cursor-pointer"
                        onClick={() => handleTabChange("archived")}
                    >
                        Archived
                    </Button>
                </div>
            </section>

            <AnimatePresence mode="wait">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => {
                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} variant="full" />
                            </motion.div>
                        )
                    })}
                </div>
            </AnimatePresence>
        </div>
    )
}
