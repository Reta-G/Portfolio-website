// App.tsx
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { VideoSection } from './components/sections/VideoSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { PerspectiveSection } from './components/sections/PerspectiveSection';
import { BooksSection } from './components/sections/BooksSection';
import { PodcastsSection } from './components/sections/PodcastsSection';
import { FutureSection } from './components/sections/FutureSection';
import { ConnectSection } from './components/sections/ConnectSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <SkillsSection />
        <PerspectiveSection />
        <BooksSection />
        <PodcastsSection />
        <FutureSection />
        <ConnectSection />
      </main>
    </div>
  );
}