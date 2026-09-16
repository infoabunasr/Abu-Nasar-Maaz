import React from 'react';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Layers,
  MapPin,
  Cpu,
  MonitorCheck,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const VenturesPage: React.FC = () => {
  const { siteSettings, navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <SEOHead
        title="Ventures & Products – Innovify XR & Locafyro"
        description="Explore technology ventures and startup initiatives led by Abu Naser Maaz, including Innovify XR (Immersive VR & Simulation) and Locafyro."
        breadcrumbs={[
          { name: 'Ventures', item: 'https://abunasarmaaz.com/#/ventures' }
        ]}
      />

      <Breadcrumb items={[{ name: 'Ventures & Products' }]} />

      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
            <span>Entrepreneurship & Product Building</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight">
            Ventures & Technology Initiatives
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Building specialized products and spatial solutions at the intersection of Virtual Reality, simulation engineering, AI integration, and localized discovery.
          </p>
        </div>
      </section>

      {/* Venture 1: Innovify XR (Featured flagship) */}
      <section className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="blue">Flagship Venture</Badge>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Founder & CEO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Innovify XR
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              An immersive technology studio delivering interactive virtual reality simulations, enterprise training environments, spatial computing interfaces, and AI-integrated digital workflows.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
                <span><strong>Immersive Training & Simulation:</strong> High-retention procedural training modules for safety, healthcare, and technical workflows.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
                <span><strong>Spatial Ergonomics & 6DoF QA:</strong> Precision-tested interaction physics and comfort frameworks designed for Meta Quest and OpenXR.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
                <span><strong>AI-Integrated Capabilities:</strong> Real-time conversational avatars and contextual voice guidance embedded in 3D environments.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={siteSettings.innovifyXrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#071A33] hover:bg-[#146EF5] text-white font-semibold text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Visit InnovifyXR.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => navigateTo('/case-studies/vr-training-spatial-qa')}
                className="text-xs font-bold text-[#146EF5] hover:underline"
              >
                Read VR Testing Case Study →
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-80 sm:h-96 bg-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80"
                alt="Innovify XR"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Spatial Computing</span>
                  <p className="text-sm font-semibold">Transforming complex workflows into intuitive 3D simulations.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Venture 2: Locafyro */}
      <section className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="amber">Product in Development</Badge>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Founder Concept
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight">
              Locafyro
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              A hyper-local discovery and engagement ecosystem engineered to connect local merchants, authentic neighborhood experiences, and community members.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Hyper-Local Commerce:</strong> Streamlining local services and store discoverability without algorithmic noise.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Quality-First Architecture:</strong> Built from the ground up with strict performance budgets, offline cache support, and geolocation accuracy.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigateTo('/contact')}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                Inquire About Locafyro
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-80 sm:h-96 bg-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Locafyro Discovery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Local Ecosystem</span>
                  <p className="text-sm font-semibold">Connecting communities through structured neighborhood discovery.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
