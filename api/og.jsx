import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const archetypes = {
  observer: { name: 'The Observer', tagline: 'You see the wave coming. Now it\u2019s time to ride it.', color: '#8b95a5' },
  explorer: { name: 'The Explorer', tagline: 'You\u2019re already ahead because you\u2019re willing to look stupid while learning.', color: '#d4883e' },
  integrator: { name: 'The Integrator', tagline: 'You\u2019re building the bridge others will cross.', color: '#C4563A' },
  architect: { name: 'The Architect', tagline: 'You don\u2019t just use AI \u2014 you design how others will.', color: '#3b6fa0' },
  amplifier: { name: 'The Amplifier', tagline: 'AI doesn\u2019t replace your leadership. It radiates it.', color: '#7b5ea7' },
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('t') || 'integrator';
  const score = searchParams.get('s') || '';
  const archetype = archetypes[type] || archetypes.integrator;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAFA',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            backgroundColor: archetype.color,
          }}
        />

        {/* Compass icon placeholder */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: `4px solid ${archetype.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            fontSize: '32px',
          }}
        >
          <span style={{ color: archetype.color, fontSize: '40px' }}>{'\u2B50'}</span>
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: archetype.color,
            marginBottom: '16px',
          }}
        >
          AI LEADERSHIP COMPASS
        </div>

        {/* Archetype name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#1A1A2E',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          {archetype.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            color: archetype.color,
            fontStyle: 'italic',
            maxWidth: '700px',
            textAlign: 'center',
            lineHeight: 1.4,
            marginBottom: '32px',
          }}
        >
          &ldquo;{archetype.tagline}&rdquo;
        </div>

        {/* CTA */}
        <div
          style={{
            fontSize: '18px',
            color: '#999',
            fontWeight: 500,
          }}
        >
          What&apos;s YOUR AI Leadership Archetype? Take the free assessment.
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            fontSize: '14px',
            color: '#ccc',
          }}
        >
          jsalinas.org
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
