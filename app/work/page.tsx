'use client';

import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { MagneticButton } from '@/components/magnetic-button';

const projects = [
  {
    name: 'Solaris Energy',
    tag: 'Brand Strategy · Web Experience',
    result: 'Website redesign and brand system with a +63% conversion uplift in 60 days.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    name: 'Nexa Labs',
    tag: 'Product Launch · Growth System',
    result: 'Go-to-market launch and paid engine that dropped CAC by 34%.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Verda Collective',
    tag: 'Brand Refresh · Immersive Site',
    result: 'Global relaunch with a new immersive site in under 6 weeks.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'Axis Studio',
    tag: 'Experience Design',
    result: 'Portfolio experience that increased inbound inquiries from premium clients.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'Northline Commerce',
    tag: 'Growth & Performance',
    result: 'Built a performance engine that 2.3×\'d revenue year-on-year.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    name: 'Aurora Foods',
    tag: 'Creative Systems',
    result: 'Content and creative system that turned sporadic posting into a predictable pipeline.',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
];

export default function WorkPage() {
  return (
    <div className="bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628] min-h-screen pt-20">
      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Work That Moves Brands Forward.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
              Our projects span strategy, design, and performance across multiple industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection
                key={index}
                className="group cursor-pointer cursor-hover"
                yOffset={30}
                duration={0.6}
                delay={index * 0.1}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:border-slate-600 hover:scale-[1.02] h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-slate-600/50 rounded-full group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-500" />
                    </div>
                  </div>

                  <div className="relative p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="text-sm font-medium text-cyan-400/80 mb-4">
                        {project.tag}
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {project.result}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">View Project</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-slate-800/50">
        <AnimatedSection className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Want your brand here next?
            </h2>

            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
              Let's design the next chapter of your growth story.
            </p>

            <div className="pt-8">
              <MagneticButton
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-xl px-12 py-8 rounded-full transition-all"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
