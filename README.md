# Mahana Elite Landing Page

A high-conversion, visually stunning B2B landing page for a Tokyo-based digital marketing agency. Redesigned with a "Japanese Minimalism meets SaaS Sophistication" aesthetic.

## 🎨 Design System

- **Typography**: 
  - **Plus Jakarta Sans** (Headings) - Geometric, authoritative, modern.
  - **Inter** (Body) - Clean, neutral, highly legible.
  - **Noto Sans JP** - Japanese character support.
- **Color Palette (Deep & Elegant)**:
  - **Primary**: `Slate 900` (#0F172A) & `Slate 800` (#1E293B) - Trust, Stability.
  - **Accent**: `Indigo 600` (#4F46E5) - Technology, Innovation.
  - **Highlight**: `Orange 500` (#F97316) - Action, Warmth (Japan).
  - **Surface**: `Slate 50` (#F8FAFC) - Cleanliness.
- **Effects**:
  - Glassmorphism (`backdrop-blur`) on cards and sticky nav.
  - Mesh Gradients for hero background.
  - Floating 3D-style animations.
  - "Bento Grid" layout for statistics.

## 🛠 Tech Stack

- **HTML5** (Semantic)
- **Tailwind CSS** (v3.4 via CDN) - Styling & Grid.
- **AOS** (Animate On Scroll) - Scroll reveal animations.
- **Vanilla JavaScript** - Logic for toggles, counters, and smooth scroll.

## 🚀 Quick Start

1. **Serve locally**:
   ```bash
   npx serve .
   ```
2. **Open in Browser**: `http://localhost:3000`

## 📁 File Structure

- `index.html` - The complete markup with inline Tailwind classes for layout and design.
- `styles.css` - Custom animations (`float`, `fade-in`), scrollbar styling, and glassmorphism utilities.
- `script.js` - Interactive logic (AOS init, Mobile Menu, FAQ, Counters).

## ✨ Key Features

- **Dynamic Hero**: CSS-only floating mesh gradients.
- **Bento Grid Stats**: A modern, asymmetric grid layout for the "Results" section.
- **Interactive FAQ**: Accordion style with smooth transitions.
- **Form**: Client-side validation with a "success" state simulation.
- **Mobile Optimized**: Fully responsive navigation and stacked layouts.

## 📝 Customization Guide

1. **Logos**: Replace the SVG placeholders in the "Social Proof" strip with real client logos.
2. **Form Backend**: Update the `action` attribute in `index.html` to point to your Formspree or backend endpoint.
3. **Copy**: All text is editable directly in `index.html`.
