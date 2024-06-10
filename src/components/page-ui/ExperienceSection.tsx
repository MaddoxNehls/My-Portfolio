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
        <li>
          Software Troubleshooting and Optimization: Applied diagnostic techniques and problem-solving skills to resolve software compatibility issues
          in Intel’s processing hardware, enhancing system efficiency and user satisfaction.
        </li>
        <li>
          Technical Training and Leadership: Orchestrated technical training sessions for sales associates, emphasizing the integration of Intel
          technologies with other software and hardware systems, mirroring a team lead role in software project cycles.
        </li>
        <li>
          Advanced Data Analytics: Utilized advanced data analytics to interpret consumer behavior and product performance, aiding in the iterative
          design and enhancement of Intel’s tech products based on real-time feedback.
        </li>
        <li>
          Agile Project Collaboration: Collaborated with a cross-functional team to implement agile sales strategies and product demonstrations that
          adapted to evolving tech trends, demonstrating project management and adaptability.
        </li>
      </ul>
    ),
    badge: 'Intel/Apr 2024 - Present'
  },
  {
    title: 'Software Developer Intern',
    description: (
      <ul className="list-disc">
        <li>
          Database Management and Optimization: Utilized MySQL and PostgreSQL for database queries and performance enhancements, contributing to
          efficient data handling and retrieval.
        </li>
        <li>
          Developed and Maintained Backend Features: Leveraged PHP and Laravel to support and optimize MissionNext’s job matching website, ensuring
          robust and scalable functionality.
        </li>
        <li>
          Utilized advanced data analytics to interpret consumer behavior and product performance, aiding in the enhancement of Intel’s tech products
          based on real-time feedback.
        </li>
        <li>
          Problem-Solving and Collaboration: Independently resolved complex programming issues and collaborated with customer service and web
          developers to improve website performance and user experience.
        </li>
      </ul>
    ),
    badge: 'MissionNext/Nov 2023 - Feb 2024'
  },
  {
    title: 'Software Engineer Intern',
    description: (
      <ul className="list-disc">
        <li>Leveraged technical expertise to provide valuable career insights to underserved youth aspiring to enter the tech industry.</li>
        <li>
          Answered student questions remotely, contributing to democratizing career advice and shaping the futures of the next generation of software
          engineers.
        </li>
        <li>Engaged in educational initiatives to enhance technical knowledge and career readiness for students.</li>
      </ul>
    ),
    badge: 'CareerVillage - Volunteer/Sep 2022 - Sep 2023'
  },
  {
    title: 'Engineering Undergraduate Teaching Assistant',
    description: (
      <ul className="list-disc">
        <li>
          Guided 50+ engineering students through object-oriented programming and algorithms in C++ in both individual and group settings. Fostered a
          student-centric, collaborative learning atmosphere using active listening and tailored teaching methods.
        </li>
        <li>
          Curriculum Development and Code Review: Enhanced course materials and conducted code reviews, improving student understanding of best
          practices and complexities in software development.
        </li>
      </ul>
    ),
    badge: 'Portland Community College/Mar 2022 - Aug 2022'
  }
];
