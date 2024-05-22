'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Software Engineer',
        className: 'text-blue-500 dark:text-blue-500'
    },
    {
        text: 'Student',
        className: 'text-blue-500 dark:text-blue-500'
    },
    {
        text: 'Tech Enthusiast',
        className: 'text-blue-500 dark:text-blue-500'
    },
    {
        text: 'Developer',
        className: 'text-blue-500 dark:text-blue-500'
    },
    {
        text: 'Problem Solver',
        className: 'text-blue-500 dark:text-blue-500'
    }
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
            <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  "> Hello, I&apos;m Maddox. A passionate Software Engineer.</p>
            <TypewriterEffectSmooth words={words} />
            <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1FnlRu2z7Xefjx8NOampGs8RgIIojgS4B/view?usp=sharing">
                    <Button className="download-cv" variant="default">Download CV</Button>
                </Link>
                <Link href="#contact-me">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}
