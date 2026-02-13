import React, { useState } from 'react';
import { Users, Target, Sparkles, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { roles, industries, goals } from '../data/questions';
import CompassIcon from './CompassIcon';

export default function ContextForm({ onSubmit, onBack }) {
  const [role, setRole] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');

  const effectiveRole = role === 'Other' ? customRole.trim() : role;
  const canContinue = effectiveRole && industry && goal;

  const handleSubmit = () => {
    if (canContinue) {
      onSubmit({ role: effectiveRole, industry, goal });
    }
  };

  return (
    <div className="min-h-screen bg-brand-warm flex flex-col">
      <nav className="w-full px-6 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-terracotta font-heading font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <CompassIcon size={28} />
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="max-w-xl w-full">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
              Tell us about you
            </h2>
            <p className="text-gray-500 text-lg">
              This personalizes your results and growth plan.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            {/* Role */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-border">
              <label className="flex items-center gap-2 text-brand-dark font-heading font-semibold text-lg mb-3">
                <Users className="w-5 h-5 text-brand-terracotta" />
                What is your role?
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-brand-border rounded-lg focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta text-brand-dark appearance-none cursor-pointer font-body text-base"
                >
                  <option value="">Select your role...</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              {role === 'Other' && (
                <input
                  type="text"
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                  placeholder="Enter your specific role..."
                  className="w-full mt-3 p-3.5 bg-gray-50 border border-brand-border rounded-lg focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta text-brand-dark font-body"
                />
              )}
            </div>

            {/* Industry */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-border">
              <label className="flex items-center gap-2 text-brand-dark font-heading font-semibold text-lg mb-3">
                <Target className="w-5 h-5 text-brand-terracotta" />
                What industry?
              </label>
              <div className="relative">
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-brand-border rounded-lg focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta text-brand-dark appearance-none cursor-pointer font-body text-base"
                >
                  <option value="">Select your industry...</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Goal */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-border">
              <label className="flex items-center gap-2 text-brand-dark font-heading font-semibold text-lg mb-3">
                <Sparkles className="w-5 h-5 text-brand-terracotta" />
                What&rsquo;s your primary goal with AI?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`text-left p-3 rounded-lg border-2 transition-all duration-200 font-body text-sm ${
                      goal === g
                        ? 'border-brand-terracotta bg-brand-terracotta/10 text-brand-dark'
                        : 'border-brand-border hover:border-brand-terracotta/50 text-gray-600'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <button
              onClick={handleSubmit}
              disabled={!canContinue}
              className={`group inline-flex items-center gap-3 px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-lg ${
                canContinue
                  ? 'bg-brand-terracotta hover:bg-brand-terracotta-dark text-white hover:shadow-xl hover:-translate-y-0.5'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Get My Results
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
