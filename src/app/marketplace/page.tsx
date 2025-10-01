
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils'; 
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion'; 
import {
  AppWindow,
  Zap,
  Gem,
  Rocket,
  Star,
  MessageCircle,
  FileJson,
  Telescope,
  ArrowRight,
  Shield, 
  BrainCircuit, 
  TrendingUp, 
  Package,
  Brush, // For content/design
  Target, // For campaigns
  Users2, // For leads/CRM
  BarChart, // For reports
  Cloud, // For general platform/portal
  Handshake, // For sales/assistant (now used for Sales Script Writer)
  Globe, // For Landing Page Designer
  DollarSign, // For Commission Calculator
  Pen, // Keeping Pen for general writing/editing if needed elsewhere
  Lightbulb // For insights
} from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  category: string; 
  price: string;
  href: string;
}

interface Suite {
    name: string;
    icon: React.ReactElement;
    description: string;
    apps: Tool[];
    order: number; // New field to control display order
}

const aiSuites: Suite[] = [
    {
        name: "Marketing & Content AI",
        icon: <Star className="h-6 w-6"/>,
        description: "AI-powered tools to elevate your brand, generate compelling content, and engage your audience more effectively than ever before.",
        order: 1, // Prioritize this suite
        apps: [
            {
                id: 'campaign-creator-meta',
                title: 'Meta Campaign Creator',
                description: 'AI-driven creation and optimization of Facebook and Instagram ad campaigns for maximum reach and ROI.',
                icon: <Target />,
                color: '#3B5998',
                category: 'Ad Management',
                price: '$109/month',
                href: '/learn/blog/campaign-creator-meta',
            },
            {
                id: 'instagram-leads',
                title: 'Instagram Lead Bot',
                description: 'Automate lead capture and initial engagement directly from your Instagram DMs and comments.',
                icon: <Users2 />,
                color: '#C13584',
                category: 'Lead Generation',
                price: '$59/month',
                href: '/learn/blog/instagram-leads',
            },
            {
                id: 'property-marketer-ai',
                title: 'Property Marketer AI',
                description: 'Comprehensive AI to plan, execute, and optimize property marketing campaigns across all digital channels.',
                icon: <Target />,
                color: '#F1C40F',
                category: 'Marketing Automation',
                price: '$129/month',
                href: '/learn/blog/property-marketer-ai',
            },
            {
                id: 'ai-brand-creator',
                title: 'AI Brand Creator',
                description: 'Generate stunning brand assets and marketing copy with AI, ensuring consistent messaging and strong brand identity.',
                icon: <Brush />,
                color: '#FFD166',
                category: 'Marketing AI',
                price: '$79/month',
                href: '/learn/blog/ai-brand-creator',
            },
            {
                id: 'social-post-generator',
                title: 'Social Post Generator',
                description: 'Create engaging social media posts tailored for real estate with relevant hashtags, compelling copy, and optimized imagery.',
                icon: <MessageCircle />,
                color: '#9B59B6',
                category: 'Content Creation',
                price: '$39/month',
                href: '/learn/blog/social-post-generator',
            },
            {
                id: 'landing-page-designer',
                title: 'Landing Page Designer',
                description: 'Design high-converting landing pages for your listings and campaigns with AI assistance and conversion-focused templates.',
                icon: <Globe />, 
                color: '#3498DB',
                category: 'Web Development',
                price: '$119/month',
                href: '/learn/blog/landing-page-designer',
            },
        ]
    },
    {
        name: "Listing & Portal AI",
        icon: <Cloud className="h-6 w-6"/>,
        description: "Streamline your listing management, from creation to multi-portal syndication, ensuring accuracy and broad reach.",
        order: 2, // Prioritize this suite after Marketing
        apps: [
            {
                id: 'mega-listing-pro-2',
                title: 'MEGA LISTING PRO 2',
                description: 'From Listings to MEGA PRO Listings. Stop blaming portals and perfect your listings with AI-driven management.',
                icon: <FileJson />,
                color: '#FF6B6B',
                category: 'Listing Management',
                price: '$68/month',
                href: '/solutions/mega-listing-pro-2',
            },
            {
                id: 'listing-portal-ai',
                title: 'Listing Portal AI',
                description: 'Intelligent automation for seamless listing distribution across all major property portals.',
                icon: <Cloud />,
                color: '#8E44AD',
                category: 'Listing Management',
                price: '$89/month',
                href: '/learn/blog/listing-portal-ai',
            },
        ]
    },
    {
        name: "Core AI Solutions", 
        icon: <Zap className="h-6 w-6"/>,
        description: "Our flagship AI platforms designed to revolutionize key real estate operations, offering unparalleled intelligence and efficiency.",
        order: 3, // Display this suite later
        apps: [
            {
                id: 'estchat-x3',
                title: 'ESTCHAT X3',
                description: 'The conversational frontline that unifies all communication into a single, intelligent, and commercially productive stream. Never miss a lead.',
                icon: <MessageCircle />,
                color: '#00C9A7',
                category: 'Communication AI',
                price: '$149/month',
                href: '/solutions/estchat-x3',
            },
            {
                id: 'pro-search-eng-x3',
                title: 'PRO SEARCH ENG. x3',
                description: 'We turned the untouched search bar into an unmatched search engine. Predictive, personalized, and powerful.',
                icon: <Telescope />,
                color: '#4ECDC4',
                category: 'Market Intelligence',
                price: '$190/month',
                href: '/solutions/pro-search-eng-x3',
            },
        ]
    },
     {
        name: "Sales & CRM AI",
        icon: <Users2 className="h-6 w-6"/>,
        description: "Automate lead nurturing, enhance client interactions, and close deals faster with intelligent sales tools and CRM integrations.",
        order: 4,
        apps: [
            {
                id: 'lead-investigator',
                title: 'Lead Investigator AI',
                description: 'Deep-dive into lead profiles to uncover motivations, preferences, and investment potential for personalized outreach.',
                icon: <Telescope />,
                color: '#E74C3C',
                category: 'CRM & Sales',
                price: '$99/month',
                href: '/learn/blog/lead-investigator',
            },
            {
                id: 'commission-calculator',
                title: 'Commission Calculator AI',
                description: 'Accurately calculate complex commission structures and scenarios instantly, ensuring transparency and fairness.',
                icon: <DollarSign />,
                color: '#2ECC71',
                category: 'Finance AI',
                price: '$29/month',
                href: '/learn/blog/commission-calculator',
            },
            {
                id: 'sales-script-writer',
                title: 'Sales Script Writer',
                description: 'Generate personalized and persuasive sales scripts for various client interaction scenarios, optimizing conversion rates.',
                icon: <Handshake />,
                color: '#F39C12',
                category: 'Communication AI',
                price: '$49/month',
                href: '/learn/blog/sales-script-writer',
            },
             {
                id: 'sales-ai-assistant',
                title: 'Sales AI Assistant',
                description: 'Your dedicated AI co-pilot for sales, providing real-time insights, task automation, and client communication support.',
                icon: <Handshake />,
                color: '#1ABC9C',
                category: 'CRM & Sales',
                price: '$139/month',
                href: '/learn/blog/sales-ai-assistant',
            },
        ]
    },
     {
        name: "Analytics & Reporting AI",
        icon: <TrendingUp className="h-6 w-6"/>,
        description: "Gain deeper market insights and automated reporting to inform your strategic decisions and stay ahead of the curve.",
        order: 5,
        apps: [
            {
                id: 'market-report-generator',
                title: 'Market Report Generator',
                description: 'Instantly generate comprehensive market analysis reports for any selected area or property type with AI-driven accuracy.',
                icon: <BarChart />,
                color: '#A0D911',
                category: 'Analytics',
                price: '$89/month',
                href: '/learn/blog/market-report-generator',
            },
            {
                id: 'trend-forecaster',
                title: 'Trend Forecaster AI',
                description: 'Predict future market trends and property value changes based on historical data and advanced AI models for proactive planning.',
                icon: <TrendingUp />,
                color: '#5C6BC0',
                category: 'Market Intelligence',
                price: '$109/month',
                href: '/learn/blog/trend-forecaster',
            },
        ]
    },
];


export default function MarketplacePage() {
  const sortedSuites = useMemo(() => aiSuites.sort((a, b) => a.order - b.order), []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-8">
        {/* Hero Section with Typography */}
        <motion.section 
            className="text-center py-20 md:py-24 lg:py-32 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight max-w-4xl mx-auto">
                <span className="text-primary">Lead quality isn’t luck.</span>
                <br />
                It requires fluency in algorithms: <span className="text-accent">AI speaking to AI.</span>
            </h1>
        </motion.section>

        {/* All Suites Section - Now sorted by order and with dynamic layouts */}
        {sortedSuites.map(suite => (
            <section key={suite.name} className="py-12">
                <div className="text-center mb-10">
                    <div className="p-3 bg-secondary/20 text-secondary-foreground rounded-full w-fit mx-auto mb-4">
                        {React.cloneElement(suite.icon, { className: 'h-8 w-6' })}
                    </div>
                    <h2 className="text-3xl font-bold font-heading mb-3">{suite.name}</h2>
                    {/* Removed suite description as per the new concise requirement */}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {suite.apps.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            // Make the first app in Marketing & Content AI suite span 2 columns on larger screens
                            className={cn(
                                "h-full",
                                suite.name === "Marketing & Content AI" && index === 0 && "lg:col-span-2 md:col-span-2"
                            )}
                            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="flex flex-col h-full overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-200 shadow-lg hover:shadow-xl">
                                <CardHeader className="flex flex-col items-start p-6 pb-4">
                                    <div className="p-3 rounded-md text-white mb-4" style={{ backgroundColor: tool.color }}>
                                        {React.cloneElement(tool.icon, { className: 'h-7 w-7' })}
                                    </div>
                                    <CardTitle className="text-2xl font-semibold font-heading text-primary">{tool.title}</CardTitle>
                                    {tool.category && <Badge variant="secondary" className="mt-2 text-sm px-3 py-1">{tool.category}</Badge>}
                                </CardHeader>
                                <CardContent className="flex-1 p-6 pt-0">
                                    <CardDescription className="text-muted-foreground text-base line-clamp-3 mb-4">
                                        {tool.description}
                                    </CardDescription>
                                    <p className="text-xl font-bold text-foreground mb-4">{tool.price}</p>
                                    <Link href={tool.href}>
                                        <Button variant="outline" className="w-full">View Details <ArrowRight className="ml-2 h-4 w-4"/></Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        ))}
      </main>
    </div>
  );
}
