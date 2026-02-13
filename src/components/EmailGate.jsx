import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import CompassIcon from './CompassIcon';

export default function EmailGate({ archetype, onContinue }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValid = email.includes('@') && email.includes('.');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    // Store email locally (for future integration with email service)
    try {
      localStorage.setItem('ai-compass-email', email);
    } catch {}

    setSubmitted(true);
    setTimeout(() => onContinue(), 800);
  };

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
          Get your full score breakdown, personalized growth plan, and shareable leadership card.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-up space-y-4"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-brand-border rounded-xl font-body text-base text-brand-dark focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta transition-colors"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!isValid || submitted}
            className={`w-full py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-3 ${
              isValid && !submitted
                ? 'bg-brand-terracotta hover:bg-brand-terracotta-dark text-white hover:shadow-xl hover:-translate-y-0.5'
                : submitted
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {submitted ? 'Unlocking...' : 'Unlock My Full Results'}
            {!submitted && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>

        {/* Skip option */}
        <button
          onClick={onContinue}
          className="animate-fade-in-up mt-6 text-sm text-gray-400 hover:text-gray-600 font-heading transition-colors underline underline-offset-4"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Skip for now
        </button>

        <p className="animate-fade-in-up mt-8 text-xs text-gray-300 font-heading" style={{ animationDelay: '0.6s', opacity: 0 }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
