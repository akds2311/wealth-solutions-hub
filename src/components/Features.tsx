
import React from 'react';
import { Briefcase, Shield, TrendingUp, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-gold" />,
      title: "Professional Portfolio Management",
      description: "Expert management of your investments with a focus on long-term growth and risk management."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Wealth Protection",
      description: "Comprehensive strategies to preserve and protect your wealth for generations."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Market Intelligence",
      description: "Access to premium market research and investment opportunities."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Personalized Service",
      description: "Dedicated wealth managers providing tailored solutions for your unique needs."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium font-inter mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-richBlack mb-6 font-inter">
            Comprehensive Wealth Management Solutions
          </h2>
          <p className="text-richBlack/70 max-w-2xl mx-auto font-readex">
            We offer a complete suite of wealth management services designed to help you achieve your financial goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl card-gradient hover:shadow-lg transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-richBlack font-inter">{feature.title}</h3>
              <p className="text-richBlack/70 font-readex">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
