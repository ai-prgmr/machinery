import { Metadata } from "next";
interface Specification {
  label: string;
  value: string;
}

interface Product {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  specifications: Specification[];
  features: string[];
}

const products: Record<string, Product> = {
  "hydra-pro-3000": {
    name: "Hydra-Pro 3000",
    tagline: "Ultimate Precision Rolling System",
    description:
      "The Hydra-Pro 3000 represents the pinnacle of rolling paper manufacturing technology. Engineered with quad-axis precision control and AI-driven quality monitoring, this flagship model delivers unparalleled accuracy and efficiency for high-volume production environments.",
    longDescription:
      "Featuring our revolutionary SmartAlign™ technology and adaptive tension control system, the Hydra-Pro 3000 automatically adjusts to material variations in real-time, ensuring consistent quality across every production run. The integrated AI quality control system uses advanced computer vision to detect and correct defects before they occur, reducing waste by up to 95%.",
    specifications: [
      { label: "Production Capacity", value: "3,000 units per hour" },
      { label: "Precision Tolerance", value: "±0.001mm (±0.00004 inches)" },
      { label: "Material Width Range", value: "10mm - 120mm" },
      { label: "Material Thickness", value: "12-40 gsm paper" },
      { label: "Power Consumption", value: "7.5 kW (Energy Star Certified)" },
      { label: "Dimensions (L×W×H)", value: "4.2m × 2.1m × 2.4m" },
      { label: "Weight", value: "3,850 kg" },
      { label: "Control System", value: "Siemens S7-1500 PLC with HMI" },
      {
        label: "Quality Monitoring",
        value: "AI Vision System with 99.9% accuracy",
      },
      { label: "Maintenance Interval", value: "2,000 operating hours" },
    ],
    features: [
      "SmartAlign™ quad-axis precision control system",
      "AI-powered real-time quality monitoring",
      "Adaptive tension control for material consistency",
      "Automatic defect detection and rejection",
      "Remote diagnostics and predictive maintenance",
      "Tool-less format changeover in under 15 minutes",
      "ISO 9001 certified manufacturing process",
      "24/7 technical support and training included",
    ],
  },
  "flexmaster-2500": {
    name: "FlexMaster 2500",
    tagline: "Versatile Production Powerhouse",
    description:
      "The FlexMaster 2500 offers unmatched versatility for manufacturers requiring rapid format changes and multi-product capabilities. With our patented quick-change tooling system, switch between product formats in minutes without sacrificing precision.",
    longDescription:
      "Designed for facilities running multiple product lines, the FlexMaster 2500 combines flexibility with reliability. The modular design allows for easy upgrades and customization, while the intuitive control interface ensures operators can quickly master format changes and quality adjustments.",
    specifications: [
      { label: "Production Capacity", value: "2,500 units per hour" },
      { label: "Precision Tolerance", value: "±0.002mm" },
      { label: "Material Width Range", value: "15mm - 110mm" },
      { label: "Material Thickness", value: "14-38 gsm paper" },
      { label: "Power Consumption", value: "6.2 kW" },
      { label: "Dimensions (L×W×H)", value: "3.8m × 1.9m × 2.2m" },
      { label: "Weight", value: "2,950 kg" },
      { label: "Control System", value: "Allen-Bradley PLC with touchscreen" },
      { label: "Format Change Time", value: "Under 10 minutes" },
      { label: "Maintenance Interval", value: "1,800 operating hours" },
    ],
    features: [
      "Quick-change tooling system (patent pending)",
      "Multi-format production capability",
      "Digital recipe management for 100+ formats",
      "Servo-driven precision control",
      "Energy-efficient drive system",
      "Integrated waste collection and recycling",
      "Operator safety interlocks and guards",
      "Comprehensive training program included",
    ],
  },
  "precision-elite-x1": {
    name: "Precision Elite X1",
    tagline: "Compact Excellence",
    description:
      "The Precision Elite X1 proves that exceptional performance doesn't require a large footprint. This compact powerhouse delivers professional-grade precision in a space-efficient design, perfect for specialized production and facilities with limited floor space.",
    longDescription:
      "Engineered with the same precision technology as our larger models, the Elite X1 features an innovative vertical design that maximizes production capability while minimizing space requirements. Advanced energy management systems make it one of the most efficient machines in its class.",
    specifications: [
      { label: "Production Capacity", value: "1,800 units per hour" },
      { label: "Precision Tolerance", value: "±0.0015mm" },
      { label: "Material Width Range", value: "12mm - 90mm" },
      { label: "Material Thickness", value: "15-35 gsm paper" },
      { label: "Power Consumption", value: "4.8 kW" },
      { label: "Dimensions (L×W×H)", value: "2.4m × 1.5m × 2.6m" },
      { label: "Weight", value: "1,850 kg" },
      { label: "Control System", value: "Schneider Electric PLC" },
      { label: "Footprint", value: "3.6 m² (40% smaller than standard)" },
      { label: "Maintenance Interval", value: "2,500 operating hours" },
    ],
    features: [
      "Compact vertical design saves 40% floor space",
      "Energy efficiency rated at 92%",
      "Precision servo motors for consistent quality",
      "Automated material feed system",
      "Quiet operation (under 68dB)",
      "Mobile-optimized control interface",
      "Extended maintenance intervals",
      "Ideal for cleanroom environments",
    ],
  },
};

export async function generateStaticParams() {
  return [
    { id: "hydra-pro-3000" },
    { id: "flexmaster-2500" },
    { id: "precision-elite-x1" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products[id] || products["hydra-pro-3000"];

  return {
    title: `${product.name} | Precision RollCo`,
    description: product.description,
  };
}
import ProductDetailClient from "../ProductDetailClient";
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id] || products["hydra-pro-3000"];

  return <ProductDetailClient product={product} />;
}
