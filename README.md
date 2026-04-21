# 🎓 Md. Ruman Ahmed — Portfolio

A modern, responsive personal portfolio website for **Md. Ruman Ahmed**, Assistant Teacher at Musabbir Ahmed Academy, Sylhet, Bangladesh.

---

## ✨ Features

- ⚡ **Vite + React 18** — blazing fast dev server & build
- 🎨 **Tailwind CSS** — utility-first styling with custom theme
- 🎬 **Framer Motion** — smooth section reveals, page-load animations, floating card
- 🌙 **Dark / Light Mode** — persistent via localStorage, respects OS preference
- ⌨️ **Typing Effect** — animated role cycling in the Hero section
- 📊 **Scroll Progress Bar** — live reading progress at the top
- 🔍 **Scroll Spy Nav** — active section highlighted in navbar
- 📱 **Fully Responsive** — mobile-first, works on all screen sizes
- 📬 **Contact Form** — with client-side validation and success state
- 🅰️ **Custom Fonts** — Sora (display) + DM Sans (body)

---

## 📁 Project Structure

```
ruman-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   └── SectionTitle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context
│   ├── data/
│   │   └── portfolio.js      # All content data (edit here!)
│   ├── hooks/
│   │   ├── useReveal.js      # IntersectionObserver reveal
│   │   ├── useScrollProgress.js
│   │   ├── useScrollSpy.js   # Active nav section
│   │   └── useTyping.js      # Typewriter effect
│   ├── sections/             # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   └── Training.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher — [Download here](https://nodejs.org/)
- **npm** v9+ (comes with Node)

### Installation & Running

```bash
# 1. Navigate into the project folder
cd ruman-portfolio

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser. 🎉

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy on Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

---

## ✏️ Customization

All portfolio content lives in one file:

```
src/data/portfolio.js
```

Edit `personal`, `education`, `skills`, `experience`, `training`, etc. — the whole site updates automatically.

---

## 🖥️ Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

---

## 📦 Dependencies

| Package          | Purpose                        |
|------------------|--------------------------------|
| react            | UI library                     |
| react-dom        | DOM rendering                  |
| framer-motion    | Animations                     |
| react-icons      | Icon library                   |
| tailwindcss      | Utility CSS framework          |
| vite             | Build tool & dev server        |
| autoprefixer     | CSS vendor prefixes            |
| postcss          | CSS processing                 |

---

## 📄 License

Personal portfolio — all rights reserved by **Md. Ruman Ahmed**.
