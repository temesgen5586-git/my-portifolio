import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import TechMarquee from '@/sections/TechMarquee';
import FeaturedProjects from '@/sections/FeaturedProjects';
import SkillsPreview from '@/sections/SkillsPreview';
import ExperiencePreview from '@/sections/ExperiencePreview';
import TestimonialsCards from '@/sections/TestimonialsCards';
import CTA from '@/sections/CTA';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
        {/* Full About section embedded in Home */}
      <section id="about-section" className="mt-16 md:mt-20">
        <About embedded />
      </section>
      {/* <Stats /> */}
      {/* <TechMarquee /> */}
      <FeaturedProjects />
      <SkillsPreview />
      <ExperiencePreview />

     <CTA />

      {/* <TestimonialsCards /> */}

      {/* Full Contact section embedded in Home */}
      <section id="contact-section" className="mt-16 md:mt-20">
        <Contact embedded />
      </section>

     
    </div>
  );
}