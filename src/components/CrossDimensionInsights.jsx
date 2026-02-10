import React from 'react';
import { Lightbulb, ArrowRight, Zap } from 'lucide-react';
import { getCrossDimensionInsights } from '../data/insights';

export default function CrossDimensionInsights({ dimScores, archetypeColor }) {
  const insights = getCrossDimensionInsights(dimScores);

  if (insights.length === 0) return null;

  return (
    <div>
      <div className="text-center mb-10">
        <p
          className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-3"
          style={{ color: archetypeColor }}
        >
          Pattern Analysis
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
          What Your Score Combination Reveals
        </h2>
        <p className="font-body text-gray-500 max-w-xl mx-auto leading-relaxed">
          Individual scores tell part of the story. The patterns between your dimensions
          reveal deeper insights about your AI leadership style.
        </p>
      </div>

      <div className="space-y-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="premium-card overflow-hidden"
          >
            {/* Header stripe */}
            <div
              className="h-1.5"
              style={{
                background: `linear-gradient(90deg, ${archetypeColor}, ${archetypeColor}88)`,
              }}
            />

            <div className="p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: archetypeColor + '12' }}
                >
                  <Lightbulb className="w-6 h-6" style={{ color: archetypeColor }} />
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-4">
                    {insight.title}
                  </h3>
                  <p className="font-body text-base text-gray-700 leading-relaxed mb-6">
                    {insight.insight}
                  </p>

                  <div
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: archetypeColor + '08', border: `1px solid ${archetypeColor}20` }}
                  >
                    <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: archetypeColor }} />
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: archetypeColor }}>
                        Recommended Action
                      </p>
                      <p className="font-body text-sm text-gray-700 leading-relaxed">
                        {insight.action}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
