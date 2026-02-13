import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { questions } from '../data/questions';
import CompassIcon from './CompassIcon';

export default function Assessment({ onComplete, onBack }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [transitioning, setTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('enter');

  const question = questions[currentQ];
  const progress = ((currentQ + (answers[currentQ] !== undefined ? 1 : 0)) / questions.length) * 100;

  useEffect(() => {
    setSlideDirection('enter');
  }, [currentQ]);

  const handleAnswer = (value) => {
    if (transitioning) return;
    const newAnswers = { ...answers, [currentQ]: value };
    setAnswers(newAnswers);

    setTransitioning(true);
    setSlideDirection('exit');

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSlideDirection('enter');
      } else {
        onComplete(newAnswers);
      }
      setTransitioning(false);
    }, 400);
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setTransitioning(true);
      setSlideDirection('exit');
      setTimeout(() => {
        setCurrentQ(currentQ - 1);
        setSlideDirection('enter');
        setTransitioning(false);
      }, 300);
    } else {
      onBack();
    }
  };

  const dimensionLabels = {
    awareness: 'AI Awareness',
    proficiency: 'Tool Proficiency',
    strategy: 'Strategic Integration',
    collaboration: 'Human-AI Collaboration',
    leadership: 'Change Leadership',
  };

  return (
    <div className="min-h-screen gradient-warm flex flex-col">
      {/* Header */}
      <div className="w-full px-6 py-5 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-brand-terracotta font-heading font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="font-heading text-sm text-gray-300 tracking-wide">
            {currentQ + 1} of {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-terracotta rounded-full progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="max-w-2xl w-full">
          <div
            key={currentQ}
            className={`${slideDirection === 'enter' ? 'card-enter' : slideDirection === 'exit' ? 'card-exit' : ''}`}
          >
            {/* Dimension tag */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-brand-terracotta/8 text-brand-terracotta tracking-wide">
                {dimensionLabels[question.dimension]}
              </span>
            </div>

            {/* Question text */}
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-12 leading-snug px-2" style={{ letterSpacing: '-0.01em' }}>
              {question.text}
            </h2>

            {/* Options */}
            <div className="space-y-3.5">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => !transitioning && handleAnswer(option.value)}
                  disabled={transitioning}
                  className={`w-full text-left option-card group ${
                    answers[currentQ] === option.value ? 'selected' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        answers[currentQ] === option.value
                          ? 'border-brand-terracotta bg-brand-terracotta text-white'
                          : 'border-gray-200 group-hover:border-brand-terracotta/60 text-gray-300 group-hover:text-brand-terracotta'
                      }`}
                    >
                      <span className="font-heading font-bold text-sm">
                        {String.fromCharCode(64 + option.value)}
                      </span>
                    </div>
                    <span className="font-body text-base text-gray-600 group-hover:text-brand-dark transition-colors leading-relaxed">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Compass watermark */}
          <div className="mt-14 flex justify-center opacity-[0.06]">
            <CompassIcon size={36} />
          </div>
        </div>
      </main>
    </div>
  );
}
