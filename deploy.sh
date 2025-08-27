#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for deployment
echo "Preparing deployment files..."
rm -rf deploy
mkdir deploy
cp -r out/* deploy/

# Initialize git in deploy directory
cd deploy
git init
git add .
git commit -m "Deploy portfolio to GitHub Pages"

# Add the GitHub Pages remote
echo "Adding GitHub Pages remote..."
git remote add origin https://github.com/ayogenthiran/ayogenthiran.github.io.git

# Push to GitHub Pages branch
echo "Pushing to GitHub Pages..."
git branch -M gh-pages
git push -u origin gh-pages --force

echo "Deployment complete! Your site should be available at https://ayogenthiran.github.io"
echo "Note: It may take a few minutes for the changes to appear."
echo ""
echo "To enable GitHub Pages:"
echo "1. Go to your repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch and '/ (root)' folder"
echo "5. Click Save"
