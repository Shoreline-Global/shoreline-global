import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Shoreline Global',
  description: 'Get in touch with Shoreline Global to discuss practical AI and engineering solutions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans text-zinc-400 selection:bg-white/20 selection:text-white overflow-x-hidden w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          {/* Soft Spotlight from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-3xl pt-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-tight">
              Start the conversation.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-normal">
              We partner with organizations to build reliable automation and modernize operations. Let&apos;s discuss your technical challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 relative z-10 bg-[#000] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-[#000] to-[#000] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white mb-6">Technical Consultation</h2>
              <p className="text-lg text-zinc-400 mb-12 leading-relaxed font-normal">
                Whether you have a specific workflow to automate or need an assessment of your technical infrastructure, our engineering team is ready to help.
              </p>

              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-zinc-300 shadow-inner group-hover:text-white group-hover:border-white/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 mt-1">
                    <h3 className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-2">Email</h3>
                    <a href="mailto:contact@shoreline-global.com" className="text-zinc-200 font-normal hover:text-white transition-colors">contact@shoreline-global.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0A0A0A] p-8 sm:p-12 rounded-[24px] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-2xl font-medium tracking-tight text-white mb-8">Send an Inquiry</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#000] border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-10">
            <div className="border-b border-white/10 pb-10">
              <h3 className="text-xl font-medium tracking-tight text-white mb-4">
                How do you differ from generic AI agencies?
              </h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                We are engineer-first. We don&apos;t focus on hyped demos; we focus on secure, scalable systems that integrate into your existing architecture. We care about uptime, maintainability, and real operational utility.
              </p>
            </div>
            <div className="border-b border-white/10 pb-12">
              <h3 className="text-xl font-medium tracking-tight text-white mb-4">
                What is your engagement model?
              </h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                We typically start with a discovery and architecture phase to understand your data and systems. From there, we propose a clear engineering roadmap with milestones and fixed deliverables.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="text-xl font-medium tracking-tight text-white mb-4">
                How do you handle data privacy?
              </h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                Security is foundational to our engineering practice. We deploy solutions within your VPC, use private LLM instances where appropriate, and ensure zero data retention for training purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
