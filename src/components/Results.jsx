import React, { useState } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Shield,
  Lightbulb,
  Download,
} from 'lucide-react';
import CompassIcon from './CompassIcon';
import ShareCard from './ShareCard';
import DimensionDeepDive from './DimensionDeepDive';
import TrainingGuide from './TrainingGuide';
import CoachingCTA from './CoachingCTA';
import { generateTrainingPlan } from '../data/trainingPlans';
import { copyToClipboard, generateFullPlanText } from '../utils/sharing';
import { generateResultsPDF } from '../utils/generatePDF';

export default function Results({
  archetype,
  dimScores,
  totalScore,
  percentile,
  topDimension,
  role,
  industry,
  goal,
  onRestart,
}) {
  const [copiedPlan, setCopiedPlan] = useState(false);
  const [showStrengths, setShowStrengths] = useState(false);
  const months = generateTrainingPlan(role, archetype, goal, industry);

  const handleCopyFullPlan = async () => {
    const text = generateFullPlanText(archetype, dimScores, role, industry, goal, months);
    await copyToClipboard(text);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2000);
  };

  return (
    <div className="min-h-screen gradient-warm texture-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {/* Header nav */}
        <nav className="flex items-center justify-between mb-12 no-print">
          <div className="flex items-center gap-2.5">
            <CompassIcon size={28} color={archetype.color} />
            <span className="font-heading font-bold text-brand-dark text-sm tracking-wide">
              AI Leadership Compass
            </span>
          </div>
          <a
            href="https://jsalinas.org?utm_source=compass&utm_medium=nav&utm_campaign=tool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-semibold text-brand-terracotta hover:text-brand-terracotta-dark transition-colors flex items-center gap-1.5"
          >
            AI Coaching <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* ============================================
            SECTION 1: Archetype Hero
            ============================================ */}
        <section className="mb-16">
          <div
            className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{ backgroundColor: archetype.colorLight }}
          >
            <div className="absolute top-6 right-6 opacity-[0.04]">
              <CompassIcon size={200} color={archetype.color} />
            </div>

            <p
              className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-8 relative z-10"
              style={{ color: archetype.color }}
            >
              Your AI Leadership Archetype
            </p>
            <h1 className="font-heading font-black text-brand-dark mb-3 relative z-10" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
              {archetype.name}
            </h1>
            <p className="font-body text-xl italic mb-8 relative z-10" style={{ color: archetype.color }}>
              &ldquo;{archetype.tagline}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap relative z-10">
              <span className="stat-badge text-white shadow-sm" style={{ backgroundColor: archetype.color }}>
                Top {percentile}% of leaders
              </span>
              <span className="stat-badge bg-white/70 text-brand-dark shadow-sm">
                Score: {totalScore}/40
              </span>
              {role && (
                <span className="stat-badge bg-white/70 text-brand-dark shadow-sm">
                  {role}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2: Strengths & Growth (collapsible)
            ============================================ */}
        <section className="mb-4">
          <button
            onClick={() => setShowStrengths(!showStrengths)}
            className="w-full premium-card-padded flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: archetype.color + '15' }}>
                <Shield className="w-5 h-5" style={{ color: archetype.color }} />
              </div>
              <div className="text-left">
                <h3 className="font-heading text-lg font-bold text-brand-dark">Strengths & Growth Opportunities</h3>
                <p className="text-sm text-gray-500 font-body">What you do well and where to level up</p>
              </div>
            </div>
            {showStrengths ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {showStrengths && (
            <div className="grid md:grid-cols-2 gap-6 mt-6 animate-fade-in">
              <div className="premium-card-padded">
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-5 flex items-center gap-2.5">
                  <Shield className="w-4 h-4" style={{ color: archetype.color }} />
                  Your Strengths
                </h3>
                <ul className="space-y-4">
                  {archetype.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: archetype.color }} />
                      <span className="font-body text-sm text-gray-700 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="premium-card-padded">
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-5 flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4" style={{ color: archetype.color }} />
                  Growth Opportunities
                </h3>
                <ul className="space-y-4">
                  {archetype.growth.map((g, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Lightbulb className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: archetype.color }} />
                      <span className="font-body text-sm text-gray-700 leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* ============================================
            CTA: Coaching — after seeing gaps
            ============================================ */}
        <CoachingCTA variant="gaps" archetypeColor={archetype.color} />

        {/* DIVIDER */}
        <div className="section-divider">
          <CompassIcon size={28} color={archetype.color} />
        </div>

        {/* ============================================
            SECTION 3: Dimension Deep-Dives
            ============================================ */}
        <section className="mb-4">
          <DimensionDeepDive dimScores={dimScores} archetypeColor={archetype.color} />
        </section>

        {/* DIVIDER */}
        <div className="section-divider">
          <CompassIcon size={28} color={archetype.color} />
        </div>

        {/* ============================================
            SECTION 4: Share Card
            ============================================ */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <p
              className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: archetype.color }}
            >
              Share & Challenge
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
              Share Your Archetype
            </h2>
            <p className="font-body text-gray-500 max-w-lg mx-auto">
              Download your card for LinkedIn, or challenge a colleague to discover theirs.
            </p>
          </div>
          <ShareCard
            archetype={archetype}
            dimScores={dimScores}
            totalScore={totalScore}
            percentile={percentile}
            topDimension={topDimension}
            role={role}
            industry={industry}
            goal={goal}
          />
        </section>

        {/* DIVIDER */}
        <div className="section-divider">
          <CompassIcon size={28} color={archetype.color} />
        </div>

        {/* ============================================
            SECTION 5: Training Guide
            ============================================ */}
        <section>
          <TrainingGuide months={months} archetype={archetype} role={role} />
        </section>

        {/* Save & Restart */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 items-center justify-center no-print">
          <button
            onClick={() => generateResultsPDF(archetype, dimScores, totalScore, percentile, role, industry, goal, months)}
            className="share-btn text-white"
            style={{ backgroundColor: archetype.color }}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button
            onClick={handleCopyFullPlan}
            className={`share-btn ${copiedPlan ? 'bg-green-600 text-white' : 'bg-brand-dark text-white hover:bg-gray-800'}`}
          >
            {copiedPlan ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedPlan ? 'Full Plan Copied!' : 'Copy Entire Plan'}
          </button>
          <button
            onClick={onRestart}
            className="share-btn bg-white text-gray-600 border-2 border-brand-border hover:border-brand-terracotta"
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </button>
        </div>

        {/* Footer — single primary CTA */}
        <footer className="mt-20 pt-10 border-t border-brand-border text-center pb-10">
          <CompassIcon size={44} color="#C4563A" className="mx-auto mb-5" />
          <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">Ready for Your Next Step?</h3>
          <p className="font-body text-gray-500 mb-6 max-w-md mx-auto leading-relaxed">
            Get direct access to AI expertise and implementation support.
            1:1 coaching, team workshops, and custom AI builds.
          </p>
          <a
            href="https://jsalinas.org/services/executive-coaching.html?utm_source=compass&utm_medium=footer&utm_campaign=coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn bg-brand-terracotta text-white hover:bg-brand-terracotta-dark"
          >
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-8 text-xs text-gray-300 font-heading">
            Built by Joel Salinas &middot; jsalinas.org
          </p>
        </footer>
      </div>
    </div>
  );
}
