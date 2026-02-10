import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Wrench, Target, Handshake, Flag, AlertCircle, TrendingUp, CheckCircle } from 'lucide-react';
import { getDimensionInsight } from '../data/insights';
import ScoreBar from './ScoreBar';

const iconMap = {
  Eye, Wrench, Target, Handshake, Flag,
};

export default function DimensionDeepDive({ dimScores, archetypeColor }) {
  const [expandedDim, setExpandedDim] = useState(null);

  const dimensionOrder = ['awareness', 'proficiency', 'strategy', 'collaboration', 'leadership'];

  return (
    <div>
      <div className="text-center mb-10">
        <p
          className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-3"
          style={{ color: archetypeColor }}
        >
          Dimension Analysis
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
          Your Five Dimensions, Decoded
        </h2>
        <p className="font-body text-gray-500 max-w-xl mx-auto leading-relaxed">
          Each dimension reveals a different facet of your AI leadership.
          Click any dimension to see your personalized analysis, gaps, and next steps.
        </p>
      </div>

      <div className="space-y-4">
        {dimensionOrder.map((dimId, index) => {
          const insight = getDimensionInsight(dimId, dimScores[dimId]);
          if (!insight) return null;

          const isExpanded = expandedDim === dimId;
          const Icon = iconMap[insight.icon] || Eye;
          const score = insight.score;
          const levelLabel = score <= 4 ? 'Developing' : score <= 6 ? 'Established' : 'Advanced';
          const levelColor = score <= 4 ? '#d97706' : score <= 6 ? '#3b6fa0' : '#16a34a';

          return (
            <div
              key={dimId}
              className="dimension-card"
            >
              {/* Header — always visible */}
              <button
                onClick={() => setExpandedDim(isExpanded ? null : dimId)}
                className="w-full p-6 sm:p-8 flex items-start gap-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: archetypeColor + '15' }}
                >
                  <Icon className="w-6 h-6" style={{ color: archetypeColor }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-heading text-lg font-bold text-brand-dark">
                      {insight.label}
                    </h3>
                    <span
                      className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: levelColor + '15', color: levelColor }}
                    >
                      {levelLabel}
                    </span>
                  </div>
                  <p className="font-body text-sm text-gray-500 mb-3">{insight.subtitle}</p>
                  <ScoreBar
                    score={score}
                    color={archetypeColor}
                    delay={200 + index * 100}
                    showScore={true}
                  />
                </div>

                <div className="flex-shrink-0 mt-2">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 animate-fade-in">
                  <div className="ml-[4.25rem]">
                    {/* Headline */}
                    <div className="mb-6">
                      <h4 className="font-heading text-xl font-bold text-brand-dark mb-1">
                        {insight.level.headline}
                      </h4>
                      <div className="w-12 h-1 rounded-full mt-3" style={{ backgroundColor: archetypeColor }} />
                    </div>

                    {/* Description */}
                    <p className="font-body text-base text-gray-700 leading-relaxed mb-8">
                      {insight.level.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Gap analysis */}
                      <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/50">
                        <h5 className="font-heading text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          The Gap
                        </h5>
                        <p className="font-body text-sm text-gray-700 leading-relaxed">
                          {insight.level.gap}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="p-5 rounded-xl bg-green-50/60 border border-green-200/50">
                        <h5 className="font-heading text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Your Next Moves
                        </h5>
                        <ul className="space-y-2.5">
                          {insight.level.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle
                                className="w-4 h-4 flex-shrink-0 mt-0.5"
                                style={{ color: archetypeColor }}
                              />
                              <span className="font-body text-sm text-gray-700 leading-relaxed">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
