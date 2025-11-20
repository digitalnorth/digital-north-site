'use client';

import { useState } from 'react';
import { CheckCircle2, Upload } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const services = [
  'Brand Strategy',
  'Experience Design',
  'Growth & Performance',
  'Creative Systems',
  'Digital Infrastructure',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      budget_range: formData.get('budget_range'),
      timeline: formData.get('timeline'),
      services: selectedServices,
      project_description: formData.get('project_description'),
      referral_source: formData.get('referral_source'),
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from('contact_inquiries').insert([data]);

      if (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your inquiry. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628] min-h-screen pt-20">
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-8">
              <div className="flex justify-center mb-8">
                <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-full p-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Thank You!
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
                We've received your inquiry and will review it carefully. We'll reach out within 24-48 hours to schedule your strategy call.
              </p>
              <div className="pt-8">
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-full transition-all"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628] min-h-screen pt-20">
      <section className="py-32 border-b border-slate-800/50">
        <div className="container mx-auto px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Start Your Project.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
              Tell us about your goals, challenges, and what you're building. We'll help you find your North Star.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Your full name"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        Company Name *
                      </label>
                      <Input
                        name="company"
                        required
                        placeholder="Your company"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-300 mb-2 block">
                          Budget Range *
                        </label>
                        <Select name="budget_range" required>
                          <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="<10L">&lt;10L</SelectItem>
                            <SelectItem value="10-30L">10–30L</SelectItem>
                            <SelectItem value="30-75L">30–75L</SelectItem>
                            <SelectItem value="75L+">75L+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-300 mb-2 block">
                          Timeline *
                        </label>
                        <Select name="timeline" required>
                          <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            <SelectItem value="ASAP">ASAP</SelectItem>
                            <SelectItem value="1-3 months">1–3 months</SelectItem>
                            <SelectItem value="3-6 months">3–6 months</SelectItem>
                            <SelectItem value="6+ months">6+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-4 block">
                        What services are you looking for? *
                      </label>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-3">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={() => handleServiceToggle(service)}
                              className="border-slate-700 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                            />
                            <label
                              htmlFor={service}
                              className="text-slate-300 cursor-pointer"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        Project Description *
                      </label>
                      <Textarea
                        name="project_description"
                        required
                        placeholder="Tell us about your project, goals, and challenges..."
                        rows={6}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        How did you hear about Digital North?
                      </label>
                      <Input
                        name="referral_source"
                        placeholder="Referral, search, social media, etc."
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">
                        Upload Brief / Deck (Optional)
                      </label>
                      <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-cyan-400/50 transition-all cursor-pointer">
                        <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">
                          Drag and drop or click to upload
                        </p>
                        <p className="text-slate-600 text-xs mt-1">
                          PDF, DOC, or PPT (Max 10MB)
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading || selectedServices.length === 0}
                      className="w-full bg-white text-slate-900 hover:bg-slate-100 text-lg py-6 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sticky top-32">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    15–30 Min Strategy Call
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    We'll review your answers, analyze your goals, and come prepared with recommendations for your next moves.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
