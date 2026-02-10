import React from 'react';

export default function RadarChart({ dimScores, color = '#cc6f4d', size = 300 }) {
  const center = size / 2;
  const maxRadius = (size / 2) * 0.8;
  const dimensions = [
    { id: 'awareness', label: 'Awareness' },
    { id: 'proficiency', label: 'Proficiency' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'leadership', label: 'Leadership' },
  ];

  const angleStep = (2 * Math.PI) / dimensions.length;
  const startAngle = -Math.PI / 2; // Start from top

  function polarToCartesian(angle, radius) {
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  }

  // Grid lines
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const gridPaths = gridLevels.map((level) => {
    const points = dimensions.map((_, i) => {
      const angle = startAngle + i * angleStep;
      return polarToCartesian(angle, maxRadius * level);
    });
    return points.map((p) => `${p.x},${p.y}`).join(' ');
  });

  // Data polygon
  const dataPoints = dimensions.map((dim, i) => {
    const score = dimScores[dim.id] || 0;
    const normalizedScore = score / 8;
    const angle = startAngle + i * angleStep;
    return polarToCartesian(angle, maxRadius * normalizedScore);
  });
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  // Axis lines
  const axisEnds = dimensions.map((_, i) => {
    const angle = startAngle + i * angleStep;
    return polarToCartesian(angle, maxRadius);
  });

  // Labels
  const labelPositions = dimensions.map((dim, i) => {
    const angle = startAngle + i * angleStep;
    const pos = polarToCartesian(angle, maxRadius + 28);
    return { ...pos, label: dim.label, score: dimScores[dim.id] || 0 };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {/* Grid */}
      {gridPaths.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="#e5e0db"
          strokeWidth="1"
          opacity={0.5 + i * 0.15}
        />
      ))}

      {/* Axis lines */}
      {axisEnds.map((end, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={end.x}
          y2={end.y}
          stroke="#e5e0db"
          strokeWidth="1"
        />
      ))}

      {/* Data polygon - filled */}
      <polygon
        points={dataPath}
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        style={{
          animation: 'radarDraw 1s ease-out forwards',
          transformOrigin: `${center}px ${center}px`,
        }}
      />

      {/* Data points */}
      {dataPoints.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="5"
          fill={color}
          stroke="white"
          strokeWidth="2"
          style={{
            animation: `radarDraw 1s ease-out ${0.2 + i * 0.1}s forwards`,
            opacity: 0,
            transformOrigin: `${center}px ${center}px`,
          }}
        />
      ))}

      {/* Labels */}
      {labelPositions.map((pos, i) => (
        <g key={i}>
          <text
            x={pos.x}
            y={pos.y - 6}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-heading"
            fill="#1a1a1a"
            fontSize="11"
            fontWeight="600"
          >
            {pos.label}
          </text>
          <text
            x={pos.x}
            y={pos.y + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-heading"
            fill={color}
            fontSize="13"
            fontWeight="700"
          >
            {pos.score}/8
          </text>
        </g>
      ))}
    </svg>
  );
}
