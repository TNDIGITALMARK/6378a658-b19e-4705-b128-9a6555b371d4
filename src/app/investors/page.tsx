'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TrendingUp, DollarSign, BarChart3, PieChart, ArrowUpRight, ArrowDownRight, Download, Calendar, FileText, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function InvestorRelationsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly');

  const stockData = {
    currentPrice: 142.50,
    change: 3.25,
    changePercent: 2.33,
    marketCap: '85.2B',
    volume: '12.4M',
    peRatio: 24.8,
    dividendYield: 2.8,
    high52Week: 158.32,
    low52Week: 98.45,
  };

  const financialHighlights = [
    {
      label: 'Quarterly Revenue',
      value: '$12.8B',
      change: '+12.4%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-secondary',
    },
    {
      label: 'Net Income',
      value: '$2.4B',
      change: '+18.7%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-accent',
    },
    {
      label: 'Operating Margin',
      value: '18.9%',
      change: '+2.1%',
      trend: 'up',
      icon: PieChart,
      color: 'text-primary',
    },
    {
      label: 'EPS (Diluted)',
      value: '$4.52',
      change: '+15.3%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-secondary',
    },
  ];

  const revenueBySegment = [
    { segment: 'Film Studios', revenue: '$18.4B', percentage: 32, change: '+8.2%' },
    { segment: 'Television Networks', revenue: '$15.2B', percentage: 26, change: '+6.5%' },
    { segment: 'Streaming Platforms', revenue: '$12.8B', percentage: 22, change: '+24.1%' },
    { segment: 'Music Labels', revenue: '$7.5B', percentage: 13, change: '+11.3%' },
    { segment: 'Gaming Studios', revenue: '$4.1B', percentage: 7, change: '+32.5%' },
  ];

  const strategicInitiatives = [
    {
      title: 'Global Streaming Expansion',
      description: 'Launching streaming services in 15 new markets across Asia and Latin America',
      impact: 'Projected 30M new subscribers',
      status: 'In Progress',
    },
    {
      title: 'Content Production Scaling',
      description: 'Investing $8B in original content production over the next 18 months',
      impact: '120+ new titles in development',
      status: 'Active',
    },
    {
      title: 'Technology Innovation',
      description: 'AI-powered content recommendation and production optimization systems',
      impact: '25% efficiency improvement',
      status: 'Deployment Phase',
    },
    {
      title: 'Strategic Partnerships',
      description: 'Collaborations with leading tech companies for immersive experiences',
      impact: 'Next-gen entertainment',
      status: 'Negotiation',
    },
  ];

  const reports = [
    {
      title: 'Q4 2024 Earnings Report',
      date: 'February 8, 2025',
      type: 'Quarterly Report',
      size: '2.4 MB',
    },
    {
      title: 'Annual Report 2024',
      date: 'January 15, 2025',
      type: 'Annual Report',
      size: '8.7 MB',
    },
    {
      title: 'Investor Presentation Q4',
      date: 'February 8, 2025',
      type: 'Presentation',
      size: '12.3 MB',
    },
    {
      title: 'Corporate Governance Report',
      date: 'December 20, 2024',
      type: 'Governance',
      size: '1.8 MB',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Q1 2025 Earnings Call',
      date: 'May 10, 2025',
      time: '4:30 PM ET',
      type: 'Earnings Call',
    },
    {
      title: 'Annual Shareholders Meeting',
      date: 'June 22, 2025',
      time: '10:00 AM ET',
      type: 'Shareholder Meeting',
    },
    {
      title: 'Industry Conference Presentation',
      date: 'July 18, 2025',
      time: '2:00 PM ET',
      type: 'Conference',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full mb-6">
              <Building2 size={16} className="text-accent" />
              <span className="text-sm font-semibold text-foreground">NASDAQ: ENTMT</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial transparency and strategic insights for shareholders and potential investors
            </p>
          </div>
        </div>
      </section>

      {/* Stock Performance Card */}
      <section className="py-8 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-cinematic-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Current Price */}
              <div className="lg:col-span-1">
                <p className="text-sm text-muted-foreground font-semibold mb-2">Current Stock Price</p>
                <div className="flex items-baseline space-x-3">
                  <span className="text-5xl font-display font-black text-foreground">
                    ${stockData.currentPrice.toFixed(2)}
                  </span>
                  <div className={`flex items-center space-x-1 ${stockData.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stockData.change > 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                    <span className="text-lg font-bold">
                      {stockData.change > 0 ? '+' : ''}{stockData.change} ({stockData.changePercent}%)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Updated: {new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })} ET
                </p>
              </div>

              {/* Key Metrics */}
              <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Market Cap</p>
                  <p className="text-xl font-display font-bold text-foreground">{stockData.marketCap}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Volume</p>
                  <p className="text-xl font-display font-bold text-foreground">{stockData.volume}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">P/E Ratio</p>
                  <p className="text-xl font-display font-bold text-foreground">{stockData.peRatio}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Dividend Yield</p>
                  <p className="text-xl font-display font-bold text-foreground">{stockData.dividendYield}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">52W High</p>
                  <p className="text-xl font-display font-bold text-foreground">${stockData.high52Week}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">52W Low</p>
                  <p className="text-xl font-display font-bold text-foreground">${stockData.low52Week}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Financial Highlights
            </h2>
            <p className="text-muted-foreground">
              Q4 2024 Performance Overview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight) => (
              <div key={highlight.label} className="bg-card border border-border rounded-xl p-6 shadow-cinematic hover:shadow-cinematic-md transition-shadow">
                <highlight.icon size={32} className={`${highlight.color} mb-4`} />
                <p className="text-sm text-muted-foreground font-semibold mb-2">{highlight.label}</p>
                <p className="text-3xl font-display font-black text-foreground mb-2">
                  {highlight.value}
                </p>
                <div className={`flex items-center space-x-1 text-sm font-bold ${
                  highlight.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {highlight.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span>{highlight.change} YoY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue by Segment */}
      <section className="py-16 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Revenue by Business Segment
            </h2>
            <p className="text-muted-foreground">
              Full Year 2024 Performance
            </p>
          </div>

          <div className="space-y-4">
            {revenueBySegment.map((segment) => (
              <div key={segment.segment} className="bg-background border border-border rounded-xl p-6 shadow-cinematic">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {segment.segment}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-display font-black text-foreground">
                      {segment.revenue}
                    </span>
                    <span className="text-sm font-bold text-green-500 flex items-center space-x-1">
                      <ArrowUpRight size={14} />
                      <span>{segment.change}</span>
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-metallic transition-all duration-500"
                    style={{ width: `${segment.percentage}%` }}
                  />
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  {segment.percentage}% of total revenue
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Strategic Initiatives
            </h2>
            <p className="text-muted-foreground">
              Driving long-term growth and shareholder value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicInitiatives.map((initiative) => (
              <div key={initiative.title} className="bg-card border border-border rounded-xl p-6 shadow-cinematic hover:shadow-cinematic-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {initiative.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {initiative.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="bg-muted px-4 py-3 rounded-lg">
                  <p className="text-sm font-semibold text-foreground">
                    Impact: {initiative.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports and Events */}
      <section className="py-16 bg-card">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Financial Reports */}
            <div>
              <h2 className="text-3xl font-display font-black text-foreground mb-8">
                Financial Reports
              </h2>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.title} className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {report.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{report.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FileText size={14} />
                            <span>{report.type}</span>
                          </span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                      <button className="ml-4 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-display font-black text-foreground mb-8">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="bg-background border border-border rounded-xl p-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-metallic rounded-lg flex items-center justify-center flex-shrink-0 shadow-cinematic">
                        <Calendar size={28} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{event.date}</p>
                          <p>{event.time}</p>
                          <span className="inline-block px-2 py-1 bg-muted text-foreground text-xs font-semibold rounded">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary-foreground mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Subscribe to investor updates and receive real-time notifications about financial results and company news
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-primary-foreground text-primary font-bold text-lg rounded-lg hover:bg-background hover:text-foreground transition-all shadow-cinematic-lg">
              Subscribe to Alerts
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary-foreground hover:text-primary transition-all">
              Contact Investor Relations
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
