
'use client';

import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { School, Building, Landmark, LineChart, Sparkles, Star, Bot, ArrowRight, Feather, Database, Workflow } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'; // Import Alert components

const curriculumBranches = [
    { 
        title: "The Developer Curriculum", 
        icon: <Building />,
        description: "Master the art of project marketing, from pre-launch strategy to sales velocity, leveraging AI-driven development insights.",
        audience: "For marketing managers at development firms and agents specializing in off-plan sales, powered by Gemini AI guidance.",
        courses: ["Off-Plan Marketing Mastery", "Channel Partner Management", "Project Launch Sequencing"],
        slug: 'developer-curriculum',
    },
    { 
        title: "The Government Curriculum", 
        icon: <Landmark />,
        description: "Navigate regulations, understand master plans, and leverage government data for a competitive edge with AI analysis.",
        audience: "For public sector employees, policy advisors, and compliance-focused brokers seeking AI-driven policy insights.",
        courses: ["DLD & RERA Compliance", "Understanding Urban Master Plans", "Public-Private Partnerships"],
        slug: 'government-curriculum',
    },
    { 
        title: "The Market Curriculum", 
        icon: <LineChart />,
        description: "Become an expert in market analysis, trend forecasting, and data-driven investment strategies, all accelerated by Gemini AI.",
        audience: "For investment advisors, portfolio managers, and ambitious agents utilizing AI for market advantage.",
        courses: ["Advanced Deal Analysis", "Predictive Market Forecasting", "Cross-Portal Analytics"],
        slug: 'market-curriculum',
    },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Entrestate AI Academy"
        description="Your central hub for mastering the new landscape of real estate with Gemini. Choose an AI-powered curriculum, complete courses, and earn certifications."
        icon={<School className="h-8 w-8" />}
      />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 space-y-16">
        <section>
            <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">My AI Progress</CardTitle>
                    <CardDescription>Your journey to becoming a Super Agent, powered by Gemini AI.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background/50 rounded-lg text-center">
                        <p className="text-sm font-semibold text-muted-foreground">AI Proficiency Score</p>
                        <p className="text-4xl font-bold text-primary flex items-center justify-center gap-2"><Sparkles className="h-8 w-8" />1,250</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg text-center">
                        <p className="text-sm font-semibold text-muted-foreground">AI Mastery Badges</p>
                        <p className="text-4xl font-bold text-primary flex items-center justify-center gap-2"><Star className="h-8 w-8"/>3</p>
                    </div>
                     <div className="p-4 bg-background/50 rounded-lg">
                        <p className="text-sm font-semibold text-muted-foreground text-center mb-2">Level Progress</p>
                        <Progress value={66} />
                        <p className="text-xs text-center text-muted-foreground mt-1">Next Level: AI Innovator</p>
                    </div>
                </CardContent>
            </Card>
        </section>

        <section>
            <Alert className="bg-amber-500/10 border-amber-500/20 text-center p-8">
                <Bot className="h-8 w-8 text-amber-500 mx-auto mb-2"/>
                <AlertTitle className="text-2xl font-bold">New: Gemini AI Kickstart</AlertTitle>
                <AlertDescription className="max-w-2xl mx-auto text-muted-foreground mt-2">
                    This foundational course covers how to use our core AI tools to find better leads, create stunning marketing content, and close deals faster. No technical experience required.
                </AlertDescription>
                <div className="mt-6">
                    <Button variant="default">Start Your AI Journey (Free)</Button>
                </div>
            </Alert>
        </section>

        <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">Choose Your AI Curriculum</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Each curriculum provides a structured path to mastering a specific domain within the real estate industry, powered by intelligent insights.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {curriculumBranches.map(branch => (
                    <Card key={branch.title} className="hover:shadow-xl transition-shadow flex flex-col bg-card/80">
                        <CardHeader>
                            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mb-4">
                                {React.cloneElement(branch.icon as React.ReactElement, { className: 'h-8 w-8' })}
                            </div>
                            <CardTitle>{branch.title}</CardTitle>
                            <CardDescription>{branch.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm">Target Audience:</h4>
                                <p className="text-sm text-muted-foreground">{branch.audience}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-sm">Example AI Courses:</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {branch.courses.map(course => <li key={course}>{course}</li>)}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/academy/curriculum/${branch.slug}`} className="w-full">
                                <Button variant="secondary" className="w-full">Explore AI Curriculum <ArrowRight className="ml-2 h-4 w-4"/></Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>

         <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">AI App & Solution Guides</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Learn how to master each AI tool in the Entrestate suite with intelligent guides and step-by-step instructions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/blog/meta-auto-pilot"><Button variant="outline" className="w-full justify-start h-12 text-base"><Feather className="mr-3 h-5 w-5"/>How to use Meta Auto Pilot AI</Button></Link>
                <Link href="/blog/listing-generator"><Button variant="outline" className="w-full justify-start h-12 text-base"><Database className="mr-3 h-5 w-5"/>How to use Listing Generator AI</Button></Link>
                <Link href="/resources/flows"><Button variant="outline" className="w-full justify-start h-12 text-base"><Workflow className="mr-3 h-5 w-5"/>How to build an AI Flow</Button></Link>
            </div>
             <div className="text-center mt-8">
                 <Link href="/blog">
                    <Button>Explore All AI Guides</Button>
                 </Link>
             </div>
        </section>
      </main>
    </div>
  );
}
