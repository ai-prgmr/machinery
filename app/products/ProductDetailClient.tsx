"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Cog,
  Download,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
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

function ProductDetailClient({ product }: { product: Product }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          {/* Replaced <Link> and motion.button for simpler components */}
          <Link href="/products">
            <motion.button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
              data-testid="button-back-products"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to All Machinery</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image Placeholder */}
            <motion.div>
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-2xl border border-border">
                <Cog className="w-48 h-48 text-primary/30" />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Industrial Machinery
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                data-testid="text-product-name"
              >
                {product.name}
              </h1>
              <p className="text-xl text-primary font-semibold mb-6">
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:sales@rollco.com">
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all w-full sm:w-auto shadow-md transform hover:translate-y-[-1px]"
                    data-testid="button-request-quote"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Request a Quote
                  </motion.button>
                </a>
                <a
                  href="https://wa.me/15555767655"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366] font-medium transition-all w-full sm:w-auto shadow-md transform hover:translate-y-[-1px]"
                    data-testid="button-whatsapp"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Engineering
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {product.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Technical Specifications
            </h2>
            <div className="p-8 rounded-lg border border-border bg-card shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0"
                    data-testid={`spec-${index}`}
                  >
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Key Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`feature-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Production Line?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our sales team to discuss pricing, customization options,
              and installation timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  data-testid="button-cta-contact"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Sales Team
                </motion.button>
              </Link>
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border hover:bg-accent transition-all font-medium shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
                data-testid="button-download-brochure"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default ProductDetailClient;
