import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import TechMarquee from '@/sections/TechMarquee';
import FeaturedProjects from '@/sections/FeaturedProjects';
import AboutPreview from '@/sections/AboutPreview';
import CTA from '@/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TechMarquee />
      <FeaturedProjects />
      <AboutPreview />
      <CTA />
    </>
  );
}