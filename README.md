# John Doe - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, beautiful design, and is optimized for GitHub Pages deployment.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Optimized**: Meta tags and semantic HTML
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions
- **Smooth Animations**: Powered by Framer Motion
- **Beautiful Icons**: Lucide React icons throughout

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library
- **GitHub Pages** - Static site hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.github.io.git
   cd portfolio.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following in `src/App.jsx`:
- Name and title
- About section content
- Project details
- Skills and expertise levels
- Contact information
- Social media links

### Styling
- Colors: Modify the `tailwind.config.js` file
- Fonts: Update Google Fonts link in `index.html`
- Animations: Adjust Framer Motion settings

### Images
Replace placeholder images with your own:
- Profile photo in About section
- Project screenshots
- Favicon and logo

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The site will deploy automatically on push

3. **Update Repository Name**
   - If your repository name is different, update the `base` in `vite.config.js`
   - Example: `base: '/your-repo-name/'`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 📁 Project Structure

```
portfolio.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
├── src/
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global styles and Tailwind imports
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🎯 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal story and social links
3. **Projects Section** - Showcase of work
4. **Skills Section** - Technical expertise
5. **Contact Section** - Get in touch

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- Primary Blue: `#3b82f6`
- Dark Gray: `#1f2937`
- Light Gray: `#f3f4f6`
- White: `#ffffff`

## 📈 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images

---

**Built with ❤️ using React and Vite**
