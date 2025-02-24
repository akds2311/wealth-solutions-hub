
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DebtTrackingSection = () => {
  const investmentData = [
    { day: 'Day 1', amount: 100000 },
    { day: 'Day 30', amount: 109000 },
    { day: 'Day 60', amount: 118000 },
    { day: 'Day 90', amount: 127000 },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter">
              Streamline Debt Tracking
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-readex">
              Keeping tabs on all your debts and EMIs is crucial. Prioritizing high-interest debts can prevent financial strain. For instance, focusing on debts with interest rates higher than 7% can be beneficial.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all duration-200 font-inter">
                Start Tracking Now
              </button>
            </div>
          </div>

          {/* Right Graph */}
          <div className="h-[400px] bg-black/50 p-6 rounded-xl border border-purple-500/30 fade-in card-gradient">
            <h3 className="text-xl font-semibold text-white mb-4 font-inter">
              Investment Growth (90 Days)
            </h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={investmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="day" 
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                />
                <YAxis 
                  stroke="#fff"
                  tick={{ fill: '#fff' }}
                  tickFormatter={(value) => `₹${value/1000}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.9)', 
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                    color: '#fff'
                  }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                />
                <Bar 
                  dataKey="amount" 
                  fill="#9333EA" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtTrackingSection;
