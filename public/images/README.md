# Portfolio Images Organization

This folder contains all images used throughout the portfolio, organized by section for easy maintenance and reference.

## Folder Structure

### `/projects/`
- Project screenshots, demos, and related images
- Naming convention: `project-name-screenshot.png`, `project-name-demo.gif`

### `/blog/`
- Blog post featured images, diagrams, and illustrations
- Naming convention: `blog-post-title-featured.png`, `blog-post-title-diagram.svg`

### `/experience/`
- Company logos, workplace photos, and work-related images
- Naming convention: `company-name-logo.png`, `company-name-office.jpg`

### `/education/`
- University logos, certificates, academic project images
- Naming convention: `university-name-logo.png`, `certificate-name.pdf`

### `/general/`
- Profile photos, background images, icons, and other general assets
- Naming convention: `profile-photo.jpg`, `background-pattern.svg`

## Usage in Components

Reference images using the path from the public folder:
\`\`\`jsx
<img src="/images/projects/neural-network-demo.png" alt="Neural Network Demo" />
<img src="/images/experience/hehealth-logo.png" alt="HeHealth Logo" />
\`\`\`

## Image Optimization Tips

- Use WebP format for better compression when possible
- Keep file sizes under 500KB for web performance
- Use descriptive filenames for better SEO and maintenance
- Include alt text for accessibility
\`\`\`

```gitkeep file="public/images/projects/.gitkeep"
