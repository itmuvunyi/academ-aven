import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function PrototypePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#1f6e3e] text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Iteme Prototype</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our innovative platform for connecting students with quality education resources
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* First Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  At the ITEME website, we believe in providing a platform for
                  students to access quality education resources and connect with a real Social media Community.
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are young catalysts of a change in our community who aim to provide possible support
                  to our fellow young Rwandan youth to create their own income generating source.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f6e3e] transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="order-1 md:order-2 p-8">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/figma.png"
                    alt="Iteme Prototype"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 order-2">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/figma.png"
                    alt="Iteme Prototype"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 order-1">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  By investing in ITEME platform you will be supporting a solution that brings
                  efficiency and access to both job seekers and employers, fueling growth and smooth hiring.
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Join us to reshape the
                  employment landscape, bridging gaps and creating satisfaction for both workers and employers
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f6e3e] transition-colors"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </main>
  );
}
