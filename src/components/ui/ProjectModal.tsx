import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    FaJava, FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, FaLinux, FaDocker, FaStripe, FaCloud, FaUpload
} from 'react-icons/fa';
import {
    SiPostgresql, SiSpringboot, SiTailwindcss, SiRedux, SiMongodb, SiReacthookform, SiTypescript, SiNextdotjs, SiCplusplus, SiPrisma, SiRadixui
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { MdSecurity } from 'react-icons/md';
import { DiHtml5, DiCss3, DiReact, DiNodejsSmall } from 'react-icons/di';

const techStackIcons = {
    'MongoDB': <SiMongodb className="w-6 h-6" />,
    'Express': <SiSpringboot className="w-6 h-6" />,
    'React': <FaReact className="w-6 h-6" />,
    'Node.js': <FaNodeJs className="w-6 h-6" />,
    'Next.js': <SiNextdotjs className="w-6 h-6" />,
    'JavaScript': <IoLogoJavascript className="w-6 h-6" />,
    'TypeScript': <SiTypescript className="w-6 h-6" />,
    'HTML': <FaHtml5 className="w-6 h-6" />,
    'CSS': <FaCss3Alt className="w-6 h-6" />,
    'Java': <FaJava className="w-6 h-6" />,
    'PostgreSQL': <SiPostgresql className="w-6 h-6" />,
    'Spring Boot': <SiSpringboot className="w-6 h-6" />,
    'Tailwind CSS': <SiTailwindcss className="w-6 h-6" />,
    'Redux': <SiRedux className="w-6 h-6" />,
    'AWS': <FaAws className="w-6 h-6" />,
    'Linux': <FaLinux className="w-6 h-6" />,
    'Docker': <FaDocker className="w-6 h-6" />,
    'C++': <SiCplusplus className="w-6 h-6" />,
    'Vue.js': <IoLogoVue className="w-6 h-6" />,
    'Prisma': <SiPrisma className="w-6 h-6" />,
    'Stripe': <FaStripe className="w-6 h-6" />,
    'Radix UI': <SiRadixui className="w-6 h-6" />,
    'Uploadthing': <FaUpload className="w-6 h-6" />,
    'React Hook Form': <SiReacthookform className="w-6 h-6" />,
    'Clerk': <MdSecurity className="w-6 h-6" />,
    'PostCSS': <FaCloud className="w-6 h-6" />,
    'Autoprefixer': <FaCloud className="w-6 h-6" />,
    'ESLint': <FaCloud className="w-6 h-6" />,
    'Prettier': <FaCloud className="w-6 h-6" />,
    'html2canvas': <DiHtml5 className="w-6 h-6" />,
    'lucide-react': <DiReact className="w-6 h-6" />,
    're-resizable': <DiNodejsSmall className="w-6 h-6" />,
    'react-ace': <DiReact className="w-6 h-6" />,
    'react-outside-click-handler': <DiReact className="w-6 h-6" />,
    'react-query': <DiReact className="w-6 h-6" />,
    '@formkit/auto-animate': <DiReact className="w-6 h-6" />,
    'radix-ui/react-select': <SiRadixui className="w-6 h-6" />,
    'axios': <FaCloud className="w-6 h-6" />,
    'cheerio': <FaCloud className="w-6 h-6" />,
    'mongoose': <SiMongodb className="w-6 h-6" />,
    'nodemailer': <FaCloud className="w-6 h-6" />,
    'react-responsive-carousel': <DiReact className="w-6 h-6" />,
    '@headlessui/react': <DiReact className="w-6 h-6" />,
    '@heroicons/react': <DiReact className="w-6 h-6" />,
    'Mailchimp Marketing API': <FaCloud className="w-6 h-6" />,
    'GSAP': <FaCloud className="w-6 h-6" />,
    'react-social-icons': <DiReact className="w-6 h-6" />,
    '@dnd-kit': <DiReact className="w-6 h-6" />,
    'clsx': <FaCloud className="w-6 h-6" />,
    'next-themes': <DiReact className="w-6 h-6" />,
};

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    if (!project) return null;

    const categorizeTechStack = (stack) => {
        const categories = {
            'Frameworks': [],
            'Languages': [],
            'Styling': [],
            'State Management': [],
            'Database': [],
            'Authentication': [],
            'Libraries': [],
            'Configuration': [],
            'Other': []
        };

        stack.forEach((tech) => {
            if (['React', 'Next.js', 'Vue.js', 'Radix UI'].includes(tech)) {
                categories['Frameworks'].push(tech);
            } else if (['JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'C++'].includes(tech)) {
                categories['Languages'].push(tech);
            } else if (['Tailwind CSS', 'PostCSS', 'Autoprefixer'].includes(tech)) {
                categories['Styling'].push(tech);
            } else if (['Redux', 'React Hook Form'].includes(tech)) {
                categories['State Management'].push(tech);
            } else if (['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'].includes(tech)) {
                categories['Database'].push(tech);
            } else if (['Clerk'].includes(tech)) {
                categories['Authentication'].push(tech);
            } else if (['Stripe', 'Uploadthing', 'html2canvas', 'lucide-react', 're-resizable', 'react-ace', 'react-outside-click-handler', 'react-query', '@formkit/auto-animate', 'radix-ui/react-select', 'axios', 'cheerio', 'nodemailer', 'react-responsive-carousel', '@headlessui/react', '@heroicons/react', 'Mailchimp Marketing API', 'GSAP', 'react-social-icons', '@dnd-kit', 'clsx', 'next-themes'].includes(tech)) {
                categories['Libraries'].push(tech);
            } else if (['ESLint', 'Prettier'].includes(tech)) {
                categories['Configuration'].push(tech);
            } else {
                categories['Other'].push(tech);
            }
        });

        return categories;
    };

    const categorizedTechStack = categorizeTechStack(project.techStack);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 dark:bg-opacity-75">
            <div ref={modalRef} className="bg-card text-card-foreground rounded-lg p-8 relative max-w-6xl w-full mx-4 md:mx-8 my-16 md:my-32 max-h-[80vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-primary-foreground">&times;</button>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <img src={project.thumbnail} alt={project.title} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                    <div className="flex flex-col w-full md:w-1/2">
                        <p className="mb-4">{project.description}</p>
                        <div className="flex space-x-4 mb-4">
                            <a href={project.liveSite} target="_blank" className="button">Live Site</a>
                            <a href={project.github} target="_blank" className="button">GitHub</a>
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Tech Stack:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.keys(categorizedTechStack).map(category => (
                                categorizedTechStack[category].length > 0 && (
                                    <div key={category}>
                                        <h4 className="text-lg font-medium mt-2">{category}:</h4>
                                        <ul className="tech-stack">
                                            {categorizedTechStack[category].map((tech, index) => (
                                                <li key={index} className="tech-stack-icon">
                                                    {techStackIcons[tech]}
                                                    <span>{tech}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
