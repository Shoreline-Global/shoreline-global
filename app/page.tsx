'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

// --- Premium Monochrome Motion Graphic ---
const AbstractNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Support high DPI displays for crisp rendering
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initParticles(rect.width, rect.height);
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      flashTimer: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseColor = Math.random() > 0.8 ? 'rgba(99, 102, 241, 0.8)' : 'rgba(255, 255, 255, 0.3)';
        this.flashTimer = Math.random() * 100;
      }

      update(mouseX: number, mouseY: number, w: number, h: number) {
        // AI Vibe: Nodes are attracted to the mouse to form a "neural cluster"
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250 && mouseX > 0) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Attraction force
          const force = (250 - distance) / 250;
          this.vx += forceDirectionX * force * 0.03;
          this.vy += forceDirectionY * force * 0.03;
        }

        // Apply friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Base movement
        this.x += this.vx;
        this.y += this.vy;

        // Maintain ambient movement
        if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.1;

        // Wrap around edges to create continuous flow
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Random flashing (Synapse effect)
        this.flashTimer -= 1;
        if (this.flashTimer < 0) {
          this.flashTimer = Math.random() * 200 + 100;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (this.flashTimer > 0 && this.flashTimer < 10) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ffffff';
        } else {
          ctx.fillStyle = this.baseColor;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    let w = window.innerWidth;
    let h = window.innerHeight;

    const initParticles = (width: number, height: number) => {
      w = width;
      h = height;
      particles = [];
      const numParticles = Math.min(Math.floor((w * h) / 8000), 150); // High density
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(w, h));
      }
    };

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Attach to window so it catches events even if z-10 elements are above it
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY, w, h);
        particles[i].draw();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            // Gradient lines for high-tech look
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`);
            gradient.addColorStop(1, `rgba(99, 102, 241, ${0.15 * (1 - distance / 120)})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse to form the dense cursor "neural brain"
        const dxMouse = particles[i].x - mouseX;
        const dyMouse = particles[i].y - mouseY;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distanceMouse < 180 && mouseX > 0) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.4 * (1 - distanceMouse / 180)})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100" style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
};


// Simplified animations for a cleaner look
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const services = [
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // Code
      title: "Next-Gen Software",
      description: "We architect and build scalable, secure, and highly performant custom software applications tailored to your business needs."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning/AI
      title: "AI Development",
      description: "End-to-end development of applied AI models, intelligent automation, and custom LLM integrations for enterprise operations."
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", // Cloud
      title: "Cloud Infrastructure",
      description: "Design, deployment, and management of resilient cloud environments on AWS, Azure, and GCP built for scale and AI workloads."
    },
    {
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", // Automation/Sync
      title: "AI Workflow Automation",
      description: "Replace repetitive manual processes with intelligent, reliable automation that scales with your operations."
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", // Search
      title: "Knowledge & Search Systems",
      description: "Unify your fragmented data silos into instantly accessible, semantic search engines and knowledge bases."
    },
    {
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", // Chat/Copilot
      title: "Internal Copilots",
      description: "Secure, context-aware AI assistants that empower your teams to execute complex workflows faster."
    }
  ];

  const stats = [
    { value: "100%", label: "Practical Implementation" },
    { value: "0", label: "Hype or Vaporware" },
    { value: "10x", label: "Operational Efficiency" },
    { value: "24/7", label: "Reliable Systems" }
  ];

  const features = [
    "Engineer-first approach focused on execution and stability",
    "Solutions designed for your existing technical infrastructure",
    "Enterprise-grade security and rigorous data privacy",
    "Scalable, maintainable systems built for production environments"
  ];

  return (
    <div className="min-h-screen relative bg-[#000000] font-sans text-zinc-400 selection:bg-white/20 selection:text-white overflow-x-hidden w-full">
      {/* Linear-style Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Soft Spotlight from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-32 z-10 overflow-hidden">
        <AbstractNetwork />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.05]"
              variants={fadeInUp}
            >
              Applied AI & <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
                Intelligent Automation.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl font-normal"
              variants={fadeInUp}
            >
              We engineer secure, AI-native development lifecycles that replace manual workflows, scale effortlessly, and operate entirely within your existing infrastructure.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Start building
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link
                href="/services"
                className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm flex items-center justify-center gap-2 backdrop-blur-md"
              >
                Explore solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE SHORELINE METAPHOR */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#000]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-[#000] to-[#000] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 tracking-tight">The Transition</h2>
            <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed mb-6 font-normal">
              Businesses today are standing at the shoreline between traditional manual operations and AI-enabled systems. The gap is filled with hype and fragmented tools.
            </p>
            <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed font-normal">
              We guide you across that edge. We build the automation that actually works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section id="services" className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">Engineering Solutions</h2>
            <p className="text-lg text-zinc-500 font-normal">Focused on operational utility over flashy demos.</p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                }}
              >
                <div className="bg-[#0A0A0A] p-8 sm:p-12 rounded-[24px] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group/card">
                  {/* Subtle top border gradient like Linear cards */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-8 relative z-10">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-zinc-300 shadow-inner group-hover/card:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{service.title}</h3>
                      <p className="text-zinc-400 text-base leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS & PHILOSOPHY */}
      <section className="relative py-32 z-10 bg-[#000] border-t border-white/5 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <motion.div
            className="mb-16 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
              Built by engineers who understand scale, reliability, and real-world systems.
            </h2>
            <p className="text-lg text-zinc-400 font-normal leading-relaxed">
              Most companies don&apos;t need another generic AI wrapper. They need thoughtful automation built securely into their existing infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="text-4xl sm:text-5xl font-medium text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-xs font-medium tracking-widest uppercase">{stat.label}</div>
                <div className="absolute -left-4 top-0 w-px h-full bg-white/10 hidden md:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IDENTITY & APPROACH */}
      <section id="about" className="py-32 relative z-10 bg-[#000] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-6">Our Identity</div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-10">
              Quietly technical. Execution-focused.
            </h2>

            <motion.ul
              className="grid sm:grid-cols-2 gap-x-12 gap-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <div className="mt-1 mr-4 text-zinc-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 leading-relaxed font-normal text-lg">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 z-10 bg-[#000] border-t border-white/5 text-center flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#000] to-[#000] pointer-events-none"></div>
        <motion.div
          className="max-w-3xl mx-auto px-6 sm:px-8 relative text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Ready to modernize your workflows?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 font-normal max-w-2xl mx-auto">
            Let&apos;s discuss how practical AI and system engineering can create measurable efficiency for your operations.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors font-medium text-sm inline-flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Start the Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

