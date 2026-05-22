export const siteProfile = {
  name: "Anojan Yogenthiran",
  role: "AI/ML Engineer",
  headline:
    "AI/ML Engineer focused on GenAI, agentic AI, RAG, LLM evaluation, guardrails, and production deployment.",
  email: "ayogenthiran.ai@gmail.com",
  organization: {
    name: "Vector Institute",
    url: "https://vectorinstitute.ai/",
  },
  links: {
    github: "https://github.com/ayogenthiran",
    linkedin: "https://www.linkedin.com/in/anojan-yogenthiran/",
    medium: "https://medium.com/@ayogenthiran",
    twitter: "https://x.com/ayogenth",
    resume: "/Anojan_Yogenthiran_Resume.pdf",
  },
}

export const socialLinks = [
  { href: `mailto:${siteProfile.email}`, label: "Email", type: "email" },
  { href: siteProfile.links.github, label: "GitHub", type: "github" },
  { href: siteProfile.links.linkedin, label: "LinkedIn", type: "linkedin" },
  { href: siteProfile.links.medium, label: "Medium", type: "medium" },
  { href: siteProfile.links.resume, label: "CV", type: "cv" },
] as const

export interface Project {
  id: string
  title: string
  description: string
  keyFeatures: string[]
  date: string
  technologies: string[]
  confidentialityNote?: string
  codeUrl?: string
  demoUrl?: string
  demoLabel?: string
}

export const projects: Project[] = [
  {
    id: "healthcare-scheduling-agent",
    title: "AI Physician Scheduling Agent",
    description:
      "A healthcare AI assistant that turns physician scheduling preferences into structured, validated inputs for clinical operations.",
    keyFeatures: [
      "Extracts availability, constraints, and preferences from natural-language conversations.",
      "Combines LangGraph orchestration, retrieval, validation guardrails, and human review.",
      "Designed for secure deployment into production healthcare scheduling workflows.",
    ],
    date: "Jan 2026 - Present",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Azure OpenAI",
      "RAG",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "FastAPI",
    ],
    confidentialityNote: "Code not public due to healthcare and partner confidentiality.",
    demoUrl: "https://drive.google.com/file/d/1SwkAuyqbm2zfD5U_XYb7pN2c51pkQSOe/view?usp=sharing",
    demoLabel: "View Demo",
  },
  {
    id: "arxivlens",
    title: "arXivLens - AI Research Paper Assistant",
    description:
      "An AI research assistant for faster literature discovery across arXiv papers using semantic search, reranking, and grounded answers.",
    keyFeatures: [
      "Supports natural-language questions over scientific paper collections.",
      "Uses metadata filters, embeddings, and cross-encoder reranking to improve retrieval quality.",
      "Generates grounded answers from retrieved paper context instead of unsupported summaries.",
    ],
    date: "Apr 2026",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "ChromaDB",
      "Sentence-Transformers",
      "OpenAI API",
      "Cross-Encoder Reranker",
    ],
    codeUrl: "https://github.com/ayogenthiran/arxivlens",
  },
] as const

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "C++", "Java", "MATLAB", "R"],
  },
  {
    category: "GenAI & LLMs",
    skills: [
      "RAG",
      "Graph RAG",
      "Agentic AI",
      "Model Chaining",
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "LLM Evaluation",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "Classification",
      "Hyperparameter Tuning",
    ],
  },
  {
    category: "Natural Language Processing",
    skills: [
      "Transformers",
      "Semantic Search",
      "Text Classification",
      "Named Entity Recognition",
      "Sentiment Analysis",
      "Embeddings",
    ],
  },
  {
    category: "Responsible AI",
    skills: [
      "Guardrails",
      "Human-in-the-Loop Review",
      "PII Redaction",
      "Prompt Injection Defense",
      "Model Explainability",
      "Bias Detection",
      "Fairness Metrics",
      "AI Ethics",
      "Audit Trails",
    ],
  },
  {
    category: "Cloud Platforms - AWS & Azure",
    skills: ["AWS", "Azure", "SageMaker", "Bedrock", "Lambda", "S3", "EC2", "CloudWatch", "Azure OpenAI"],
  },
  {
    category: "MLOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI/CD",
      "MLflow",
      "Optuna",
      "OpenEvals",
      "Model Deployment",
      "API Development",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Power BI",
      "Tableau",
    ],
  },
  {
    category: "Development Tools",
    skills: ["Git", "Jupyter Notebook", "VS Code", "Linux", "FastAPI", "PostgreSQL", "ChromaDB", "Vector Databases"],
  },
] as const

export interface ExperienceItem {
  title: string
  company: string
  companyUrl: string
  period: string
  location: string
  logo: string
  logoAlt: string
  logoContainerClassName?: string
  logoClassName?: string
  bullets: string[]
}

export const experiences: ExperienceItem[] = [
  {
    title: "Machine Learning Associate",
    company: "Vector Institute",
    companyUrl: "https://vectorinstitute.ai/",
    period: "Jan 2026 - Present",
    location: "Toronto, Ontario",
    logo: "/images/resume/Vector_Institute.png",
    logoAlt: "Vector Institute logo",
    bullets: [
      "Building a production healthcare scheduling assistant with Petal Solutions Inc. that converts physician availability and preferences into validated scheduling inputs.",
      "Designed ReAct-style agent workflows with LangGraph, LangChain, and Azure OpenAI for multi-turn clinical scheduling conversations.",
      "Added validation, guardrails, and human review loops to improve reliability before downstream scheduling use.",
    ],
  },
  {
    title: "Applied AI Developer",
    company: "Transpots",
    companyUrl: "https://transpots.com/",
    period: "May 2025 - Dec 2025",
    location: "Toronto, Ontario",
    logo: "/images/resume/transpots.png",
    logoAlt: "Transpots logo",
    logoContainerClassName: "bg-white dark:bg-white !p-0",
    logoClassName: "h-20 w-20 -translate-y-1 object-contain",
    bullets: [
      "Built agentic document workflows for invoice factoring to extract, validate, and process financial documents.",
      "Designed LangChain and LangGraph pipelines with GPT-4o, rule-based validation, and human-in-the-loop checks.",
      "Deployed FastAPI microservices for production extraction, validation, and approval workflows.",
    ],
  },
  {
    title: "Data Science and Engineering Intern",
    company: "Kaidu.ai",
    companyUrl: "https://www.kaidu.ai/",
    period: "Jan 2025 - Apr 2025",
    location: "Toronto, Ontario",
    logo: "/images/resume/kaidu.png",
    logoAlt: "Kaidu.ai logo",
    bullets: [
      "Built an IoT motion classification system using Bluetooth RSSI data to detect stationary and mobile activity.",
      "Improved detection reliability with signal preprocessing techniques, including Dynamic Fourier smoothing.",
      "Used MLflow and Optuna to track experiments, tune models, and support production-ready iteration.",
    ],
  },
  {
    title: "Research Associate",
    company: "Intelligence Data Science Lab, Western University",
    companyUrl: "https://a-narayan.github.io/",
    period: "Apr 2024 - Dec 2024",
    location: "London, Ontario",
    logo: "/images/resume/uwo.png",
    logoAlt: "Western University logo",
    bullets: [
      "Conducted AI-driven computational biology research for genomic sequence analysis and aptamer discovery.",
      "Fine-tuned Llama 3.2 and Mistral 7B models for miRNA-target prediction and domain-specific biological sequence tasks.",
      "Built scalable HT-SELEX data pipelines for preprocessing, feature extraction, and model evaluation.",
    ],
  },
  {
    title: "Associate AI/ML Engineer",
    company: "HeHealth",
    companyUrl: "https://hehealth.ai/",
    period: "Oct 2022 - Oct 2023",
    location: "Singapore",
    logo: "/images/resume/hehealth.png",
    logoAlt: "HeHealth logo",
    logoContainerClassName: "bg-white dark:bg-white !p-0",
    logoClassName: "h-20 w-20 -translate-y-1 object-contain",
    bullets: [
      "Developed ResNet and VGG16 medical imaging models for clinical image classification.",
      "Improved model robustness with GAN-based augmentation techniques, including SinGAN and ConSinGAN.",
      "Integrated Grad-CAM explainability into clinical dashboards to support model interpretation.",
    ],
  },
  {
    title: "Associate ML Engineer",
    company: "SenzMate AIoT Intelligence",
    companyUrl: "https://www.senzmate.com/",
    period: "Dec 2021 - Sep 2022",
    location: "Colombo, Sri Lanka",
    logo: "/images/resume/senzmate.png",
    logoAlt: "SenzMate AIoT Intelligence logo",
    bullets: [
      "Built ML pipelines for IoT anomaly detection and predictive analytics.",
      "Used PySpark, Dask, TensorFlow, and LSTMs to process large-scale time-series sensor data.",
      "Supported deployment of real-time predictive models for industrial IoT use cases.",
    ],
  },
] as const
