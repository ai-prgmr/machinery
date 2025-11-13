"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MACHINE_DATA } from "@/lib/machineData";
import AnimatedSection from "./AnimatedSection";

const MachineryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MACHINE_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + MACHINE_DATA.length) % MACHINE_DATA.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % MACHINE_DATA.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <AnimatedSection className="relative bg-gradient-to-r from-industrial-800 to-industrial-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Machinery Portfolio
          </h2>
          <p className="text-xl text-industrial-200 max-w-3xl mx-auto">
            Precision-engineered solutions for every step of your rolling paper
            manufacturing process
          </p>
        </div>
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {MACHINE_DATA.map((machine, index) => (
              <div
                key={machine.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-full bg-gradient-to-r from-industrial-700/90 to-industrial-800/90">
                  <img
                    src={machine.imagePlaceholder}
                    alt={machine.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="text-white">
                          <div className="flex items-center mb-4">
                            <Cog className="h-8 w-8 text-accent-400 mr-3" />
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wide">
                              Industrial Machinery
                            </span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            {machine.name}
                          </h3>
                          <p className="text-xl text-industrial-200 mb-6">
                            {machine.tagline}
                          </p>
                          <p className="text-industrial-300 mb-8 leading-relaxed">
                            {machine.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mb-8">
                            {machine.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium border border-accent-500/30"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/products/${machine.slug}`}
                            className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-lg transition-colors duration-200 group"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        <div className="hidden lg:block">
                          <img
                            src={machine.imagePlaceholder}
                            alt={machine.name}
                            className="w-full h-80 object-cover rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Previous machine"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Next machine"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {MACHINE_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-accent-500" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MachineryCarousel;
