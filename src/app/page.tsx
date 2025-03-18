import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { AIFeaturesSection } from '@/components/sections/AIFeaturesSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { Footer } from '@/components/Footer';
import { GradientBackground } from '@/components/animations/GradientBackground';

export default function Home() {
  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AIFeaturesSection />
        <ShowcaseSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
