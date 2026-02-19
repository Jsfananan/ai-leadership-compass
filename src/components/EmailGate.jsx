import React from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import CompassIcon from './CompassIcon';

export default function EmailGate({ archetype, onContinue }) {
  return (
    <div className="min-h-screen gradient-warm texture-bg flex flex-col items-center justify-center px-6 py-16 relative z-10">
      <div className="max-w-md w-full text-center">
        {/* Archetype badge */}
        <div className="animate-fade-in mb-8">
          <CompassIcon size={64} color={archetype.color} className="mx-auto mb-6 compass-glow" />
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-heading font-bold text-sm"
            style={{ backgroundColor: archetype.color }}
          >
            <Sparkles className="w-4 h-4" />
            {archetype.name}
          </div>
        </div>

        <h2 className="animate-fade-in-up font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Your results are ready
        </h2>

        <p className="animate-fade-in-up font-body text-gray-500 text-lg mb-10 leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Get your full score breakdown and your free personalized 6-month AI growth plan.
        </p>

        {/* Newsletter subscribe CTA */}
        <div
          className="animate-fade-in-up bg-white rounded-2xl p-8 border border-brand-border shadow-sm mb-6"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <p className="font-heading text-sm font-semibold text-brand-dark mb-2">
            Join my newsletter
          </p>
          <p className="font-body text-sm text-gray-500 mb-5 leading-relaxed">
            4,000+ leaders worldwide get human-centered AI insights, tools, and frameworks every week.
          </p>
          <a
            href="https://leadershipinchange.com?utm_source=compass&utm_medium=interstitial&utm_campaign=subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-heading font-bold text-base transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2.5 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white hover:shadow-lg hover:-translate-y-0.5"
          >
            Subscribe to Leadership in Change
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Continue to results */}
        <button
          onClick={onContinue}
          className="animate-fade-in-up group inline-flex items-center gap-2 text-base font-heading font-semibold transition-colors"
          style={{ animationDelay: '0.45s', opacity: 0, color: archetype.color }}
        >
          Continue to My Results
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
