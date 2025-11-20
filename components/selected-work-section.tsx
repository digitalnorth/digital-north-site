'use client';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const projects = [
  {
    title: 'FinTech Platform Redesign',
    category: 'Product Design & Development',
    description: 'Complete redesign and rebuild of a financial technology platform serving 100K+ users',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Healthcare Analytics Dashboard',
    category: 'Data Visualization & UX',
    description: 'Real-time analytics platform helping healthcare providers make data-driven decisions',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'E-commerce Ecosystem',
    category: 'Full-Stack Development',
    description: 'Scalable marketplace connecting thousands of vendors with millions of customers',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'SaaS Platform Launch',
    category: 'Strategy & Implementation',
    description: 'End-to-end product strategy and development for a B2B software solution',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
];

export function SelectedWorkSection() {
  return (
    <section className="min-h-screen flex items-center justify-center border-t border-slate-800/50 py-20">
      <div className="container mx-auto px-8">
        <AnimatedSection className="mb-16" yOffset={20} duration={0.5}>
          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            A showcase of transformative projects that pushed boundaries and delivered measurable impact
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              className="group cursor-pointer cursor-hover"
              yOffset={30}
              duration={0.6}
              delay={index * 0.1}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:border-slate-600 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-cyan-400 mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-cyan-400 opacity-0 translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-cyan-400 font-medium">
                    <span className="text-sm">View Case Study</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
