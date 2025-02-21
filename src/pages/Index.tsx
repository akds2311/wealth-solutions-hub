
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Toaster } from "../components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-richBlack">
      <Navbar />
      <Hero />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
