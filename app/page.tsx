'use client';

import { ArrowRight, Code as Code2, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/hero-parallax';
import { MagneticButton } from '@/components/magnetic-button';
import { NorthStarAnimation } from '@/components/north-star-animation';
import { HorizontalScrollSection } from '@/components/horizontal-scroll-section';
import { SelectedWorkSection } from '@/components/selected-work-section';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628]">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <HeroParallax />
        <NorthStarAnimation />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              className="col-span-12 lg:col-span-7 space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="space-y-8">
                <div>
                  <h1 className="text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-4">
                    Digital North
                  </h1>
                  <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
                    Your Brand's North Star.
                  </h2>
                </div>
                <p className="text-xl lg:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
                  Navigation, strategy and immersive digital experiences for brands that want clarity in a noisy world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-full transition-all"
                >
                  Book a strategy call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
                <button className="group relative border border-slate-600 text-white hover:bg-slate-800/50 text-lg px-8 py-6 rounded-full transition-all cursor-hover">
                  View our work
                  <span className="absolute bottom-3 left-8 right-8 h-[2px] w-0 bg-cyan-400 group-hover:w-[calc(100%-4rem)] transition-all duration-500 ease-out" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
                <div className="relative grid grid-cols-2 gap-6">
                  {[Code2, Rocket, Zap, ArrowRight].map((Icon, i) => (
                    <div
                      key={i}
                      className="group relative aspect-square bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl flex items-center justify-center hover:border-slate-600 transition-all duration-300 hover:scale-105 cursor-hover overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                      <Icon className="h-16 w-16 text-slate-400 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      <ArrowRight className="absolute bottom-4 right-4 h-6 w-6 text-cyan-400 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center border-t border-slate-800/50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            <AnimatedSection className="col-span-12 lg:col-span-5" yOffset={20} duration={0.5}>
              <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                What we do
              </h2>
            </AnimatedSection>

            <div className="col-span-12 lg:col-span-7 space-y-16">
              {[
                { title: 'Product Design', desc: 'Crafting intuitive experiences that users love and remember' },
                { title: 'Development', desc: 'Building scalable applications with cutting-edge technology' },
                { title: 'Strategy', desc: 'Aligning digital solutions with your business objectives' }
              ].map((service, i) => (
                <AnimatedSection
                  key={i}
                  className="group cursor-pointer cursor-hover relative"
                  yOffset={20}
                  duration={0.5}
                  delay={i * 0.1}
                >
                  <div className="relative border-t border-slate-700 pt-8 pb-4 transition-all duration-300 group-hover:border-slate-500 group-hover:scale-[1.02] origin-left">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-lg -mx-4 -my-2" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="relative inline-block text-4xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-cyan-400">
                          {service.title}
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-500 ease-out" />
                        </h3>
                        <p className="text-xl text-slate-400 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <ArrowRight className="h-8 w-8 text-cyan-400 opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 ml-6 mt-2" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HorizontalScrollSection />

      <SelectedWorkSection />

      <section className="h-screen flex items-center justify-center border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10" />

        <AnimatedSection className="container mx-auto px-8 relative z-10" yOffset={20} duration={0.5}>
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Ready to build something extraordinary?
            </h2>

            <p className="text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on your next digital venture and create experiences that leave a lasting impact
            </p>

            <div className="pt-8">
              <MagneticButton
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-xl px-12 py-8 rounded-full transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-3 h-6 w-6" />
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
