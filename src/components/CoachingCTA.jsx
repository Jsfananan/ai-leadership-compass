import React from 'react';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const COACHING_URL = 'https://jsalinas.org/services/executive-coaching.html';
const AUDIT_URL = 'https://jsalinas.org/services/ai-workflow-audit.html';

const variants = {
  gaps: {
    headline: 'Ready to Close Your Gaps Faster?',
    body: 'Most leaders take 12\u201318 months to develop these skills on their own. With 1:1 coaching, you can accelerate that to 90 days with a clear, personalized implementation plan.',
    showAudit: true,
    utm: 'results',
  },
  plan: {
    headline: 'Need Help Implementing This Plan?',
    body: 'You have the roadmap. Now get the accountability and expert guidance to actually follow through. Book a free 30-minute call to design your custom implementation strategy.',
    showAudit: false,
    utm: 'plan',
  },
};

export default function CoachingCTA({ variant = 'gaps', archetypeColor }) {
  const v = variants[variant];
  const utmParams = `?utm_source=compass&utm_medium=${v.utm}&utm_campaign=coaching`;

  return (
    <section className="mb-4">
      <div className="premium-card-padded text-center bg-gradient-to-br from-white to-brand-warm">
        <div className="max-w-xl mx-auto">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: archetypeColor + '15' }}
          >
            <TrendingUp className="w-7 h-7" style={{ color: archetypeColor }} />
          </div>
          <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">
            {v.headline}
          </h3>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            {v.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${COACHING_URL}${utmParams}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn text-white"
              style={{ backgroundColor: archetypeColor }}
            >
              {v.showAudit ? 'Explore 1:1 Coaching' : 'Schedule Your Free Strategy Call'}
              <ArrowRight className="w-4 h-4" />
            </a>
            {v.showAudit && (
              <a
                href={`${AUDIT_URL}${utmParams}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn bg-white text-gray-700 border-2 border-brand-border hover:border-brand-terracotta"
              >
                Get an AI Workflow Audit
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          {!v.showAudit && (
            <p className="mt-4 text-xs text-gray-400 font-heading">
              No pressure. Just clarity on your next steps.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
