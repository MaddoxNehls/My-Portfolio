import { AboutMeSection } from '@/components/page-ui/AboutMeSection';
import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { Footer } from '@/components/page-ui/Footer';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

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
