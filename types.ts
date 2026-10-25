export interface Service {
  id: string;
  slug: string;
  title: string;
  lottieType: string;
  tagline: string;
  shortSummary: string;
  overview: string;
  deliverables: string[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  resultsMetric: {
    value: string;
    label: string;
    context: string;
  };
  iconName: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  serviceCategory: string;
  industry: string;
  summary: string;
  heroMetric: {
    value: string;
    label: string;
  };
  metrics: {
    value: string;
    label: string;
  }[];
  problem: string;
  approach: string;
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricHighlight?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  recommended?: boolean;
  deliverables: string[];
  idealFor: string;
}
