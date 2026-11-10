# Learjay Lubuguin Encina — Portfolio

A responsive personal portfolio showcasing my background, technical skills, internship experience, and featured software project.

**Live site:** [portfolio-learjay.vercel.app](https://portfolio-learjay.vercel.app)

## Features

- Responsive layouts and mobile navigation
- Light and dark themes
- About, skills, experience, education, projects, and contact sections
- Downloadable PDF resume
- Contact form powered by EmailJS

## Built with

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS Browser SDK

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
git clone https://github.com/Learjay/portfolio.git
cd portfolio
npm ci
```

Create a local `.env.local` file with your EmailJS settings:

```dotenv
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The contact form requires all three values. Configure the EmailJS template with recipient `{{to_email}}`, reply-to `{{reply_to}}`, subject `{{subject}}`, and message variables `{{from_name}}` and `{{message}}`. The EmailJS public key is intended for browser use; never put a Gmail password or private credential in frontend code or commit environment files.

Start the development server:

```bash
npm run dev
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

For Vercel, use `npm run build` as the build command and `dist` as the output directory. Add the three EmailJS variables to the Vercel Production environment and restrict the EmailJS key to the deployed site origin.

## Public assets

The profile image and PDF resume in `public/` are included for the live portfolio. Local environment files, generated output, dependencies, and a redundant text resume copy are excluded from Git.

## Author

**Learjay Lubuguin Encina** — Software Developer | Aspiring Full-Stack Engineer

- Email: [ljayencina@gmail.com](mailto:ljayencina@gmail.com)
- GitHub: [github.com/Learjay](https://github.com/Learjay)
- LinkedIn: [linkedin.com/in/learjayencina](https://www.linkedin.com/in/learjayencina)
