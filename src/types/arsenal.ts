import  { LucideIcon } from "lucide-react";

export type Filter = "all" | "econometria" | "finanzas" | "desarrollo"

export type Tool = {
    id: string;
    name: string;
    icon: LucideIcon;
    categories: Filter[];
    description: string;
    color: string;
};