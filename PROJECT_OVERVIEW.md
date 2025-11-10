# Entertainment Global Corp - Premium Corporate Website

A multi-billion dollar entertainment conglomerate website featuring cinematic design, comprehensive content showcase, and investor relations center.

## 🎬 Project Overview

This is a premium entertainment conglomerate website built with Next.js 15, featuring a sophisticated cinematic design system that rivals industry leaders like Sony, Universal, and Paramount.

## 🎨 Design System

### Color Palette
- **Deep Cinematic Black** - Primary background (HSL: 0 0% 4%)
- **Platinum/Silver** - Primary accent for metallic effects (HSL: 0 0% 85%)
- **Luxurious Gold** - Secondary accent for premium features (HSL: 45 90% 60%)
- **Electric Blue** - Interactive elements (HSL: 210 100% 55%)

### Typography
- **Display Font**: Playfair Display (Serif) - For headlines and dramatic impact
- **Body Font**: Inter (Sans-serif) - For readable, modern body text
- **Monospace**: SF Mono/Cascadia Code - For technical content

### Key Features
- Cinematic shadow system with multiple depth levels
- Metallic glow effects for premium feel
- Glass morphism effects for modern UI elements
- Smooth animations and transitions throughout
- Responsive design optimized for all devices

## 📄 Pages

### 1. Corporate Homepage (`/`)
- Cinematic hero section with animated background
- Real-time performance metrics dashboard
- Spotlight content carousel
- Entertainment divisions showcase
- Executive leadership highlights
- Call-to-action sections

### 2. Content Universe Hub (`/content`)
- Interactive content filtering by division (Film, TV, Music, Gaming, Streaming)
- Category filtering (Trending, New Releases, Coming Soon, Awards)
- Dynamic content grid with hover effects
- Platform performance metrics
- Real-time engagement statistics

### 3. Investor Relations Center (`/investors`)
- Live stock price ticker with real-time updates
- Financial highlights dashboard
- Revenue breakdown by business segment
- Strategic initiatives showcase
- Downloadable financial reports
- Upcoming events calendar

## 🎯 Technical Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **TypeScript**: Full type safety

## 🚀 Key Components

### Navigation
- Fixed transparent header with backdrop blur
- Responsive mega-menu for divisions
- Mobile-optimized hamburger menu
- Smooth scroll behavior

### Footer
- Comprehensive site navigation
- Social media integration
- Corporate information
- Multi-column responsive layout

### Design Utilities
- **Shadows**: `shadow-cinematic-sm` through `shadow-cinematic-xl`
- **Animations**: `animate-fade-in-up`, `animate-scale-in`, `animate-float`
- **Effects**: `glass-effect`, `hover-lift`, `text-gradient`
- **Transitions**: `transition-smooth`, `transition-cinematic`

## 🎨 Animation System

### Available Animations
- **fadeIn**: Simple fade-in effect
- **fadeInUp**: Fade in with upward motion
- **slideInLeft/Right**: Slide in from sides
- **scaleIn**: Scale up from center
- **float**: Continuous floating motion
- **shimmer**: Shimmer/shine effect
- **glow**: Pulsing glow effect

### Hover Effects
- **hover-lift**: Lift on hover with shadow
- **hover-grow**: Scale up on hover
- **hover-shine**: Sliding shine effect
- **interactive-card**: Combined hover effects

## 🌐 Responsive Design

- **Desktop**: Full cinematic experience with all effects
- **Tablet**: Optimized layouts with maintained visual quality
- **Mobile**: Touch-optimized navigation and streamlined content

## 📊 Mock Data Structure

### Performance Metrics
- Global Revenue: $47B
- Active Subscribers: 180M
- Theatrical Releases: 28
- Series in Production: 156

### Content Portfolio
- 12+ content items across all divisions
- Interactive filtering and categorization
- Real-time engagement statistics

### Financial Data
- Stock performance tracking
- Quarterly financial highlights
- Revenue segmentation
- Strategic initiatives

## 🎬 Cinematic Features

1. **Animated Backgrounds**: Pulsing gradient orbs for depth
2. **Metallic Accents**: Platinum and gold for luxury feel
3. **Dramatic Typography**: Large, bold headlines with Playfair Display
4. **Smooth Transitions**: Cubic bezier easing for premium feel
5. **Glass Morphism**: Modern backdrop blur effects
6. **Interactive Cards**: Lift and scale on hover
7. **Glow Effects**: Subtle luminescence for emphasis

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 File Structure

```
src/
├── app/
│   ├── page.tsx              # Corporate Homepage
│   ├── content/
│   │   └── page.tsx          # Content Universe Hub
│   ├── investors/
│   │   └── page.tsx          # Investor Relations
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & design system
├── components/
│   ├── navigation.tsx        # Main navigation header
│   └── footer.tsx           # Site footer
└── lib/
    └── ...                   # Utility functions
```

## 🎯 Key Design Decisions

1. **Dark Theme Default**: Cinematic black creates premium entertainment brand feel
2. **Serif Headlines**: Playfair Display adds elegance and authority
3. **Metallic Accents**: Gold and platinum convey luxury and success
4. **Dramatic Shadows**: Deep shadows create depth and dimension
5. **Smooth Animations**: All transitions use cinematic easing curves

## 🌟 Premium Features

- **Auto-playing hero animations** for immediate visual impact
- **Performance metrics dashboard** with real-time feel
- **Interactive content filtering** for easy navigation
- **Financial transparency** for investor confidence
- **Mobile-first responsive design** for universal access
- **Accessibility optimized** with proper ARIA labels and keyboard navigation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column, touch-optimized
- **Tablet**: 768px - 1024px - Two columns, balanced layout
- **Desktop**: > 1024px - Full multi-column, maximum visual impact
- **Large Desktop**: > 1400px - Content container with optimal reading width

## 🎨 Color Usage Guide

- **Primary (Platinum)**: CTAs, highlights, focus states
- **Secondary (Gold)**: Badges, premium features, awards
- **Accent (Blue)**: Interactive elements, links, hover states
- **Background (Deep Black)**: Main background for cinematic feel
- **Card (Elevated Black)**: Content surfaces with subtle elevation

## ⚡ Performance Optimizations

- Optimized font loading with display swap
- Efficient animations using CSS transforms
- Lazy loading for below-fold content
- Responsive images with proper sizing
- Minimal JavaScript for fast initial load

---

**Built with precision for Entertainment Global Corp**
*Defining the Future of Global Entertainment*
