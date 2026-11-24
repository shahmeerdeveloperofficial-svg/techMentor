export interface ServiceItem {
  slug: string;
  title: string;
  category?: "Development & AI" | "Marketing" | "Creative" | "Specialized Software Solutions";
  mode?: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  learningTopics?: string[];
  capabilities: string[];
  technologies: string[];
  businessUseCases: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  clientIndustry: string;
  summary: string;
  problem: string;
  solution: string;
  functionality: string[];
  technologies: string[];
  metricsNote: string;
  architectureHighlight: string;
}

export interface TechnologyGroup {
  category: string;
  description: string;
  items: { name: string; tag: string; description: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_CONFIG = {
  name: "Tech Mentors",
  legalName: "Tech Mentors Training Institute",
  tagline: "Skills Today | Better Tomorrow",
  subTagline: "Learn • Practice • Build • Grow",
  headline: "Build Future-Ready Tech Skills That Open Real Opportunities.",
  supportingText:
    "Practical, industry-focused courses in development, AI, digital marketing and creative design in China Scheme, Lahore. Learn from experienced trainers, build real portfolio projects, and continue into an internship.",
  logoUrl: "/images/logo.png",
  contact: {
    email: "info@techmentors.com",
    phone: "0310 2199253",
    phoneFormatted: "0310 2199253",
    phoneRaw: "923102199253",
    whatsappUrl: "https://wa.me/923102199253?text=Assalam%20o%20Alaikum%20Tech%20Mentors%2C%20I%20want%20to%20apply%20for%20admission",
    address: "China Scheme, Lahore, Pakistan",
    campus: "China Scheme, Lahore",
    businessHours: "Monday – Saturday: 9:00 AM – 7:00 PM (PKT)",
    availabilityNotice: "On-Campus & Online Classes · Admissions Open",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
  },
  trainingHighlights: [
    { label: "9 Career Courses", detail: "Development, AI, marketing & design" },
    { label: "On-Campus & Online", detail: "Classes that fit your schedule" },
    { label: "Certificate", detail: "Awarded on course completion" },
    { label: "Internship", detail: "Real work experience under written agreement" },
  ],
  targetAudiences: [
    { audience: "After Matric", title: "School Leavers", description: "Start a practical skill-based career early." },
    { audience: "Students", title: "College & University", description: "Add in-demand practical skills to your degree." },
    { audience: "Professionals", title: "Career Switchers", description: "Transition smoothly into tech, marketing or design." },
    { audience: "Entrepreneurs", title: "Business Owners", description: "Scale and grow your own business online." },
  ],
  admissionSteps: [
    { step: "1", title: "Submit Admission Inquiry", description: "Fill out the online application or contact us directly on WhatsApp." },
    { step: "2", title: "Course Guidance & Details", description: "Our admissions team contacts you with batch timings, curriculum details, and fee structure." },
    { step: "3", title: "Confirm Seat & Join Batch", description: "Confirm your enrollment and attend classes on-campus in China Scheme, Lahore or online." },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Digital Marketing
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    mode: "On-campus · Online",
    shortDescription: "Learn to market, grow and scale businesses online.",
    fullDescription:
      "A comprehensive, hands-on digital marketing program engineered to help students and entrepreneurs master modern online acquisition. Learn how to craft high-converting Meta and Google ad campaigns, engineer sales funnels, accurately target audiences, and analyze performance data to scale businesses.",
    icon: "TrendingUp",
    learningTopics: [
      "Meta & Google Ads",
      "Funnels & audience targeting",
      "Campaign reporting",
    ],
    capabilities: [
      "Meta Ads (Facebook & Instagram) Campaign Setup & Scaling",
      "Google Search, Display & Performance Max Ads",
      "Sales Funnel Engineering & Landing Page Optimization",
      "Audience Segmentation, Retargeting & Custom Audiences",
      "Data Analytics, Conversion Tracking & ROI Reporting",
      "Email Marketing Automations & Copywriting Fundamentals",
    ],
    technologies: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Tag Manager", "Canva", "Mailchimp"],
    businessUseCases: [
      "Running profitable paid ads for local and international brands",
      "Freelancing on Upwork and Fiverr as a certified media buyer",
      "Scaling direct-to-consumer e-commerce brand revenues",
      "Lead generation for professional services, clinics, and education",
    ],
    workflow: [
      "Market research, customer avatars, and competitor analysis",
      "Ad creative design, compelling copy, and offer creation",
      "Campaign launch, budget allocation, and A/B split testing",
      "Performance optimization, conversion tracking, and reporting",
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners with no marketing background?",
        answer:
          "Yes. We start from absolute fundamentals of marketing psychology and progressively guide you through setting up live Meta and Google ad campaigns.",
      },
      {
        question: "Will I practice with real ad accounts and budgets?",
        answer:
          "Yes, practical training includes hands-on setup in real Meta Business Suite and Google Ads interfaces with guided exercises.",
      },
    ],
  },

  // 2. SEO
  {
    slug: "seo",
    title: "SEO",
    category: "Marketing",
    mode: "On-campus · Online",
    shortDescription: "Master search engine optimisation to rank and get real business results.",
    fullDescription:
      "Master search engine optimization from the ground up. This course covers everything from keyword research and competitor intelligence to technical site architecture, on-page optimization, content strategy, link building, and local Google Business Profile ranking in competitive niches.",
    icon: "Search",
    learningTopics: [
      "Keyword research",
      "On-page & technical SEO",
      "Link building & local SEO",
    ],
    capabilities: [
      "High-Intent Keyword Research & Search Intent Mapping",
      "On-Page Optimization (Meta tags, headings, content structure)",
      "Technical SEO Auditing (Crawling, indexing, Core Web Vitals)",
      "Authority Link Building & Digital PR Outreach",
      "Local SEO & Google Business Profile Ranking",
      "SEO Auditing & Actionable Reporting for Clients",
    ],
    technologies: ["Google Search Console", "Google Analytics", "Ahrefs", "Semrush", "Screaming Frog", "Yoast / RankMath"],
    businessUseCases: [
      "Ranking local businesses in Lahore and across Pakistan on Google Maps",
      "Driving organic search traffic to e-commerce and affiliate websites",
      "Providing white-hat SEO consulting for international clients",
      "Content optimization for corporate blogs and publishing sites",
    ],
    workflow: [
      "Website technical audit and keyword opportunity mapping",
      "On-page optimization and content gap remediation",
      "Internal linking architecture and schema markup setup",
      "Off-page outreach, link acquisition, and rank monitoring",
    ],
    faqs: [
      {
        question: "How quickly can SEO generate tangible results?",
        answer:
          "SEO is a compounding organic growth channel. Depending on site authority and competition, results typically begin emerging within 3 to 6 months of disciplined optimization.",
      },
      {
        question: "Does the course cover both international and local SEO?",
        answer:
          "Yes. You will learn both international keyword ranking techniques and localized Google Business Profile ranking strategies for regional businesses.",
      },
    ],
  },

  // 3. Agentic AI
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "Development & AI",
    mode: "On-campus · Online",
    shortDescription: "Learn to build and use AI agents to automate real-world tasks.",
    fullDescription:
      "Stay at the forefront of the technological revolution. This course teaches you to design, build, and deploy intelligent AI agents that autonomously execute complex business workflows, interact with software APIs, process unstructured data, and automate repetitive tasks using modern LLMs.",
    icon: "Bot",
    learningTopics: [
      "Prompting & AI tools",
      "Building AI agents",
      "Business automation",
    ],
    capabilities: [
      "Advanced Prompt Engineering & Multi-Shot Reasoning",
      "Autonomous Agent Architecture & Goal-Directed Execution",
      "LLM API Integrations (OpenAI, Gemini, Anthropic)",
      "Function Calling, Tool Use & Web Browsing Agents",
      "Retrieval Augmented Generation (RAG) & Vector Storage",
      "End-to-End Business Process Automation",
    ],
    technologies: ["Python", "OpenAI API", "Gemini API", "LangChain", "LlamaIndex", "Vector DBs", "Make / n8n"],
    businessUseCases: [
      "Building automated customer support and lead qualification agents",
      "Automating research, document summarization, and data extraction",
      "Developing internal AI co-pilots for business workflows",
      "Consulting and delivering enterprise AI automation solutions",
    ],
    workflow: [
      "Prompt design and cognitive architecture definition",
      "Tool and API integration specification",
      "Agent execution loop and error recovery implementation",
      "Evaluation, latency tuning, and production deployment",
    ],
    faqs: [
      {
        question: "Do I need advanced mathematical knowledge to learn Agentic AI?",
        answer:
          "No. This course focuses on practical engineering and system integration using modern APIs, developer frameworks, and automation tools rather than theoretical mathematics.",
      },
      {
        question: "What real projects will I build?",
        answer:
          "You will build autonomous customer support agents, automated research tools, document analysis bots, and multi-step business workflow automations.",
      },
    ],
  },

  // 4. Full Stack Web Development
  {
    slug: "web-development",
    title: "Full Stack Web Development",
    category: "Development & AI",
    mode: "On-campus · Online",
    shortDescription: "Build modern, full-stack web applications from scratch.",
    fullDescription:
      "A complete full-stack engineering program covering modern client-side and server-side development. Master core web foundations (HTML, CSS, JavaScript), advance to component-driven frameworks (React, Next.js), and construct resilient backends with Node.js and Laravel backed by relational databases.",
    icon: "Globe",
    learningTopics: [
      "HTML, CSS & JavaScript",
      "Front-end frameworks",
      "Back-end & databases",
    ],
    capabilities: [
      "Semantic HTML5, CSS3, Flexbox, Grid & Tailwind CSS",
      "Modern JavaScript (ES6+), Asynchronous Programming & TypeScript",
      "Frontend Frameworks: React, Component State & Hooks",
      "Backend API Engineering with Node.js, Express & Laravel",
      "Relational Database Design with PostgreSQL & MySQL",
      "Authentication, Security Protocols & Cloud Deployment",
    ],
    technologies: ["HTML5 / CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Laravel", "PostgreSQL", "Git"],
    businessUseCases: [
      "Developing high-performance custom web applications for businesses",
      "Building interactive client portals, dashboards, and SaaS platforms",
      "Freelancing on global platforms as a full-stack web engineer",
      "Launching proprietary digital products and startups",
    ],
    workflow: [
      "Wireframe analysis and relational schema design",
      "Component-driven frontend assembly and responsive styling",
      "RESTful API implementation, authentication, and database modeling",
      "Cross-browser testing, code optimization, and cloud deployment",
    ],
    faqs: [
      {
        question: "What prior programming knowledge do I need?",
        answer:
          "None. We begin from the very basics of HTML and CSS, ensuring students from any educational background can follow along and build confidence.",
      },
      {
        question: "Will I have a complete portfolio by the end of the course?",
        answer:
          "Yes. You will complete several portfolio-grade web applications hosted live on GitHub and cloud platforms to showcase to employers and clients.",
      },
    ],
  },

  // 5. App Development
  {
    slug: "mobile-app-development",
    title: "App Development",
    category: "Development & AI",
    mode: "On-campus · Online",
    shortDescription: "Create powerful, user-friendly mobile apps for Android and iOS.",
    fullDescription:
      "Learn to design, develop, and publish cross-platform mobile applications for Android and iOS from a single unified codebase using React Native and Expo. Master mobile UI design patterns, API connectivity, native hardware access, local data persistence, and app store submission.",
    icon: "Smartphone",
    learningTopics: [
      "Cross-platform apps",
      "Connecting to APIs",
      "Publishing to app stores",
    ],
    capabilities: [
      "Cross-Platform Mobile App Engineering (iOS & Android)",
      "React Native Fundamentals, Navigation & Component Architecture",
      "RESTful & GraphQL API Connectivity & Offline Persistence",
      "Device Hardware Access (Camera, Geolocation, Push Notifications)",
      "State Management & Mobile Performance Optimization",
      "Google Play Store & Apple App Store Publishing Procedures",
    ],
    technologies: ["React Native", "Expo", "JavaScript", "TypeScript", "Mobile APIs", "Android Studio", "Xcode"],
    businessUseCases: [
      "Building mobile shopping, booking, and delivery applications",
      "Publishing original utility apps to Google Play and Apple App Store",
      "Freelancing for international clients needing mobile solutions",
      "Creating enterprise mobile interfaces for workforce operations",
    ],
    workflow: [
      "Mobile wireframing and user experience flow mapping",
      "Component assembly and responsive cross-device layout design",
      "API connectivity, authentication, and local data caching",
      "Device testing, asset generation, and App Store submission",
    ],
    faqs: [
      {
        question: "Can I build apps for both iPhone and Android with this course?",
        answer:
          "Yes. Using React Native and Expo, you write code once and compile it into native applications for both Android and iOS devices.",
      },
      {
        question: "Do you guide students through Google Play and App Store submission?",
        answer:
          "Yes. The curriculum includes step-by-step guidance on provisioning certificates, store listing metadata, and submission review compliance.",
      },
    ],
  },

  // 6. Shopify eCommerce
  {
    slug: "shopify-ecommerce",
    title: "Shopify eCommerce",
    category: "Marketing",
    mode: "On-campus · Online",
    shortDescription: "Learn to build, customise and grow a profitable Shopify store.",
    fullDescription:
      "Master the entire lifecycle of building and running a profitable e-commerce business on Shopify. Learn theme customization, winning product research, supplier coordination, app integrations, payment gateway configuration, conversion rate optimization, and paid ad acquisition.",
    icon: "ShoppingBag",
    learningTopics: [
      "Store setup & themes",
      "Product research",
      "Store marketing & sales",
    ],
    capabilities: [
      "Complete Shopify Store Architecture & Theme Customization",
      "Data-Driven Winning Product Research & Sourcing Strategies",
      "Payment Gateways, Shipping Profiles & Local Delivery Setup",
      "Conversion Rate Optimization (CRO) & High-Converting Product Pages",
      "Essential Shopify Apps (Reviews, Upsells, Abandoned Cart)",
      "eCommerce Paid Ad Funnels on Meta & TikTok",
    ],
    technologies: ["Shopify Liquid", "Theme Customizer", "Canva", "Meta Ads", "TikTok Ads", "eCommerce Apps"],
    businessUseCases: [
      "Launching your own dropshipping or private-label online brand",
      "Building and selling customized Shopify stores for clients globally",
      "Managing e-commerce operations for retail brands in Pakistan",
      "Freelancing as a specialized Shopify developer and store manager",
    ],
    workflow: [
      "Niche selection, market validation, and supplier sourcing",
      "Store setup, branding, domain connection, and payment setup",
      "High-converting product page design and copywriting",
      "Marketing campaign launch, order fulfillment, and scaling",
    ],
    faqs: [
      {
        question: "Can I start selling online in Pakistan or internationally?",
        answer:
          "Yes. You will learn store setups for both the Pakistani domestic cash-on-delivery market and international dropshipping markets.",
      },
      {
        question: "Do I need coding experience to build a Shopify store?",
        answer:
          "No. Shopify allows powerful store creation through visual builders, while we also introduce Liquid code customization for advanced tweaks.",
      },
    ],
  },

  // 7. Social Media Marketing
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing",
    mode: "On-campus · Online",
    shortDescription: "Build a strong brand and grow your audience on social media.",
    fullDescription:
      "Learn how to build authority, grow engaged communities, and drive commercial outcomes across major social media platforms. Master content planning, short-form viral video strategies for Instagram, Facebook, and TikTok, organic page growth, copy design, and community management.",
    icon: "Share2",
    learningTopics: [
      "Content planning",
      "Instagram, Facebook & TikTok",
      "Page growth & engagement",
    ],
    capabilities: [
      "Strategic Content Calendar Planning & Editorial Pillars",
      "Instagram, Facebook & TikTok Organic Growth Frameworks",
      "Viral Short-Form Content Ideation, Scripting & Hook Design",
      "Audience Engagement, Community Moderation & Brand Voice",
      "Collaborations, Influencer Marketing & Trend Jacking",
      "Social Media Analytics, KPI Tracking & Monthly Client Reporting",
    ],
    technologies: ["Meta Business Suite", "TikTok Creator Tools", "Canva", "CapCut", "Scheduling Tools"],
    businessUseCases: [
      "Growing organic brand awareness for businesses and startups",
      "Managing social media accounts for international clients as a freelancer",
      "Building a personal brand or creator channel on Instagram and TikTok",
      "Increasing customer loyalty and community engagement for local brands",
    ],
    workflow: [
      "Brand voice definition, competitor analysis, and audience audit",
      "Monthly content calendar creation with diverse media formats",
      "Content production, visual asset creation, and scheduling",
      "Community interaction, performance analysis, and iterative refinement",
    ],
    faqs: [
      {
        question: "What is the difference between Social Media Marketing and Digital Marketing?",
        answer:
          "Social Media Marketing focuses on organic brand building, content calendars, short-form storytelling, and community engagement, while Digital Marketing emphasizes paid media buying, search engines, and quantitative advertising funnels.",
      },
      {
        question: "Will I learn how to create content during the course?",
        answer:
          "Yes, practical sessions include crafting real hooks, scripts, visual creatives, and video prompts for social media channels.",
      },
    ],
  },

  // 8. Graphic Designing
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Creative",
    mode: "On-campus · Online",
    shortDescription: "Learn modern design skills to create impactful visuals and brand assets.",
    fullDescription:
      "Develop your creative eye and master the industry-standard software required to produce impactful visual identities, marketing assets, and digital artwork. Learn foundational design principles, color theory, typography, logo design, high-converting social media posts, and brand guidelines.",
    icon: "Palette",
    learningTopics: [
      "Design principles",
      "Logos & brand identity",
      "Social media creatives",
    ],
    capabilities: [
      "Core Visual Principles: Composition, Hierarchy, Balance & Contrast",
      "Color Theory, Typography Scales & Visual Identity Guidelines",
      "Brand Identity Systems, Vector Logos & Commercial Marks",
      "High-Converting Social Media Creatives, Banners & Ads",
      "Print Media: Brochures, Business Cards, Flyers & Packaging",
      "Portfolio Presentation & Client Pitching Strategies",
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "Vector Assets"],
    businessUseCases: [
      "Designing complete brand identity packages for startups and companies",
      "Creating daily visual assets for marketing agencies and e-commerce stores",
      "Selling design templates and vector graphics on international marketplaces",
      "Freelancing on Upwork, Fiverr, and 99designs as a brand designer",
    ],
    workflow: [
      "Client creative brief and moodboard development",
      "Vector sketching, typography pairing, and concept exploration",
      "High-fidelity visual polish in Illustrator and Photoshop",
      "Final asset packaging in web, print, and vector formats",
    ],
    faqs: [
      {
        question: "Do I need to be naturally artistic to succeed in graphic design?",
        answer:
          "No. Graphic design is fundamentally about visual problem-solving, structured layout rules, typography, and software proficiency, which we teach step by step.",
      },
      {
        question: "Which software applications are taught?",
        answer:
          "You will master Adobe Photoshop, Adobe Illustrator, and Figma, alongside modern rapid-creation tools.",
      },
    ],
  },

  // 9. Video Editing
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Creative",
    mode: "On-campus · Online",
    shortDescription: "Master professional video editing for social media, YouTube and business.",
    fullDescription:
      "Video is the most consumed medium on the internet today. Learn professional video post-production workflows from cutting and pacing to dynamic captioning, color grading, sound design, sound effects, and motion graphics for YouTube videos, commercial promotions, and fast-paced Instagram and TikTok reels.",
    icon: "Video",
    learningTopics: [
      "Editing fundamentals",
      "Reels & short-form video",
      "Colour, sound & motion",
    ],
    capabilities: [
      "Core Video Editing Fundamentals: Timeline, Cuts, J/L Cuts & Pacing",
      "Fast-Paced Reels, TikToks & Shorts with Viral Hook Techniques",
      "Cinematic Color Correction & Creative Color Grading",
      "Sound Design, Audio Polish, Noise Removal & Sound Effects (SFX)",
      "Dynamic Subtitles, Kinetic Typography & Motion Graphics",
      "Render Optimization for YouTube, Instagram, TikTok & Commercials",
    ],
    technologies: ["Adobe Premiere Pro", "CapCut Desktop", "Adobe After Effects", "Audition", "Color Scopes"],
    businessUseCases: [
      "Editing high-retention short-form videos for content creators and brands",
      "Producing long-form YouTube documentaries, interviews, and vlogs",
      "Creating commercial video advertisements for e-commerce products",
      "Working as an in-house video editor for marketing agencies and studios",
    ],
    workflow: [
      "Footage organization, rough cut assembly, and story pacing",
      "B-roll insertion, transitions, and dynamic caption styling",
      "Audio mixing, background music ducking, and sound effects",
      "Color grading, final render export, and quality check",
    ],
    faqs: [
      {
        question: "What computer specifications do I need to learn video editing?",
        answer:
          "A desktop or laptop with at least 8GB to 16GB RAM and a multi-core processor is sufficient to start with Premiere Pro and CapCut Desktop.",
      },
      {
        question: "Will I learn both short-form and long-form video editing?",
        answer:
          "Yes. The curriculum covers high-retention vertical reels for TikTok/Instagram as well as widescreen long-form video editing for YouTube.",
      },
    ],
  },

  // Preserved Specialized Software Solutions (Ensures existing enterprise pages & URLs continue to function seamlessly)
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Tailor-made software systems aligned precisely with proprietary business processes and scalable architectures.",
    fullDescription:
      "We build bespoke software architectures engineered from the ground up to match exact business logic, data models, compliance mandates, and operational scalability needs.",
    icon: "Cpu",
    capabilities: [
      "Custom Enterprise Software Engineering",
      "Complex Business Logic Modeling & Workflow Automation",
      "Database Modeling, Normalization & Optimization",
      "Role-Based Access Control & Audit Trails",
    ],
    technologies: ["Node.js", "Python", "PHP / Laravel", "PostgreSQL", "Docker", "Redis"],
    businessUseCases: [
      "Custom inventory, procurement, and dispatch systems",
      "Proprietary billing, invoicing, and contract management",
    ],
    workflow: [
      "Domain modeling and workflow mapping",
      "Schema architecture and service contracts",
      "Sprint-based feature development",
      "Quality assurance and deployment verification",
    ],
    faqs: [
      {
        question: "Can custom software integrate with existing tools?",
        answer: "Yes, we construct secure bridge APIs and middleware adapters that synchronize with existing databases.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Human-centered user interfaces and research-backed digital product designs balancing aesthetics with usability.",
    fullDescription:
      "Transforming complex workflows into clear, frictionless digital product experiences through design systems, clickable prototypes, and production-ready component libraries.",
    icon: "Palette",
    capabilities: [
      "User Journey Mapping & Information Architecture",
      "Interactive Wireframing & Clickable Prototyping",
      "Design Systems & Tokenized Component Libraries",
      "Accessibility (WCAG 2.2 AA) Compliance Audits",
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook"],
    businessUseCases: [
      "Designing complex dashboards and SaaS applications",
      "Creating unified cross-platform product guidelines",
    ],
    workflow: [
      "User persona definition and workflow discovery",
      "High-fidelity UI styling with approved design tokens",
      "Interactive prototyping and developer handoff",
    ],
    faqs: [
      {
        question: "Do you supply clickable prototypes in Figma?",
        answer: "Yes, interactive prototypes let you test user journeys before development begins.",
      },
    ],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Centralized enterprise resource planning and customer relationship management systems that synchronize operations.",
    fullDescription:
      "Consolidate fragmented business operations into a unified platform connecting sales, client support, inventory, and financials into one coherent system.",
    icon: "Layers",
    capabilities: [
      "Custom CRM Pipeline & Lead Tracking",
      "Inventory, Warehouse & Order Lifecycle Management",
      "Automated Invoicing & Financial Reports",
    ],
    technologies: ["PostgreSQL", "Laravel", "React", "Node.js", "Redis"],
    businessUseCases: [
      "Multi-channel sales pipeline tracking and automated follow-ups",
      "Consolidated financial reporting and tax summary generation",
    ],
    workflow: [
      "Current operations audit and data modeling",
      "Sprint-driven module rollout",
      "Staff onboarding and deployment verification",
    ],
    faqs: [
      {
        question: "Can we migrate data from existing Excel files or CRMs?",
        answer: "Yes, automated data sanitation scripts safely import legacy customer records and transaction logs.",
      },
    ],
  },
  {
    slug: "api-system-integration",
    title: "API & System Integration",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Secure, resilient API architecture and middleware connecting disjointed enterprise tools into an automated pipeline.",
    fullDescription:
      "High-throughput APIs, webhooks, and middleware layers that unify CRMs, payment gateways, ERPs, and partner systems into a dependable automated ecosystem.",
    icon: "Network",
    capabilities: [
      "RESTful & GraphQL API Design & Implementation",
      "Payment Gateway (Stripe, PayPal, Banks) Integration",
      "Webhook Architecture & Event-Driven Processing",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    businessUseCases: [
      "Automated order sync between e-commerce and fulfillment",
      "Connecting core banking or billing systems with client portals",
    ],
    workflow: [
      "API contract specification and schema design",
      "Middleware development with retry logic and idempotency",
    ],
    faqs: [
      {
        question: "How do you handle API outages from third parties?",
        answer: "We employ resilient message queues, retry logic, and fallback routines to prevent system disruption.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Secure cloud architecture, containerized deployments, and automated CI/CD pipelines engineered on modern cloud infrastructure.",
    fullDescription:
      "Resilient cloud infrastructures that ensure high availability, automatic scaling, and stringent data protection for web and mobile platforms.",
    icon: "Cloud",
    capabilities: [
      "AWS Cloud Architecture & Managed Service Configuration",
      "Docker Containerization & Multi-Stage Builds",
      "Automated CI/CD Delivery Pipelines",
    ],
    technologies: ["AWS", "Docker", "Linux", "Nginx", "GitHub Actions"],
    businessUseCases: [
      "Migrating servers to scalable cloud infrastructure",
      "Automating deployment pipelines with zero downtime",
    ],
    workflow: [
      "Cloud architecture audit and cost planning",
      "Infrastructure setup with automated security hardening",
    ],
    faqs: [
      {
        question: "What uptime SLA is targeted?",
        answer: "We architect multi-zone environments targeting 99.9% to 99.99% availability.",
      },
    ],
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance",
    category: "Specialized Software Solutions",
    mode: "On-campus · Online",
    shortDescription:
      "Proactive maintenance, security patching, performance monitoring, and continuous technical enhancements for production systems.",
    fullDescription:
      "Ongoing technical vigilance ensuring software remains secure, performant, and compatible with evolving environments through regular updates and monitoring.",
    icon: "ShieldCheck",
    capabilities: [
      "Application Health & Uptime Monitoring",
      "Dependency Updates & Security Patching",
      "Database Tuning & Log Rotation",
    ],
    technologies: ["Git", "Docker", "Linux", "PostgreSQL"],
    businessUseCases: [
      "Maintaining business-critical software with dedicated SLA",
      "Upgrading legacy codebases to current stable versions",
    ],
    workflow: [
      "Vulnerability and dependency audit",
      "Monitoring agent setup and scheduled maintenance windows",
    ],
    faqs: [
      {
        question: "Can you maintain software built by another company?",
        answer: "Yes, we conduct a structured onboarding audit to inspect the existing codebase and hosting setup.",
      },
    ],
  },
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    slug: "enterprise-workflow-suite",
    title: "Enterprise Operations & Workflow Suite",
    category: "Custom Software",
    clientIndustry: "Enterprise Operations",
    summary:
      "A centralized cloud operational portal that eliminated manual spreadsheet tracking across five departments, uniting procurement, tasks, and executive approvals.",
    problem:
      "The client relied on disjointed spreadsheets and informal emails to track multi-stage procurement and internal requests, causing delays, lost purchase orders, and zero audit accountability.",
    solution:
      "Engineered a modular web application with strict role-based access control, automated approval routing, real-time activity timelines, and executive status dashboards.",
    functionality: [
      "Multi-stage procurement request workflows with automated manager approval triggers",
      "Granular role-based permissions (Requester, Approver, Finance, Auditor)",
      "Instant export of reconciled PDF purchase orders and financial CSV reports",
      "Comprehensive change audit logs tracking every timestamped action",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    metricsNote: "Streamlined purchase order approvals from days to minutes with complete audit accountability.",
    architectureHighlight: "Event-driven background notification service with transactional PostgreSQL consistency.",
  },
  {
    slug: "telehealth-connect-platform",
    title: "Telehealth & Patient Care Portal",
    category: "Web & Mobile",
    clientIndustry: "Healthcare",
    summary:
      "A HIPAA-conscious patient appointment booking, teleconsultation scheduling, and encrypted medical records portal for private clinics.",
    problem:
      "Clinical staff faced heavy administrative phone burdens, manual appointment double-bookings, and fragmented patient communication channels.",
    solution:
      "Built a secure responsive web portal and mobile-friendly patient interface for online booking, doctor availability calendar synchronization, and automated SMS/email reminders.",
    functionality: [
      "Interactive appointment scheduler with real-time doctor availability syncing",
      "Encrypted patient profile management and consultation history",
      "Automated reminder system reducing appointment no-shows",
      "Clinic administrative desk for doctor shift and room scheduling",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    metricsNote: "Drastically decreased front-desk phone inquiries and virtually eliminated appointment scheduling overlaps.",
    architectureHighlight: "Field-level encryption for sensitive health profile data and time-zone-aware scheduling engine.",
  },
  {
    slug: "supplyflow-logistics-portal",
    title: "SupplyFlow Logistics & Fleet Management",
    category: "Custom Software",
    clientIndustry: "Logistics",
    summary:
      "A real-time dispatch dashboard and shipment tracking system enabling dispatchers to coordinate freight routes, driver manifests, and delivery confirmations.",
    problem:
      "Dispatch managers lacked unified visibility over active fleet vehicles, resulting in suboptimal routing, delayed customer status updates, and paper-based manifest errors.",
    solution:
      "Designed and deployed a high-density operational dashboard featuring live status maps, automated route dispatching, and digital proof-of-delivery uploads.",
    functionality: [
      "Real-time shipment status tracking across transit hubs",
      "Driver manifest generation with digital barcode verification",
      "Customer public tracking portal with live checkpoint milestones",
      "Exception handling and delayed shipment alert triggers",
    ],
    technologies: ["React", "Laravel", "MySQL", "Redis", "Tailwind CSS", "AWS"],
    metricsNote: "Delivered transparent shipment visibility across multiple distribution centers without manual radio check-ins.",
    architectureHighlight: "Redis-cached waypoint lookups handling thousands of concurrent tracking requests.",
  },
  {
    slug: "finwise-analytics-dashboard",
    title: "FinWise Financial Intelligence Platform",
    category: "Web Application",
    clientIndustry: "Professional Services",
    summary:
      "An executive reporting dashboard aggregating multi-currency transactional streams into interactive visual cash flow and runway forecasts.",
    problem:
      "Financial advisory partners spent hours weekly consolidating disparate accounting exports into static presentations for leadership reviews.",
    solution:
      "Developed an interactive analytics platform that ingests raw ledger files, normalizes currencies, and renders dynamic interactive charts and scenario projections.",
    functionality: [
      "Dynamic data visualization with interactive date filtering and category drill-downs",
      "Automated currency conversion using normalized exchange rate indexes",
      "Customizable KPI scorecard widgets for executive reporting",
      "One-click branded PDF presentation export for board meetings",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metricsNote: "Replaced hours of manual spreadsheet compilation with instantaneous visual financial insights.",
    architectureHighlight: "Client-side optimized chart rendering handling dense financial datasets without UI lag.",
  },
  {
    slug: "edumentor-lms-engine",
    title: "EduMentor Adaptive Learning Platform",
    category: "Web & Mobile",
    clientIndustry: "Education",
    summary:
      "A modular learning management portal supporting structured technical video curricula, interactive coding quizzes, and progress certification.",
    problem:
      "An educational institute needed an organized platform to deliver video modules, assign practical exercises, and certify student completion without third-party platform licensing fees.",
    solution:
      "Constructed a responsive web and mobile portal featuring structured learning paths, exercise submissions, automated quiz grading, and digital certificate generation.",
    functionality: [
      "Structured video lesson playlists with progress persistence and resume-points",
      "Interactive code and multiple-choice assessment modules",
      "Student learning dashboard with skill completion badges",
      "Instructor gradebook and course enrollment administration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS S3"],
    metricsNote: "Successfully enrolled hundreds of active learners with automated completion validation.",
    architectureHighlight: "Segmented media streaming integration with persistent user watch-progress state.",
  },
  {
    slug: "omnistore-b2b-commerce",
    title: "OmniStore Wholesale B2B Commerce Engine",
    category: "Web Application",
    clientIndustry: "Retail & E-commerce",
    summary:
      "A dedicated wholesale ordering portal with customized tier pricing, bulk purchasing matrices, and credit line payment approvals.",
    problem:
      "B2B distributors struggled with manual phone orders, custom pricing errors, and complex spreadsheet product catalogs that caused order fulfillment delays.",
    solution:
      "Engineered an automated B2B customer ordering portal featuring tiered wholesale price sheets, minimum order volume enforcement, and automated invoicing.",
    functionality: [
      "Customer-specific wholesale price lists and tiered volume discounts",
      "Fast SKU matrix bulk-ordering table for high-volume purchasing",
      "Credit terms checkout with internal credit approval workflow",
      "Direct ERP integration for inventory reservation and packing slips",
    ],
    technologies: ["Laravel", "React", "PostgreSQL", "Tailwind CSS", "Docker"],
    metricsNote: "Reduced B2B order processing times and virtually eliminated custom pricing entry mistakes.",
    architectureHighlight: "Calculated pricing engine evaluating multi-attribute volume breaks in milliseconds.",
  },
];

export const TECHNOLOGIES_DATA: TechnologyGroup[] = [
  {
    category: "Frontend Engineering",
    description: "Modern, component-driven client architectures built for speed, accessibility, and fluid user experience.",
    items: [
      { name: "React", tag: "UI Library", description: "Declarative component-driven frontend architecture." },
      { name: "Next.js", tag: "Full-Stack React", description: "Server-side rendering, static site generation, and optimized routing." },
      { name: "TypeScript", tag: "Type Safety", description: "Robust compile-time static typing preventing runtime bugs." },
      { name: "Tailwind CSS", tag: "Design Engine", description: "Utility-first CSS framework enabling consistent design systems." },
      { name: "Vite", tag: "Build Tooling", description: "Lightning-fast HMR and highly optimized production bundling." },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Resilient server architectures, business logic engines, and transactional data processing pipelines.",
    items: [
      { name: "Node.js", tag: "Runtime", description: "High-throughput asynchronous event-driven backend services." },
      { name: "Laravel (PHP)", tag: "Framework", description: "Elegant, secure, and rapid enterprise application framework." },
      { name: "Express / Fastify", tag: "API Layer", description: "Minimalist, high-performance RESTful API endpoints." },
      { name: "Python", tag: "Data & AI", description: "AI agent development, automation workflows, and data pipelines." },
    ],
  },
  {
    category: "Mobile Application Development",
    description: "Multi-platform mobile engineering ensuring consistent performance and native device capabilities.",
    items: [
      { name: "React Native", tag: "Cross-Platform", description: "Unified codebase delivering native iOS and Android performance." },
      { name: "Expo", tag: "Mobile Toolchain", description: "Accelerated development, native module bridging, and OTA updates." },
      { name: "Swift / Kotlin", tag: "Native SDKs", description: "Deep hardware integrations when specialized native code is required." },
    ],
  },
  {
    category: "Digital Marketing & Creative Tools",
    description: "Industry-standard marketing suites and creative software for client growth campaigns.",
    items: [
      { name: "Meta Ads Manager", tag: "Paid Advertising", description: "High-converting Facebook and Instagram ad campaigns." },
      { name: "Google Ads & Analytics", tag: "Search & Tracking", description: "Search, display, and GA4 conversion tracking." },
      { name: "Adobe Premiere Pro", tag: "Video Editing", description: "Timeline post-production, sound design, and color grading." },
      { name: "Adobe Photoshop & Illustrator", tag: "Graphic Design", description: "Vector identity design, typography, and marketing assets." },
      { name: "Figma", tag: "UI/UX & Prototyping", description: "Collaborative interface design and interactive wireframing." },
      { name: "Shopify Liquid", tag: "eCommerce Engine", description: "Store customization, product research, and checkout optimization." },
    ],
  },
  {
    category: "Databases & Cloud Infrastructure",
    description: "ACID-compliant storage, lightning-fast caching, and automated deployment pipelines.",
    items: [
      { name: "PostgreSQL & MySQL", tag: "Relational DB", description: "Advanced SQL databases for reliable data integrity." },
      { name: "Redis", tag: "In-Memory Cache", description: "Sub-millisecond data caching, session store, and queues." },
      { name: "Docker", tag: "Containers", description: "Reproducible container environments from development to production." },
      { name: "AWS", tag: "Cloud Hosting", description: "Scalable cloud compute, S3 asset storage, and RDS." },
      { name: "GitHub Actions", tag: "CI / CD", description: "Automated linting, testing, and continuous deployment." },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "LEARN",
    description:
      "Understand each concept step by step, explained in simple language with clear visual examples and direct instructor support.",
    deliverables: ["Concept fundamentals", "Structured lessons", "Interactive walkthroughs", "Topic cheat sheets"],
  },
  {
    step: "02",
    title: "PRACTISE",
    description:
      "Apply every lesson in class with guided exercises, lab work, regular instructor feedback, and peer code and design reviews.",
    deliverables: ["Guided lab exercises", "Daily code & design drills", "Trainer feedback sessions", "Skill validation tests"],
  },
  {
    step: "03",
    title: "BUILD",
    description:
      "Create real projects for your portfolio that prove what you can do to future employers, freelance clients, and partners.",
    deliverables: ["Real-world portfolio projects", "Clean GitHub / design repositories", "Functional applications & campaigns", "Project presentation defense"],
  },
  {
    step: "04",
    title: "GROW",
    description:
      "Join an internship at Tech Mentors under a written agreement, start freelancing, or apply for jobs with proven skills and confidence.",
    deliverables: ["Internship opportunity under written agreement", "Course completion certificate", "Resume & portfolio refinement", "Interview & freelance guidance"],
  },
];

export const DETAILED_PROCESS_WORKFLOW = [
  {
    phase: "Stage 01",
    title: "Foundation & Conceptual Learning",
    summary: "Breaking down complex technologies into simple, understandable concepts with clear mental models.",
    actions: ["In-person and online lectures", "Live trainer demonstrations", "Core principle explanations", "Curriculum roadmap orientation"],
  },
  {
    phase: "Stage 02",
    title: "Guided Practical Labs",
    summary: "Immediate hands-on application of concepts taught in each class under mentor supervision.",
    actions: ["Live coding and design sessions", "Step-by-step tool walkthroughs", "Instant troubleshooting support", "Constructive mentor feedback"],
  },
  {
    phase: "Stage 03",
    title: "Project Architecture & Planning",
    summary: "Students scope and plan their own practical projects mirroring genuine industry briefs.",
    actions: ["Project requirements scoping", "User journey and schema design", "Sprint milestone scheduling", "Trainer technical review"],
  },
  {
    phase: "Stage 04",
    title: "Build & Implementation",
    summary: "Developing full-scale projects, ad campaigns, design systems, or mobile applications.",
    actions: ["Hands-on development sprints", "Real-world feature implementation", "Bug fixing and optimization", "Best-practice adherence"],
  },
  {
    phase: "Stage 05",
    title: "Code Review & Quality Evaluation",
    summary: "Rigorous quality check by senior trainers to ensure code cleanliness and design excellence.",
    actions: ["Line-by-line code review", "Design consistency audit", "Performance and accessibility check", "Responsive screen testing"],
  },
  {
    phase: "Stage 06",
    title: "Portfolio Packaging & Deployment",
    summary: "Publishing projects live on GitHub, custom domains, or Behance with comprehensive documentation.",
    actions: ["Live cloud hosting and domain setup", "GitHub README documentation", "High-resolution case study showcase", "LinkedIn project presentation"],
  },
  {
    phase: "Stage 07",
    title: "Certification & Assessment",
    summary: "Official evaluation and awarding of the Tech Mentors Certificate of Completion.",
    actions: ["Final project defense", "Practical skill assessment", "Official certificate award", "Alumni community entry"],
  },
  {
    phase: "Stage 08",
    title: "Internship & Career Launch",
    summary: "Transitioning into an internship at Tech Mentors under a written agreement to build workplace experience.",
    actions: ["Internship onboarding under written agreement", "Real internal project assignments", "Freelance platform setup guidance", "Job interview preparation"],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Trainers",
    description:
      "Learn from industry professionals with real-world experience who actively build digital products and run campaigns in production.",
    icon: "Users",
  },
  {
    title: "Hands-On Projects",
    description:
      "Build real projects in every course to gain job-ready skills. Graduate with a tangible portfolio you can showcase to employers and clients.",
    icon: "Code2",
  },
  {
    title: "Certificate on Completion",
    description:
      "Receive an official Tech Mentors certificate upon completing your training and project milestones to showcase your verified skills.",
    icon: "CheckCircle2",
  },
  {
    title: "Career Guidance",
    description:
      "Receive mentorship, portfolio review, resume polish, and actionable guidance for securing your first job or winning freelance clients.",
    icon: "Compass",
  },
  {
    title: "Internship After Course",
    description:
      "Continue into an internship at Tech Mentors under a written agreement to work on real tasks and gain genuine workplace experience.",
    icon: "Briefcase",
  },
  {
    title: "Flexible Learning",
    description:
      "Choose on-campus classes at our Lahore campus in China Scheme, or attend interactive online live sessions that fit your daily schedule.",
    icon: "LifeBuoy",
  },
];

export const INDUSTRIES_SERVED = [
  {
    name: "Education & EdTech",
    description: "Adaptive learning platforms, student information systems, and modular curriculum management portals.",
    icon: "GraduationCap",
  },
  {
    name: "Healthcare & Clinics",
    description: "Patient appointment scheduling, clinical workflow portals, and encrypted records management.",
    icon: "Stethoscope",
  },
  {
    name: "Retail & E-commerce",
    description: "Custom B2B ordering portals, wholesale catalog management, and automated checkout pipelines.",
    icon: "ShoppingBag",
  },
  {
    name: "Logistics & Fleet",
    description: "Dispatch hubs, real-time shipment milestone tracking, and driver manifest coordination portals.",
    icon: "Truck",
  },
  {
    name: "Professional Services",
    description: "Client collaboration portals, automated document workflows, and executive analytics dashboards.",
    icon: "Briefcase",
  },
  {
    name: "Enterprise Operations",
    description: "Internal ERP tools, role-based approval systems, and automated departmental resource planning.",
    icon: "Building2",
  },
];

export const FAQ_DATA = [
  {
    question: "Do I need any prior experience?",
    answer:
      "No. Every course starts from the basics, so you can join after matric or with no technical background.",
  },
  {
    question: "Are classes on-campus or online?",
    answer:
      "Both. You can attend at our campus in China Scheme, Lahore, or join online live classes that fit your schedule.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. You receive an official Tech Mentors Certificate of Completion when you complete your course and practical projects.",
  },
  {
    question: "How does the internship work?",
    answer:
      "After completing your course, you can continue into an internship at Tech Mentors under a written agreement and work on real tasks to build genuine workplace experience.",
  },
  {
    question: "What are the fees and timings?",
    answer:
      "Fees and batch timings depend on the specific course. Submit the admission form or contact our admissions team on WhatsApp (0310 2199253) and our team will share the complete schedule and fee details.",
  },
  {
    question: "What courses are currently offered at Tech Mentors?",
    answer:
      "We offer 9 comprehensive career courses across three tracks: Development & AI (Full Stack Web Development, App Development, Agentic AI), Marketing (Digital Marketing, SEO, Shopify eCommerce, Social Media Marketing), and Creative (Graphic Designing, Video Editing).",
  },
  {
    question: "Can working professionals and university students join?",
    answer:
      "Yes. Our batches are scheduled to accommodate students (matric, intermediate, university) and working professionals seeking career transitions or upskilling.",
  },
  {
    question: "Do you provide hands-on projects during the training?",
    answer:
      "Yes. Practical training and hands-on projects are the core of our teaching methodology: Learn, Practise, Build, and Grow. Every student builds projects to form a strong portfolio.",
  },
];

export const CAREERS_DATA = {
  culture: [
    {
      title: "Practical Mentorship",
      description: "True to our name, our trainers and engineers actively mentor students and peers through direct pair-learning and code reviews.",
    },
    {
      title: "Continuous Learning",
      description: "We constantly update our curriculum with cutting-edge tools: AI agents, modern frameworks, and high-impact marketing techniques.",
    },
    {
      title: "Real-World Impact",
      description: "We equip youth, students, and professionals in Lahore and across Pakistan with skills that unlock real financial and career growth.",
    },
    {
      title: "Professional Standards",
      description: "We maintain clean engineering standards, transparent communication, and supportive collaboration in every batch.",
    },
  ],
  positions: [
    {
      id: "web-dev-instructor",
      title: "Full-Stack Web Development Trainer (React & Node.js)",
      department: "Training & Instruction",
      type: "Full-time / Part-time • On-Campus (Lahore)",
      experience: "2+ years industry experience",
      description: "Train passionate students in modern web development, conduct practical labs, and review student projects.",
      requirements: [
        "Strong proficiency in HTML, CSS, JavaScript, React, and Node.js or Laravel",
        "Clear communication and passion for teaching and mentoring students",
        "Experience building real-world web applications and using Git",
      ],
    },
    {
      id: "digital-marketing-trainer",
      title: "Digital Marketing & Performance Media Trainer",
      department: "Training & Instruction",
      type: "Part-time / Weekend • On-Campus (Lahore)",
      experience: "2+ years active media buying",
      description: "Teach practical Meta Ads, Google Ads, funnels, and analytics to aspiring digital marketers and entrepreneurs.",
      requirements: [
        "Proven track record managing successful paid ad campaigns on Meta and Google",
        "Deep understanding of sales funnels, audience targeting, and GA4 tracking",
        "Ability to break down complex marketing strategies into step-by-step lessons",
      ],
    },
    {
      id: "creative-design-mentor",
      title: "Graphic Design & Video Editing Instructor",
      department: "Creative Arts",
      type: "Part-time • On-Campus (Lahore)",
      experience: "2+ years creative agency experience",
      description: "Instruct students in Adobe Photoshop, Illustrator, Premiere Pro, and modern short-form video creation.",
      requirements: [
        "Strong portfolio in visual branding, social media creatives, or video editing",
        "Fluency with Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)",
        "Patient, student-centered teaching approach with focus on hands-on creation",
      ],
    },
  ],
};
