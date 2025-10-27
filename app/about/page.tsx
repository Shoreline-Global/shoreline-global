import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us - Shoreline Global',
  description: 'Your trusted partner in distributor and reseller excellence with experience in global logistics and inventory management.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Shoreline Global</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Your trusted partner in distributor and reseller excellence with experience in global logistics and inventory management
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower businesses worldwide with innovative supply chain solutions that drive
                efficiency, reduce costs, and enable sustainable growth. We believe in building
                long-term partnerships based on trust, transparency, and exceptional service.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in supply chain management, recognized for our cutting-edge
                technology, customer-centric approach, and commitment to excellence in every aspect
                of logistics and inventory optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-sky-600">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Founded</h3>
                <p className="text-slate-600">
                  Started with a vision to revolutionize supply chain management through
                  technology and customer service excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-sky-600">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Expansion</h3>
                <p className="text-slate-600">
                  Extended our services to 10+ brands, establishing key partnerships
                  and distribution worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-sky-600">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Technology Innovation</h3>
                <p className="text-slate-600">
                  Launched AI-powered inventory management and real-time tracking systems,
                  setting new industry standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-sky-600">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Today</h3>
                <p className="text-slate-600">
                  Serving 50+ clients globally with comprehensive supply chain solutions
                  and maintaining 99.9% on-time delivery rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">
                We operate with transparency and honesty in all our business relationships,
                building trust through consistent ethical practices.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Continuously advancing our technology and processes to deliver cutting-edge
                supply chain solutions to our clients.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Customer Focus</h3>
              <p className="text-slate-600">
                Your success is our priority. We tailor our services to meet your unique
                needs and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Global Team</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-center mb-12">
            A diverse team of supply chain experts, technologists, and logistics professionals
            dedicated to your success
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-slate-400">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-slate-400">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-slate-400">Industry Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join hundreds of companies that trust Shoreline Global for their supply chain needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-colors font-medium text-lg"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-sky-600 hover:text-sky-600 transition-colors font-medium text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
