'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'IT Advisor',
        description: (
            <ul className="list-disc">
                <li>Applied diagnostic techniques to resolve software compatibility issues in Intel’s processing hardware, enhancing system efficiency and user satisfaction.</li>
                <li>Orchestrated technical training sessions for sales associates, focusing on integrating Intel technologies with other software and hardware systems.</li>
                <li>Utilized advanced data analytics to interpret consumer behavior and product performance, aiding in the enhancement of Intel’s tech products based on real-time feedback.</li>
                <li>Collaborated with a cross-functional team to implement agile sales strategies and product demonstrations, showcasing project management and adaptability.</li>
            </ul>
        ),
        badge: 'Intel/Apr 2024 - Present'
    },
    {
        title: 'Volunteer Software Engineer',
        description: (
            <ul className="list-disc">
                <li>Leveraged technical expertise to provide valuable career insights to underserved youth aspiring to enter the tech industry.</li>
                <li>Answered student questions remotely, contributing to democratizing career advice and shaping the futures of the next generation of software engineers.</li>
                <li>Engaged in educational initiatives to enhance technical knowledge and career readiness for students.</li>
            </ul>
        ),
        badge: 'CareerVillage.org/May 2024 - Present'
    },
    {
        title: 'Engineering Undergraduate Teaching Assistant',
        description: (
            <ul className="list-disc">
                <li>Guided 50+ engineering students through object-oriented programming and algorithms in C++ in both individual and group settings.</li>
                <li>Enhanced course materials and conducted code reviews, improving student understanding of best practices and complexities in software development.</li>
                <li>Fostered a student-centric, collaborative learning atmosphere using active listening and tailored teaching methods.</li>
            </ul>
        ),
        badge: 'Portland Community College/Mar 2023 - Jun 2023'
    },
];

