# Setup Instructions for Assets

After cloning the repository, you need to organize the asset files for Next.js:

## Step 1: Create Asset Directories
```bash
mkdir -p public/images
mkdir -p public/pdfs
```

## Step 2: Copy Images
```bash
# Copy root level images
cp src/assets/*.{jpg,jpeg,png,webp,avif} public/images/ 2>/dev/null || true

# Copy subdirectory images
cp -r src/assets/valveImages/* public/images/ 2>/dev/null || true
cp -r src/assets/CO2Mould/* public/images/ 2>/dev/null || true
cp -r src/assets/CentrifugalCasting/* public/images/ 2>/dev/null || true
cp -r src/assets/GeneralEngineering/* public/images/ 2>/dev/null || true
cp -r src/assets/GravityDieCasting/* public/images/ 2>/dev/null || true
cp -r src/assets/NoBake/* public/images/ 2>/dev/null || true
cp -r src/assets/ShellMould/* public/images/ 2>/dev/null || true
```

## Step 3: Copy PDFs
```bash
cp src/assets/*.pdf public/pdfs/ 2>/dev/null || true
```

## Step 4: Verify Setup
```bash
# Check images are copied
ls public/images/ | wc -l

# Check PDFs are copied
ls public/pdfs/ | wc -l
```

## What This Does
- Moves images from `src/assets/` to `public/images/` so Next.js can serve them
- Moves PDF files from `src/assets/` to `public/pdfs/` so they can be accessed as static files
- Ensures the public folder structure matches what the application expects

## Note
- The old `src/` directory structure from Vite can remain but won't be used
- Only the `public/` folder is served in Next.js production builds
- Make sure to run this setup before running `npm run dev` or `npm run build`
