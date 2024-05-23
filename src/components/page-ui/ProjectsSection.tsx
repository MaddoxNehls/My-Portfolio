import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: 'This Portfolio',
    thumbnail: '/opengraph-image.png',
    description: "I've crafted this site using Next.js, leveraging JavaScript and TypeScript for a robust frontend and backend. Styled with Tailwind CSS and PostCSS, it offers a sleek, responsive design. Enhanced with Material-UI components, radix-ui, and animated with framer-motion, it provides a dynamic user experience. Form management is seamless with react-hook-form and zod. Ensuring quality with ESLint, Prettier, and Autoprefixer, my portfolio showcases my commitment to excellence in web development.",
    techStack: [
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'PostCSS',
      'React Hook Form',
      'react-icons',
      'Zod',
      'ESLint',
      'TypeScript',
      'Autoprefixer',
      'Material-UI',
      'React'
    ],
    github: 'https://github.com/MaddoxNehls/My-Portfolio',
    liveSite: 'https://maddoxnehls.vercel.app/'
  },
  {
    title: 'FormBuilder',
    thumbnail: '/projects/FormBuilder.png',
    description:
      'A full-stack application that allows users to create, customize, and manage forms with a drag-and-drop interface. Users can design forms with various fields, preview them, share URLs, and track form statistics. The application supports form validation, submission tracking, and responsive design for optimal user experience.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'React Hook Form',
      'Prisma',
      'Clerk',
      'Radix UI',
      'ESLint',
      'Autoprefixer',
      'Prettier'
    ],
    github: 'https://github.com/MaddoxNehls/form-builder-full-stack',
    liveSite: 'https://form-builder-full-stack.vercel.app/'
  },
  {
    title: 'CodeToImage',
    thumbnail: '/projects/CodeToImage.png',
    description:
      'A web application that allows users to convert code snippets into beautifully formatted images. Users can select programming languages, customize code and background colors, adjust padding, and resize the editor. The application supports exporting the final image in PNG format for easy sharing and documentation.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'html2canvas',
      'lucide-react',
      're-resizable',
      'react-ace',
      'react-outside-click-handler',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/Code-To-Image-App',
    liveSite: 'https://code-to-image-app.vercel.app/'
  },
  {
    title: 'Country Information App',
    thumbnail: '/projects/CountryInfo.png',
    description:
      'A dynamic web application providing detailed information on countries worldwide. Features include dark and light modes, a search function, region-based filtering, and responsive design. Users can view comprehensive country details, including flags and key statistics, with skeleton loading components enhancing the user experience. The app leverages dynamic routes for seamless navigation and is built for both desktop and mobile use.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'react-query',
      'radix-ui/react-select',
      'lucide-react',
      'react-icons',
      'clsx',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/NextJS-Country-Information-App',
    liveSite: 'https://next-js-country-information-app.vercel.app/'
  },
  {
    title: 'Ecommerce Price Tracker - PriceWise',
    thumbnail: '/projects/PriceWise.png',
    description:
      "A comprehensive Next.js 13 application designed for tracking eCommerce product prices. Utilizing web scraping with Bright Data's Web Unlocker, the app notifies users about price drops and stock status. Key features include product scraping, email notifications, and automated cron jobs to ensure timely updates. This tool helps users make informed purchasing decisions by providing up-to-date product information and price alerts.",
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'axios',
      'cheerio',
      'mongoose',
      'nodemailer',
      'react-responsive-carousel',
      'HeadlessUI',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/eCommerce-Price-Tracker',
    liveSite: 'https://e-commerce-price-tracker-web-scraper.vercel.app/'
  },
  {
    title: 'Evently',
    thumbnail: '/projects/Evently.png',
    description:
      'A comprehensive events application built with Next.js 14, enabling users to discover, create, and manage events worldwide. It features seamless ticket purchasing via Stripe, dynamic event categorization, and robust search and filter functionality. Users can effortlessly manage their events with full CRUD operations and explore related events on detailed event pages.',
    techStack: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'React Hook Form',
      'Clerk',
      'Stripe',
      'Radix UI',
      'UploadThing',
      'Zod',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/Events-App',
    liveSite: 'https://events-app-woad.vercel.app/'
  },
  {
    title: 'TierMaker',
    thumbnail: '/projects/TierMaker.png',
    description:
      'An intuitive platform for creating and sharing custom tier lists. Featuring a user-friendly drag-and-drop interface, the app allows users to easily organize and rank items. With responsive design and seamless performance, users can create, save, and share tier lists across all devices. Advanced customization options ensure each tier list is unique and tailored to individual preferences, making this the ultimate tool for ranking and categorizing items of any kind.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'Tailwind CSS',
      'PostCSS',
      '@dnd-kit',
      'RadixUI',
      'lucide-react',
      'clsx',
      'next-themes',
      'ESLint',
      'TypeScript',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/Tier-Maker-App',
    liveSite: 'https://tier-maker-app.vercel.app/'
  },
  {
    title: 'Newsletter App',
    thumbnail: '/projects/Newsletter.png',
    description:
      'A beautifully animated newsletter landing page built with Next.js 13. This project features engaging animations using GreenSock and integrates the Mailchimp API for seamless subscription management. Users can effortlessly subscribe to the newsletter through an interactive form, which includes a visually appealing email submission animation. The landing page is fully responsive and optimized for a top-notch user experience across all devices.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'Hero Icons',
      'Mailchimp Marketing API',
      'GSAP',
      'react-social-icons',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/Newsletter-App',
    liveSite: 'https://newsletter-app-chi.vercel.app/'
  },
  {
    title: 'YouTube SideBar',
    thumbnail: '/projects/YTSidebar.png',
    description:
      'An interactive and adaptable YouTube sidebar clone built with Next.js, Tailwind CSS, and TypeScript. This project features a fully responsive sidebar that looks great on any device. The sidebar includes a menu button to toggle its visibility, active state indicators for navigation items, hover effects, and dynamic rendering based on the current route.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'PostCSS',
      'clsx',
      'react-icons',
      'ESLint',
      'Autoprefixer'
    ],
    github: 'https://github.com/MaddoxNehls/yt-sidebar-clone-practice',
    liveSite: 'https://yt-sidebar-clone-practice.vercel.app/'
  }
];
