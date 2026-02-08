import { Tool } from "@/types/arsenal";
import { 
    Code,
    Braces,
    Atom,
    Database,
    BarChart3,
    TrendingUp,
    Smartphone,
    Plug,
    Globe,
    Brain,
    Cloud
} from "lucide-react";

export const arsenalTools: Tool[] = [
    {
        id: "python",
        name: "Python",
        icon: Code,
        categories: ["econometria","desarrollo"],
        description: 
          "Uso para backend, modelos de IA, análisis de datos, automatización, scraping, lectura de PDFs y otros proyectos. En aprendizaje activo.",
        color: "#10B981"
    },
    {
    id: "javascript",
    name: "JavaScript",
    icon: Braces,
    categories: ["desarrollo"],
    description:
      "Uso para desarrollo web, lógica de cliente y consumo de APIs.",
      color: "#EAB308"
  },
  {
    id: "react",
    name: "React",
    icon: Atom,
    categories: ["desarrollo"],
    description:
      "Desarrollo de interfaces modernas y componentes reutilizables.",
    color: "#3B82F6"
  },
  {
    id: "sql",
    name: "SQL / Bases de Datos",
    icon: Database,
    categories: ["econometria", "finanzas"],
    description:
      "Modelado relacional, consultas complejas y consultas analíticas aplicadas a datos financieros.",
    color: "#F97316"
  },
  {
    id: "powerbi",
    name: "Power BI",
    icon: BarChart3,
    categories: ["econometria", "finanzas"],
    description:
      "Visualización de datos, proceso y limpiado de datos con Power Query y DAX avanzados.",
    color: "#F59E0B"
  },
  {
    id: "finanzas",
    name: "Finanzas",
    icon: TrendingUp,
    categories: ["finanzas"],
    description:
      "Análisis financiero, ratios, indicadores y comprensión de mercados .",
    color: "#EF4444"
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    categories: ["desarrollo"],
    description:
      "Desarrollo de aplicaciones Android a nivel intermedio, enfoque en UI y lógica.",
    color: "#22C55E"
  },
  {
    id: "apis",
    name: "APIs",
    icon: Plug,
    categories: ["desarrollo"],
    description:
      "Consumo e integración de APIs REST para automatización y datos.",
    color: "#14B8A6"
  },
  {
    id: "scraping",
    name: "Web Scraping",
    icon: Globe,
    categories: ["econometria", "desarrollo"],
    description:
      "Extracción de datos desde la web para análisis y automatización.",
    color:"#8B5CF6"
  },
  {
    id: "ia",
    name: "Inteligencia Artificial",
    icon: Brain,
    categories: ["econometria", "desarrollo"],
    description:
      "Uso de modelos de IA para reconocimiento, análisis y automatización.",
    color:"#0EA5E9"
  },
  {
  id: "iot-cloud",
  name: "IoT & Cloud",
  icon: Cloud,
  categories: ["desarrollo"],
  description:
    "Uso de servicios en la nube (Azure y AWS) para integración, automatización y despliegue de soluciones.",
  color: "#EC4899"
}
]