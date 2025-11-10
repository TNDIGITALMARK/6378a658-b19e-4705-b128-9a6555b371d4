import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Film, Tv, Music, Gamepad2, Play, TrendingUp, Users, Award, Globe, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  // Mock data for the homepage
  const heroContent = {
    title: 'Defining the Future of Global Entertainment',
    subtitle: 'Creating unforgettable experiences across film, television, music, gaming, and streaming platforms worldwide',
    ctaPrimary: 'Explore Our Universe',
    ctaSecondary: 'View Investor Relations',
  };

  const performanceMetrics = [
    { label: 'Global Revenue', value: '$47B', icon: TrendingUp, color: 'text-secondary' },
    { label: 'Active Subscribers', value: '180M', icon: Users, color: 'text-accent' },
    { label: 'Theatrical Releases', value: '28', icon: Film, color: 'text-primary' },
    { label: 'Series in Production', value: '156', icon: Tv, color: 'text-secondary' },
  ];

  const spotlightContent = [
    {
      title: 'Summer Blockbuster Premiere',
      description: 'The most anticipated action franchise returns with record-breaking opening weekend',
      category: 'Film',
      image: '/api/placeholder/600/400',
      badge: 'New Release',
    },
    {
      title: 'Award-Winning Drama Series',
      description: 'Our latest series sweeps major awards with groundbreaking storytelling',
      category: 'Television',
      image: '/api/placeholder/600/400',
      badge: 'Featured',
    },
    {
      title: 'Platinum Album Release',
      description: 'Chart-topping artist debuts new album, breaking streaming records',
      category: 'Music',
      image: '/api/placeholder/600/400',
      badge: 'Trending',
    },
  ];

  const divisions = [
    {
      name: 'Film Studios',
      icon: Film,
      description: 'Producing blockbuster films that captivate audiences worldwide',
      stats: '12 Major Releases This Year',
    },
    {
      name: 'Television Networks',
      icon: Tv,
      description: 'Broadcasting premium content across global networks',
      stats: '24/7 Content Across 40+ Channels',
    },
    {
      name: 'Music Labels',
      icon: Music,
      description: 'Representing the worlds most talented artists and creators',
      stats: '500+ Artists Under Management',
    },
    {
      name: 'Gaming Studios',
      icon: Gamepad2,
      description: 'Developing immersive gaming experiences for all platforms',
      stats: '8 AAA Titles in Development',
    },
    {
      name: 'Streaming Platforms',
      icon: Play,
      description: 'Delivering content on-demand to millions of subscribers',
      stats: '180M+ Active Subscribers',
    },
  ];

  const executiveHighlights = [
    {
      name: 'Jennifer Morrison',
      title: 'Chief Executive Officer',
      quote: 'We are committed to pushing the boundaries of entertainment innovation',
    },
    {
      name: 'Michael Chen',
      title: 'Chief Financial Officer',
      quote: 'Record-breaking performance across all divisions drives continued growth',
    },
    {
      name: 'Sarah Williams',
      title: 'Chief Content Officer',
      quote: 'Our diverse portfolio represents the best storytelling in the industry',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 py-32 text-center">
          {/* Sparkle Badge */}
          <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full mb-8 shadow-cinematic">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-sm font-semibold text-foreground">Industry Leader Since 1987</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-foreground leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all shadow-cinematic-lg hover:shadow-cinematic-xl transform hover:-translate-y-1">
              {heroContent.ctaPrimary}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
              {heroContent.ctaSecondary}
            </button>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {performanceMetrics.map((metric) => (
              <div key={metric.label} className="bg-card border border-border rounded-xl p-6 shadow-cinematic hover:shadow-cinematic-md transition-shadow">
                <metric.icon size={32} className={`${metric.color} mb-4 mx-auto`} />
                <div className="text-3xl md:text-4xl font-display font-black text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Content Section */}
      <section className="py-24 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              In the Spotlight
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest releases and award-winning content across all entertainment platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightContent.map((content, index) => (
              <div key={index} className="group relative bg-background rounded-xl overflow-hidden shadow-cinematic-md hover:shadow-cinematic-lg transition-all transform hover:-translate-y-2">
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {content.badge}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {content.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Our Entertainment Empire
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the industry across film, television, music, gaming, and streaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division) => (
              <div key={division.name} className="bg-card border border-border rounded-xl p-8 shadow-cinematic hover:shadow-cinematic-lg transition-all hover:border-primary group">
                <division.icon size={48} className="text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {division.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {division.description}
                </p>
                <div className="text-sm font-bold text-accent">
                  {division.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-24 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Leadership Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by visionary leaders shaping the future of global entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveHighlights.map((executive) => (
              <div key={executive.name} className="bg-background border border-border rounded-xl p-8 shadow-cinematic">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-metallic rounded-full mx-auto mb-6 flex items-center justify-center shadow-cinematic-md">
                  <Users size={40} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground text-center mb-2">
                  {executive.name}
                </h3>
                <p className="text-sm text-accent font-semibold text-center mb-4">
                  {executive.title}
                </p>
                <blockquote className="text-muted-foreground text-center italic">
                  &ldquo;{executive.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <Globe size={64} className="mx-auto mb-6 text-primary-foreground opacity-80" />
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary-foreground mb-6">
            Join Our Global Entertainment Family
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Explore career opportunities, partnership programs, and investor relations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-primary-foreground text-primary font-bold text-lg rounded-lg hover:bg-background hover:text-foreground transition-all shadow-cinematic-lg">
              View Careers
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary-foreground hover:text-primary transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
