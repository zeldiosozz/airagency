import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'seo',
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    lottieType: 'Animation SEO Traffic',
    tagline: 'Sustainable organic visibility built on technical rigor and high-intent content.',
    shortSummary: 'We turn search into a compounding pipeline by resolving technical debt, structuring semantic architectures, and producing authoritative content.',
    overview: 'Search algorithms reward relevance, clarity, and authority. Our SEO methodology avoids vanity rankings to capture commercial intent keywords that convert into pipeline and revenue.',
    deliverables: [
      'Comprehensive technical audit & crawlability fixes',
      'High-intent keyword taxonomy & competitor gap analysis',
      'Entity-based editorial calendar and brief generation',
      'Digital PR and authoritative editorial backlink acquisition',
      'Core Web Vitals and structured schema optimization',
      'Monthly closed-loop revenue reporting and attribution',
    ],
    methodology: [
      {
        step: '01',
        title: 'Technical Foundation',
        description: 'We audit architecture, eliminate indexing bottlenecks, and implement structured data to ensure search engines understand your value.',
      },
      {
        step: '02',
        title: 'Commercial Intent Mapping',
        description: 'We prioritize topics matching real buyer consideration stages rather than broad, low-converting informational queries.',
      },
      {
        step: '03',
        title: 'Authority Compounding',
        description: 'We publish peer-reviewed industry assets and secure tier-one editorial references to outrank entrenched legacy competitors.',
      },
    ],
    resultsMetric: {
      value: '+215%',
      label: 'Average Qualified Organic Pipeline',
      context: 'Measured across clients within 9 months of implementation.',
    },
    iconName: 'Search',
  },
  {
    id: 'paid-ads',
    slug: 'paid-acquisition',
    title: 'Paid Advertising',
    lottieType: 'Marketing (2)',

    tagline: 'Disciplined multi-channel acquisition across Google, Meta, and TikTok.',
    shortSummary: 'High-performing search and social ad campaigns managed with strict unit economic targets and rigorous creative iteration.',
    overview: 'We treat ad spend with the discipline of capital allocation. We combine algorithmic bid management with rigorous creative testing to scale customer acquisition profitably.',
    deliverables: [
      'Google Search & Performance Max full account restructuring',
      'Meta (Facebook & Instagram) creative testing framework',
      'TikTok Ads targeting high-converting creator formats',
      'Server-side conversion API (CAPI) & GA4 setup',
      'Rapid-iteration static and motion creative production',
      'Weekly marginal ROAS and CAC optimization reviews',
    ],
    methodology: [
      {
        step: '01',
        title: 'Tracking & Economics Audit',
        description: 'We establish first-party attribution and define maximum allowable CAC based on your customer lifetime value.',
      },
      {
        step: '02',
        title: 'Algorithmic Restructuring',
        description: 'We segment ad spend into clear cold acquisition, consideration, and retargeting pools with automated bidding constraints.',
      },
      {
        step: '03',
        title: 'Creative Engine Execution',
        description: 'We test new creative variations every week, doubling down on winning messaging hooks and retiring exhausted creative.',
      },
    ],
    resultsMetric: {
      value: '-38%',
      label: 'Average Reduction in Blended CAC',
      context: 'Achieved while scaling aggregate monthly spend by 3.2x.',
    },
    iconName: 'TrendingUp',
  },
  {
    id: 'social-media',
    slug: 'social-media-management',
    title: 'Social Media Management',
    lottieType: 'Marketing',

    tagline: 'Strategic audience building that transforms followers into engaged brand advocates.',
    shortSummary: 'End-to-end editorial planning, creative production, and community engagement tailored for LinkedIn, Instagram, and X.',
    overview: 'Modern social media requires a distinct voice, visual coherence, and active conversation. We build organic presence that reinforces your authority and drives organic inbound interest.',
    deliverables: [
      'Channel voice guidelines and editorial narrative themes',
      'Weekly content calendar creation with pre-scheduled publishing',
      'Custom visual assets, carousels, and motion graphics',
      'Daily active community moderation and response workflows',
      'Executive thought leadership ghostwriting and positioning',
      'Monthly engagement and audience growth analytics',
    ],
    methodology: [
      {
        step: '01',
        title: 'Brand Voice Architecture',
        description: 'We define narrative pillars and tone benchmarks that separate your brand from repetitive industry noise.',
      },
      {
        step: '02',
        title: 'Production Cadence',
        description: 'Our design and copy team crafts native, platform-specific content formats that command attention in crowded feeds.',
      },
      {
        step: '03',
        title: 'Community Interaction',
        description: 'We actively engage with key industry voices and prospects to turn casual profile visits into qualified inquiries.',
      },
    ],
    resultsMetric: {
      value: '4.8x',
      label: 'Average Engagement Lift',
      context: 'Organic benchmark measured across managed enterprise social channels.',
    },
    iconName: 'Share2',
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    lottieType: 'Social Media',

    tagline: 'Insightful editorial and research reports that establish category leadership.',
    shortSummary: 'Deep-dive articles, original industry research, and customer case studies that nurture prospects through complex buying journeys.',
    overview: 'Effective content does not summarize consensus; it advances the debate. We work with subject matter experts to author authoritative guides and benchmark reports that buyers reference.',
    deliverables: [
      'Comprehensive customer persona research and journey mapping',
      'Original data reports and industry survey whitepapers',
      'Long-form editorial articles and technical teardowns',
      'Customer success stories and video case study scripts',
      'Multi-channel distribution strategy for every published piece',
      'Content-assisted pipeline tracking in your CRM',
    ],
    methodology: [
      {
        step: '01',
        title: 'Subject Matter Extraction',
        description: 'We interview internal leaders and existing customers to surface proprietary insights competitors cannot replicate.',
      },
      {
        step: '02',
        title: 'Rigorous Editorial Craft',
        description: 'We write clear, unpadded analysis accompanied by custom diagrams and actionable takeaways for decision-makers.',
      },
      {
        step: '03',
        title: 'Multi-Channel Atomization',
        description: 'Every anchor asset is broken down into social summaries, newsletter digests, and sales enablement collateral.',
      },
    ],
    resultsMetric: {
      value: '3.4x',
      label: 'Increase in Content-Assisted Conversions',
      context: 'Demonstrated through multi-touch attribution analysis.',
    },
    iconName: 'FileText',
  },
  {
    id: 'branding-identity',
    slug: 'branding-identity',
    title: 'Branding & Identity',
    lottieType: 'Global business',

    tagline: 'Distinctive visual identities and positioning that withstand market commoditization.',
    shortSummary: 'We clarify your market position and craft cohesive visual systems that project confidence across every touchpoint.',
    overview: 'A strong brand reduces price sensitivity and accelerates sales cycles. We distill your core distinction into typography, color systems, and verbal positioning designed to last.',
    deliverables: [
      'Core positioning manifesto and value proposition matrix',
      'Complete logo mark, wordmark, and favicon system',
      'Color palette, typographic hierarchy, and usage guidelines',
      'Collateral templates: presentations, stationery, and social kits',
      'Comprehensive digital brand guidelines manual',
      'Packaging or physical touchpoint specifications (if applicable)',
    ],
    methodology: [
      {
        step: '01',
        title: 'Competitive Differentiation',
        description: 'We analyze your market landscape to discover visual and strategic territories currently left vacant by competitors.',
      },
      {
        step: '02',
        title: 'Identity Exploration',
        description: 'We present distinct visual directions, refining the chosen system until every glyph, margin, and tone aligns.',
      },
      {
        step: '03',
        title: 'Systematization',
        description: 'We compile bulletproof guidelines and ready-to-deploy component kits for immediate marketing and product execution.',
      },
    ],
    resultsMetric: {
      value: '94%',
      label: 'Brand Recall Improvement',
      context: 'Evaluated through post-rebrand customer recognition testing.',
    },
    iconName: 'Globe',
  },
  {
    id: 'email-marketing',
    slug: 'email-marketing',
    title: 'Email Marketing & Lifecycle',
    lottieType: 'email',

    tagline: 'High-converting automated flows and editorial campaigns with exceptional deliverability.',
    shortSummary: 'We turn your email subscriber list into a reliable, high-margin revenue engine with smart segmentation and personalized lifecycle flows.',
    overview: 'Email remains the only marketing channel you own outright. We craft automated nurturing journeys, win-back triggers, and thoughtful newsletters that your audience genuinely wants to open.',
    deliverables: [
      'Automated welcome, abandon, nurture, and re-engagement flows',
      'Custom HTML and modular responsive email templates',
      'Advanced behavioral segmentation and dynamic personalization',
      'DKIM, SPF, and DMARC technical deliverability optimization',
      'A/B split testing for subject lines, sender names, and send times',
      'List hygiene protocols and unsubscribe management',
    ],
    methodology: [
      {
        step: '01',
        title: 'Infrastructure & Hygiene',
        description: 'We verify authentication protocols, audit domain reputation, and remove inactive subscribers to protect inbox placement.',
      },
      {
        step: '02',
        title: 'Lifecycle Journey Design',
        description: 'We map automated email sequences responding precisely to user behaviors, purchase milestones, or product actions.',
      },
      {
        step: '03',
        title: 'Systematic Optimization',
        description: 'We test subject line angles, offer structures, and preview text to incrementally maximize click-to-open rates.',
      },
    ],
    resultsMetric: {
      value: '38.4%',
      label: 'Average Open Rate Across Campaigns',
      context: 'Maintaining less than 0.08% aggregate spam complaint rate.',
    },
    iconName: 'Mail',
  },
  {
    id: 'marketing-strategy',
    slug: 'marketing-strategy',
    title: 'Marketing Strategy & Consulting',
    lottieType: 'Digital Marketing',

    tagline: 'Data-grounded go-to-market plans and executive advisory for ambitious leadership.',
    shortSummary: 'Clear go-to-market roadmaps, budget modeling, and channel prioritization that remove guesswork from your growth investments.',
    overview: 'Growth fails when tactics lack alignment. We work alongside executive teams to diagnose growth bottlenecks, model channel economics, and establish clear operational scorecards.',
    deliverables: [
      'Comprehensive growth diagnostics and attribution audit',
      'Annual or quarterly go-to-market execution roadmaps',
      'Channel unit economics and budget allocation models',
      'Bi-weekly executive advisory and strategy reviews',
      'Marketing org chart and hiring recommendations',
      'KPI dashboard configuration and North Star metric tracking',
    ],
    methodology: [
      {
        step: '01',
        title: 'Deep Diagnostic',
        description: 'We inspect historical channel metrics, pipeline velocity, churn, and conversion friction across your funnel.',
      },
      {
        step: '02',
        title: 'Strategic Architecture',
        description: 'We create a prioritized 12-month roadmap allocating capital strictly toward high-leverage growth channels.',
      },
      {
        step: '03',
        title: 'Advisory Cadence',
        description: 'We meet regularly with your leadership team to monitor milestones, refine tactics, and unblock cross-functional hurdles.',
      },
    ],
    resultsMetric: {
      value: '2.9x',
      label: 'Revenue Growth Over 18 Months',
      context: 'Median trajectory for retained strategic advisory clients.',
    },
    iconName: 'Compass',
  },
  {
    id: 'web-design',
    slug: 'web-design-development',
    title: 'Web Design & Development',
    lottieType: 'Web Development',

    tagline: 'Clean, conversion-engineered digital experiences built for speed and clarity.',
    shortSummary: 'High-converting marketing websites crafted as one seamless part of your overarching acquisition strategy.',
    overview: 'A marketing website has one primary job: convert qualified visitors into clients. We build clean, fast, mobile-first web experiences that eliminate friction and showcase your value without distractions.',
    deliverables: [
      'Conversion-focused wireframing and user experience architecture',
      'Custom responsive design system in Figma',
      'Modern, performant frontend engineering (Next.js / Tailwind)',
      'CMS integration (Headless or structured content schemas)',
      'Rigorous accessibility compliance (WCAG AA)',
      'Sub-second Core Web Vitals loading optimization',
    ],
    methodology: [
      {
        step: '01',
        title: 'Conversion Architecture',
        description: 'We structure page hierarchy around a single primary outcome, stripping away competing distractions.',
      },
      {
        step: '02',
        title: 'High-Fidelity Interface',
        description: 'We design responsive layouts with consistent type scales, generous whitespace, and restrained motion accents.',
      },
      {
        step: '03',
        title: 'Performant Engineering',
        description: 'We deploy lightweight, semantic code optimized for instantaneous loading and effortless content maintenance.',
      },
    ],
    resultsMetric: {
      value: '99/100',
      label: 'Average Google Lighthouse Performance',
      context: 'Sub-second Largest Contentful Paint across mobile devices.',
    },
    iconName: 'Layout',
  },
];
