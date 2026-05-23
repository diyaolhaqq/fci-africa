export type IconName =
  | "atom"
  | "bot"
  | "brain"
  | "building"
  | "climate"
  | "code"
  | "cpu"
  | "database"
  | "dna"
  | "file"
  | "globe"
  | "health"
  | "language"
  | "leaf"
  | "network"
  | "orbit"
  | "shield"
  | "spark"
  | "telescope"
  | "users"
  | "wave";

type ResearchTrack = {
  title: string;
  slug: string;
  icon: IconName;
  summary: string;
  focus: string[];
};

type PartnerGroup = {
  title: string;
  icon: IconName;
  names: string[];
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Grant Programs", href: "/grant-programs" },
  { label: "Research Tracks", href: "/research-tracks" },
  { label: "Fellows", href: "/fellows" },
  { label: "Outputs", href: "/research-outputs" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  {
    label: "Total Compute Credits Awarded",
    value: 500000,
    prefix: "$",
    suffix: "+",
    note: "Launch target",
  },
  {
    label: "Researchers Supported",
    value: 250,
    suffix: "+",
    note: "First program cycle",
  },
  {
    label: "Universities Represented",
    value: 40,
    suffix: "+",
    note: "Pan-African network",
  },
  {
    label: "Research Outputs Published",
    value: 80,
    suffix: "+",
    note: "Papers, reports, demos",
  },
  {
    label: "Open-source Projects Released",
    value: 30,
    suffix: "+",
    note: "Public technical work",
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    title: "Agriculture & Food Systems",
    slug: "agriculture-food-systems",
    icon: "leaf",
    summary:
      "AI systems for crop intelligence, pest detection, soil insight, irrigation, and resilient food production.",
    focus: ["crop sensing", "yield forecasting", "field robotics"],
  },
  {
    title: "Robotics & Autonomous Systems",
    slug: "robotics-autonomous-systems",
    icon: "bot",
    summary:
      "Applied autonomy for rovers, drones, lab automation, manufacturing, and field-deployed intelligent machines.",
    focus: ["navigation", "perception", "edge inference"],
  },
  {
    title: "Climate & Infrastructure",
    slug: "climate-infrastructure",
    icon: "climate",
    summary:
      "Scientific models for weather risk, grid intelligence, flood prediction, mobility, and infrastructure planning.",
    focus: ["forecasting", "remote sensing", "urban systems"],
  },
  {
    title: "Health & Bioinformatics",
    slug: "health-bioinformatics",
    icon: "dna",
    summary:
      "Compute-backed discovery in diagnostics, molecular biology, public health, epidemiology, and medical AI.",
    focus: ["diagnostics", "protein models", "epidemiology"],
  },
  {
    title: "African Language AI",
    slug: "african-language-ai",
    icon: "language",
    summary:
      "Language models, datasets, speech systems, and scientific tools for underrepresented African languages.",
    focus: ["speech", "translation", "domain datasets"],
  },
  {
    title: "Scientific Computing",
    slug: "scientific-computing",
    icon: "cpu",
    summary:
      "GPU-enabled simulation, engineering tools, agentic research workflows, and computational discovery systems.",
    focus: ["simulation", "LLM tools", "HPC workflows"],
  },
];

export const processSteps = [
  "Apply",
  "Technical Review",
  "Selection",
  "Funding & Compute Access",
  "Research Development",
  "Public Showcase",
];

export const featuredResearch = [
  {
    title: "Autonomous Crop Rover",
    track: "Robotics + Agriculture",
    summary:
      "A field robot that combines local vision models, navigation, and agronomic sensing for early pest and crop stress detection.",
    signal: "edge AI / sensing / autonomy",
  },
  {
    title: "Twi Language Scientific LLM",
    track: "African Language AI",
    summary:
      "A domain-tuned language model that helps students translate, reason, and learn scientific concepts in Twi and English.",
    signal: "LLMs / language data / education",
  },
  {
    title: "AI Malaria Detection Assistant",
    track: "Health + Bioinformatics",
    summary:
      "A microscopy assistant for screening blood smear images and accelerating early-stage clinical research workflows.",
    signal: "medical vision / evaluation / safety",
  },
  {
    title: "Climate Prediction System",
    track: "Climate + Infrastructure",
    summary:
      "A regional forecasting pipeline that fuses satellite data, weather station feeds, and neural sequence models.",
    signal: "forecasting / geospatial AI / resilience",
  },
  {
    title: "Precision Irrigation Intelligence",
    track: "Agriculture + Infrastructure",
    summary:
      "A compute-backed decision engine for water allocation, soil moisture prediction, and smallholder farm planning.",
    signal: "optimization / sensors / food systems",
  },
];

export const principles = [
  {
    title: "Infrastructure before spectacle",
    body: "Serious scientific work requires reliable credits, GPUs, model access, data tools, and review pathways. FCI Africa focuses on the infrastructure that lets ambitious researchers build.",
  },
  {
    title: "Open science where possible",
    body: "Outputs should become reusable knowledge: papers, datasets, code, reproducible notebooks, prototypes, and technical reports that raise the floor for the next cohort.",
  },
  {
    title: "African sovereignty in frontier systems",
    body: "Africa needs builders who understand local scientific priorities and can also operate at the frontier of global AI, robotics, compute, and engineering.",
  },
  {
    title: "Ethics as an engineering discipline",
    body: "Safety, privacy, evaluation, biological risk, model limitations, and deployment context are reviewed as part of technical merit, not as a separate public relations layer.",
  },
];

export const grantTiers = [
  {
    name: "Explorer Grant",
    amount: "$1,000",
    audience: "Early concept, dataset, prototype, or first technical experiment.",
    includes: ["AI credits", "technical review", "proposal refinement"],
  },
  {
    name: "Builder Grant",
    amount: "$2,500",
    audience: "Working prototype, field validation, model fine-tuning, or applied research sprint.",
    includes: ["compute credits", "GPU access", "mentor feedback"],
  },
  {
    name: "Research Grant",
    amount: "$5,000",
    audience: "University research, lab-scale evaluation, publishable systems, or open-source tooling.",
    includes: ["GPU resources", "research visibility", "safety review"],
  },
  {
    name: "Frontier Grant",
    amount: "$10,000",
    audience: "High-potential scientific systems with strong technical plans and public output potential.",
    includes: ["priority compute", "partner introductions", "showcase support"],
  },
];

export const fellows = [
  {
    name: "Akosua Mensah",
    university: "University of Ghana",
    area: "Medical AI",
    project: "Low-resource malaria microscopy assistant for clinical research screening.",
    outputs: "preprint, evaluation notebook, model card",
    initials: "AM",
  },
  {
    name: "Kojo Ampofo",
    university: "Kwame Nkrumah University of Science and Technology",
    area: "Field Robotics",
    project: "Autonomous crop rover perception stack for early maize stress detection.",
    outputs: "robotics demo, edge dataset, technical report",
    initials: "KA",
  },
  {
    name: "Amina Yakubu",
    university: "University for Development Studies",
    area: "Climate Systems",
    project: "Regional flood-risk forecasting using satellite data and neural sequence models.",
    outputs: "open pipeline, geospatial dashboard, paper draft",
    initials: "AY",
  },
  {
    name: "Yaw Boateng",
    university: "Ashesi University",
    area: "African Language AI",
    project: "Twi-English scientific terminology model for secondary and tertiary education.",
    outputs: "dataset release, benchmark suite, demo app",
    initials: "YB",
  },
];

export const outputs = [
  {
    type: "Paper",
    title: "Compute-efficient crop stress classification for low-connectivity farms",
    authors: "FCI Agriculture Track Working Group",
    status: "Under review",
    year: "2026",
  },
  {
    type: "Open-source",
    title: "AfriSciBench: Evaluation tasks for African scientific language AI",
    authors: "Language AI Fellows",
    status: "Public beta",
    year: "2026",
  },
  {
    type: "Dataset",
    title: "Northern Ghana field imagery and soil-context metadata release",
    authors: "Agriculture Systems Cohort",
    status: "Documentation phase",
    year: "2026",
  },
  {
    type: "Prototype",
    title: "Edge rover perception module for smallholder field inspection",
    authors: "Robotics Track",
    status: "Demo build",
    year: "2026",
  },
  {
    type: "Technical report",
    title: "Safety review patterns for student-led biomedical AI systems",
    authors: "FCI Safety Review Panel",
    status: "Draft",
    year: "2026",
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    title: "Universities",
    icon: "building",
    names: ["University of Ghana", "KNUST", "Ashesi University", "University for Development Studies"],
  },
  {
    title: "Labs",
    icon: "atom",
    names: ["AI systems labs", "robotics groups", "bioinformatics units", "climate research teams"],
  },
  {
    title: "Compute Providers",
    icon: "cpu",
    names: ["GPU cloud sponsors", "AI API providers", "research compute centers", "data platform partners"],
  },
  {
    title: "Research Organizations",
    icon: "network",
    names: ["open science networks", "engineering societies", "public health institutions", "agricultural agencies"],
  },
  {
    title: "Sponsors",
    icon: "spark",
    names: ["technology foundations", "frontier labs", "philanthropic funders", "corporate research programs"],
  },
];

export const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Students, researchers, engineers, scientists, and technical builders working on scientific or engineering problems connected to Ghana or Africa can apply.",
  },
  {
    question: "Do I need to be in university?",
    answer:
      "No. University affiliation helps with supervision and infrastructure, but independent researchers and engineering teams may apply if the proposal is technically credible.",
  },
  {
    question: "What counts as scientific research?",
    answer:
      "Projects should advance knowledge or technical capability in areas such as AI research, robotics, agriculture, medicine, climate, infrastructure, language AI, bioinformatics, or scientific tooling.",
  },
  {
    question: "Are grants cash or compute credits?",
    answer:
      "Most support is issued as AI credits, compute access, GPU resources, model access, cloud infrastructure, and technical support. Some programs may include limited direct project support.",
  },
  {
    question: "Can teams apply?",
    answer:
      "Yes. Teams are encouraged when the project needs a mix of research, engineering, data, domain, and deployment skills.",
  },
  {
    question: "What technologies are supported?",
    answer:
      "LLMs, computer vision, robotics, simulation, GPU workloads, agentic research tools, scientific Python, geospatial systems, bioinformatics workflows, and open-source engineering stacks.",
  },
  {
    question: "How are projects evaluated?",
    answer:
      "Review focuses on scientific merit, technical feasibility, compute justification, expected public output, ethical risk, and the applicant's ability to execute.",
  },
  {
    question: "Is open-source required?",
    answer:
      "Open-source is strongly encouraged, but some health, safety, privacy, or partner-sensitive work may require controlled release, model cards, reports, or reproducibility artifacts instead.",
  },
];
