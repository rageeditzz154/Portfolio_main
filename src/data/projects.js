// ─────────────────────────────────────────────────────────────
// PROJECT DATA — src/data/projects.js
//
// ✅ THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD/REMOVE PROJECTS
//
// HOW TO EMBED A VIMEO VIDEO:
//   1. Go to your Vimeo video
//   2. Click "Share" → find the embed link, e.g.:
//      https://player.vimeo.com/video/123456789
//   3. Paste that URL into the `videoEmbedUrl` field below.
//   Optional params you can append to the URL:
//   - ?autoplay=1&muted=1&loop=1&background=1  → silent ambient loop
//   - ?autoplay=0                               → no autoplay (default)
//
// HOW TO EMBED A YOUTUBE VIDEO:
//   1. Go to your YouTube video
//   2. Copy the video ID from the URL (e.g. "dQw4w9WgXcQ")
//   3. Set videoEmbedUrl to:
//      https://www.youtube.com/embed/dQw4w9WgXcQ
//   Optional params:
//   - ?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID → silent loop
//   - ?controls=0                                 → hide controls
//
// HOW TO UPDATE THUMBNAILS:
//   - `thumbnailUrl`: any public image URL or a path under /public/
//     e.g. '/thumbnails/feedbask.jpg'  (put the image in /public/thumbnails/)
//   - For Vimeo thumbnails: use i.vimeocdn.com/video/VIDEO_ID_1280x720.jpg
//   - For YouTube thumbnails: img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
//
// HOW TO ADD A NEW PROJECT:
//   - Copy one of the objects below, paste at the end of the array,
//     fill in your details. It will appear in the Projects grid.
//
// HOW TO REMOVE A PROJECT:
//   - Delete the entire { ... } block for that project.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'feedbask',
    title: 'Feedbask',
    category: 'SaaS Explainer',
    description:
      'A cinematic product explainer that turns Feedbask\'s feedback intelligence platform into a compelling visual story — built to convert curious founders into users.',
    // ── REPLACE THIS WITH YOUR VIMEO/YOUTUBE EMBED URL ────────
    // Example Vimeo:   https://player.vimeo.com/video/123456789
    // Example YouTube: https://www.youtube.com/embed/dQw4w9WgXcQ
    videoEmbedUrl: 'https://player.vimeo.com/video/76979871?autoplay=0&title=0&byline=0&portrait=0',
    // ── REPLACE WITH YOUR THUMBNAIL ───────────────────────────
    // Or use: '/thumbnails/feedbask.jpg' (image in /public/thumbnails/)
    thumbnailUrl: 'https://i.vimeocdn.com/video/452001751-b57ff30c3a40ea5e2f3e53ffe7f8e08bf8904d73124e9f2e2b1c8dc65e2e9f88_1280x720.jpg',
    tags: ['Product Explainer', 'SaaS', 'UI Animation'],
    // Layout hint for the bento grid: 'wide' = spans 2 cols, 'normal' = 1 col
    size: 'wide',
    accentColor: '#5B8EF0',
  },
  {
    id: 'loops-so',
    title: 'Loops.so',
    category: 'Concept Spec',
    description:
      'One platform. Zero email chaos. A spec explainer showing how Loops unifies SaaS email into a single clean system — from welcome flows to broadcasts.',
    // ── REPLACE WITH YOUR VIDEO EMBED URL ─────────────────────
    videoEmbedUrl: 'https://player.vimeo.com/video/148751763?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: 'https://i.vimeocdn.com/video/543982775-b3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3_1280x720.jpg',
    tags: ['Email SaaS', 'Motion System', 'Concept'],
    size: 'normal',
    accentColor: '#9B7AF5',
  },
  {
    id: 'stripe-explainer',
    title: 'Stripe Dashboard',
    category: 'UI Animation',
    description:
      'A product walkthrough that makes Stripe\'s dashboard feel alive — smooth transitions, data reveals, and premium motion hierarchy throughout.',
    // ── REPLACE WITH YOUR VIDEO EMBED URL ─────────────────────
    videoEmbedUrl: 'https://player.vimeo.com/video/248688844?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['UI Animation', 'FinTech', 'Dashboard'],
    size: 'normal',
    accentColor: '#5B8EF0',
  },
  {
    id: 'onboarding-motion',
    title: 'Onboarding System',
    category: 'Motion System',
    description:
      'A modular onboarding animation kit — reusable motion patterns for SaaS products that need to feel welcoming, fast, and human.',
    // ── REPLACE WITH YOUR VIDEO EMBED URL ─────────────────────
    videoEmbedUrl: 'https://player.vimeo.com/video/336812686?autoplay=0&title=0&byline=0&portrait=0',
    thumbnailUrl: '',
    tags: ['Motion System', 'Onboarding', 'UI Kit'],
    size: 'wide',
    accentColor: '#9B7AF5',
  },
]

// ─────────────────────────────────────────────────────────────
// STATS shown in the About section
// Edit freely — these are just display numbers.
// ─────────────────────────────────────────────────────────────
export const stats = [
  { value: '12+', label: 'Projects Delivered' },
  { value: '8+',  label: 'SaaS Clients' },
  { value: '48h', label: 'Avg. Turnaround' },
  { value: '100%', label: 'Client Satisfaction' },
]
