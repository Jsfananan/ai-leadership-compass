import React from 'react';

export default function CompassIcon({ size = 120, color = '#cc6f4d', className = '', spinning = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spinning ? 'animate-spin-slow' : ''} ${className}`}
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="4" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="2" fill="none" opacity="0.15" />

      {/* Cardinal tick marks */}
      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1="100"
          y1="15"
          x2="100"
          y2="25"
          stroke={color}
          strokeWidth="3"
          transform={`rotate(${angle} 100 100)`}
          opacity="0.5"
        />
      ))}

      {/* Inter-cardinal tick marks */}
      {[45, 135, 225, 315].map((angle) => (
        <line
          key={angle}
          x1="100"
          y1="18"
          x2="100"
          y2="25"
          stroke={color}
          strokeWidth="1.5"
          transform={`rotate(${angle} 100 100)`}
          opacity="0.3"
        />
      ))}

      {/* North pointer (top) - filled */}
      <polygon
        points="100,20 108,90 100,82 92,90"
        fill={color}
      />

      {/* South pointer (bottom) - outline */}
      <polygon
        points="100,180 108,110 100,118 92,110"
        fill={color}
        opacity="0.3"
      />

      {/* East pointer (right) - filled */}
      <polygon
        points="180,100 110,92 118,100 110,108"
        fill={color}
        opacity="0.6"
      />

      {/* West pointer (left) - outline */}
      <polygon
        points="20,100 90,92 82,100 90,108"
        fill={color}
        opacity="0.3"
      />

      {/* NE pointer */}
      <polygon
        points="157,43 115,85 112,82"
        fill={color}
        opacity="0.2"
      />

      {/* NW pointer */}
      <polygon
        points="43,43 85,85 88,82"
        fill={color}
        opacity="0.2"
      />

      {/* SE pointer */}
      <polygon
        points="157,157 115,115 112,118"
        fill={color}
        opacity="0.2"
      />

      {/* SW pointer */}
      <polygon
        points="43,157 85,115 88,118"
        fill={color}
        opacity="0.2"
      />

      {/* Center circle */}
      <circle cx="100" cy="100" r="8" fill={color} />
      <circle cx="100" cy="100" r="4" fill="#faf8f5" />
    </svg>
  );
}
