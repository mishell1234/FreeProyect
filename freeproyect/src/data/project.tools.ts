import { ProjectTool } from "@/src/types/projects";
import { ArrowLeftRight, Clock3 } from 'lucide-react'
import TipoDeCambioDashboard from "../app/proyectos/tcDash";
import TipoDeCambioDescriptivo from "../app/proyectos/tcDescriptivo";
import TipoDeCambioInferencial from "../app/proyectos/tcInferencial";

export const projectTools: ProjectTool[] = [
    {
        id: "tc",
        name: "Tipo de Cambio (USD/PEN)",
        icon: ArrowLeftRight,
        categories: ["econometria", "finanzas"],
        description: "Análisis integral del tipo de cambio USD/PEN, desde la exploración y estadística descriptiva hasta la inferencia y el pronóstico diario mediante modelos econométricos y metodologías propias.",
        color: "#10B981",
        dashboard: TipoDeCambioDashboard,
        vistas: [
            {
                id: "descriptiva",
                componente: TipoDeCambioDescriptivo           
            }
        ]
    },
    {
        id: "prox0",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#8B5CF6"
    },
    {
        id: "prox1",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#0EA5E9"
    },
    {
        id: "prox2",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#14B8A6"
    },
    {
        id: "prox3",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#22C55E"
    },
    {
        id: "prox4",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#EF4444"
    },
    {
        id: "prox5",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#F59E0B"
    },
    {
        id: "prox6",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#F97316"
    },
    {
        id: "prox7",
        name: "Próximamente",
        icon: Clock3,
        categories: [],
        description: "¡Proyectos futuros! (Envíame tu sugerencia)",
        description1: "",
        color: "#EC4899"
    }
]