import { dimensions } from '../data/questions';

export function calculateScores(answers) {
  const dimScores = {};
  dimensions.forEach((d) => {
    dimScores[d.id] = 0;
  });

  Object.entries(answers).forEach(([questionId, value]) => {
    const qIndex = parseInt(questionId);
    const dimIndex = Math.floor(qIndex / 2);
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
    maxScore: 8,
    percentage: Math.round((score / 8) * 100),
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
  // Simulated percentile distribution based on typical assessment curves
  const percentileMap = {
    10: 95, 11: 92, 12: 88, 13: 84, 14: 80,
    15: 76, 16: 72, 17: 67, 18: 63, 19: 58,
    20: 53, 21: 48, 22: 43, 23: 38, 24: 34,
    25: 30, 26: 26, 27: 22, 28: 19, 29: 16,
    30: 13, 31: 11, 32: 9, 33: 7, 34: 5,
    35: 4, 36: 3, 37: 2.5, 38: 2, 39: 1.5, 40: 1,
  };
  return percentileMap[totalScore] || 50;
}
