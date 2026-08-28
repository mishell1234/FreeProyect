import  { LucideIcon } from "lucide-react";

export type ProjectFilter = "all" | "econometria" | "finanzas" | "desarrollo"

export type ProjectTool = {
    id: string;
    name: string;
    icon: LucideIcon;
    categories: ProjectFilter[];
    description: string;
    color: string;
};