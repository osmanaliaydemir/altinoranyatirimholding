import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import KeyMetricsSection from '@/components/KeyMetricsSection';
import PhilosophySection from '@/components/PhilosophySection';
import ChairmanSection from '@/components/ChairmanSection';
import SectorsSection from '@/components/SectorsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import InvestorRelationsSection from '@/components/InvestorRelationsSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <KeyMetricsSection />
        <PhilosophySection />
        <ChairmanSection />
        <SectorsSection />
        <SustainabilitySection />
        <InvestorRelationsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
