"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const metadata = {
  title: "Contact Us | Precision RollCo",
  description:
    "Get in touch with our expert team. Contact Precision RollCo for machinery consultations, technical support, and sales inquiries.",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "sales@rollco.com",
      link: "mailto:sales@rollco.com",
      testId: "link-email",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1-555-ROLL (7655)",
      link: "tel:+15557655",
      testId: "link-phone",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat with our team",
      link: "https://wa.me/15555767655",
      testId: "link-whatsapp",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "1234 Industrial Pkwy, Manufacturing District",
      link: "#",
      testId: "link-location",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-linear-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch with Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions about our machinery or need technical support? Our
              expert team is ready to help you find the perfect solution for
              your manufacturing needs.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-testid={info.testId}
                >
                  <div className="h-full p-6 text-center rounded-lg border border-border bg-card hover:shadow-lg cursor-pointer transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {info.detail}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Business Hours */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Connect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Quick Connect</h2>
                <p className="text-muted-foreground mb-8">
                  Need immediate assistance? Connect with us directly through
                  these channels.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/15555767655"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="w-full px-6 py-4 rounded-md bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366] font-medium transition-all flex items-center justify-start gap-3"
                      data-testid="button-whatsapp-chat"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </button>
                  </a>

                  <a href="mailto:sales@rollco.com">
                    <button
                      className="w-full px-6 py-4 rounded-md border border-border hover:bg-accent transition-all font-medium flex items-center justify-start gap-3"
                      data-testid="button-email-sales"
                    >
                      <Mail className="w-5 h-5" />
                      Email Our Sales Team
                    </button>
                  </a>

                  <a href="tel:+15557655">
                    <button
                      className="w-full px-6 py-4 rounded-md border border-border hover:bg-accent transition-all font-medium flex items-center justify-start gap-3"
                      data-testid="button-call"
                    >
                      <Phone className="w-5 h-5" />
                      Call +1-555-ROLL
                    </button>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-lg border border-border bg-background">
                <h3 className="text-2xl font-semibold mb-6">
                  What to Expect After Contact
                </h3>
                <ul className="space-y-4 text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Response within 24 hours from our sales team
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Detailed product consultation based on your needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Custom quote and installation timeline estimate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Option to schedule an in-person demonstration
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-lg border border-border bg-background">
                <h3 className="text-2xl font-semibold mb-4">
                  Technical Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  For existing customers needing technical support or spare
                  parts, please contact our dedicated support team:
                </p>
                <p className="text-base font-medium">
                  <span className="text-primary">Email:</span>{" "}
                  <a
                    href="mailto:support@rollco.com"
                    className="hover:underline"
                  >
                    support@rollco.com
                  </a>
                </p>
                <p className="text-base font-medium mt-2">
                  <span className="text-primary">Phone:</span> +1-555-TECH
                  (8324)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Location
            </h2>
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">
                  Precision RollCo Headquarters
                </p>
                <p className="text-muted-foreground">
                  1234 Industrial Parkway, Manufacturing District
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
