import Image from 'next/image';

export function AboutMeSection() {
    return (
        <section id="about-me" className="flex flex-col items-center justify-center py-12 md:flex-row md:space-x-8 md:py-24">
            <div className="w-full max-w-xs md:w-1/3">
                <div className="relative rounded-full">
                    <div className="absolute inset-0 bg-white dark:bg-foreground rounded-full"></div>
                    <Image
                        src="/aboutme.png" 
                        alt="About Me"
                        width={300}
                        height={300}
                        className="relative rounded-full"
                    />
                </div>
            </div>
            <div className="mt-8 text-center md:mt-0 md:w-2/3 md:text-left">
                <h2 className="max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">About Me</h2>
                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-200">
                Hello! I'm Maddox Nehls, a passionate software engineer with a love for developing
                 innovative solutions to complex problems. With a strong foundation in computer science
                  and a keen interest in new technologies, I am always looking to expand my skillset and
                   take on new challenges. I thrive in collaborative environments and am eager to contribute
                    to dynamic teams. When I'm not coding, you can find me exploring the latest tech trends, 
                    working on personal projects, or enjoying the great outdoors. Let's connect and explore how
                     I can make a positive impact on your team!                
                </p>
            </div>
        </section>
    );
}
