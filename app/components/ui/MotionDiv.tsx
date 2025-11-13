"use client";
import { motion } from "framer-motion";
import React from "react";

// Reusable component for the slide-in scroll animation
interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
