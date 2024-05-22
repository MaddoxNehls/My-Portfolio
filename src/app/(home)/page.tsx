import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import {Footer} from '@/components/page-ui/Footer';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { AboutMeSection } from '@/components/page-ui/AboutMeSection';

export default function Home() {
    return (
        <main>
            <LandingPage />
            <AboutMeSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactMeForm />
            <Footer />
            <ScrollToTopButton />
        </main>
    );
}
