"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Gauge,
  Shield,
  Zap,
  Eye,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const metadata = {
  title: "Advanced Technology | Precision RollCo",
  description:
    "Discover our cutting-edge manufacturing technology including AI quality control, micro-tolerance alignment systems, and energy-efficient automation.",
};

export default function Technology() {
  const technologies = [
    {
      icon: Gauge,
      title: "Micro-Tolerance Alignment System",
      description:
        "Our proprietary SmartAlign™ technology uses laser-guided positioning and servo-controlled actuators to maintain alignment accuracy within ±0.001mm. Quad-axis control ensures perfect material positioning throughout the entire production process.",
      benefits: [
        "99.97% dimensional consistency",
        "Automatic calibration every 500 units",
        "Real-time position feedback loops",
      ],
    },
    {
      icon: Brain,
      title: "AI Quality Control",
      description:
        "Advanced machine learning algorithms powered by computer vision systems monitor every product at 1000 frames per second. Our AI detects potential defects before they occur, using predictive analytics to maintain zero-defect production.",
      benefits: [
        "99.9% defect detection accuracy",
        "Predictive maintenance alerts",
        "Continuous learning optimization",
      ],
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Intelligent power management systems reduce energy consumption by up to 40% compared to traditional machinery. Regenerative braking, sleep mode optimization, and load-adaptive motor control ensure minimal environmental impact.",
      benefits: [
        "Energy Star certified operation",
        "40% reduction in power consumption",
        "Carbon footprint tracking dashboard",
      ],
    },
    {
      icon: Eye,
      title: "Vision Inspection Systems",
      description:
        "High-resolution cameras and spectroscopic sensors perform 360-degree quality inspection at production speed. Multi-wavelength lighting and image processing algorithms detect even microscopic defects invisible to the human eye.",
      benefits: [
        "100% inline inspection coverage",
        "Automatic defect classification",
        "Historical quality data analytics",
      ],
    },
    {
      icon: Shield,
      title: "Adaptive Control Systems",
      description:
        "Dynamic tension management and material property sensing automatically adjust machine parameters to compensate for variations in paper thickness, humidity, and material composition. Ensures consistent quality across diverse operating conditions.",
      benefits: [
        "Self-adjusting process parameters",
        "Material variance compensation",
        "Climate-adaptive operation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description:
        "IoT sensors monitor critical components 24/7, using machine learning to predict maintenance needs before failures occur. Remote diagnostics and automated service scheduling minimize downtime and maximize production uptime.",
      benefits: [
        "95% reduction in unplanned downtime",
        "Remote troubleshooting capability",
        "Automated parts ordering system",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Innovation & Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Manufacturing Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Decades of research and development have culminated in the most
              sophisticated rolling paper manufacturing systems in the industry.
              Our technology stack represents the cutting edge of precision
              engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div
                  className="h-full p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                  data-testid={`card-technology-${index}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {tech.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Key Benefits
                    </p>
                    {tech.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                        data-testid={`benefit-${index}-${idx}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovation by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to research and development drives measurable
              results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "35+", label: "Years of Engineering Excellence" },
              { value: "150+", label: "Patents & Innovations" },
              { value: "99.9%", label: "Quality Assurance Rate" },
              { value: "40%", label: "Energy Efficiency Gain" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Continuous Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We invest 18% of annual revenue into research and development,
              partnering with leading universities and research institutions to
              push the boundaries of what&apos;s possible in precision
              manufacturing. Our dedicated R&D team of 45+ engineers ensures we
              stay at the forefront of technological advancement.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-all"
                data-testid="button-discuss-technology"
              >
                Discuss Technology Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See Our Technology in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a demonstration to experience the precision and
              reliability of our manufacturing systems firsthand.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-all"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
