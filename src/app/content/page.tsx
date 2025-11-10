'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Film, Tv, Music, Gamepad2, Play, TrendingUp, Star, Clock, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ContentUniversePage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('trending');

  const divisions = [
    { id: 'all', name: 'All Content', icon: Play },
    { id: 'film', name: 'Film', icon: Film },
    { id: 'television', name: 'Television', icon: Tv },
    { id: 'music', name: 'Music', icon: Music },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
    { id: 'streaming', name: 'Streaming', icon: Play },
  ];

  const categories = [
    { id: 'trending', name: 'Trending Now' },
    { id: 'new', name: 'New Releases' },
    { id: 'upcoming', name: 'Coming Soon' },
    { id: 'awards', name: 'Award Winners' },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Eclipse Rising',
      description: 'Epic sci-fi adventure spanning galaxies in the ultimate battle for survival',
      division: 'film',
      category: 'trending',
      stats: { views: '180M', rating: 9.2, duration: '2h 45m' },
      badge: 'Box Office Hit',
      status: 'Now Showing',
    },
    {
      id: 2,
      title: 'Legacy Chronicles',
      description: 'Award-winning drama series exploring three generations of family secrets',
      division: 'television',
      category: 'awards',
      stats: { views: '95M', rating: 9.5, duration: '8 Episodes' },
      badge: 'Emmy Winner',
      status: 'Season 3',
    },
    {
      id: 3,
      title: 'Neon Dreams Album',
      description: 'Platinum-certified album breaking streaming records worldwide',
      division: 'music',
      category: 'trending',
      stats: { views: '240M', rating: 8.9, duration: '45 mins' },
      badge: 'Platinum',
      status: 'Chart #1',
    },
    {
      id: 4,
      title: 'Shadow Realm Legends',
      description: 'Immersive RPG adventure with groundbreaking graphics and storytelling',
      division: 'gaming',
      category: 'new',
      stats: { views: '12M', rating: 9.7, duration: '100+ Hours' },
      badge: 'Game of the Year',
      status: 'Just Released',
    },
    {
      id: 5,
      title: 'The Last Frontier',
      description: 'Original series exclusive to our streaming platform breaking viewership records',
      division: 'streaming',
      category: 'trending',
      stats: { views: '150M', rating: 9.1, duration: '10 Episodes' },
      badge: 'Original',
      status: 'Binge Now',
    },
    {
      id: 6,
      title: 'Midnight Symphony',
      description: 'Critically acclaimed thriller that captivated audiences worldwide',
      division: 'film',
      category: 'awards',
      stats: { views: '120M', rating: 9.4, duration: '2h 18m' },
      badge: 'Oscar Nominee',
      status: 'In Theaters',
    },
    {
      id: 7,
      title: 'Beyond the Horizon',
      description: 'Documentary series showcasing the wonders of our planet',
      division: 'television',
      category: 'new',
      stats: { views: '65M', rating: 8.8, duration: '6 Episodes' },
      badge: 'New Series',
      status: 'Now Streaming',
    },
    {
      id: 8,
      title: 'Electric Pulse Tour',
      description: 'Record-breaking world tour concert series now available',
      division: 'music',
      category: 'trending',
      stats: { views: '200M', rating: 9.3, duration: '2h 30m' },
      badge: 'Live Concert',
      status: 'Available Now',
    },
    {
      id: 9,
      title: 'Velocity Champions',
      description: 'Next-gen racing game with photorealistic graphics',
      division: 'gaming',
      category: 'upcoming',
      stats: { views: '8M', rating: 0, duration: 'TBA' },
      badge: 'Pre-Order',
      status: 'Coming Q4 2025',
    },
    {
      id: 10,
      title: 'Mystic Gardens',
      description: 'Fantasy romance series capturing hearts across the globe',
      division: 'streaming',
      category: 'trending',
      stats: { views: '175M', rating: 8.6, duration: '12 Episodes' },
      badge: 'Fan Favorite',
      status: 'Season Finale',
    },
    {
      id: 11,
      title: 'Titan Protocol',
      description: 'Action-packed blockbuster with groundbreaking visual effects',
      division: 'film',
      category: 'new',
      stats: { views: '210M', rating: 8.9, duration: '2h 35m' },
      badge: 'Opening Weekend',
      status: 'Now Showing',
    },
    {
      id: 12,
      title: 'Resonance',
      description: 'Genre-defining album that transformed the music landscape',
      division: 'music',
      category: 'awards',
      stats: { views: '320M', rating: 9.6, duration: '52 mins' },
      badge: 'Grammy Winner',
      status: 'Multi-Platinum',
    },
  ];

  const filteredContent = contentItems.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.division === selectedFilter;
    const matchesCategory = selectedCategory === 'trending' || item.category === selectedCategory;
    return matchesFilter && matchesCategory;
  });

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6">
              Content Universe Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our vast entertainment portfolio across film, television, music, gaming, and streaming platforms
            </p>
          </div>

          {/* Division Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {divisions.map((division) => (
              <button
                key={division.id}
                onClick={() => setSelectedFilter(division.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedFilter === division.id
                    ? 'bg-primary text-primary-foreground shadow-cinematic-md'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                <division.icon size={20} />
                <span>{division.name}</span>
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredContent.length}</span> results
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-cinematic hover:shadow-cinematic-lg transition-all transform hover:-translate-y-2"
              >
                {/* Content Image/Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {divisions.find((d) => d.id === item.division)?.icon && (
                      <div className="text-muted-foreground/20">
                        {(() => {
                          const Icon = divisions.find((d) => d.id === item.division)?.icon;
                          return Icon ? <Icon size={80} /> : null;
                        })()}
                      </div>
                    )}
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-cinematic">
                    {item.badge}
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-cinematic">
                    {item.status}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-cinematic-lg">
                      <Play size={32} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {divisions.find((d) => d.id === item.division)?.name}
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{item.stats.views}</span>
                    </div>
                    {item.stats.rating > 0 && (
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-secondary" />
                        <span>{item.stats.rating}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{item.stats.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {filteredContent.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all shadow-cinematic">
                Load More Content
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredContent.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Play size={48} className="text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                No content found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to explore more content
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trending Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Platform Performance
            </h2>
            <p className="text-muted-foreground">
              Real-time engagement metrics across our content universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-cinematic">
              <TrendingUp size={36} className="text-accent mx-auto mb-3" />
              <div className="text-3xl font-display font-black text-foreground mb-1">
                5.2B
              </div>
              <div className="text-sm text-muted-foreground font-semibold">
                Total Views This Month
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-cinematic">
              <Eye size={36} className="text-secondary mx-auto mb-3" />
              <div className="text-3xl font-display font-black text-foreground mb-1">
                320M
              </div>
              <div className="text-sm text-muted-foreground font-semibold">
                Daily Active Users
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-cinematic">
              <Star size={36} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-display font-black text-foreground mb-1">
                8.9
              </div>
              <div className="text-sm text-muted-foreground font-semibold">
                Average Rating
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-cinematic">
              <Clock size={36} className="text-accent mx-auto mb-3" />
              <div className="text-3xl font-display font-black text-foreground mb-1">
                4.2H
              </div>
              <div className="text-sm text-muted-foreground font-semibold">
                Avg. Daily Watch Time
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
