"use client"

import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  primaryService: string;
  monthlyBudget: string;
  projectOverview: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  primaryService?: string;
  projectOverview?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    primaryService: 'SEO & Organic Growth',
    monthlyBudget: '$5,000 – 10,000 L.E',
    projectOverview: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Please provide a valid work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please check the email format (e.g., name@company.com).';
    }

    if (!formData.projectOverview.trim()) {
      newErrors.projectOverview = 'Briefly outline your primary goal or current growth challenge.';
    } else if (formData.projectOverview.trim().length < 15) {
      newErrors.projectOverview = 'Please provide a bit more context (at least 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error inline as user corrects it
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: 'primaryService' | 'monthlyBudget', value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div
        id="contact-form-success"
        className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xs"
      >
        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">
          Inquiry Received
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-neutral-900">{formData.fullName}</span>. A senior partner will review your goals and respond within one business day with exploratory times.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              workEmail: '',
              companyName: '',
              primaryService: 'SEO & Organic Growth',
              monthlyBudget: '$5,000 – 10,000 L.E',
              projectOverview: '',
            });
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      id="primary-contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-10 shadow-xs max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        {/* Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Your Name <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Alex Morgan"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                errors.fullName
                  ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                  : 'border-neutral-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1.5">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="workEmail"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Work Email <span className="text-blue-600">*</span>
            </label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                errors.workEmail
                  ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                  : 'border-neutral-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              }`}
            />
            {errors.workEmail && (
              <p className="text-xs text-red-600 mt-1.5">{errors.workEmail}</p>
            )}
          </div>
        </div>

        {/* Company & Primary Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Technologies"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="primaryService"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Primary Focus Area
            </label>
            <ScopedSelect
              id="primaryService"
              value={formData.primaryService}
              options={[
                { value: 'SEO & Organic Growth', label: 'Search Engine Optimization (SEO)' },
                { value: 'Paid Acquisition', label: 'Paid Advertising (Google/Meta/TikTok)' },
                { value: 'Social Media Management', label: 'Social Media Management' },
                { value: 'Content Marketing', label: 'Content Marketing & Research' },
                { value: 'Branding & Identity', label: 'Branding & Identity' },
                { value: 'Email Marketing', label: 'Email Marketing & Lifecycle' },
                { value: 'Marketing Strategy', label: 'Marketing Strategy & Consulting' },
                { value: 'Web Design & Development', label: 'Web Design & Development' },
                { value: 'Full-Service Engagement', label: 'Full-Service (Multi-Channel)' },
              ]}
              onChange={(value) => handleSelectChange('primaryService', value)}
            />
            <input type="hidden" name="primaryService" value={formData.primaryService} />
          </div>
        </div>

        {/* Monthly Budget */}
        <div>
          <label
            htmlFor="monthlyBudget"
            className="block text-sm font-medium text-neutral-800 mb-1.5"
          >
            Estimated Monthly Marketing Budget
          </label>
          <ScopedSelect
            id="monthlyBudget"
            value={formData.monthlyBudget}
            options={[
              { value: 'Under 10,000 L.E', label: 'Under 10,000 L.E / month' },
              { value: '10,000 – 25,500 L.E', label: '10,000 – 25,500 L.E / month (Foundation/Growth)' },
              { value: '25,500 L.E – 35,000 L.E', label: '25,500 L.E – 35,000 L.E / month (Multi-channel)' },
              { value: '35,800 L.E+', label: '45,000 L.E+ / month (Enterprise Scale)' },
            ]}
            onChange={(value) => handleSelectChange('monthlyBudget', value)}
          />
          <input type="hidden" name="monthlyBudget" value={formData.monthlyBudget} />
        </div>

        {/* Project Overview */}
        <div>
          <label
            htmlFor="projectOverview"
            className="block text-sm font-medium text-neutral-800 mb-1.5"
          >
            What is your primary commercial goal? <span className="text-blue-600">*</span>
          </label>
          <textarea
            id="projectOverview"
            name="projectOverview"
            rows={4}
            value={formData.projectOverview}
            onChange={handleChange}
            placeholder="Tell us about your product, current customer acquisition channels, and the targets you need to hit over the next 6-12 months."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
              errors.projectOverview
                ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                : 'border-neutral-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
            }`}
          />
          {errors.projectOverview ? (
            <p className="text-xs text-red-600 mt-1.5">{errors.projectOverview}</p>
          ) : (
            <p className="text-xs text-neutral-500 mt-1">
              Short, high-level context is sufficient. We will dive deeper during our exploratory call.
            </p>
          )}
        </div>

        {/* ONE clear primary submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            id="contact-form-submit-btn"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {isSubmitting ? 'Sending Inquiry...' : 'Submit Inquiry & Request Call'}
          </Button>
        </div>

        <p className="text-center text-xs text-neutral-500 pt-2">
          We protect your privacy. No unsolicited emails, zero pressure.
        </p>
      </div>
    </form>
  );
}

interface ScopedSelectProps {
  id: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function ScopedSelect({ id, value, options, onChange }: ScopedSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, options.findIndex((option) => option.value === value))
  );
  const rootRef = React.useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value) ?? options[0];

  React.useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, [open]);

  const chooseOption = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setActiveIndex(index);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => (open ? (current + 1) % options.length : Math.max(0, options.findIndex((option) => option.value === value))));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => (open ? (current - 1 + options.length) % options.length : Math.max(0, options.findIndex((option) => option.value === value))));
    } else if (event.key === 'Home') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(options.length - 1);
    } else if ((event.key === 'Enter' || event.key === ' ') && open) {
      event.preventDefault();
      chooseOption(activeIndex);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-options`}
        aria-activedescendant={open ? `${id}-option-${activeIndex}` : undefined}
        onClick={() => {
          setActiveIndex(Math.max(0, options.findIndex((option) => option.value === value)));
          setOpen((current) => !current);
        }}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-left text-sm text-neutral-900 transition-colors hover:border-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      >
        <span className="min-w-0 flex-1 truncate">{selectedOption?.label}</span>
        <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0" />
      </button>

      {open && (
        <ul
          id={`${id}-options`}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto overscroll-contain rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={option.value === value}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseOption(index)}
              className={`cursor-pointer break-words px-3.5 py-2 text-sm text-neutral-800 hover:bg-blue-50 ${
                index === activeIndex ? 'bg-blue-50' : ''
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
