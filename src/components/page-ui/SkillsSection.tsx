import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaJava, FaReact, FaNodeJs, FaAws, FaPython, FaHtml5, FaCss3Alt, FaLinux, FaDocker, FaCuttlefish } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiTailwindcss, SiRedux, SiMongodb, SiTypescript, SiReact, SiNextdotjs, SiCplusplus } from 'react-icons/si';
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-7xl px-8 pb-8">
            <h1 id="skills" className="max-w-7xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Skills
            </h1>
            <div className="py-10">
                <Section title="Frontend">
                    {frontendSkills.map((item, idx) => (
                        <SkillCard key={idx} item={item} />
                    ))}
                </Section>
                <Section title="Backend">
                    {backendSkills.map((item, idx) => (
                        <SkillCard key={idx} item={item} />
                    ))}
                </Section>
                <Section title="Tools">
                    {toolsSkills.map((item, idx) => (
                        <SkillCard key={idx} item={item} />
                    ))}
                </Section>
            </div>
        </div>
    );
}

interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-xl font-semibold dark:text-gray-200">{title}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
            {children}
        </div>
    </div>
);

interface SkillCardProps {
    item: {
        title: string;
        link: string;
        icon: ReactNode;
    };
}

const SkillCard: React.FC<SkillCardProps> = ({ item }) => (
    <Link
        href={item.link}
        className="relative mx-auto flex h-[10rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-3 dark:border-white/[0.2] transform transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
    >
        <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
        <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
        <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
        <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

        <EvervaultCard text={item.title} icon={item.icon} />
    </Link>
);

const frontendSkills = [
    {
        title: 'React.js',
        link: 'https://react.dev/',
        icon: <FaReact />
    },
    {
        title: 'Next.js',
        link: 'https://nextjs.org',
        icon: <SiNextdotjs />
    },
    {
        title: 'Tailwind',
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss />
    },
    {
        title: 'Vue.js',
        link: 'https://vuejs.org',
        icon: <IoLogoVue />
    },
    {
        title: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <IoLogoJavascript />
    },
    {
        title: 'TypeScript',
        link: 'https://www.typescriptlang.org',
        icon: <SiTypescript />
    },
    {
        title: 'React Native',
        link: 'https://reactnative.dev',
        icon: <SiReact />
    },
    {
        title: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        icon: <FaHtml5 />
    },
    {
        title: 'CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        icon: <FaCss3Alt />
    }
];

const backendSkills = [
    {
        title: 'Node.js',
        link: 'https://nodejs.org',
        icon: <FaNodeJs />
    },
    {
        title: 'Java',
        link: 'https://www.oracle.com/java/',
        icon: <FaJava />
    },
    {
        title: 'Spring Boot',
        link: 'https://spring.io/projects/spring-boot',
        icon: <SiSpringboot />
    },
    {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org',
        icon: <SiPostgresql />
    },
    {
        title: 'MySQL',
        link: 'https://www.mysql.com',
        icon: <GrMysql />
    },
    {
        title: 'MongoDB',
        link: 'https://www.mongodb.com',
        icon: <SiMongodb />
    },
    {
        title: 'Python',
        link: 'https://www.python.org',
        icon: <FaPython />
    },
    {
        title: 'C++',
        link: 'https://isocpp.org',
        icon: <SiCplusplus />
    }
];

const toolsSkills = [
    {
        title: 'AWS',
        link: 'https://aws.amazon.com',
        icon: <FaAws />
    },
    {
        title: 'Redux',
        link: 'https://redux.js.org',
        icon: <SiRedux />
    },
    {
        title: 'Linux',
        link: 'https://www.linux.org',
        icon: <FaLinux />
    },
    {
        title: 'Docker',
        link: 'https://www.docker.com',
        icon: <FaDocker />
    }
];
