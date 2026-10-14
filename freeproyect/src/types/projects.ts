import  { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type ProjectFilter = "all" | "econometria" | "finanzas" | "desarrollo"

export type ProjectPeriod = "30" | "60" | "90" | "total"

export type ProjectView = {
    id: string;
    componente?: ComponentType;
}

export type ProjectTool = {
    id: string;
    name: string;
    icon: LucideIcon;
    categories: ProjectFilter[];
    description: string;
    description1?: string;
    color: string;
    dashboard?: ComponentType;
    vistas?:ProjectView[];
};