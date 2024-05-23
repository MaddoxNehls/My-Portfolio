import React, { useEffect, useRef } from 'react';
import { DiHtml5, DiNodejsSmall, DiReact } from 'react-icons/di';
import { FaAws, FaCloud, FaCss3Alt, FaDocker, FaHtml5, FaJava, FaLinux, FaNodeJs, FaReact, FaStripe, FaUpload } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { MdSecurity } from 'react-icons/md';
import {
  SiCplusplus,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReacthookform,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

type TechStackKey =
  | 'MongoDB'
  | 'Express'
  | 'React'
  | 'Node.js'
  | 'Next.js'
  | 'JavaScript'
  | 'TypeScript'
  | 'HTML'
  | 'CSS'
  | 'Java'
  | 'PostgreSQL'
  | 'Spring Boot'
  | 'Tailwind CSS'
  | 'Redux'
  | 'AWS'
  | 'Linux'
  | 'Docker'
  | 'C++'
  | 'Vue.js'
  | 'Prisma'
  | 'Stripe'
  | 'Radix UI'
  | 'Uploadthing'
  | 'React Hook Form'
  | 'Clerk'
  | 'PostCSS'
  | 'Autoprefixer'
  | 'ESLint'
  | 'Prettier'
  | 'html2canvas'
  | 'lucide-react'
  | 're-resizable'
  | 'react-ace'
  | 'react-outside-click-handler'
  | 'react-query'
  | '@formkit/auto-animate'
  | 'radix-ui/react-select'
  | 'axios'
  | 'cheerio'
  | 'mongoose'
  | 'nodemailer'
  | 'react-responsive-carousel'
  | '@headlessui/react'
  | '@heroicons/react'
  | 'Mailchimp Marketing API'
  | 'GSAP'
  | 'react-social-icons'
  | '@dnd-kit'
  | 'clsx'
  | 'next-themes';

const techStackIcons: Record<TechStackKey, JSX.Element> = {
  MongoDB: <SiMongodb className="size-6" />,
  Express: <SiSpringboot className="size-6" />,
  React: <FaReact className="size-6" />,
  'Node.js': <FaNodeJs className="size-6" />,
  'Next.js': <SiNextdotjs className="size-6" />,
  JavaScript: <IoLogoJavascript className="size-6" />,
  TypeScript: <SiTypescript className="size-6" />,
  HTML: <FaHtml5 className="size-6" />,
  CSS: <FaCss3Alt className="size-6" />,
  Java: <FaJava className="size-6" />,
  PostgreSQL: <SiPostgresql className="size-6" />,
  'Spring Boot': <SiSpringboot className="size-6" />,
  'Tailwind CSS': <SiTailwindcss className="size-6" />,
  Redux: <SiRedux className="size-6" />,
  AWS: <FaAws className="size-6" />,
  Linux: <FaLinux className="size-6" />,
  Docker: <FaDocker className="size-6" />,
  'C++': <SiCplusplus className="size-6" />,
  'Vue.js': <IoLogoVue className="size-6" />,
  Prisma: <SiPrisma className="size-6" />,
  Stripe: <FaStripe className="size-6" />,
  'Radix UI': <SiRadixui className="size-6" />,
  Uploadthing: <FaUpload className="size-6" />,
  'React Hook Form': <SiReacthookform className="size-6" />,
  Clerk: <MdSecurity className="size-6" />,
  PostCSS: <FaCloud className="size-6" />,
  Autoprefixer: <FaCloud className="size-6" />,
  ESLint: <FaCloud className="size-6" />,
  Prettier: <FaCloud className="size-6" />,
  html2canvas: <DiHtml5 className="size-6" />,
  'lucide-react': <DiReact className="size-6" />,
  're-resizable': <DiNodejsSmall className="size-6" />,
  'react-ace': <DiReact className="size-6" />,
  'react-outside-click-handler': <DiReact className="size-6" />,
  'react-query': <DiReact className="size-6" />,
  '@formkit/auto-animate': <DiReact className="size-6" />,
  'radix-ui/react-select': <SiRadixui className="size-6" />,
  axios: <FaCloud className="size-6" />,
  cheerio: <FaCloud className="size-6" />,
  mongoose: <SiMongodb className="size-6" />,
  nodemailer: <FaCloud className="size-6" />,
  'react-responsive-carousel': <DiReact className="size-6" />,
  '@headlessui/react': <DiReact className="size-6" />,
  '@heroicons/react': <DiReact className="size-6" />,
  'Mailchimp Marketing API': <FaCloud className="size-6" />,
  GSAP: <FaCloud className="size-6" />,
  'react-social-icons': <DiReact className="size-6" />,
  '@dnd-kit': <DiReact className="size-6" />,
  clsx: <FaCloud className="size-6" />,
  'next-themes': <DiReact className="size-6" />
};

interface Project {
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  liveSite: string;
  github: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  if (!project) return null;

  const categorizeTechStack = (stack: string[]) => {
    const categories: Record<string, string[]> = {
      Frameworks: [],
      Languages: [],
      Styling: [],
      'State Management': [],
      Database: [],
      Authentication: [],
      Libraries: [],
      Configuration: [],
      Other: []
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
      } else if (
        [
          'Stripe',
          'Uploadthing',
          'html2canvas',
          'lucide-react',
          're-resizable',
          'react-ace',
          'react-outside-click-handler',
          'react-query',
          '@formkit/auto-animate',
          'radix-ui/react-select',
          'axios',
          'cheerio',
          'nodemailer',
          'react-responsive-carousel',
          '@headlessui/react',
          '@heroicons/react',
          'Mailchimp Marketing API',
          'GSAP',
          'react-social-icons',
          '@dnd-kit',
          'clsx',
          'next-themes'
        ].includes(tech)
      ) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 dark:bg-black/75">
      <div
        ref={modalRef}
        className="relative mx-4 my-16 max-h-[80vh] w-full max-w-6xl overflow-y-auto rounded-lg bg-card p-8 text-card-foreground md:mx-8 md:my-32"
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-2xl text-primary-foreground">
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
        <div className="flex flex-col items-center md:flex-row">
          <img src={project.thumbnail} alt={project.title} className="mb-4 h-auto w-full rounded-lg md:mb-0 md:mr-4 md:w-1/2" />
          <div className="flex w-full flex-col md:w-1/2">
            <p className="mb-4">{project.description}</p>
            <div className="mb-4 flex space-x-4">
              <a href={project.liveSite} target="_blank" className="button">
                Live Site
              </a>
              <a href={project.github} target="_blank" className="button">
                GitHub
              </a>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Tech Stack:</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.keys(categorizedTechStack).map(
                (category) =>
                  categorizedTechStack[category].length > 0 && (
                    <div key={category}>
                      <h4 className="mt-2 text-lg font-medium">{category}:</h4>
                      <ul className="tech-stack">
                        {categorizedTechStack[category].map((tech, index) => (
                          <li key={index} className="tech-stack-icon">
                            {techStackIcons[tech as TechStackKey]}
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
