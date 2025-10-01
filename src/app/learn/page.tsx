
'use client';

import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Book, GraduationCap, Rss, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LearnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <PageHeader
          title="Learn & Grow with Entrestate AI"
          description="Your hub for mastering AI in real estate, from foundational concepts to advanced market strategies."
          icon={<Book className="h-8 w-8" />}
        />
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                    <CardHeader>
                        <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-4">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold font-heading">Entrestate Academy</CardTitle>
                        <CardDescription>Structured courses and certifications to become an AI-powered Super Agent.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/learn/academy">
                            <Button variant="outline" className="w-full">Explore Academy <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                    <CardHeader>
                        <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-4">
                            <Rss className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl font-bold font-heading">Entrestate Blog</CardTitle>
                        <CardDescription>Stay updated with expert insights, industry trends, and product announcements.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/learn/blog">
                            <Button variant="outline" className="w-full">Read the Blog <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
