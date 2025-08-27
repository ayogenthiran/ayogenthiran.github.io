# GitHub Pages Setup Guide

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/ayogenthiran/ayogenthiran.github.io
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Step 2: Configure GitHub Actions (Automatic Deployment)

The GitHub Actions workflow is already configured in `.github/workflows/nextjs.yml`. It will automatically:

- Build your Next.js application
- Deploy to GitHub Pages
- Update the site on every push to the `main` branch

## Step 3: Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy using the script
chmod +x deploy.sh
./deploy.sh
```

## Step 4: Verify Deployment

After deployment, your site should be available at:
https://ayogenthiran.github.io

## Troubleshooting

### If the site shows only basic content:
1. Check that the build completed successfully
2. Verify that the `out/` directory contains all your files
3. Make sure GitHub Pages is configured to use the correct branch

### If assets don't load:
1. Check that the `.nojekyll` file is present in the `out/` directory
2. Verify that all image paths are correct
3. Check the browser console for any 404 errors

### If the site doesn't update:
1. GitHub Pages can take up to 10 minutes to update
2. Check the Actions tab in your repository for build status
3. Clear your browser cache and try again

## File Structure for GitHub Pages

Your repository should have this structure for GitHub Pages:
```
ayogenthiran.github.io/
├── .github/
│   └── workflows/
│       └── nextjs.yml
├── app/
├── components/
├── public/
├── out/ (generated)
└── ... other files
```

The GitHub Actions workflow will automatically build and deploy the contents of the `out/` directory to GitHub Pages.
