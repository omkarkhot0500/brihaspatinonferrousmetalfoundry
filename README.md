# Brihaspati Non-Ferrous Metal Foundry - Next.js Version

## 📌 Project Overview

This is a modern Next.js conversion of the Brihaspati Non-Ferrous Metal Foundry website. The project showcases a comprehensive metal casting and foundry business with detailed product information, certifications, company details, and contact capabilities

### Tech Stack
- **Framework**: Next.js 15 (Latest Stable)
- **UI Library**: React 18.
- **Styling**: Tailwind CSS.
- **Routing**: Next.js App Router
- **Components**: Functional components with hooks
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Email**: EmailJS for contact form submissions.
- **Notifications**: React Hot Toast
- **Deployment**: Optimized for Vercel (and other hosting platforms)

---

## 📋 Pages Documentation

### Core Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Homepage** | `/` | Hero slider, company profile, services overview, features, and content-rich sections about casting capabilities |
| **About** | `/about` | Company history, mission, vision, facility information, and core values |
| **Contact** | `/contact` | Contact form, company contact details, address, phone, email, and embedded Google Maps |
| **Certification** | `/certification` | Certifications gallery with PDF viewers (ISO, MSME, ZED Bronze, etc.) with download functionality |
| **Application** | `/application` | Grid display of product applications across various industries |
| **Career** | `/career` | Career opportunities page (currently placeholder) |

### Casting Materials Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Stainless Steel Casting** | `/ferrous/steel` | Stainless steel casting capabilities, material expertise, and process information |
| **Nickel Alloy Casting** | `/ferrous/nicle` | Nickel alloy casting solutions and applications |
| **Copper Alloy Casting** | `/non-ferrous/copper` | Copper alloy casting products and benefits |
| **Bronze Casting** | `/non-ferrous/bronze` | Bronze casting specifications and capabilities |

### Product Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Valve Casting** | `/products/valve` | Valve casting products and specifications |
| **General Engineering Casting** | `/products/generalengineeringcasting` | General engineering casting solutions |
| **Centrifugal Casting** | `/products/CentrifugalCasting` | Centrifugal casting technology and benefits |
| **Gravity Die Casting** | `/products/GravityDieCasting` | Gravity die casting process and applications |
| **Shell Mould Casting** | `/products/ShellMouldCasting` | Shell mould casting specifications |
| **CO₂ Mould Casting** | `/products/CO2MouldCasting` | CO₂ sand casting process and capabilities |
| **No-Bake Mould Casting** | `/products/NoBakeMouldCasting` | No-bake mould casting technology |

### Other Pages

- **404 Page** - Custom not found page with link back to homepage

---

## 🚀 How to Run the Project

### Prerequisites
- **Node.js**: v18.17 or later (v20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun** as package manager

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 2: Development Mode
Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Step 3: Build for Production
Create an optimized production build:
```bash
npm run build
```

### Step 4: Start Production Server
After building, start the production server:
```bash
npm start
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

---

## 🌐 Environment Variables

**Current Setup**: No environment variables are required for basic functionality.

### For Email Service (Contact Form)
The contact form uses EmailJS. The credentials are currently embedded in the `components/Form.jsx` file:
- **Service ID**: `service_846meoc`
- **Template ID**: `template_vjj22lq`
- **Public Key**: `623nyBirJFx7iuR6Q`

**Important**: For production, move these credentials to environment variables:

```bash
# Create .env.local file
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_846meoc
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_vjj22lq
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=623nyBirJFx7iuR6Q
```

Then update `components/Form.jsx` to use:
```javascript
emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  { ... },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
```

---

## 🎨 SEO Customization Guide

### Where to Change SEO Tags

#### Homepage (Primary Landing Page)
- **File**: `app/page.jsx`
- **Metadata Location**: Top of the file
- **Customizable Fields**:
  - `title` - Browser tab title and search result title
  - `description` - Meta description shown in search results
  - `keywords` - Meta keywords for search engines
  - `openGraph` - Social media sharing preview

#### Page-Specific SEO
Each page has its own metadata:
- **File**: `app/[route]/page.jsx`
- **Metadata Export**: `export const metadata = { ... }`
- **Customizable Fields**:
  - `title` - Page title
  - `description` - Page meta description

#### Example: Updating Homepage Title
```javascript
// In app/page.jsx
export const metadata = {
  title: "Your New Title | Company Name",
  description: "Your new meta description here...",
  // ... other fields
};
```

#### Example: Updating Product Page Title
```javascript
// In app/products/valve/page.jsx
export const metadata = {
  title: "Your Product Title | Company Name",
  description: "Your product description...",
};
```

### Key SEO Fields by Page

| Field | Purpose | Example |
|-------|---------|---------|
| `title` | Appears in browser tab and search results (50-60 chars optimal) | "Stainless Steel Casting \| Company Name" |
| `description` | Summary shown under URL in search results (150-160 chars optimal) | "High-quality stainless steel castings for industrial applications..." |
| `keywords` | Comma-separated terms for search relevance | "casting, metal, foundry, steel" |
| `og:title` | Title for social media sharing | Same as title or custom |
| `og:description` | Description for social media sharing | Same as description or custom |
| `og:image` | Image shown when sharing on social media | Public image URL |
| `canonical` | Preferred URL version (prevents duplicate content) | Full URL of the page |

### Important SEO Notes
- ✅ All content remains unchanged - only technical SEO improvements
- ✅ Meta tags automatically added to page `<head>`
- ✅ Structured data (JSON-LD) can be added if needed
- ✅ Open Graph tags enable proper social media previews
- ⚠️ Do NOT edit page content, headings, or text
- ⚠️ Only modify metadata in `export const metadata` sections

---

## 🏠 Hosting Guide

### Vercel (Primary Recommendation)

#### Why Vercel?
- Built-in support for Next.js
- Automatic deployments on git push
- Built-in SSL certificates
- Global CDN for fast content delivery
- Free tier available
- Zero configuration needed

#### Step-by-Step Deployment

##### 1. Prerequisites
- GitHub account
- Git repository initialized
- Code pushed to GitHub

##### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Import Project"
5. Paste your GitHub repository URL or select from list
6. Click "Import"

##### 3. Configure Project
1. **Project Name**: Choose a name (auto-filled from repo)
2. **Framework Preset**: Select "Next.js" (auto-detected)
3. **Root Directory**: Leave default (.)
4. **Build Command**: Leave as `npm run build` (default)
5. **Output Directory**: Leave as `.next` (default)
6. **Environment Variables**: Add if needed (EmailJS credentials)

##### 4. Deploy
1. Click "Deploy"
2. Vercel builds and deploys automatically
3. Get a live URL (e.g., `project-name.vercel.app`)
4. Configure custom domain (optional)

##### 5. Set Custom Domain
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `www.brihaspatialloys.in`)
3. Follow DNS instructions provided
4. Update DNS records with your domain registrar
5. Verify domain activation (usually within 24-48 hours)

##### 6. Configure Environment Variables
1. Go to "Settings" → "Environment Variables"
2. Add variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_846meoc
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_vjj22lq
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 623nyBirJFx7iuR6Q
   ```
3. Click "Save"
4. Redeploy to apply changes

#### Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions anytime
- Analytics and monitoring included

### Alternative: Netlify

#### Step-by-Step Deployment

##### 1. Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Authorize and select your repository

##### 2. Build Settings
1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. Click "Deploy"

##### 3. Post-Deployment
1. Get a live URL
2. Go to "Site settings" → "Domain management"
3. Add custom domain
4. Update DNS records

##### 4. Environment Variables
1. Go to "Site settings" → "Build & deploy" → "Environment"
2. Add your EmailJS credentials
3. Redeploy

### Alternative: Self-Hosted (AWS, DigitalOcean, etc.)

#### Option A: Docker Container
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Option B: Standalone Build
1. Run `npm run build`
2. Copy entire project to server
3. Install dependencies: `npm ci --production`
4. Start with: `npm start`
5. Use PM2 or systemd for process management

#### Option C: Using a Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## ✅ Production Checklist

Before deploying to production, verify:

- [ ] All content is accurate and up-to-date
- [ ] Contact form sends emails correctly
- [ ] Images load properly (check public folder)
- [ ] All links work (internal and external)
- [ ] SEO metadata is customized
- [ ] Environment variables are configured
- [ ] SSL certificate is active (HTTPS)
- [ ] Google Analytics configured (if needed)
- [ ] Google Search Console verified
- [ ] Sitemap generated
- [ ] Robots.txt is properly configured
- [ ] 404 page is functional
- [ ] Mobile responsiveness verified
- [ ] Performance is optimized
- [ ] Backup of all data created

---

## 📁 Project Structure

```
brihaspati-foundry/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout (Navbar, Footer)
│   ├── page.jsx                 # Homepage
│   ├── not-found.jsx            # 404 page
│   ├── about/
│   │   └── page.jsx             # About page
│   ├── career/
│   │   └── page.jsx             # Career page
│   ├── contact/
│   │   └── page.jsx             # Contact page
│   ├── application/
│   │   └── page.jsx             # Applications page
│   ├── certification/
│   │   └── page.jsx             # Certifications page
│   ├── ferrous/
│   │   ├── steel/
│   │   │   └── page.jsx         # Stainless Steel casting
│   │   └── nicle/
│   │       └── page.jsx         # Nickel Alloy casting
│   ├── non-ferrous/
│   │   ├── copper/
│   │   │   └── page.jsx         # Copper Alloy casting
│   │   └── bronze/
│   │       └── page.jsx         # Bronze casting
│   └── products/
│       ├── valve/
│       │   └── page.jsx         # Valve Casting
│       ├── generalengineeringcasting/
│       │   └── page.jsx         # General Engineering Casting
│       ├── CentrifugalCasting/
│       │   └── page.jsx         # Centrifugal Casting
│       ├── GravityDieCasting/
│       │   └── page.jsx         # Gravity Die Casting
│       ├── ShellMouldCasting/
│       │   └── page.jsx         # Shell Mould Casting
│       ├── CO2MouldCasting/
│       │   └── page.jsx         # CO₂ Mould Casting
│       └── NoBakeMouldCasting/
│           └── page.jsx         # No-Bake Mould Casting
│
├── components/                  # Reusable Components
│   ├── Navbar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer component
│   └── Form.jsx                # Contact form
│
├── public/                      # Static assets
│   ├── images/                 # Image files
│   │   ├── logo.png
│   │   ├── company-building.jpg
│   │   ├── 1.jpg               # Hero slider images
│   │   ├── 2.jpg
│   │   └── ... (other images)
│   ├── pdfs/                   # PDF certifications
│   │   ├── Bronze.pdf
│   │   ├── ISO_Certificate.pdf
│   │   └── ... (other PDFs)
│   └── icon.png                # Favicon
│
├── styles/                     # Global styles
│   └── globals.css             # Tailwind imports + global styles
│
├── package.json                # Dependencies and scripts
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── jsconfig.json               # Path aliases
└── README.md                   # This file
```

---

## 🔧 Configuration Files

### next.config.js
Configures Next.js behavior:
- Image optimization settings
- Strict mode enabled
- Build optimization

### tailwind.config.js
Tailwind CSS settings:
- Content paths for PurgeCSS
- Theme customization
- Plugin configuration

### jsconfig.json
Path aliases for cleaner imports:
- `@/*` resolves to root directory
- Enables `@/components`, `@/styles`, etc.

### postcss.config.js
PostCSS processing for Tailwind and autoprefixer

---

## ⚠️ Important Notes

### What NOT to Change
- ❌ Do not modify page content, text, or headings
- ❌ Do not change image paths or images
- ❌ Do not alter page structure or layout
- ❌ Do not remove any pages or routes
- ❌ Do not change the number of pages
- ❌ Do not modify the site's overall design
- ❌ Do not alter navigation structure

### What CAN Be Changed Safely
- ✅ SEO metadata (titles, descriptions, keywords, OG tags)
- ✅ EmailJS configuration in Form.jsx
- ✅ Environment variables
- ✅ Hosting deployment settings
- ✅ Domain configuration
- ✅ Analytics integration
- ✅ SSL certificates
- ✅ Color themes (if needed)
- ✅ Animation timings
- ✅ Component logic (if it doesn't affect UI)

### SEO Update Safety Guidelines
1. **Only edit metadata exports**: Do not touch page content
2. **Keep character limits**: Title 50-60 chars, Description 150-160 chars
3. **Preserve meaning**: New SEO shouldn't change what the page is about
4. **Test updates**: Verify pages still look correct after changes
5. **Use natural language**: Make descriptions readable, not keyword-stuffed
6. **Maintain accuracy**: All SEO claims must be true

---

## 📞 Contact & Support

For questions about this conversion or Next.js implementation:
- Original site: [Brihaspati Non-Ferrous Metal Foundry](https://www.brihaspatialloys.in)
- Email: info@brihaspatialloys.in
- Phone: +91 83104 32701
- Location: Kittur, Belagavi, Karnataka, India

---

## 📝 License & Notes

- This is a Next.js conversion of the original Vite + React project
- All original content, images, and functionality have been preserved
- Only framework and configuration have been updated
- No SEO content was modified during conversion
- Website structure and page flow remain identical

---

**Last Updated**: January 2026
**Next.js Version**: 15.0.0+
**Node.js Required**: v18.17 or later
