# Cinova Visuals Portfolio

A modern portfolio website for showcasing motion design work including SaaS explainers, product launch videos, and UI animations.

Built with Next.js, Tailwind CSS, and Framer Motion.

---

## Adding New Projects (Beginner Guide)

Adding a new project is simple! Follow these steps:

### Step 1: Prepare Your Thumbnail Image

1. Create a thumbnail image for your project
   - **Recommended size:** 1920x1080 pixels (16:9 ratio)
   - **Formats:** `.jpg`, `.png`, or `.webp`
2. Name it something simple like `my-project.jpg` (no spaces, use dashes)
3. Place the image in the **`public/thumbnails/`** folder

### Step 2: Add Your Project Details

1. Open the file: **`src/data/projects.js`**
2. Scroll down to find the comment that says `ADD YOUR NEW PROJECTS BELOW`
3. Copy this template and paste it there:

```javascript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  category: 'SaaS Explainer',
  description: 'Describe your project in 1-2 sentences.',
  videoEmbedUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
  thumbnailUrl: '/thumbnails/your-thumbnail.jpg',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
},
```

4. Fill in your details:

| Field | What to Put | Example |
|-------|-------------|---------|
| `id` | Unique identifier (lowercase, use dashes, no spaces) | `'my-cool-project'` |
| `title` | The name of your project | `'Acme App Explainer'` |
| `category` | One of the categories listed below | `'SaaS Explainer'` |
| `description` | 1-2 sentences about the project | `'An explainer video for...'` |
| `videoEmbedUrl` | Your Vimeo embed URL (see below) | `'https://player.vimeo.com/video/123456789'` |
| `thumbnailUrl` | Path to your thumbnail image | `'/thumbnails/acme-explainer.jpg'` |
| `tags` | 2-3 short descriptive tags | `['SaaS', 'Explainer', 'Tech']` |

5. **Save the file** - Your project will appear automatically!

### Available Categories

Use one of these exactly as written:
- `'SaaS Explainer'`
- `'UI Animation'`
- `'Product Launch'`
- `'Concept Spec'`
- `'Motion System'`

---

## How to Get Your Vimeo Embed URL

1. Go to your video on Vimeo
2. Click the **Share** button
3. Click **Embed**
4. Look for the URL that starts with `https://player.vimeo.com/video/`
5. Copy just that URL part

**Example:** `https://player.vimeo.com/video/123456789`

### Using YouTube Instead

If you prefer YouTube:
1. Go to your YouTube video
2. Click **Share** > **Embed**
3. Copy the URL from the embed code (starts with `https://www.youtube.com/embed/`)

**Example:** `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

## Complete Example

Here's a full example of adding a new project:

**1. Save your thumbnail as:** `public/thumbnails/acme-explainer.jpg`

**2. Add this to `src/data/projects.js`:**

```javascript
{
  id: 'acme-explainer',
  title: 'Acme SaaS Explainer',
  category: 'SaaS Explainer',
  description: 'A 60-second explainer showing how Acme simplifies project management for remote teams.',
  videoEmbedUrl: 'https://player.vimeo.com/video/987654321',
  thumbnailUrl: '/thumbnails/acme-explainer.jpg',
  tags: ['SaaS', 'Project Management', 'Remote Work'],
},
```

**3. Save the file** - Done! Your project now appears on the website.

---

## Project Display Order

- **Homepage:** Shows the first 3 projects in your list
- **Projects Page:** Shows all projects with category filtering

To change which projects appear on the homepage, reorder them in `projects.js`. The first 3 will be featured.

---

## Removing a Project

1. Open `src/data/projects.js`
2. Find the project you want to remove
3. Delete the entire block from `{` to `},`
4. Optionally delete the thumbnail from `public/thumbnails/`
5. Save the file

---

## Customizing Your Portfolio

### Changing Social Links

**File:** `src/data/links.js`

```javascript
export const links = {
  instagram: 'https://www.instagram.com/YOUR_HANDLE/',
  twitter: 'https://x.com/YOUR_HANDLE',
  bookCall: 'https://cal.com/YOUR_LINK',
}
```

### Changing Colors

**File:** `src/app/globals.css`

Look for the `:root` section to change colors:
```css
--accent-blue: #3b82f6;    /* Main accent color */
--bg-primary: #0a0a0a;     /* Background color */
```

### Changing Your Logo

Replace the file at `public/images/cinova-logo.png` with your own logo.

---

## File Structure

```
public/
  thumbnails/           <- Your project thumbnails go here
  images/
    cinova-logo.png     <- Your logo

src/
  data/
    projects.js         <- Edit this to add/remove projects
    links.js            <- Your social media links
  
  app/
    page.jsx            <- Homepage
    projects/
      page.jsx          <- All projects page
      [id]/page.jsx     <- Individual project detail page
  
  components/           <- UI components
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see your site.

---

## Deploying to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

Your site will be live with automatic updates whenever you push changes!

---

## Troubleshooting

**Thumbnail not showing?**
- Make sure the image is in `public/thumbnails/`
- Check that the path in `thumbnailUrl` matches exactly (case-sensitive)
- Use forward slashes: `/thumbnails/image.jpg`

**Video not playing?**
- Verify the Vimeo/YouTube URL is the embed format
- Vimeo: `https://player.vimeo.com/video/...`
- YouTube: `https://www.youtube.com/embed/...`

**Project not appearing?**
- Check for missing commas between projects
- Make sure the `id` is unique (no duplicates)
- Save the file after making changes

---

## Need More Help?

If you get stuck, check:
1. The browser console for errors (Right-click > Inspect > Console)
2. That all commas and brackets are in the right places
3. That file paths match exactly (they're case-sensitive)

---

Built with care for Cinova Visuals
