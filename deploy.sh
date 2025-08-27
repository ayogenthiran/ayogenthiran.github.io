#!/bin/bash

# Build the project
echo "Building the project..."
pnpm build

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

# Add the GitHub Pages remote (you'll need to create this repository first)
echo "Adding GitHub Pages remote..."
git remote add origin https://github.com/ayogenthiran/ayogenthiran.github.io.git

# Push to GitHub Pages
echo "Pushing to GitHub Pages..."
git branch -M main
git push -u origin main --force

echo "Deployment complete! Your site should be available at https://ayogenthiran.github.io"
echo "Note: It may take a few minutes for the changes to appear."
