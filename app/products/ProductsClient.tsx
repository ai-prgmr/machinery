"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cog, Gauge, Settings } from "lucide-react";

export default function ProductsClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const machinery = [
    {
      id: "hydra-pro-3000",
      name: "Hydra-Pro 3000",
      tagline: "Ultimate Precision Rolling System",
      description:
        "Our flagship model featuring quad-axis precision control, AI-driven quality monitoring, and industry-leading output capacity of 3000 units per hour.",
      icon: Cog,
      specs: ["3000 units/hour", "±0.001mm tolerance", "AI Quality Control"],
    },
    {
      id: "flexmaster-2500",
      name: "FlexMaster 2500",
      tagline: "Versatile Production Powerhouse",
      description:
        "Adaptable rolling solution with quick-change tooling system, perfect for manufacturers requiring flexibility across multiple product lines and formats.",
      icon: Settings,
      specs: ["2500 units/hour", "Multi-format capable", "Quick-change system"],
    },
    {
      id: "precision-elite-x1",
      name: "Precision Elite X1",
      tagline: "Compact Excellence",
      description:
        "Space-efficient design without compromising performance. Ideal for specialized production runs and facilities with limited floor space.",
      icon: Gauge,
      specs: ["1800 units/hour", "Compact footprint", "Energy efficient"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Core Precision Equipment
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Engineered for excellence, built for reliability. Each machine
              represents decades of manufacturing expertise and innovation.
            </p>
          </motion.div>

          {/* Machinery Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {machinery.map((machine, index) => (
              <motion.div key={machine.id}>
                <Link href={`/products/${machine.id}`}>
                  <div
                    className="h-full rounded-lg border border-border bg-card hover:shadow-xl cursor-pointer transition-all duration-300 group overflow-hidden"
                    data-testid={`card-product-${machine.id}`}
                  >
                    {/* Image Placeholder with Icon */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <machine.icon className="w-24 h-24 text-primary/40 group-hover:scale-110 transition-transform duration-300" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full">
                          <span className="text-primary-foreground font-semibold flex items-center gap-2">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {machine.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {machine.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {machine.description}
                      </p>

                      {/* Specs */}
                      <div className="space-y-2 mb-6">
                        {machine.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        className="w-full px-4 py-2 rounded-md border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                        data-testid={`button-learn-more-${machine.id}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our technical team is ready to help you find the perfect solution
              for your production needs.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-indigo-600 font-bold text-base shadow-lg hover:bg-primary/90 transition-all"
                data-testid="button-contact-expert"
              >
                Contact an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
