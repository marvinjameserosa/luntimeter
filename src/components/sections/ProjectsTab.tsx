import { Users, Grid } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { sampleProjects } from "@/dummydata/sample-projects";
import { ProjectInterface } from "@/dummydata/data";

type ProjectProps = {
    project: ProjectInterface;
}

export function Project({ project }: ProjectProps) {
    return (
        <Card className="p-4 hover:bg-accent transition-colors">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{project.name}</h3>
                <Badge variant="outline" className="rounded-xl">
                    Score: {project.esgScore}
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
                {project.description}
            </p>
            <section className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span>Completion Progress</span>
                    <span>{project.progress}%</span>
                </div>
                <Progress
                    value={project.progress}
                    className="h-2 rounded-xl"
                />
            </section>
            <section className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {project.members} crew
                </div>
                <div className="flex items-center">
                    <Grid className="mr-1 h-4 w-4" />
                    {project.sensors} sensors
                </div>
            </section>
        </Card>
    )
}

type ProjectsTabProps = {
    defaultTab?: "Active" | "Completed" | "Archived";
}
export function ProjectsTab({ defaultTab }: ProjectsTabProps) {
    const [activeProj, setActiveProj] = useState<ProjectInterface[]>(
        sampleProjects.filter((project) => (project.status === "active"))
    );
    const [completedProj, setCompletedProj] = useState<ProjectInterface[]>(
        sampleProjects.filter((project) => (project.status === "completed"))
    );
    const [archivedProj, setArchivedProj] = useState<ProjectInterface[]>(
        sampleProjects.filter((project) => (project.status === "archived"))
    );
    const [selectedTab, setSelectedTab] = useState<"Active" | "Completed" | "Archived">(defaultTab || "Active");

    function handleTabChange(tab: "Active" | "Completed" | "Archived") {
        setSelectedTab(tab);
        if (tab === "Active") {
            setActiveProj(sampleProjects.filter((project) => project.status === "active"));
        } else if (tab === "Completed") {
            setCompletedProj(sampleProjects.filter((project) => project.status === "completed"));
        } else {
            setArchivedProj(sampleProjects.filter((project) => project.status === "archived"));
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                    {selectedTab} Projects
                </h2>
                <div className="flex items-center space-x-2">
                    <Button
                        variant={`${selectedTab === "Active" ? "default" : "outline"}`}
                        className="rounded-2xl"
                        onClick={() => handleTabChange("Active")}
                    >
                        Active
                    </Button>
                    <Button
                        variant={`${selectedTab === "Completed" ? "default" : "outline"}`}
                        className="rounded-2xl"
                        onClick={() => handleTabChange("Completed")}
                    >
                        Completed
                    </Button>
                    <Button
                        variant={`${selectedTab === "Archived" ? "default" : "outline"}`}
                        className="rounded-2xl"
                        onClick={() => handleTabChange("Archived")}
                    >
                        Archived
                    </Button>
                </div>
            </div>

            <div className="flex flex-col mt-4">
                {selectedTab === "Active" &&
                    <div className="grid grid-cols-1 divide-y p-2 gap-3">
                        {activeProj.map((project) => (<Project key={project.name} project={project} />))}
                    </div>
                }
                {selectedTab === "Completed" &&
                    <div className="grid grid-cols-1 divide-y p-2 gap-3">
                        {completedProj.map((project) => (<Project key={project.name} project={project} />))}
                    </div>
                }
                {selectedTab === "Archived" &&
                    <div className="grid grid-cols-1 divide-y p-2 gap-3">
                        {archivedProj.map((project) => (<Project key={project.name} project={project} />))}
                    </div>
                }
            </div>
        </div >
    )
}
