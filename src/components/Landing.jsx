import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';
import CompassIcon from './CompassIcon';

export default function Landing({ onStart, challengerName }) {
  return (
    <div className="min-h-screen gradient-warm texture-bg flex flex-col">
      {/* Nav */}
      <nav className="w-full px-6 py-5 flex items-center justify-between max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-2.5">
          <CompassIcon size={30} />
          <span className="font-heading font-bold text-brand-dark text-base tracking-wide">jsalinas.org</span>
        </div>
        <a
          href="https://jsalinas.org?utm_source=compass&utm_medium=nav&utm_campaign=tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-heading font-semibold text-brand-terracotta hover:text-brand-terracotta-dark transition-colors"
        >
          AI Coaching
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6 pb-16 relative z-10">
        <div className="max-w-3xl w-full text-center">
          {/* Challenge banner */}
          {challengerName && (
            <div className="animate-fade-in mb-10 inline-flex items-center gap-2.5 bg-brand-terracotta/10 border border-brand-terracotta/30 text-brand-terracotta-dark px-6 py-3 rounded-full font-heading font-semibold text-sm">
              <Users className="w-4 h-4" />
              {challengerName} challenged you to future-proof yourself with AI
            </div>
          )}

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <CompassIcon size={110} className="mx-auto mb-10 compass-glow" />
          </div>

          <p
            className="animate-fade-in-up font-heading text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ animationDelay: '0.15s', opacity: 0, color: '#C4563A' }}
          >
            Free AI Assessment
          </p>

          <h1
            className="animate-fade-in-up font-heading font-black text-brand-dark leading-[1.05] mb-7"
            style={{ animationDelay: '0.25s', opacity: 0, fontSize: 'clamp(2.2rem, 7vw, 4.2rem)', letterSpacing: '-0.02em' }}
          >
            Future-Proof Yourself
            <br />
            with AI
          </h1>

          <p
            className="animate-fade-in-up font-body text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-4 leading-relaxed"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            Answer a few quick questions. Find out where you stand with AI.
            Get a free personalized 6-month plan built for your role.
          </p>

          <p
            className="animate-fade-in-up font-heading text-xs text-gray-300 tracking-wide mb-12"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Based on research from Harvard, MIT, McKinsey & the World Economic Forum
          </p>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <button
              onClick={onStart}
              className="group bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-12 py-4.5 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-3"
            >
              Start the Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-5 text-sm text-gray-400 font-heading flex items-center justify-center gap-5">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 3 minutes</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>100% free</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>No account needed</span>
            </p>
          </div>

          {/* Stats bar */}
          <div
            className="animate-fade-in-up mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
            style={{ animationDelay: '0.75s', opacity: 0 }}
          >
            <div className="text-center">
              <div className="font-heading font-black text-3xl text-brand-dark">39%</div>
              <div className="text-xs text-gray-400 mt-1.5 font-heading">of skills outdated<br />by 2030</div>
            </div>
            <div className="text-center border-x border-brand-border">
              <div className="font-heading font-black text-3xl text-brand-dark">7x</div>
              <div className="text-xs text-gray-400 mt-1.5 font-heading">growth in AI<br />job demand</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-3xl text-brand-dark">56%</div>
              <div className="text-xs text-gray-400 mt-1.5 font-heading">wage premium<br />for AI skills</div>
            </div>
          </div>
          <p className="text-[10px] text-gray-300 mt-4 font-heading tracking-wide">
            WEF 2025 &middot; McKinsey 2025 &middot; PwC 2025
          </p>
        </div>
      </main>
    </div>
  );
}
