
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
    <section className="py-20 px-4 bg-[#1A1F2C]">
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
              <button className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all duration-200 font-inter">
                Start Tracking Now
              </button>
            </div>
          </div>

          {/* Right Graph */}
          <div className="h-[400px] bg-[#221F26] p-6 rounded-xl border border-purple-400/20 fade-in">
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
                    backgroundColor: '#221F26', 
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    color: '#fff'
                  }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                />
                <Bar 
                  dataKey="amount" 
                  fill="#8B5CF6" 
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
