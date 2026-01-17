# Professional Portfolio Website

A stunning, modern portfolio website built with React 18 and Vite, featuring smooth animations, dark mode, and mobile-responsive design.

## ✨ Features

- ⚛️ **React 18 + Vite** - Fast development and optimized builds
- 🧱 **Correct imports** - All JSX files use explicit `.jsx` extensions
- 📁 **Organized folder structure** - Clean component architecture
- 🕒 **Timeline-style experience** - Beautiful animated timeline for work history
- 📊 **Animated skill bars** - Eye-catching skill visualization with progress animations
- 📌 **Sticky navbar** - Smooth scrolling navigation
- 🌙 **Dark mode toggle** - Persistent theme switching
- 📄 **Resume download** - Click to download resume functionality
- 📱 **Mobile responsive** - Fully optimized for all screen sizes
- 🎨 **Modern design** - Vibrant gradients, glassmorphism, and micro-animations
- ⚡ **SEO optimized** - Proper meta tags and semantic HTML

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

All profile data is configured via a single JSON file for easy updates!

### Edit Your Profile Data

Open `public/data/profile.json` and update:

1. **Profile Information**
   - Name, title, bio
   - Contact details (email, phone, location)
   - Social media links (LinkedIn, GitHub, Twitter)
   - Profile photo path

2. **Experience**
   - Company name
   - Position and duration
   - Location
   - Description and achievements
   - Mark current position with `"current": true`

3. **Skills**
   - Skill name
   - Proficiency level (0-100)
   - Category

4. **Education**
   - Institution and degree
   - Duration and location
   - GPA and achievements

### Replace Profile Photo

Replace `public/profile-photo.jpg` with your own professional headshot.

### Replace Resume

Replace `public/resume.pdf` with your actual resume PDF file.

## 🎨 Customizing Colors

The color scheme can be easily customized in `src/index.css`:

```css
:root {
  --primary-hue: 260;        /* Purple - change to your preferred hue */
  --accent-hue: 340;         /* Pink - change to your preferred accent */
  /* Adjust saturation and lightness as needed */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## 🌙 Dark Mode

Dark mode is automatically saved to localStorage and persists across sessions. Users can toggle between light and dark themes using the button in the navbar.

## 🎯 Sections

1. **Hero Section** - Profile photo, bio, contact info, and social links
2. **Experience Timeline** - Work history with alternating layout and animations
3. **Skills** - Animated progress bars showing proficiency levels
4. **Education** - Academic background and achievements
5. **Footer** - Copyright and credits

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Custom styling with CSS variables
- **Google Fonts** - Inter & Outfit fonts

## 📦 Project Structure

```
profile-portfolio/
├── public/
│   ├── data/
│   │   └── profile.json      # Your profile data
│   ├── profile-photo.jpg     # Your photo
│   └── resume.pdf            # Your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Experience.jsx    # Timeline
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Education.jsx     # Education section
│   │   └── Footer.jsx        # Footer
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
└── index.html                # HTML template
```

## 🎨 Design Features

- **Smooth Animations** - Fade-in, slide-in, and scroll-triggered animations
- **Glassmorphism** - Modern frosted glass effects
- **Gradient Accents** - Vibrant color gradients throughout
- **Micro-interactions** - Hover effects and button animations
- **Professional Typography** - Google Fonts (Inter & Outfit)
- **Floating Elements** - Animated background shapes

## 📄 License

Feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

Built with ❤️ using React & Vite
