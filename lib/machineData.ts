// --- CONSTANTS ---
export const WHATSAPP_NUMBER = "919876543210";
export const EMAIL_ADDRESS = "sales@techmachinery.com";

// --- MOCK DATA ---
export const MACHINE_DATA: Machine[] = [
  {
    id: 1,
    name: "Apex Master 500 (Booklet)",
    slug: "apex-master-500",
    tagline: "High-speed precision for perfect rolling paper booklets.",
    description:
      "The Apex Master 500 is engineered for high-volume production of pre-cut, inter-folded rolling paper booklets. It features fully automated counting and gluing systems.",
    features: [
      "500 units/min",
      "Automated Interfolding",
      "Digital HMI Control",
      "Low Maintenance",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Apex+Master",
    seo: {
      title: "Apex Master 500 | Rolling Paper Booklet Machine | Nehal",
      description:
        "High-speed machine for manufacturing rolling paper booklets with precision inter-folding and automated gluing. Learn more about Nehal's industrial solutions.",
    },
  },
  {
    id: 2,
    name: "Reel-to-Cone Converter 3000",
    slug: "reel-to-cone-converter-3000",
    tagline: "Converting bulk paper into seamless, professional rolling cones.",
    description:
      "Specialized machine designed to take large paper reels and convert them into perfectly formed, custom-sized cones, complete with filter insertion capability.",
    features: [
      "Cone Forming System",
      "Integrated Filter Unit",
      "Adjustable Cone Length",
      "Waste Reduction System",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Cone+Converter",
    seo: {
      title: "Reel-to-Cone Converter 3000 | Rolling Cone Machine | Nehal",
      description:
        "Efficient machinery for the manufacture of rolling paper cones from paper reels. Featuring integrated filter attachment and adjustable sizing.",
    },
  },
  {
    id: 3,
    name: "Slitter Pro 1500",
    slug: "slitter-pro-1500",
    tagline: "The ultimate solution for precise width and length adjustments.",
    description:
      "An industrial slitting and rewinding machine ensuring paper reels are cut to the exact specifications required before packaging or further processing.",
    features: [
      "High-Tolerance Slitting",
      "Automatic Tension Control",
      "Max Speed 1500m/min",
      "Quick-Change Blades",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Slitter+Pro",
    seo: {
      title: "Slitter Pro 1500 | Precision Paper Slitting Machine | Nehal",
      description:
        "Achieve unparalleled precision in paper conversion with the Slitter Pro 1500. Ideal for preparing raw material for rolling paper and cone production.",
    },
  },
  {
    id: 4,
    name: "Loose Sheet Cutter 800",
    slug: "loose-sheet-cutter-800",
    tagline: "Dedicated to high-volume, uniform loose sheet cutting.",
    description:
      "Machine optimized for quickly and cleanly cutting loose, single rolling paper sheets, ready for bulk packaging or manual handling.",
    features: [
      "800 cuts/min",
      "Dust-Free Operation",
      "Variable Sheet Size",
      "Stacking Mechanism",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Sheet+Cutter",
    seo: {
      title: "Loose Sheet Cutter 800 | High-Volume Cutting Machine | Nehal",
      description:
        "Manufacture custom-sized loose rolling papers quickly and efficiently. Reliable machinery for high-capacity cutting operations.",
    },
  },
  {
    id: 5,
    name: "Filter Tip Interleaver",
    slug: "filter-tip-interleaver",
    tagline: "Perfectly placed filters, every time.",
    description:
      "An auxiliary machine focused on automating the interleaving and stacking of pre-cut filter tips, synchronizing seamlessly with the main paper machine.",
    features: [
      "High Accuracy Placement",
      "Continuous Feed",
      "Synchronous Speed Control",
      "Modular Design",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Filter+Tip",
    seo: {
      title: "Filter Tip Interleaver | Filter Tip Processing Machinery | Nehal",
      description:
        "Specialized equipment for interleaving and stacking filter tips for rolling paper products. Essential for automated assembly lines.",
    },
  },
  {
    id: 6,
    name: "Packaging Automator V2",
    slug: "packaging-automator-v2",
    tagline: "The final step to market: sealed and ready.",
    description:
      "Fully automated secondary packaging system for wrapping and sealing the finished rolling paper booklets or cones into retail-ready boxes.",
    features: [
      "Automatic Box Folding",
      "Shrink-Wrapping Option",
      "Batch Counter",
      "CE Certified",
    ],
    imagePlaceholder:
      "https://placehold.co/600x400/1e293b/cbd5e1?text=Packaging+V2",
    seo: {
      title: "Packaging Automator V2 | Final Packaging Machinery | Nehal",
      description:
        "Automate the final packaging of your rolling paper products. Reliable and fast machinery for sealing and preparing retail units.",
    },
  },
];

// If you were using TypeScript with actual interfaces, you would define them here:

export interface Seo {
  title: string;
  description: string;
}

export interface Machine {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  imagePlaceholder: string;
  seo: Seo;
}
