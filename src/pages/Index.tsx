
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Toaster } from "../components/ui/toaster";
import DebtTrackingSection from '../components/DebtTrackingSection';
import MultiAssetSection from '../components/MultiAssetSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-richBlack">
      <Navbar />
      <Hero />
      <DebtTrackingSection />
      <MultiAssetSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
