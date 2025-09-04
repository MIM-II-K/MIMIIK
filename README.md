MIMIIK | Full-Stack Developer & ML Engineer Portfolio

Professional Portfolio showcasing expertise in modern web development, machine learning integration, and scalable full-stack solutions. Designed for recruiters, collaborators, and clients to explore skills, projects, and contact seamlessly.

💼 Professional Summary

I am a Full-Stack Developer & Machine Learning Engineer with a passion for building high-quality, scalable web applications and innovative solutions. This portfolio demonstrates:

Full-stack development expertise (React, Vite, FastAPI, Django, Node.js)

Modern UI/UX design with dark-mode, responsive layouts, and animations

End-to-end project lifecycle management: development, deployment, and maintenance

Integration of machine learning and automation into real-world applications

🚀 Features

Interactive Hero Section: Mouse-tracking animations, tech stack carousel, gradient highlights

Projects Showcase: Detailed project cards with live demos, source code links, and descriptions

Professional Contact Form: EmailJS integration with anti-bot protection and modern design

Resume Download: Instant access to PDF resume for recruiters

Dark-Themed UI: Professional, minimalistic, and modern aesthetic

Social Integration: GitHub, LinkedIn, and Email links with hover effects and animations

Responsive Design: Optimized for mobile, tablet, and desktop screens

Dynamic Tech Stack Display: Auto-cycling highlight of core technologies

🛠 Tech Stack & Expertise

Frontend: React, Vite, TypeScript, TailwindCSS, Lucide-React
Backend: FastAPI, Django, Node.js, Express
Database: MongoDB, PostgreSQL
Machine Learning: scikit-learn, TensorFlow, PyTorch
Other Tools: Git, GitHub, Docker, EmailJS, Figma

Specialties:

Scalable, maintainable code

Modern UI/UX with animations and interactive elements

Full-stack architecture design

API design and integration

Automation & ML integration

📂 Project Structure
portfolio/
├─ public/           # Public assets (resume, images)
├─ src/
│  ├─ assets/        # Backgrounds, icons, images
│  ├─ components/    # Reusable components (Hero, Contact, Cards)
│  ├─ pages/         # Page components (Home, Projects)
│  ├─ App.tsx        # Main app component
│  └─ main.tsx       # Entry point
├─ package.json       # Dependencies
└─ README.md          # Project documentation

💻 Setup & Development

Clone the repository

git clone https://github.com/MIM-II-K/portfolio.git
cd portfolio


Install dependencies

npm install
# or
yarn


Run the development server

npm run dev
# or
yarn dev


Open http://localhost:5173
 in your browser.

📬 Contact Form Setup (EmailJS)

Sign up for EmailJS
.

Create a Service, Template, and obtain your Public Key.

Update Contact.tsx:

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";


Ensure template variables match form fields (from_name, reply_to, subject, message).

📄 Resume

Place your resume in public/resume.pdf.

The Download Resume button in Hero allows one-click download.

🌐 Deployment

Recommended platforms:

Vercel: vercel --prod

Netlify: drag-and-drop or CLI deployment

Ensure /public/resume.pdf is included in the build.

⚡ Customization

Update Hero Section text, tech stack, and background in Hero.tsx

Update Projects Section with your own portfolio projects

Update Social Links and contact details in Hero.tsx

🏆 License

MIT License © 2025 MIMIIK
