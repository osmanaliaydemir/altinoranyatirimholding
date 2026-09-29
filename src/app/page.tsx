import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import SectorsSection from '@/components/SectorsSection';
import NewsSection from '@/components/NewsSection';
import HomeCtaSection from '@/components/HomeCtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <SectorsSection />
        <NewsSection />
        <HomeCtaSection />
      </main>
      <Footer />
    </>
  );
}
