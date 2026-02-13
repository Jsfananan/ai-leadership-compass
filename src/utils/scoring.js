import { dimensions } from '../data/questions';

export function calculateScores(answers) {
  const dimScores = {};
  dimensions.forEach((d) => {
    dimScores[d.id] = 0;
  });

  Object.entries(answers).forEach(([questionId, value]) => {
    const qIndex = parseInt(questionId);
    const dimIndex = Math.floor(qIndex / 3);
    const dimId = dimensions[dimIndex]?.id;
    if (dimId) {
      dimScores[dimId] += value;
    }
  });

  const totalScore = Object.values(dimScores).reduce((a, b) => a + b, 0);

  return { dimScores, totalScore };
}

export function getDimensionPercentages(dimScores) {
  return Object.entries(dimScores).map(([id, score]) => ({
    id,
    label: dimensions.find((d) => d.id === id)?.label || id,
    score,
    maxScore: 12,
    percentage: Math.round((score / 12) * 100),
  }));
}

export function getTopDimension(dimScores) {
  let topId = '';
  let topScore = 0;
  Object.entries(dimScores).forEach(([id, score]) => {
    if (score > topScore) {
      topScore = score;
      topId = id;
    }
  });
  return {
    id: topId,
    label: dimensions.find((d) => d.id === topId)?.label || topId,
    score: topScore,
  };
}

export function getPercentileEstimate(totalScore) {
  // Simulated percentile distribution for 15-60 range
  if (totalScore <= 18) return 95;
  if (totalScore <= 21) return 90;
  if (totalScore <= 24) return 85;
  if (totalScore <= 27) return 78;
  if (totalScore <= 30) return 70;
  if (totalScore <= 33) return 60;
  if (totalScore <= 36) return 50;
  if (totalScore <= 39) return 40;
  if (totalScore <= 42) return 32;
  if (totalScore <= 45) return 24;
  if (totalScore <= 48) return 17;
  if (totalScore <= 51) return 11;
  if (totalScore <= 54) return 6;
  if (totalScore <= 57) return 3;
  return 1;
}
