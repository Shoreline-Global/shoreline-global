import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: 'Solutions - Shoreline Global',
  description: 'Practical AI systems, workflow automation, and engineering-driven solutions for modern enterprises.',
};

// --- Complex Custom Animated Icons ---

const WorkflowAnimation = () => (
  <div className="relative w-full max-w-sm aspect-square mx-auto rounded-2xl border border-white/10 bg-[#000000]/80 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        className="absolute w-24 h-24 border border-white/20 bg-[#000000] rounded-2xl flex items-center justify-center z-10 shadow-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-12 h-12 border-t-2 border-r-2 border-white/100 rounded-full"></div>
      </motion.div>
      <motion.div className="absolute w-16 h-16 bg-[#0A0A0A] backdrop-blur-md rounded-xl z-20 flex items-center justify-center border border-white/20">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>

      {/* Orbiting Elements */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
        >
          <motion.div
            className="absolute top-1/4 w-3 h-3 bg-[#000000] shadow-[0_0_15px_rgba(255,255,255,0.8)] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}

      {/* Pulsing connections */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <motion.circle cx="50%" cy="50%" r="30%" stroke="rgba(228,228,231,1)" strokeWidth="1" fill="none" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="50%" cy="50%" r="45%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  </div>
);

const SearchAnimation = () => (
  <div className="relative w-full max-w-sm aspect-square mx-auto rounded-2xl border border-white/10 bg-[#000000]/80 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
    {/* Complex Network Graph */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <motion.path
        d="M 20 50 Q 50 20 80 50 T 20 50"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
        fill="none"
        animate={{ d: ["M 20 50 Q 50 20 80 50 T 20 50", "M 20 50 Q 50 80 80 50 T 20 50", "M 20 50 Q 50 20 80 50 T 20 50"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M 50 20 Q 80 50 50 80 T 50 20"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
        fill="none"
        animate={{ d: ["M 50 20 Q 80 50 50 80 T 50 20", "M 50 20 Q 20 50 50 80 T 50 20", "M 50 20 Q 80 50 50 80 T 50 20"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </svg>

    <div className="relative z-10 flex flex-wrap gap-2 w-48 justify-center">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-12 h-12 border ${i === 4 ? 'border-white bg-zinc-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'border-white/10 bg-[#000000]'} rounded-lg flex items-center justify-center`}
          animate={{
            scale: i === 4 ? [1, 1.1, 1] : 1,
            borderColor: i === 4 ? ['rgba(255,255,255,1)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,1)'] : 'rgba(39,39,42,1)'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className={`w-4 h-4 rounded-full ${i === 4 ? 'bg-[#000000]' : 'bg-zinc-700'}`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5 + (i * 0.2), repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const CopilotAnimation = () => (
  <div className="relative w-full max-w-sm aspect-square mx-auto rounded-2xl border border-white/10 bg-[#000000]/80 flex flex-col overflow-hidden text-xs font-mono text-zinc-400 p-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
    <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
      <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
      <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
      <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
    </div>
    <div className="flex-1 space-y-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-zinc-700">$</span> analyze_workflow --target=finance
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-white"
      >
        [Agent] Analyzing 1,420 documents...
      </motion.div>
      <motion.div
        className="h-1.5 bg-zinc-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-full bg-[#000000] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1.5, ease: "circOut" }}
        />
      </motion.div>

      <div className="pt-2 flex flex-col gap-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-3 items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.5 + i * 0.2 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#000000] shadow-[0_0_5px_rgba(255,255,255,0.8)] animate-pulse"></div>
            <div className="h-2 bg-[#000000]/20 rounded-sm w-full max-w-[80%]"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-4 left-0 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <span className="text-zinc-700">$</span> <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-[#000000] inline-block align-middle"></motion.span>
      </motion.div>
    </div>
  </div>
);

const ToolingAnimation = () => (
  <div className="relative w-full max-w-sm aspect-square mx-auto rounded-2xl border border-white/10 bg-[#000000]/80 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
    <motion.div
      className="relative w-48 h-48"
      animate={{ rotateX: [20, -20, 20], rotateY: [-20, 20, -20] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border border-white/20 rounded-2xl bg-[#0A0A0A]"
          style={{ transform: `translateZ(${i * 30 - 30}px)` }}
          animate={{ scale: [1, 1.05, 1], borderColor: ["rgba(228,228,231,1)", "rgba(255,255,255,0.4)", "rgba(228,228,231,1)"] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
        >
        </motion.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(60px)' }}>
        <motion.div
          className="w-16 h-16 bg-[#000000] rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center justify-center text-white"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans text-zinc-400 selection:bg-white/20 selection:text-white overflow-x-hidden w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-3xl pt-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8">
              Our Capabilities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-tight">
              Engineering solutions.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">Not just concepts.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-normal">
              We design, build, and deploy intelligent systems that solve real operational bottlenecks. Our solutions are built to integrate seamlessly with your existing infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 relative z-10 bg-[#000000] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="space-y-32">

            {/* Service 1: AI Workflow Automation */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div>
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">Next-Gen Software</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  We architect and build scalable, secure, and highly performant custom software applications. From intelligent platforms to core enterprise systems, we engineer software tailored to your business operations.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Custom web and mobile applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Enterprise system integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Legacy system modernization</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center relative w-full">
                <WorkflowAnimation />
              </div>
            </div>

            {/* Service 2: Knowledge & Search Systems */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div className="order-2 md:order-1 flex items-center justify-center relative w-full">
                <SearchAnimation />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">AI Development</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  End-to-end development of applied AI models, intelligent automation, and custom integrations. We build semantic search engines, RAG systems, and internal copilots that empower your workforce.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Custom LLM fine-tuning & RAG</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Applied machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">AI-native workflow automation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3: Internal Copilots */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div>
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">Cloud Infrastructure</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  Design, deployment, and management of resilient cloud environments. We architect infrastructure on AWS, Azure, and GCP built specifically to handle the scale and security demands of modern AI workloads.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Scalable cloud architecture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">DevSecOps and CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Infrastructure as Code (IaC)</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center relative w-full">
                <CopilotAnimation />
              </div>
            </div>

            {/* Service 4: AI Workflow Automation */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div className="order-2 md:order-1 flex items-center justify-center relative w-full">
                <WorkflowAnimation />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">AI Workflow Automation</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  Replace fragile, manual processes with robust automation. We analyze your operational workflows and implement intelligent agents capable of parsing documents, routing data, and executing complex multi-step tasks.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Document parsing and data extraction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Intelligent email and support routing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400 text-base">Automated reporting and reconciliation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5: Knowledge & Search Systems */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div>
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">Knowledge & Search Systems</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  Enterprise data is often trapped in silos. We build semantic search engines and Retrieval-Augmented Generation (RAG) systems that connect to your internal wikis, databases, and drives, providing instant, accurate answers.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Vector database architecture & implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Secure data ingestion pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Context-aware semantic search capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center relative w-full">
                <SearchAnimation />
              </div>
            </div>

            {/* Service 6: Internal Copilots */}
            <div className="grid md:grid-cols-2 gap-16 items-center group">
              <div className="order-2 md:order-1 flex items-center justify-center relative w-full">
                <ToolingAnimation />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-xl shadow-inner flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">Internal Copilots</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  Empower your workforce with custom AI assistants trained on your proprietary data and business logic. These agents act as highly-skilled team members that can draft code, review contracts, or synthesize reports.
                </p>
                <ul className="space-y-3 font-light text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Role-specific LLM fine-tuning and prompting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Integration with Slack, Teams, and internal portals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Strict access controls and audit logging</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">
            Ready to modernize your technical infrastructure?
          </h2>
          <p className="text-lg text-zinc-500 mb-10 font-light">
            Schedule a technical consultation to explore solutions for your specific use case.
          </p>
          <a
            href="/contact"
            className="bg-white text-black px-10 py-4 rounded-full hover:bg-zinc-200 transition-colors font-medium text-sm inline-block shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Start the Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
