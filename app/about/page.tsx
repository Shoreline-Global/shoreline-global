import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About - Shoreline Global',
  description: 'Built by engineers who understand scale, reliability, and real-world systems.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans text-zinc-400 selection:bg-white/20 selection:text-white overflow-x-hidden w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-3xl pt-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-tight">
              Engineer-first.<br />
              <span className="text-zinc-500">Quietly technical.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-normal">
              We are a team of engineers and systems thinkers dedicated to bridging the gap between traditional operations and the AI frontier. No hype, just execution.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight & Mission */}
      <section className="py-24 relative z-10 bg-[#000] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-[#000] to-[#000] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm mb-8">
                The Insight
              </div>
              <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Flashy demos don't scale.</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6 font-light">
                Businesses are overwhelmed by repetitive workflows, fragmented systems, and the relentless noise of AI hype. Most companies don't need a cutting-edge theoretical model; they need practical automation that actually works in production.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                They need systems that are secure, reliable, and integrated seamlessly into their existing infrastructure.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm mb-8">
                The Mission
              </div>
              <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Practical modernization.</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6 font-light">
                Shoreline Global exists to help businesses navigate the transition from manual operations to intelligent systems. We adopt AI in ways that are scalable, reliable, and operationally useful.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                We believe that the most powerful technology operates quietly in the background, continuously driving efficiency and empowering human creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-medium text-white mb-16 tracking-tight text-center">Our Engineering Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#000000]/80 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center mb-6 bg-[#0A0A0A] text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Built for Production</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                We design systems architecture with scale and reliability in mind from day one. Uptime and stability are features, not afterthoughts.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-[#000000]/80 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center mb-6 bg-[#0A0A0A] text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Utility Over Hype</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                We prioritize practical, measurable business outcomes. If an AI implementation doesn't improve efficiency or save time, we don't build it.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-[#000000]/80 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center mb-6 bg-[#0A0A0A] text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Security by Default</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                Enterprise data requires enterprise protection. Our solutions isolate sensitive information and comply with strict corporate governance policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#000] text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#000] to-[#000] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10">
          <h2 className="text-4xl font-medium tracking-tight text-white mb-8">
            Partner with engineers you can trust.
          </h2>
          <p className="text-lg text-zinc-400 mb-12 font-light">
            Let's discuss your technical challenges and architect a practical solution.
          </p>
          <a
            href="/contact"
            className="bg-white text-black px-10 py-4 rounded-full hover:bg-zinc-200 transition-colors font-medium text-sm inline-block shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
