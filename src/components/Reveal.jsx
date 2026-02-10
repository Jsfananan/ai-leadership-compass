import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import CompassIcon from './CompassIcon';
import RadarChart from './RadarChart';
import AnimatedCounter from './AnimatedCounter';
import ScoreBar from './ScoreBar';
import { dimensions } from '../data/questions';

export default function Reveal({ archetype, dimScores, totalScore, percentile, topDimension, onComplete }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);
  const totalCards = 5;

  const advanceCard = () => {
    if (currentCard < totalCards - 1) {
      setCardVisible(false);
      setTimeout(() => {
        setCurrentCard((prev) => prev + 1);
        setCardVisible(true);
      }, 500);
    } else {
      onComplete();
    }
  };

  // Auto-advance card 0 after delay
  useEffect(() => {
    if (currentCard === 0) {
      const timer = setTimeout(advanceCard, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentCard]);

  const cards = [
    // Card 0: Dramatic build-up with analyzing dots
    <div key="0" className="reveal-card gradient-dark text-white">
      <div className="animate-fade-in-scale">
        <CompassIcon size={100} color="#cc6f4d" spinning className="mb-12 compass-glow" />
        <p className="font-heading text-2xl sm:text-3xl text-gray-300 max-w-lg leading-relaxed mb-6">
          Analyzing your responses across
          <span className="text-brand-terracotta font-bold"> 5 dimensions </span>
          of AI leadership
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-brand-terracotta"
              style={{ animation: `dotPulse 1.4s ease-in-out ${i * 0.3}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>,

    // Card 1: The big archetype reveal — dramatic typography
    <div
      key="1"
      className="reveal-card"
      style={{ backgroundColor: archetype.colorLight }}
    >
      <div className="max-w-2xl w-full">
        <p
          className="font-heading text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-10 opacity-0"
          style={{ color: archetype.color, animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}
        >
          Your AI Leadership Archetype
        </p>

        <div
          className="mb-10 opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.5s forwards' }}
        >
          <CompassIcon size={140} color={archetype.color} className="mx-auto compass-glow" />
        </div>

        <h1
          className="font-heading font-black text-brand-dark mb-6 opacity-0"
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '1',
            letterSpacing: '-0.03em',
            animation: 'typeReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards',
          }}
        >
          {archetype.name}
        </h1>

        <p
          className="font-body text-xl sm:text-2xl italic max-w-lg mx-auto leading-relaxed opacity-0"
          style={{ color: archetype.color, animation: 'fadeInUp 0.6s ease-out 1.8s forwards' }}
        >
          &ldquo;{archetype.tagline}&rdquo;
        </p>

        <button
          onClick={advanceCard}
          className="mt-14 share-btn text-white opacity-0"
          style={{ backgroundColor: archetype.color, animation: 'fadeInUp 0.6s ease-out 2.2s forwards' }}
        >
          See Your Scores <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>,

    // Card 2: Score reveal with animated counters and bars
    <div key="2" className="reveal-card bg-white texture-bg">
      <div className="max-w-xl w-full relative z-10">
        <p
          className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-0"
          style={{ color: archetype.color, animation: 'fadeInUp 0.5s ease-out 0.1s forwards' }}
        >
          Your Score Breakdown
        </p>

        {/* Total score — huge animated counter */}
        <div className="mb-12 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards' }}>
          <div className="display-number" style={{ color: archetype.color }}>
            <AnimatedCounter end={totalScore} duration={2000} delay={400} />
            <span className="text-gray-300 font-heading" style={{ fontSize: '0.4em' }}>/40</span>
          </div>
          <p className="font-heading text-sm text-gray-400 mt-2">Overall AI Leadership Score</p>
        </div>

        {/* Animated score bars */}
        <div className="space-y-5 mb-10 text-left">
          {dimensions.map((dim, i) => (
            <div
              key={dim.id}
              className="opacity-0"
              style={{ animation: `fadeInUp 0.5s ease-out ${0.6 + i * 0.15}s forwards` }}
            >
              <ScoreBar
                score={dimScores[dim.id]}
                color={archetype.color}
                delay={700 + i * 200}
                label={dim.label}
              />
            </div>
          ))}
        </div>

        {/* Percentile badge */}
        <div className="opacity-0" style={{ animation: 'fadeInUp 0.5s ease-out 1.6s forwards' }}>
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-heading font-bold text-base"
            style={{ backgroundColor: archetype.color }}
          >
            Top <AnimatedCounter end={percentile} duration={1500} delay={1700} suffix="%" /> of leaders assessed
          </div>
        </div>

        <button
          onClick={advanceCard}
          className="mt-12 share-btn text-white opacity-0"
          style={{ backgroundColor: archetype.color, animation: 'fadeInUp 0.5s ease-out 2s forwards' }}
        >
          Your Radar Profile <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>,

    // Card 3: Radar chart — full screen, dramatic
    <div key="3" className="reveal-card gradient-warm">
      <div className="max-w-lg w-full">
        <p
          className="font-heading text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0"
          style={{ color: archetype.color, animation: 'fadeInUp 0.5s ease-out 0.1s forwards' }}
        >
          Your Leadership Profile
        </p>
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-10 opacity-0"
          style={{ animation: 'fadeInUp 0.5s ease-out 0.3s forwards' }}
        >
          {archetype.name}
        </h2>

        <div className="opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.5s forwards' }}>
          <RadarChart dimScores={dimScores} color={archetype.color} size={340} />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 opacity-0" style={{ animation: 'fadeInUp 0.5s ease-out 1s forwards' }}>
          <p className="text-gray-500 font-body text-sm">
            Strongest: <strong className="text-brand-dark">{topDimension.label}</strong> ({topDimension.score}/8)
          </p>
        </div>

        <button
          onClick={advanceCard}
          className="mt-10 share-btn text-white opacity-0"
          style={{ backgroundColor: archetype.color, animation: 'fadeInUp 0.5s ease-out 1.3s forwards' }}
        >
          Your Personal Insight <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>,

    // Card 4: Description + personal insight — the "aha" card
    <div key="4" className="reveal-card bg-white texture-bg">
      <div className="max-w-xl w-full text-left relative z-10">
        <div className="text-center mb-10">
          <CompassIcon size={56} color={archetype.color} className="mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-1">
            {archetype.name}
          </h2>
          <p className="font-heading text-sm font-semibold" style={{ color: archetype.color }}>
            Score: {totalScore}/40 &middot; Top {percentile}%
          </p>
        </div>

        <div className="stagger-children">
          {archetype.description.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>

        <div
          className="mt-8 p-6 rounded-xl border-l-4 bg-gray-50 opacity-0"
          style={{
            borderColor: archetype.color,
            animation: 'fadeInUp 0.5s ease-out 0.8s forwards',
          }}
        >
          <p className="font-body text-sm sm:text-base text-gray-600 italic leading-relaxed">
            &ldquo;{archetype.stat}&rdquo;
          </p>
          <p className="font-heading text-xs text-gray-400 mt-3">&mdash; {archetype.statSource}</p>
        </div>

        <div
          className="mt-12 text-center opacity-0"
          style={{ animation: 'fadeInUp 0.5s ease-out 1.2s forwards' }}
        >
          <button
            onClick={advanceCard}
            className="share-btn text-white"
            style={{ backgroundColor: archetype.color }}
          >
            <Sparkles className="w-5 h-5" />
            See Full Results & Growth Plan
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>,
  ];

  return (
    <div
      className="transition-opacity duration-500"
      style={{ opacity: cardVisible ? 1 : 0 }}
    >
      {cards[currentCard]}
    </div>
  );
}
