
import React from 'react';
import { Briefcase, Shield, TrendingUp, Users, BarChart3, Globe, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "25+ Years Experience",
      description: "Over two decades of successful portfolio management and wealth creation for our clients."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold" />,
      title: "Global Presence",
      description: "Operating in major financial hubs with a diverse international client base."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-gold" />,
      title: "Proven Track Record",
      description: "Consistent above-market returns with our research-driven investment approach."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance and portfolio monitoring for your peace of mind."
    }
  ];

  return (
    <section id="features" className="section-padding bg-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium font-inter mb-4">
            Why Choose Shwetshila
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter">
            Setting the Standard in Investment Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-readex">
            Our commitment to excellence, coupled with decades of experience, makes us the preferred choice for discerning investors worldwide.
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
              <h3 className="text-xl font-semibold mb-3 text-white font-inter">{feature.title}</h3>
              <p className="text-gray-400 font-readex">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
