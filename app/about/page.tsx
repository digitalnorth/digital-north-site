'use client';

import { ArrowRight, Lightbulb, Palette, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { MagneticButton } from '@/components/magnetic-button';

const philosophy = [
  {
    icon: Lightbulb,
    title: 'Clarity Over Chaos',
    description: 'Brands don\'t need more noise. They need direction.',
  },
  {
    icon: Palette,
    title: 'Design With Purpose',
    description: 'Motion, layout, and typography exist to guide attention.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Obsessed',
    description: 'Data informs everything. Creativity multiplies it.',
  },
];

const approach = [
  {
    title: 'Strategy',
    description: 'Sharp thinking',
  },
  {
    title: 'Experience',
    description: 'Elevated design',
  },
  {
    title: 'Growth',
    description: 'Measurable results',
  },
];

const stats = [
  {
    number: '50+',
    label: 'Projects delivered',
  },
  {
    number: '7',
    label: 'Countries worked across',
  },
  {
    number: '5+',
    label: 'Core industries: eCom, tech, education, food, real estate',
  },
  {
    number: '2–5×',
    label: 'Typical uplift in engagement and performance',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628] min-h-screen pt-20">
      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Your Strategic Partners in Clarity, Design & Growth.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
              Digital North is a hybrid of strategy, design, and performance—built for brands that want a long-term advantage, not a short-term agency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:border-cyan-400/50 transition-all duration-300 cursor-hover h-full">
                  <item.icon className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-16">
              <h2 className="text-lg font-semibold text-cyan-400 mb-4 tracking-wide uppercase">
                How We Work
              </h2>
              <p className="text-2xl text-slate-300 leading-relaxed">
                We combine sharp strategy, elevated experience design, and measurable growth into one system.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {approach.map((item, index) => (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:border-cyan-400/50 transition-all duration-300 cursor-hover">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-xl text-slate-500">—</span>
                      <p className="text-xl text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Meet Munna
                </h2>
                <p className="text-xl text-cyan-400 mb-8">
                  Founder, Digital North
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  I started Digital North to bring clarity, precision, and world-class digital execution to ambitious brands. My obsession is building systems that scale. My mission is turning founders into category leaders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center group hover:border-cyan-400/50 transition-all duration-300 cursor-hover">
                  <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                    {stat.number}
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <AnimatedSection className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Let's Build Your Next Chapter.
            </h2>

            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
              Share your goals. We'll help you find your North Star and the path to it.
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
