import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle,
  BookOpen,
  Zap,
  Brain,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  Quote,
  Lock,
} from 'lucide-react';
import { copyToClipboard } from '../utils/sharing';
import CoachingCTA from './CoachingCTA';

export default function TrainingGuide({ months, archetype, role }) {
  const [expandedMonth, setExpandedMonth] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const handleCopyPrompt = async (text, monthIndex) => {
    await copyToClipboard(text);
    setCopiedPrompt(monthIndex);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Guide intro */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-border">
        <h2 className="font-heading text-2xl font-bold text-brand-dark mb-4">
          Your 6-Month Growth Plan
        </h2>
        <p className="font-body text-gray-600 mb-6 leading-relaxed">
          Personalized for <strong>{role}</strong> at the <strong style={{ color: archetype.color }}>{archetype.name}</strong> level.
          Each month builds on the last. Spend 15&ndash;30 minutes per week following these actions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 bg-brand-warm rounded-lg">
            <Calendar className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-brand-dark">Weekly Actions</p>
              <p className="text-xs text-gray-500 mt-0.5">Tiny habits designed by behavioral science</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-brand-warm rounded-lg">
            <Brain className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-brand-dark">Study Keywords</p>
              <p className="text-xs text-gray-500 mt-0.5">Search these on YouTube, Perplexity, or Substack</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-brand-warm rounded-lg">
            <Zap className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-brand-dark">Custom Prompts</p>
              <p className="text-xs text-gray-500 mt-0.5">Copy into ChatGPT or Claude and go</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly cards */}
      {months.map((month, index) => {
        const isExpanded = expandedMonth === index;
        const isLocked = index > 0;
        return (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden transition-all duration-300 ${isLocked ? 'opacity-70' : ''}`}
          >
            {/* Month header (always visible) */}
            <button
              onClick={() => {
                if (isLocked) return;
                setExpandedMonth(isExpanded ? -1 : index);
              }}
              className={`w-full p-6 flex items-center justify-between text-left transition-colors ${isLocked ? 'cursor-default' : 'hover:bg-gray-50'}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-lg ${isLocked ? 'bg-gray-300 text-white' : 'text-white'}`}
                  style={isLocked ? {} : { backgroundColor: archetype.color }}
                >
                  {isLocked ? <Lock className="w-5 h-5" /> : month.month}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark">
                    {month.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-body">
                    {isLocked ? 'Unlock with coaching' : month.theme}
                  </p>
                </div>
              </div>
              {isLocked ? (
                <Lock className="w-4 h-4 text-gray-300" />
              ) : isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {/* Locked overlay for months 2-6 */}
            {isLocked && (
              <div className="px-6 pb-6 text-center">
                <a
                  href="https://jsalinas.org/services/executive-coaching.html?utm_source=compass&utm_medium=training&utm_campaign=unlock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-heading font-semibold bg-brand-terracotta text-white hover:bg-brand-terracotta-dark transition-colors"
                >
                  Unlock Full Plan
                </a>
              </div>
            )}

            {/* Month content (expandable) — only for month 1 */}
            {isExpanded && !isLocked && (
              <div className="px-6 pb-6 animate-fade-in">
                {/* Research stat */}
                <div className="mb-6 p-4 rounded-xl border-l-4" style={{ borderColor: archetype.color, backgroundColor: archetype.colorLight + '40' }}>
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: archetype.color }} />
                    <div>
                      <p className="font-body text-sm text-gray-700 italic leading-relaxed">
                        {month.researchStat}
                      </p>
                      <p className="font-heading text-xs text-gray-400 mt-1.5">&mdash; {month.statSource}</p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left column */}
                  <div className="space-y-6">
                    {/* Weekly actions */}
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-brand-dark mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: archetype.color }} />
                        Weekly Actions
                      </h4>
                      <ul className="space-y-3">
                        {month.weeklyActions.map((action, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-heading font-bold text-white flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: archetype.color }}
                            >
                              {i + 1}
                            </span>
                            <span className="font-body text-sm text-gray-700 leading-relaxed">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Implementation intention */}
                    <div className="p-4 bg-brand-warm rounded-xl">
                      <h4 className="font-heading text-sm font-semibold text-brand-dark mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" style={{ color: archetype.color }} />
                        Your If-Then Trigger
                      </h4>
                      <p className="font-body text-sm text-gray-600 italic leading-relaxed">
                        &ldquo;{month.implementationIntention}&rdquo;
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2 font-heading">
                        Based on implementation intentions research (Gollwitzer)
                      </p>
                    </div>

                    {/* Study keywords */}
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-brand-dark mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" style={{ color: archetype.color }} />
                        Study Keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {month.studyKeywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-xs font-heading font-medium border"
                            style={{ borderColor: archetype.color + '40', backgroundColor: archetype.colorLight + '60', color: archetype.color }}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column: Custom prompt */}
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-brand-dark mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" style={{ color: archetype.color }} />
                      Custom Prompt for Month {month.month}
                    </h4>
                    <div className="bg-gray-50 rounded-xl p-5 border border-brand-border">
                      <p className="font-body text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                        {month.customPrompt}
                      </p>
                      <button
                        onClick={() => handleCopyPrompt(month.customPrompt, index)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-heading font-semibold transition-all duration-200 ${
                          copiedPrompt === index
                            ? 'bg-green-600 text-white'
                            : 'text-white'
                        }`}
                        style={copiedPrompt === index ? {} : { backgroundColor: archetype.color }}
                      >
                        {copiedPrompt === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copiedPrompt === index ? 'Copied!' : 'Copy Prompt'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* CTA: Implementation support */}
      <CoachingCTA variant="plan" archetypeColor={archetype.color} />
    </div>
  );
}
