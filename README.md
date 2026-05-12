# Cinova Visuals — Portfolio

Premium SaaS motion design portfolio built with **Next.js 14 + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.jsx       ← SEO metadata, root HTML
│   ├── page.jsx         ← Assembles all sections
│   └── globals.css      ← Design tokens, base styles, utilities
├── components/
│   ├── Navbar.jsx       ← Navigation + mobile menu
│   ├── Hero.jsx         ← Hero section + animations
│   ├── Marquee.jsx      ← Scrolling text strip
│   ├── Projects.jsx     ← Projects grid (reads from data)
│   ├── ProjectCard.jsx  ← Individual project card
│   ├── VideoEmbed.jsx   ← Reusable video player
│   ├── About.jsx        ← About + stats + tools
│   ├── Contact.jsx      ← Social cards + book-a-call
│   ├── Footer.jsx       ← Footer + back-to-top
│   └── CursorGlow.jsx   ← Cursor ambient glow
└── data/
    ├── projects.js      ← ✅ YOUR PROJECT DATA LIVES HERE
    └── links.js         ← ✅ ALL SOCIAL / CTA LINKS LIVE HERE
```

---

## ✏️ How to Edit Content

### Change Social Links / CTA URLs
**File:** `src/data/links.js`
```js
export const links = {
  instagram: 'https://www.instagram.com/YOUR_HANDLE/',
  twitter:   'https://x.com/YOUR_HANDLE',
  bookCall:  'https://cal.com/YOUR_LINK',
}
```

### Change Hero Headline / Subtext
**File:** `src/components/Hero.jsx`
Look for the comments:
- `// ── MAIN HEADLINE — edit text here`
- `// ── SUBTEXT — edit paragraph here`

### Change the Projects
**File:** `src/data/projects.js` ← **this is the only file you need**

Each project looks like this:
```js
{
  id: 'my-project',            // unique slug
  title: 'My Project',
  category: 'SaaS Explainer',
  description: 'What this project is about...',
  videoEmbedUrl: 'https://player.vimeo.com/video/123456789',
  thumbnailUrl: '/thumbnails/my-project.jpg',
  tags: ['SaaS', 'UI Animation'],
  size: 'wide',                // 'wide' = full width, 'normal' = half
  accentColor: '#5B8EF0',
}
```

---

## 🎬 How to Swap Video Embeds

### Vimeo
1. Go to your Vimeo video → Share → Embed
2. Copy the URL, e.g. `https://player.vimeo.com/video/123456789`
3. Paste into `videoEmbedUrl` in `src/data/projects.js`

Optional autoplay params:
```
?autoplay=1&muted=1&loop=1    ← silent ambient loop
?autoplay=0                   ← no autoplay (default)
?title=0&byline=0&portrait=0  ← hide Vimeo UI
```

### YouTube
1. Copy your video ID from the URL (e.g. `dQw4w9WgXcQ`)
2. Set `videoEmbedUrl` to:
```
https://www.youtube.com/embed/dQw4w9WgXcQ
```
Optional params:
```
?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID
?controls=0   ← hide controls
?rel=0        ← no related videos
```

### Change Thumbnail
- Use any public image URL, or
- Put your image in `/public/thumbnails/project.jpg`
- Set `thumbnailUrl: '/thumbnails/project.jpg'`

---

## 🎨 How to Change Colors / Theme

**File:** `src/app/globals.css` — `:root` section
```css
:root {
  --bg-primary:    #070708;    ← main background
  --accent-blue:   #5B8EF0;   ← primary accent
  --accent-violet: #9B7AF5;   ← secondary accent
  --ink-primary:   #F2F1EE;   ← main text
  --ink-muted:     #7A7A8A;   ← secondary text
}
```
Also update `tailwind.config.js` → `theme.extend.colors` to match.

---

## 🔤 How to Change Fonts

1. Update the `@import` URL in `src/app/globals.css` to your Google Fonts choice
2. Update `--font-display` and `--font-body` CSS vars
3. Update `tailwind.config.js` → `fontFamily`

---

## ➕ How to Add a New Project

1. Open `src/data/projects.js`
2. Copy an existing object, paste it in the array
3. Fill in your details — it automatically appears in the grid

## ➖ How to Remove a Project

Delete the `{ ... }` block for that project from the array.

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts, then for production:
vercel --prod
```

Or: connect your GitHub repo to vercel.com for automatic deploys.

---

## 🔧 Customize Animations

**File:** `src/components/Hero.jsx` → `containerVariants`, `itemVariants`
**File:** `src/components/ProjectCard.jsx` → `whileHover` props
**Global easing:** search for `[0.22, 1, 0.36, 1]` — this is the cinematic ease

To make animations faster/slower: change `duration` values in `transition` objects.
To disable on mobile: wrap with `if (window.innerWidth < 768) return {}` in useEffect.

---

## 📋 Checklist Before Launch

- [ ] Replace all `videoEmbedUrl` values with real Vimeo/YouTube links
- [ ] Add real thumbnail images to `/public/thumbnails/`
- [ ] Update bio text in `About.jsx`
- [ ] Confirm `links.js` has correct Instagram / Twitter / Cal.com URLs
- [ ] Update SEO metadata in `layout.jsx`
- [ ] Add your OG image to `/public/og-image.jpg` and reference in metadata
- [ ] Test on mobile (Chrome DevTools responsive mode)
- [ ] Deploy to Vercel

---

Built with ♥ for Cinova Visuals
