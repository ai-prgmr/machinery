"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Gauge,
  Cpu,
  Zap,
  ChevronRight,
  TruckElectric,
  Wrench,
  Shield,
  Factory,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  interface CategoryCardProps {
    // Use React.ComponentType to type the component passed via the 'icon' prop
    icon: React.ComponentType<{ className: string }>;
    name: string;
    description: string;
  }

  // Define the shape for the Feature objects
  interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType<{ className: string }>;
  }
  const features: Feature[] = [
    {
      icon: Gauge,
      title: "Micro-Tolerance Alignment",
      description:
        "Industry-leading precision alignment systems with tolerance levels down to 0.001mm, ensuring perfect paper rolling consistency.",
    },
    {
      icon: Cpu,
      title: "AI Quality Control",
      description:
        "Advanced machine learning algorithms monitor production in real-time, detecting defects with 99.9% accuracy before they occur.",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Cutting-edge power management systems reduce energy consumption by up to 40% while maintaining peak performance.",
    },
    {
      title: "Global Logistics",
      description: "Door-to-door delivery worldwide with secure tracking.",
      icon: TruckElectric,
    },
    {
      title: "Certified Quality",
      description: "Every machine inspected and certified to ISO standards.",
      icon: Shield,
    },
    {
      title: "24/7 Support",
      description: "Dedicated technical assistance available around the clock.",
      icon: Wrench,
    },
  ];

  const categories = [
    {
      icon: Factory,
      name: "Filter Tip Interleaver",
      description: "Excavators, Loaders, and Cranes for major construction.",
    },
    {
      icon: Wrench,
      name: "Sheet Cutter",
      description: "CNC Machines, Lathes, and Milling equipment.",
    },
    {
      icon: TruckElectric,
      name: "Booklets automation",
      description: "Conveyors, Forklifts, and automated storage solutions.",
    },
    {
      icon: Shield,
      name: "Rolling Cones",
      description: "Advanced monitoring and industrial automation.",
    },
  ];

  // Helper component for the Category Card
  const CategoryCard: React.FC<CategoryCardProps> = ({
    icon: Icon,
    name,
    description,
  }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
      <Icon className="w-10 h-10 text-indigo-600 mb-4 bg-indigo-50 p-2 rounded-full" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Explore <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden aspect-9/16 md:aspect-video">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src={"/biw/Koerber.png"}
            alt="Assorted iron and steel hardware products on a wooden background"
            fill
            quality={90}
            className="brightness-[0.3] cover" // Darken the image slightly for text readability
          />
          {/* Dark Overlay for Text Readability */}
          {/* <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply"></div> */}
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-xl mx-auto text-center ">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-indigo-800 mb-4 shadow-xl">
              Rolling Paper Solutions
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl  font-extrabold tracking-tight text-white drop-shadow-lg"
              variants={itemVariants}
            >
              Precision Machinery for{" "}
              <span className="text-indigo-300">Tomorrow&apos;s Industry</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-indigo-100 max-w-xl drop-shadow-md"
              variants={itemVariants}
            >
              We supply heavy-duty, certified machinery and automation systems
              designed for maximum efficiency and unparalleled reliability.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-xl text-indigo-900 bg-white hover:bg-gray-100 transition duration-200"
              >
                View Product Range
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition duration-200 shadow-lg"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="py-24 md:py-32 bg-card ">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="font-extrabold text-indigo-700 tracking-tight">
                TECH<span className="text-gray-900">MACHINERY</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to innovation drives every aspect of our machinery
              design and manufacturing process.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div
                  className="h-full p-8 rounded-lg border-t-4 border-indigo-600 bg-gray-50 hover:shadow-lg transition-all duration-300"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Product Catalog
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Explore Our Key Machinery Categories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Find the right tools for your specific industrial needs, backed by
              reliable performance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 shadow-lg hover:bg-indigo-700 transition duration-200"
            >
              View Full Catalog (150+ Machines)
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Transform Your Production?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our precision machinery can elevate your
              manufacturing capabilities to new heights.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-indigo-600 font-bold text-base shadow-lg hover:bg-primary/90 transition-all"
                data-testid="button-cta-schedule"
              >
                Schedule a Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
