// ─────────────────────────────────────────────────────────────
// PROJECT DATA — src/data/projects.js
// ─────────────────────────────────────────────────────────────
// 
// HOW TO ADD A NEW PROJECT:
// 1. Copy one of the project objects below
// 2. Paste it at the end (before the closing bracket)
// 3. Update all the fields with your project info
// 4. Add your thumbnail image to: public/thumbnails/
// 5. Save this file - your project will appear automatically!
//
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    // UNIQUE ID - Use lowercase, no spaces (use dashes instead)
    id: 'gemini',
    
    // PROJECT TITLE - What you want to call this project
    title: 'Gemini',
    
    // CATEGORY - One of: 'SaaS Explainer', 'UI Animation', 'Product Launch', 'Concept Spec', 'Motion System'
    category: 'SaaS Explainer',
    
    // DESCRIPTION - 1-2 sentences about the project
    description: 'A motion concept for Gemini exploring how AI can make learning feel more interactive and intuitive. Showcasing smooth transitions and micro-interactions that guide users through complex information.',
    
    // VIDEO URL - Your Vimeo embed URL (get this from Vimeo share > embed)
    videoEmbedUrl: 'https://player.vimeo.com/video/1190775920',
    
    // THUMBNAIL - Path to your thumbnail image in public/thumbnails/
    // Example: '/thumbnails/my-project.jpg' or '/thumbnails/my-project.png'
    thumbnailUrl: '/thumbnails/default-1.jpg',
    
    // TAGS - 2-3 short tags describing the work
    tags: ['Product Explainer', 'SaaS', 'UI Animation'],
  },
  {
    id: 'feedbask',
    title: 'Feedbask',
    category: 'Concept Spec',
    description: 'A conceptual spec video showcasing feedback collection workflows with clean motion design and intuitive user flows.',
    videoEmbedUrl: 'https://player.vimeo.com/video/1191850183',
    thumbnailUrl: '/thumbnails/default-2.jpg',
    tags: ['Product Explainer', 'SaaS', 'UI Animation'],
  },
  {
    id: 'uber',
    title: 'Uber',
    category: 'SaaS Explainer',
    description: 'A sleek motion design piece exploring ride-sharing interfaces with smooth transitions and engaging micro-interactions.',
    videoEmbedUrl: 'https://player.vimeo.com/video/1191852242',
    thumbnailUrl: '/thumbnails/default-3.jpg',
    tags: ['UI Animation'],
  },
  {
    id: 'onboarding-motion',
    title: 'Onboarding System',
    category: 'Motion System',
    description: 'A modular onboarding animation kit — reusable motion patterns for SaaS products that need to feel welcoming, fast, and human.',
    videoEmbedUrl: 'https://player.vimeo.com/video/336812686?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '/thumbnails/default-4.jpg',
    tags: ['Motion System', 'Onboarding', 'UI Kit'],
  },
  {
    id: 'product-launch',
    title: 'Product Launch Video',
    category: 'Product Launch',
    description: 'A cinematic product launch video designed to create excitement and showcase key features with dynamic motion graphics and storytelling.',
    videoEmbedUrl: 'https://player.vimeo.com/video/336812686?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '/thumbnails/default-5.jpg',
    tags: ['Product Launch', 'Cinematic', 'SaaS'],
  },
  {
    id: 'micro-interactions',
    title: 'UI Micro-interactions',
    category: 'UI Animation',
    description: 'A collection of polished micro-interactions that bring interfaces to life. From button states to loading animations, every detail matters.',
    videoEmbedUrl: 'https://player.vimeo.com/video/248688844?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '/thumbnails/default-6.jpg',
    tags: ['Micro-interactions', 'UI/UX', 'Details'],
  },

  // ─────────────────────────────────────────────────────────────
  // ADD YOUR NEW PROJECTS BELOW (copy the template):
  // ─────────────────────────────────────────────────────────────
  //
  // {
  //   id: 'your-project-id',
  //   title: 'Your Project Title',
  //   category: 'SaaS Explainer',
  //   description: 'Describe your project in 1-2 sentences.',
  //   videoEmbedUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
  //   thumbnailUrl: '/thumbnails/your-thumbnail.jpg',
  //   tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  // },
  //
  // ─────────────────────────────────────────────────────────────
]

// Get first 3 projects for homepage featured section
export const featuredProjects = projects.slice(0, 3)

// Available categories for filtering (if you add filtering later)
export const categories = [
  'All',
  'SaaS Explainer',
  'UI Animation',
  'Product Launch',
  'Concept Spec',
  'Motion System',
]
