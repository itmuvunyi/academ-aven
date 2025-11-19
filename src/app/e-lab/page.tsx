'use client';

import { useState } from 'react';
import ScrollToTop from '@/components/ScrollToTop';

interface Challenge {
  id: string;
  number: string;
  title: string;
  videoId: string;
  description: string;
  fullDescription: string;
}

const challenges: Challenge[] = [
  {
    id: '1',
    number: '1',
    title: 'Pitch',
    videoId: 'cxj7KvhbP5Q',
    description: 'Our elevator pitch with expressing our information such as names, country, interests, and fun fact.',
    fullDescription: 'And also we shared what we are passionate about, why, and what we want to do to solve it, as well as what we bring to the team. to the team.',
  },
  {
    id: '2',
    number: '2',
    title: 'Discover Africa',
    videoId: 'yuIHykb7elA',
    description: 'Challenge 2 we enjoyed a walk and talk we had with an old man that helped us know more about',
    fullDescription: '"Ikigabiro cy\'Umwami"—a mysterious tree that the King himself planted particularly at Nyamirambo (it was not easy to understand that the king lived in Nyami...😂) See us, love us🎉🎊 Academic_Avengers✌',
  },
  {
    id: '3',
    number: '3',
    title: 'Help Lab',
    videoId: 'fpMBR54aeSc',
    description: 'Here comes another challenge that made us realise that learning is',
    fullDescription: 'not only making your grades look good but also building HUMILITY🌹. Thanks to the Help Lab that made us bring a little we had together to put a smile on this family. See us, love us🎉🎊 Academic_Avengers✌',
  },
  {
    id: '4',
    number: '4',
    title: 'Hunt for Treasure',
    videoId: '9sCzlmB0B7o',
    description: 'What an insightful day interviewing the Operations Manager at Rwanda Foam! 🛏💼',
    fullDescription: 'Together with the team, we dove deep into the art of turning ideas into high-quality products. Feeling inspired by the dedication and vision they had which made us fight even harder for what we want. see us, love us🎉🎊 Academic_Avengers',
  },
  {
    id: '5',
    number: '5',
    title: 'Launch Our Mission',
    videoId: 'CaV8aqbJc2M',
    description: 'When six brains became one🫠on this one we figured out the solution,',
    fullDescription: 'Though it was not easy at all, having to figure out one idea to choose among many others and develop it, that\'s really where we discovered why it is called a THINK tank 🫠😂 See us, Love us 🎊🎉 Academic_Avengers 👊🏿',
  },
];

export default function ELabPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="relative z-10">
        {/* Hero Section with Green Background */}
        <section className="bg-gradient-to-r from-primary to-[#1f6e3e] py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              E-lab Challenges
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Our journey through various challenges and learning experiences that shaped our mission
            </p>
          </div>
        </section>

        {/* Video Display Section */}
        {selectedVideo && (
          <section className="mb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-700 mb-4 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span>Back to Challenges</span>
                </button>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Challenges Grid */}
        {!selectedVideo && (
          <section className="container mx-auto px-4 py-12 bg-white rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="bg-gradient-to-br from-[#1a2f4a] to-[#0f1f35] rounded-2xl p-8 border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 cursor-pointer group relative overflow-hidden"
                  onClick={() => setSelectedVideo(challenge.videoId)}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Number Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[#1f6e3e] flex items-center justify-center group-hover:from-secondary group-hover:to-[#daa94f] transition-all duration-300 shadow-lg shadow-primary/30 group-hover:shadow-secondary/50">
                        <span className="text-4xl font-bold text-white">{challenge.number}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-secondary transition-colors">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-center mb-6 leading-relaxed">
                      {challenge.description}
                    </p>

                    {/* Expanded Description */}
                    {expanded[challenge.id] && (
                      <p className="text-white/70 text-center mb-6 leading-relaxed text-sm">
                        {challenge.fullDescription}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(challenge.videoId);
                        }}
                        className="w-full bg-gradient-to-r from-primary to-[#1f6e3e] text-white px-6 py-3 rounded-lg font-semibold hover:from-secondary hover:to-[#daa94f] transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-secondary/50"
                      >
                        Watch Video
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDetails(challenge.id);
                        }}
                        className="w-full bg-transparent border-2 border-primary/40 text-white px-6 py-2 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-colors"
                      >
                        {expanded[challenge.id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        {!selectedVideo && (
          <section className="mt-16 mb-12">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Start Your Journey?
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 mb-8">
                  Join us in our mission to empower communities and create sustainable opportunities
                </p>
                <button className="bg-gradient-to-r from-secondary to-[#daa94f] text-white px-10 py-4 rounded-lg text-lg font-bold hover:from-primary hover:to-[#1f6e3e] transition-all duration-300 shadow-lg shadow-secondary/30 hover:shadow-primary/50">
                  Get Started
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      <ScrollToTop />
    </main>
  );
}
