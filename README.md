<div align="center">
  <h1 style="font-size: 3em; font-weight: bold; margin: 20px 0;">Portfolio of Mario Hernández - Software & Web Developer</h1>
  
</div>

![banner](https://raw.githubusercontent.com/ninhoProgrammer/mario-hernandez-site/refs/heads/main/public/Hero.webp)

## Overview

This project is a personal portfolio built with a modern frontend stack focused on performance, maintainability, and a strong visual identity. The site is structured as a static, content-driven application with interactive UI sections, 3D-inspired visuals, and a contact flow for professional inquiries.

## Technical Stack

- [Astro](https://astro.build): static site generation, component-based architecture, asset optimization
- [Vue](https://vuejs.org/): dynamic UI components and interactive sections
- [React](https://react.dev/): additional component integration and UI composition
- [Tailwind CSS](https://tailwindcss.com/): utility-first styling and responsive layout system
- [Three.js](https://threejs.org/): 3D rendering and visual effects
- [EmailJS](https://www.emailjs.com/): lightweight email form integration
- [Vercel](https://vercel.com/): deployment and hosting platform

## Architecture

The project follows a modular structure optimized for content and component reuse:

- `src/pages/`: route-level pages and entry sections
- `src/components/`: reusable UI blocks such as Hero, About, Projects, Skills, Footer
- `src/layouts/`: shared layout wrappers
- `src/styles/`: global CSS and design tokens
- `src/assets/`: local media and visual assets
- `public/OBJ/`: 3D model assets and generated visual resources
- `src/pages/api/send-email.js`: server-side endpoint for handling contact submissions

## Features

- Responsive portfolio layout for desktop and mobile
- Modular section-based architecture for content scalability
- Fast static rendering and optimized performance via Astro
- 3D and motion-enhanced visual design
- Contact form integrated with email service
- SEO-friendly page structure and metadata-ready configuration

## Local Development

```bash
npm install
npm run dev
```

Then open the local Astro development server in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Contact

- LinkedIn: [Mario Hernández](https://www.linkedin.com/in/it-mario-hernández/)
- GitHub: [MakeWebMX](https://github.com/MakeWebMX)

## License

Copyright (c) 2024 Designed & Developed by [MakeWeb](https://github.com/MakeWebMX)

This project is licensed under the terms of the MIT License. See the [MIT License](LICENSE).
