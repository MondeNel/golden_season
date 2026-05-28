# Golden Season — Front-End Redesign

A modern, responsive front-end redesign for **Golden Season Pte Ltd**, a Singapore-based supplier of tactical medical equipment and trauma kits for military, humanitarian, and emergency response organisations worldwide.

**Live site (redesign):** [golden-season.netlify.app](https://golden-season.netlify.app)  
**Original site:** [gseason.com](https://gseason.com)

---

## Why this project

A client needed a fresh, professional web presence that matched their global reputation. The original site was functional but outdated in design and user experience. I rebuilt the front end from scratch using **React** and **Tailwind CSS**, adding modern interactions and direct communication channels (chatbot + WhatsApp) to improve visitor engagement.

---

## Original vs Redesign

| Aspect | Original (gseason.com) | Redesign (Netlify) |
|--------|------------------------|---------------------|
| **Technology** | Traditional multi-page website | React SPA with Vite |
| **Styling** | Custom CSS | Tailwind CSS (utility-first, fully responsive) |
| **Hero section** | Static heading | Typewriter effect on description |
| **Client engagement** | Contact form only | Live chatbot + direct WhatsApp button |
| **Testimonials** | Text only | Carousel with star ratings & verified badges |
| **Trust signals** | Basic logos | Animated logo carousel, stats counters, NATO/STANAG badges |
| **Video** | Embedded YouTube | Custom modal with play button & thumbnail |
| **Mobile** | Limited responsiveness | Mobile-first, fully responsive design |
| **Performance** | – | Optimised build with Vite, fast load times |

---

## Features

- **Typewriter effect** on the hero description — grabs attention immediately
- **Integrated chatbot** for instant visitor queries (powered by a third-party chat service)
- **WhatsApp integration** — floating button to start a chat directly with the sales team
- **Animated statistics** counters (50+ countries, 30yr experience, NATO certified)
- **Client logo carousel** with smooth infinite scroll
- **Testimonial carousel** with star ratings, verified badges, and real client names
- **Video modal** — opens a custom overlay instead of redirecting to YouTube
- **Responsive design** — works perfectly on mobile, tablet, and desktop
- **Multi-section navigation** with smooth scrolling
- **Contact form** (in addition to chatbot/WhatsApp)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Icons | Icons |
| Custom Hooks | Typewriter animation, carousel logic |
| Third-party chat widget | Chatbot |
| WhatsApp Business API | Direct messaging |

---

## What I learned

- Translating a real client brief into a polished, production-ready front end
- Building complex animations (typewriter, counters, carousels) without external animation libraries
- Integrating multiple communication channels (chatbot, WhatsApp, form) into a single cohesive UI
- Designing for trust: testimonials, certifications, and client logos presented in a credible, professional layout
- Delivering a complete project from concept to deployed site on Netlify

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/MondeNel/golden_season.git
cd golden_season

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
