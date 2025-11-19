'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const missionItems = [
  {
    id: 'problem',
    icon: 'fa-circle-exclamation',
    title: 'Unemployed Youth in Rwanda',
    image: '/images/un.png',
    description: `Rwanda faces significant challenges in creating jobs, especially for its
      growing youth. Although many people are trained, limited industries restrict job
      creation leaving skilled individuals unemployed. This mismatch between education
      and market needs highlights the need to connect skills to viable opportunities.`,
    position: 'left',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'solution',
    icon: 'fa-check',
    title: 'Our Solution',
    image: '/images/solu.jpg',
    description: `Our Solution is to actively and positively impact our community with the basic skills 
      and enough resources with a clear understanding for them to create their
      own income generating source`,
    position: 'right',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'mission',
    icon: '🎯',
    title: 'Our Mission',
    image: '/images/fff.jpg',
    description: `Our mission is a simple but powerful belief: everyone deserves the 
      opportunity to create a better life for themselves and their families. We are dedicated 
      to empowering individuals in our community with the skills,
      resources, and mentorship they need to turn their ideas into income-generating ventures.`,
    position: 'left',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'values',
    icon: '💡',
    title: 'Our Core Values',
    image: '/images/c.jpg',
    description: `✨ Empowerment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🌱 Self-sufficiency
      👥 Community &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      💼 Sustainability
      🤝 Integrity`,
    position: 'right',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.mission-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="mission" className="w-full py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Learn About Us</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-3"></div>
        <p className="text-base text-gray-600 max-w-xl mx-auto">
          Discover our journey, mission, and the values that drive us forward
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {missionItems.map((item, index) => (
          <div
            key={item.id}
            className={`mission-card opacity-0 group ${
              index === 0 || index === 2 ? 'lg:pr-2' : 'lg:pl-2'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-br ${item.color} text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2`}>
                    {typeof item.icon === 'string' && item.icon.startsWith('fa-') ? (
                      <i className={`fa-solid ${item.icon} text-base`}></i>
                    ) : (
                      <span className="text-base">{item.icon}</span>
                    )}
                    <span className="font-semibold text-xs uppercase tracking-wide">
                      {item.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="w-12 h-1 bg-secondary mb-4"></div>
                <p 
                  className="text-sm text-gray-600 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-[#1f6e3e] rounded-xl p-6 md:p-8 text-white text-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Together We Make a Difference</h3>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Join us in our mission to empower communities and create sustainable opportunities for all.
          </p>
        </div>
      </div>
    </section>
  );
}
