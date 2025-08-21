import { motion } from "framer-motion";

import {
    Users,
    Grid,
    MapPin,
    Shield,
    Building2,
    CalendarDays,
    Gauge,
    DollarSign,
    Award,
    TrendingUp
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

import { Project } from "@/dummydata/data";

type ProjectCardProps = {
    project: Project;
    variant?: "default" | "full"
}
export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-full" >
            <Card
                className="h-full gap-3 rounded-3xl border-2 hover:border-primary/50 transition-all duration-500"
            >
                {/* project name & esg score */}
                <CardHeader className="flex flex-col items-start text-left">
                    <div className="w-full flex items-start justify-between">
                        <CardTitle className="text-lg font-semibold text-foreground">
                            {project.name}
                        </CardTitle>
                        <Badge variant="outline" className="capitalize py-1 px-2 rounded-xl">
                            Score: {project.esgScore}
                        </Badge>
                    </div>
                    <span className={`w-full text-muted-foreground ${variant === "default" && "truncate"}`}>{project.description}</span>
                </CardHeader>

                <CardContent className="h-full flex flex-col gap-3 justify-between">
                    {/* client & location */}
                    <section className="flex flex-col gap-2 items-start">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                        </div>
                    </section>

                    {/* progress */}
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

                    {/* crews & sensors */}
                    <section className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            {project.members} crew
                        </div>
                        <div className="flex items-center">
                            <Grid className="mr-1 h-4 w-4" />
                            {project.sensors} sensors
                        </div>
                    </section>
                </CardContent>

                <CardFooter className="justify-center items-end">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex w-full justify-center"
                    >
                        <Dialog >
                            <DialogTrigger asChild>
                                <Button
                                    variant="secondary"
                                    className="w-full rounded-2xl cursor-pointer hover:bg-primary/80 hover:text-secondary duration-200"
                                >View more</Button>
                            </DialogTrigger>
                            <ProjectDialog project={project} />
                        </Dialog>
                    </motion.div>
                </CardFooter>
            </Card >
        </motion.div>
    )
}

type ProjectDialogProps = {
    project: Project;
}
export function ProjectDialog({ project }: ProjectDialogProps) {
    return (
        <DialogContent className="rounded-2xl max-h-[80vh] overflow-y-auto lg:max-w-[60vw]">
            {/* header */}
            <DialogHeader className="flex flex-row items-start justify-between">
                <DialogTitle className="text-2xl font-bold text-foreground">
                    {project.name}
                </DialogTitle>
                <Badge variant="default" className="capitalize py-1 px-2 rounded-xl">
                    {project.status}
                </Badge>
            </DialogHeader>

            <main className="space-y-4">
                {/* client & location */}
                <section className="space-y-1 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                    </div>
                </section>

                {/* description */}
                <section className="space-y-1">
                    <h3 className="text-lg font-semibold">Project Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                </section>

                {/* progress */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Progress</h3>
                        <span className="text-2xl font-bold">
                            {project.progress}%
                        </span>
                    </div>
                    <Progress value={project.progress} className="h-3" />
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* due data */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md font-semibold text-muted-foreground flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    Due Date
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-semibold">{project.dueDate}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* crews */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md font-semibold text-muted-foreground flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Crews
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-semibold">{project.members}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* sensors */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md font-semibold text-muted-foreground flex items-center gap-2">
                                    <Gauge className="h-4 w-4" />
                                    Sensors
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-semibold">{project.sensors}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* budget */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md font-semibold text-muted-foreground flex items-center gap-2">
                                    <DollarSign className="h-4 w-4" />
                                    Budget
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-semibold wrap-break-word">{project.budget}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ESG score */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md flex items-center gap-2">
                                    <Award className="h-5 w-5" />
                                    ESG Score
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">
                                        {project.esgScore}
                                    </span>
                                    <span className="text-sm text-muted-foreground">out of 100</span>
                                </div>
                                <Progress value={project.esgScore} className="h-2" />
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">Certifications</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.certifications.map((certificate, index) => (
                                            <Badge key={index} variant="default" className="bg-green-500/50 text-primary">
                                                {certificate}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* performance */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <Card className="border-2 h-full hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-md flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5" />
                                    Financial Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="text-md flex items-center justify-between">
                                        <span className="text-sm font-medium">ROI Estimate</span>
                                        <span className="text-xl font-bold text-primary">
                                            {project.roiEstimate}%
                                        </span>
                                    </div>
                                    <div className="text-md flex items-center justify-between">
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <Shield className="h-4 w-4" />
                                            Last Audit
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {project.lastAuditDate}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>
            </main>

            {/* close button */}
            <DialogFooter>
                <DialogClose asChild>
                    <Button asChild className="rounded-2xl bg-primary/80 hover:cursor-pointer transition-all duration-50">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Close
                        </motion.div>
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
