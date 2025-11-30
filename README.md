## website

## create frontend tool 
    npm create vite@latest

Bahut accha choice 👏 — FolioOne (BootstrapMade) ek clean aur professional portfolio template hai.
Agar tum is jaisa portfolio khud banana chahte ho, to neeche main batata hoon exact technology stack jo tumhe use karni chahiye 👇

💻 1. Core Technologies
Purpose	Recommended Tech
Frontend Framework	⚛️ React.js (or Vite + React for faster builds)
Styling / UI	🎨 Bootstrap 5 + custom CSS/SASS
Animations	✨ AOS (Animate on Scroll) or Framer Motion
Icons	🧩 Bootstrap Icons or React Icons
Routing	🌐 React Router DOM
Deployment	🚀 Vercel or Netlify
🧩 2. Structure Example

Your folder structure can look like this:

portfolio/
 ┣ src/
 ┃ ┣ components/
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ HeroSection.jsx
 ┃ ┃ ┣ About.jsx
 ┃ ┃ ┣ Skills.jsx
 ┃ ┃ ┣ Portfolio.jsx
 ┃ ┃ ┣ Contact.jsx
 ┃ ┃ ┗ Footer.jsx
 ┃ ┣ App.jsx
 ┃ ┣ main.jsx
 ┃ ┗ styles/
 ┃   ┗ style.css
 ┣ public/
 ┃ ┗ images/
 ┣ package.json
 ┗ vite.config.js

🎨 3. Design Technology

Use Bootstrap grid system for layout (like FolioOne)

Use CSS variables or SASS for consistent colors

Use AOS for smooth scroll animations:

npm install aos

import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

📸 4. For the Portfolio Section

Use:

React components for each project card

Bootstrap Cards or custom divs with hover effects

Optional: React Modal for opening project details

📬 5. Contact Form

If you only need email submission:

Use EmailJS (no backend needed)

npm install emailjs-com


Or, if you want to add backend later, you can use Node.js + Express.

🌍 6. Hosting

Once done:

npm run build

Deploy to Vercel or Netlify

Both are free and perfect for portfolios.

🧠 Summary — Tech Stack You Should Use

✅ React (with Vite)
✅ Bootstrap 5
✅ AOS for animation
✅ React Router
✅ EmailJS for contact form
✅ Vercel for deployment