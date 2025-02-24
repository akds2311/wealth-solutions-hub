
import React from 'react';

const MultiAssetSection = () => {
  const comparisonData = [
    {
      type: "Personal Loan (17.5%)",
      duration: "2 years",
      withoutOptimization: "₹5,000/month",
      withOptimization: "₹15,000/month"
    },
    {
      type: "Home Loan (9%)",
      duration: "12 years",
      withoutOptimization: "₹25,000/month",
      withOptimization: "₹20,000/month"
    },
    {
      type: "SIP Investment",
      duration: "Monthly",
      withoutOptimization: "₹30,000",
      withOptimization: "₹25,000"
    },
    {
      type: "Stock Investment",
      duration: "Monthly",
      withoutOptimization: "₹20,000",
      withOptimization: "₹15,000"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="fade-in space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-inter">
              Multi-Asset Management
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-readex">
                Effectively distributing your income involves more than just debt management.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-readex">
                Our State of the art algorithms backed with AI, not only just help you invest, they help you grow at your own pace using tailored personalized portfolio across assets like fixed deposits, gold, stocks, mutual funds, cryptocurrencies, and real estate ensuring financial stability.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-readex">
                So that you achieve greater returns while living a much greater life!!
              </p>
            </div>
          </div>

          {/* Right Table */}
          <div className="card-gradient rounded-xl border border-purple-500/30 p-8 overflow-x-auto fade-in">
            <h3 className="text-xl font-semibold text-white mb-6 font-inter">
              Optimization Comparison
            </h3>
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-3 px-4 text-purple-200 font-medium">Type & Rate</th>
                  <th className="text-left py-3 px-4 text-purple-200 font-medium">Without Optimization</th>
                  <th className="text-left py-3 px-4 text-purple-200 font-medium">With Our Recommendations</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-purple-500/10 last:border-0 hover:bg-purple-900/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="text-white font-medium">{item.type}</div>
                      <div className="text-sm text-gray-400">{item.duration}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{item.withoutOptimization}</td>
                    <td className="py-4 px-4 text-purple-200">{item.withOptimization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 text-sm text-gray-400">
              * The optimization shows how adjusting payment priorities can help reduce total interest paid
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAssetSection;
