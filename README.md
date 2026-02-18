🔧 Tech Stack
React 18 + TypeScript - Strong typing for scalability and maintainability
TailwindCSS 3.4 - Utility-first styling with custom theme configuration
Framer Motion - Smooth animations and transitions throughout
React Router 6 - Clean navigation between pages
🎨 Unique Design & Colors
Custom Tailwind theme in tailwind.config.js with:

Gradient palette: Teal (#14b8a6) + Amber (#f59e0b) + Deep Violet (#8b5cf6)
Earthy tones: Custom earth color palette for subtle accents
Neon accents: Cyan, pink, green, orange, blue for highlights
Glassmorphism cards: Translucent backgrounds with blur effects
Claymorphism cards: Soft 3D shadows for depth
✨ Key Features
Pages & Navigation
Home (src/pages/Home.tsx) - Main landing page with all sections
Projects (src/pages/ProjectsPage.tsx) - Dedicated projects showcase
About (src/pages/AboutPage.tsx) - Bio, skills, education
Contact (src/pages/ContactPage.tsx) - Contact form and methods
Dashboard (src/pages/DashboardPage.tsx) - Interactive stats with animated progress rings
Components
Navbar (src/components/Navbar.tsx) - Responsive with smooth mobile menu animations
Intro (src/components/Intro.tsx) - Hero section with animated background
Skills (src/components/Skills.tsx) - Animated progress bars with shimmer effect
Projects (src/components/Projects.tsx) - Glassmorphism cards with hover effects
Services (src/components/Services.tsx) - Claymorphism service cards
Education (src/components/Education.tsx) - Timeline layout with animated cards
Languages (src/components/Languages.tsx) - Tech stack grid with proficiency indicators
Contacts (src/components/Contacts.tsx) - Contact form + social links
Footer (src/components/Footer.tsx) - Quick links and social icons
Dynamic Data
src/data/projects.ts - Easily add new projects
src/data/skills.ts - Manage skill percentages
src/data/services.ts - Service offerings
src/data/education.ts - Education & certifications
src/data/techStack.ts - Technologies with proficiency levels
src/data/contacts.ts - Contact methods and social links
Theme System
Dark/Light mode toggle via src/hooks/useTheme.ts
Theme context in src/context/ThemeContext.tsx
Persists preference in localStorage
Respects system preference
🚀 Running the App
The development server is running at http://localhost:3000

To build for production:

npm run build
📁 Project Structure
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── data/           # Static data (projects, skills, etc.)
├── hooks/          # Custom React hooks
├── pages/          # Page components for routing
├── types/          # TypeScript type definitions
├── App.tsx         # Main app with routing
├── index.tsx       # Entry point
└── index.css       # Global styles + Tailwind