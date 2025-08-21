import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Project } from "@/dummydata/data";
import sampleProjectsJSON from "@/dummydata/sample-projects.json";
import { ProjectCard } from "@/components/ProjectCard";

export type projectStatuses = "active" | "completed" | "archived";

type ProjectsTabProps = {
    defaultTab?: projectStatuses;
    viewAll?: string | null;
}
export function ProjectsTab({ defaultTab, viewAll = null }: ProjectsTabProps) {
    const [sampleProjects, setSampleProjects] = useState<Project[]>(sampleProjectsJSON as Project[])
    const [projects, setProjects] = useState<Project[]>(
        sampleProjects.filter((project) => (project.status === defaultTab || "active"))
    )

    const [selectedTab, setSelectedTab] = useState<projectStatuses>(defaultTab || "active");
    useEffect(() => {
        if (viewAll && ["active", "completed", "archived"].includes(viewAll)) {
            setSelectedTab(viewAll as projectStatuses);
            if (viewAll === "active") {
                setProjects(sampleProjects.filter((project) => project.status === "active"));
            } else if (viewAll === "completed") {
                setProjects(sampleProjects.filter((project) => project.status === "completed"));
            } else {
                setProjects(sampleProjects.filter((project) => project.status === "archived"));
            }
        }
    }, [viewAll, sampleProjects])

    function handleTabChange(tab: projectStatuses) {
        setSelectedTab(tab);
        if (tab === "active") {
            setProjects(sampleProjects.filter((project) => project.status === "active"));
        } else if (tab === "completed") {
            setProjects(sampleProjects.filter((project) => project.status === "completed"));
        } else {
            setProjects(sampleProjects.filter((project) => project.status === "archived"));
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
