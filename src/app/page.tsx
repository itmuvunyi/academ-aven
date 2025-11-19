import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';
import TeamSection from '@/components/TeamSection';
import MissionSection from '@/components/MissionSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Spacer matching hero section height */}
      <div className="h-screen"></div>
      
      {/* About Us Section - positioned right after hero with no gap */}
      <section id="about" className="bg-background py-12 -mt-screen scroll-mt-20" style={{ marginTop: '-100vh' }}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Academic Avengers</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
              Empowering income generation, connecting skills, and driving sustainable job creation
            </p>
          </div>

          {/* Stats Card */}
          <div className="max-w-sm mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Team Members</h3>
              <p className="text-sm text-gray-600">Dedicated to making a difference</p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">As Academic Avengers</h2>
              <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-square-check text-primary text-lg"></i>
                  <span className="text-base font-semibold text-gray-800">Empowering income generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-square-check text-primary text-lg"></i>
                  <span className="text-base font-semibold text-gray-800">Connecting skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-square-check text-primary text-lg"></i>
                  <span className="text-base font-semibold text-gray-800">Driving sustainable job creation</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base text-gray-600 leading-relaxed text-center">
                  We are united to make an impactful change to our society through empowering
                  youth and turning our skills and talents into income-generating opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <TeamSection />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <MissionSection />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <ScrollToTop />
    </main>
  );
}
