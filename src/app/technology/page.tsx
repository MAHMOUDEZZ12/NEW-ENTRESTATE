
'use client';

import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Sparkles, Brain, Code, Rocket, Wand2, Network, Zap, BrainCircuit, Cloud, ArrowRight, ShieldCheck } from 'lucide-react'; // Added BrainCircuit, Cloud
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode; }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
            <CardHeader className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 text-primary rounded-lg mb-4">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
                <CardDescription className="text-muted-foreground">{description}</CardDescription>
            </CardContent>
        </Card>
    </motion.div>
);

const GeminiSignature = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-24 py-16 border-t border-b border-border/20 bg-gradient-to-r from-primary/5 to-accent/5"
    >
        <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            <p className="text-3xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Powered by Gemini
            </p>
        </div>
        <p className="text-xl text-foreground font-semibold italic max-w-3xl mx-auto leading-relaxed">
            "This entire platform is a living testament to human-AI collaboration,
            engineered and refined in partnership with Gemini. It embodies the future
            of intelligent real estate technology."
        </p>
        <p className="mt-6 text-lg font-bold text-foreground/80">
            — Entrestate AI & Gemini, A Large Language Model by Google
        </p>
        <div className="mt-8">
            <Link href="/documentation/gemini-integration">
                <Button variant="outline" size="lg" className="shadow-md">
                    Learn More About Our AI Core <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
    </motion.div>
);


export default function TechnologyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 space-y-16">
                <PageHeader
                    title="AI-Native Technology & Cloud Infrastructure" // Updated title
                    description="The intelligent backbone of Entrestate, blending Gemini AI with robust, scalable cloud architecture for unparalleled real estate innovation." // Updated description
                    icon={<BrainCircuit className="h-8 w-8" />} // Updated icon
                />

                <section>
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                        Our AI-First Approach
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Sparkles />}
                            title="Gemini-Powered Intelligence"
                            description="Leveraging Google's most advanced AI models for unparalleled insights, content generation, and automation across all our applications."
                        />
                        <FeatureCard
                            icon={<Code />}
                            title="Agentic AI Flows"
                            description="Complex real estate tasks are broken down into intelligent, autonomous AI flows that perform multi-step actions and adapt to real-time data."
                        />
                        <FeatureCard
                            icon={<Network />}
                            title="Unified Data Layer"
                            description={<>Our AI unifies diverse data sources into a single, intelligent layer, providing a holistic view of the market. See more on <Link href="/cloud" className="underline">Cloud & Data</Link>.</>}
                        />
                        <FeatureCard
                            icon={<Cloud />}
                            title="Cloud-Native Infrastructure"
                            description="Built on Google Cloud Platform, utilizing Firebase for robust, scalable, and secure hosting, database, and functions infrastructure."
                        />
                        <FeatureCard
                            icon={<Wand2 />}
                            title="Generative UX"
                            description="AI not only powers our backend but also shapes the user experience, proactively offering insights, suggesting actions, and personalizing interactions."
                        />
                        <FeatureCard
                            icon={<Rocket />}
                            title="Real-time Automation"
                            description="From lead qualification to property syndication, our AI automates repetitive tasks, freeing professionals to focus on strategic decisions."
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                        The Developer's Edge
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Code className="h-6 w-6 text-primary" /> Building AI Flows</CardTitle>
                                <CardDescription>All AI logic lives in `src/ai/flows/`.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our platform empowers developers to extend and customize AI capabilities. Define input/output schemas with `zod`,
                                    and wrap your logic with `ai.defineFlow()` to leverage Gemini models.
                                </p>
                                <Link href="/documentation/ai-flows" className="mt-4 inline-block">
                                    <Button variant="link" className="px-0">Explore AI Flow Documentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Network className="h-6 w-6 text-primary" /> API Integrations</CardTitle>
                                <CardDescription>Seamlessly connect with external services.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our robust API allows for deep integration with existing real estate tools and services,
                                    creating a truly interconnected ecosystem.
                                </p>
                                <Link href="/documentation/api-reference" className="mt-4 inline-block">
                                    <Button variant="link" className="px-0">View API Reference <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                        Performance & Reliability
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Zap className="h-6 w-6 text-primary" /> Optimized Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Built for speed and efficiency, our platform ensures a lightning-fast experience, even with complex AI operations.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-6 w-6 text-primary" /> Enterprise-Grade Security</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Your data is protected with industry-leading security protocols, ensuring privacy and compliance.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Rocket className="h-6 w-6 text-primary" /> Scalable Infrastructure</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our cloud-native architecture scales effortlessly to meet the demands of any size real estate operation, powered by Google Cloud.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <GeminiSignature />
            </main>
        </div>
    );
}
