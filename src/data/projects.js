// ─────────────────────────────────────────────────────────────
// PROJECT DATA — src/data/projects.js
// Edit projects here. They will appear on homepage (first 3) and projects page (all).
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'gemini',
    title: 'Gemini Guided Learning',
    category: 'SaaS Explainer',
    description: 'A motion concept for Gemini exploring how AI can make learning feel more interactive and intuitive. Showcasing smooth transitions and micro-interactions that guide users through complex information.',
    videoEmbedUrl: 'https://player.vimeo.com/video/1190775920',
    thumbnailUrl: '',
    tags: ['Product Explainer', 'SaaS', 'UI Animation'],
    accentColor: '#3b82f6',
  },
  {
    id: 'loops-so',
    title: 'Loops.so',
    category: 'Concept Spec',
    description: 'One platform. Zero email chaos. A spec explainer showing how Loops unifies SaaS email into a single clean system — from welcome flows to broadcasts.',
    videoEmbedUrl: 'https://player.vimeo.com/video/148751763?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['Email SaaS', 'Motion System', 'Concept'],
    accentColor: '#3b82f6',
  },
  {
    id: 'stripe-explainer',
    title: 'Stripe Dashboard',
    category: 'UI Animation',
    description: 'A product walkthrough that makes Stripe\'s dashboard feel alive — smooth transitions, data reveals, and premium motion hierarchy throughout.',
    videoEmbedUrl: 'https://player.vimeo.com/video/248688844?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['UI Animation', 'FinTech', 'Dashboard'],
    accentColor: '#3b82f6',
  },
  {
    id: 'onboarding-motion',
    title: 'Onboarding System',
    category: 'Motion System',
    description: 'A modular onboarding animation kit — reusable motion patterns for SaaS products that need to feel welcoming, fast, and human.',
    videoEmbedUrl: 'https://player.vimeo.com/video/336812686?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['Motion System', 'Onboarding', 'UI Kit'],
    accentColor: '#3b82f6',
  },
  {
    id: 'product-launch',
    title: 'Product Launch Video',
    category: 'Launch Video',
    description: 'A cinematic product launch video designed to create excitement and showcase key features with dynamic motion graphics and storytelling.',
    videoEmbedUrl: 'https://player.vimeo.com/video/336812686?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['Product Launch', 'Cinematic', 'SaaS'],
    accentColor: '#3b82f6',
  },
  {
    id: 'micro-interactions',
    title: 'UI Micro-interactions',
    category: 'UI Animation',
    description: 'A collection of polished micro-interactions that bring interfaces to life. From button states to loading animations, every detail matters.',
    videoEmbedUrl: 'https://player.vimeo.com/video/248688844?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['Micro-interactions', 'UI/UX', 'Details'],
    accentColor: '#3b82f6',
  },
]

// Get first 3 projects for homepage
export const featuredProjects = projects.slice(0, 3)

// No stats since no client work yet - removed as requested
