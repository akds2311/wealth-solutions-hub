
import React, { useEffect, useRef } from 'react';

const TradingJournalSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target;
            timeline.classList.add('animate-timeline');
            
            // Animate the timeline points with delay
            const points = timeline.querySelectorAll('.timeline-point');
            points.forEach((point, index) => {
              setTimeout(() => {
                (point as HTMLElement).classList.add('animate-point');
              }, 800 + index * 600); // Slowed down the animation timing
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const timelinePoints = [
    { position: 0, text: "User Onboards to VioCrest", side: "bottom" },
    { position: 15, text: "You Invested in Value Stock, High Risk Stock and Medium Risk mutual fund", side: "top" },
    { position: 30, text: "You achieved target in Value stock, and sold 60% shares", side: "bottom" },
    { position: 45, text: "You lost 5% on remaining position as you were not disciplined to follow targets", side: "top" },
    { position: 60, text: "Stop-loss hit for High value stack, Viocrest says sell and asks to buy gold", side: "bottom" },
    { position: 75, text: "Great you saved a drawdown of 10% as you exited stock on good time. And made a good return of 4% on Gold Position", side: "top" },
    { position: 85, text: "Your wealth and learning journey carries on...", side: "bottom" },
    { position: 100, text: "Goal Reached (e.g. Home, car) in 2035", side: "top" }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-inter">
            Trading Journal with Goal Based Investing
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed font-readex">
              Set real-life goals like buying a home or achieving early retirement. We tailor recommendations to your risk profile so you stay on track effortlessly.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-readex">
              Life is not complete without reflection. And what a better way to look at your own financial actions with insightful inference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-readex">
              Our interactive journal tracks all your transactions and highlights deviations from your risk strategy.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-readex">
              Reflect, adapt, and refine your approach for long-term success.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto mt-24 px-4 fade-in-slow">
          <h3 className="text-2xl font-bold text-white mb-12 text-center font-inter">
            Your Investment Journey
          </h3>

          <div 
            ref={timelineRef} 
            className="relative h-[550px] opacity-0 transition-opacity duration-1000"
            style={{ opacity: 0 }}
          >
            {/* Main Timeline Line */}
            <div className="absolute top-1/2 left-0 w-0 h-[8px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 timeline-line rounded-full"></div>

            {/* Timeline Points */}
            {timelinePoints.map((point, index) => (
              <div 
                key={index}
                className={`timeline-point opacity-0 absolute transition-opacity duration-500 ease-in-out`}
                style={{ 
                  left: `${point.position}%`, 
                  top: point.side === "top" ? "20%" : "80%",
                  transform: 'translateX(-50%)',
                  maxWidth: '250px',
                  opacity: 0
                }}
              >
                {/* Vertical Line to Main Timeline */}
                <div 
                  className="absolute w-[2px] bg-gradient-to-b from-purple-400 to-purple-600"
                  style={{ 
                    top: point.side === "top" ? "100%" : "auto",
                    bottom: point.side === "bottom" ? "100%" : "auto", 
                    left: "50%", 
                    height: "100px",
                    transform: "translateX(-50%)"
                  }}
                ></div>

                {/* Point Indicator */}
                <div 
                  className="absolute w-6 h-6 bg-purple-600 rounded-full shadow-glow z-10"
                  style={{ 
                    top: point.side === "top" ? "calc(100% + 100px)" : "auto",
                    bottom: point.side === "bottom" ? "calc(100% + 100px)" : "auto", 
                    left: "50%", 
                    transform: "translateX(-50%, -50%)"
                  }}
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-1 bg-purple-300 rounded-full opacity-70 animate-ping"></div>
                </div>

                {/* Text Box */}
                <div className={`card-gradient p-4 rounded-lg border border-purple-500/30 text-sm text-white shadow-xl ${index === 0 || index === timelinePoints.length - 1 ? 'font-bold text-lg' : ''}`}>
                  {point.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingJournalSection;
