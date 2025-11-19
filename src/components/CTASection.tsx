import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-fixed min-h-[50vh] flex items-center justify-center py-12"
      style={{ backgroundImage: "url('/images/bg4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center">
              <Image
                src="/images/african.png"
                alt="African icon"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          <span className="text-secondary font-semibold text-base mb-3 block">Do Good</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Our Mission To Improve the World
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto">
            Our mission is a simple but powerful belief: everyone deserves the opportunity
            to create a better life for themselves and their families. We are dedicated to empowering
            individuals in our community with the skills,
            resources, and mentorship they need to turn their ideas into income-generating ventures.
          </p>
          <Link
            href="/#about"
            className="bg-secondary text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[#daa94f] transition-colors inline-block shadow-lg"
          >
            Become one of Us
          </Link>
        </div>
      </div>
    </section>
  );
}
