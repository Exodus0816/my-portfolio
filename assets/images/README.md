# Image Assets Guide for Exodus Studios Website

This document provides a comprehensive guide for all the images needed for the Exodus Studios website. All images should be high-quality, professional photographs that align with the sophisticated, modern aesthetic of the brand.

## Color Palette Reference
- Primary background: #FFFFFF (white)
- Section backgrounds: #F5F6F9 (very light gray)
- Primary text: #2D2D2D (almost black, deep charcoal)
- Secondary text: #6D758D (mid gray)
- Accent: #00708c (teal blue)
- Navigation highlight: #EAE7DE (warm pale beige)

## Image Specifications

### 1. Logo and Branding
**File:** `logo.png`
- **Dimensions:** 120x120px (square)
- **Format:** PNG with transparent background
- **Style:** Clean, minimal logo design
- **Usage:** Header logo on all pages

### 2. Homepage Images

#### Hero Section
**File:** `hero-portrait.jpg`
- **Dimensions:** 560x780px (portrait orientation)
- **Format:** JPG, high resolution
- **Content:** Modern interior design showcase
- **Style:** Clean, contemporary space with good lighting

#### Recent Works Slideshow Images
**Files:** `recent-work-1.jpg` through `recent-work-6.jpg`
- **Dimensions:** 600x600px (square format recommended)
- **Format:** JPG, high resolution
- **Content:** Portfolio project highlights
- **Style:** Various project types (residential, commercial, interior)

#### Studio Vision
**File:** `studio-vision.jpg`
- **Dimensions:** 400x400px (square)
- **Format:** JPG, high resolution
- **Content:** Studio workspace, team at work, or design process
- **Style:** Professional workspace or design mood board

#### Services Images
**Files:** 
- `service-architectural.jpg` (92x92px)
- `service-interior.jpg` (92x92px)
- `service-visualization.jpg` (92x92px)
- **Format:** JPG, high resolution
- **Content:** Icons or representative images for each service
- **Style:** Clean, professional service representations

### 3. Services Page Images

#### Service Detail Images
**Files:**
- `service-architectural-large.jpg` (400x400px)
- `service-interior-large.jpg` (400x400px)
- `service-visualization-large.jpg` (400x400px)
- **Format:** JPG, high resolution
- **Content:** Detailed service representations
- **Style:** Professional service showcases

#### Additional Services
**Files:**
- `service-consultation.jpg` (92x92px)
- `service-renovation.jpg` (92x92px)
- `service-sustainability.jpg` (92x92px)
- **Format:** JPG, high resolution
- **Content:** Additional service icons
- **Style:** Consistent with main services

### 4. Portfolio Page Images

#### Portfolio Grid Images
**Directory:** `portfolio/`
**Files:**
- `residential-1.jpg` through `residential-3.jpg` (400x300px)
- `commercial-1.jpg` through `commercial-3.jpg` (400x300px)
- `interior-1.jpg` through `interior-3.jpg` (400x300px)
- `renovation-1.jpg` through `renovation-3.jpg` (400x300px)
- **Format:** JPG, high resolution
- **Content:** Actual project photos
- **Style:** Professional architectural photography

#### Featured Project
**File:** `featured-project.jpg`
- **Dimensions:** 400x300px
- **Format:** JPG, high resolution
- **Content:** Award-winning project showcase
- **Style:** Premium project photography

### 5. Studio Page Images

#### Studio Hero
**File:** `studio-hero.jpg`
- **Dimensions:** 1200x500px (landscape)
- **Format:** JPG, high resolution
- **Content:** Studio workspace or exterior
- **Style:** Professional studio environment

#### About Section
**File:** `studio-about.jpg`
- **Dimensions:** 400x400px (square)
- **Format:** JPG, high resolution
- **Content:** Team working or studio space
- **Style:** Professional team/workspace photo

#### Team Members
**Directory:** `team/`
**Files:**
- `team-1.jpg` through `team-4.jpg` (120x120px)
- **Format:** JPG, high resolution
- **Content:** Professional headshots
- **Style:** Consistent professional photography
- **Note:** Should be circular crops (CSS handles this)

### 6. Contact Page Images

#### Contact Hero
**File:** `contact-hero.jpg`
- **Dimensions:** 1200x350px (landscape)
- **Format:** JPG, high resolution
- **Content:** Studio exterior or contact area
- **Style:** Welcoming, professional environment

## Image Guidelines

### Photography Style
- **Lighting:** Natural or professional studio lighting
- **Composition:** Clean, minimal compositions
- **Color:** Neutral palette with occasional accent colors
- **Quality:** High resolution, sharp, professional photography
- **Consistency:** All images should have a cohesive visual style

### Technical Requirements
- **Format:** JPG for photos, PNG for logos/icons
- **Compression:** Optimized for web (balance quality vs. file size)
- **Alt Text:** All images should have descriptive alt text for accessibility
- **Responsive:** Images should work well across different screen sizes

### Content Themes
- Modern architectural spaces
- Contemporary interior design
- Professional team and workspace
- Clean, minimalist aesthetics
- High-end finishes and materials
- Sustainable and innovative design elements

## Folder Structure
```
assets/
└── images/
    ├── logo.png
    ├── hero-portrait.jpg
    ├── recent-work-1.jpg
    ├── recent-work-2.jpg
    ├── recent-work-3.jpg
    ├── recent-work-4.jpg
    ├── recent-work-5.jpg
    ├── recent-work-6.jpg
    ├── studio-vision.jpg
    ├── service-architectural.jpg
    ├── service-interior.jpg
    ├── service-visualization.jpg
    ├── service-architectural-large.jpg
    ├── service-interior-large.jpg
    ├── service-visualization-large.jpg
    ├── service-consultation.jpg
    ├── service-renovation.jpg
    ├── service-sustainability.jpg
    ├── featured-project.jpg
    ├── studio-hero.jpg
    ├── studio-about.jpg
    ├── contact-hero.jpg
    ├── portfolio/
    │   ├── residential-1.jpg
    │   ├── residential-2.jpg
    │   ├── residential-3.jpg
    │   ├── commercial-1.jpg
    │   ├── commercial-2.jpg
    │   ├── commercial-3.jpg
    │   ├── interior-1.jpg
    │   ├── interior-2.jpg
    │   ├── interior-3.jpg
    │   ├── renovation-1.jpg
    │   ├── renovation-2.jpg
    │   └── renovation-3.jpg
    └── team/
        ├── team-1.jpg
        ├── team-2.jpg
        ├── team-3.jpg
        └── team-4.jpg
```

## Notes for Implementation
1. All images should be optimized for web use
2. Consider using WebP format for better compression (with JPG fallbacks)
3. Implement lazy loading for better performance
4. Ensure all images have proper alt text for accessibility
5. Test images across different devices and screen sizes
6. Consider using a CDN for image delivery in production
