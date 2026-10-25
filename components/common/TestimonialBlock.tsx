"use client"

import { useState } from 'react';
import { testimonialsData } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonialsData.length;
  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="testimonial-focused-block"
      className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 shadow-xs relative"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800">
            <Quote className="w-5 h-5 text-neutral-500" />
          </div>
          {current.metricHighlight && (
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              {current.metricHighlight}
            </span>
          )}
        </div>

        {/* Single quote focus */}
        <blockquote className="text-xl sm:text-2xl text-neutral-900 font-medium leading-snug tracking-tight mb-8">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Author details & Manual Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-neutral-100 gap-4">
          <div>
            <div className="font-semibold text-neutral-900 text-base">
              {current.author}
            </div>
            <div className="text-sm text-neutral-500">
              {current.role}, <span className="text-neutral-700 font-medium">{current.company}</span>
            </div>
          </div>

          {/* User-controlled Navigation Only — Strictly NO auto-play */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-medium">
              {currentIndex + 1} of {total}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                id="testimonial-prev"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                id="testimonial-next"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
