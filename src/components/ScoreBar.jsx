import React, { useState, useEffect } from 'react';

export default function ScoreBar({ score, maxScore = 8, color = '#cc6f4d', delay = 0, label, showScore = true }) {
  const [animated, setAnimated] = useState(false);
  const percentage = (score / maxScore) * 100;

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="font-heading text-sm font-semibold text-brand-dark">{label}</span>
          {showScore && (
            <span className="font-heading text-sm font-bold" style={{ color }}>
              {score}/{maxScore}
            </span>
          )}
        </div>
      )}
      <div className="score-bar-track">
        <div
          className="score-bar-fill"
          style={{
            width: animated ? `${percentage}%` : '0%',
            backgroundColor: color,
            transition: `width ${0.8 + delay * 0.001}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
