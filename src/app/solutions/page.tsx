
'use client';

import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Sparkles, Telescope, MessageCircle, FileJson, Bot } from 'lucide-react'; // Added Bot
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { solutions } from '@/lib/solutions-data';

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
        <PageHeader
        title="AI-Powered Solutions" // Updated title
        description="High-level, outcome-oriented products that leverage Gemini AI to solve major business problems for the real estate industry." // Updated description
        icon={<Sparkles className="h-8 w-8" />}
        />
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {solutions.map(solution => (
                <Link href={`/solutions/${solution.slug}`} key={solution.slug}>
                    <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1 bg-card/50 backdrop-blur-lg">
                        <CardHeader>
                            <div className="p-4 bg-primary/10 text-primary rounded-2xl w-fit mb-4">
                                {
                                    (() => {
                                        switch (solution.icon) {
                                            case 'Telescope': return <Telescope className="h-8 w-8" />;
                                            case 'MessageCircle': return <MessageCircle className="h-8 w-8" />;
                                            case 'FileJson': return <FileJson className="h-8 w-8" />;
                                            default: return <Bot className="h-8 w-8" />;
                                        }
                                    })()
                                }
                            </div>
                            <CardTitle>{solution.title}</CardTitle>
                            <CardDescription>{solution.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
