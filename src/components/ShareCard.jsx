import React, { useRef, useState } from 'react';
import { Download, Copy, Link, Check, Users } from 'lucide-react';
import { toPng } from 'html-to-image';
import CompassIcon from './CompassIcon';
import RadarChart from './RadarChart';
import { copyToClipboard, encodeResults, generateChallengeUrl, generateShareText } from '../utils/sharing';

export default function ShareCard({ archetype, dimScores, totalScore, percentile, topDimension, role, industry, goal }) {
  const cardRef = useRef(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedChallenge, setCopiedChallenge] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: '#faf8f5',
      });
      const link = document.createElement('a');
      link.download = `ai-leadership-${archetype.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
    }
    setDownloading(false);
  };

  const handleCopyLink = async () => {
    const url = encodeResults(archetype, dimScores, role, industry, goal);
    await copyToClipboard(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleChallenge = async () => {
    const url = generateChallengeUrl(archetype, dimScores, role, industry, goal, '');
    const text = generateShareText(archetype) + '\n' + url;
    await copyToClipboard(text);
    setCopiedChallenge(true);
    setTimeout(() => setCopiedChallenge(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* The actual card (rendered for screenshot) */}
      <div
        ref={cardRef}
        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-brand-border mx-auto"
        style={{ maxWidth: '600px' }}
      >
        {/* Card header */}
        <div className="p-8 text-center" style={{ backgroundColor: archetype.colorLight }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <CompassIcon size={28} color={archetype.color} />
            <span className="font-heading font-bold text-sm text-brand-dark">AI Leadership Compass</span>
          </div>
          <p className="font-heading text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: archetype.color }}>
            My AI Leadership Archetype
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-brand-dark mb-2">
            {archetype.name}
          </h2>
          <p className="font-body text-base italic" style={{ color: archetype.color }}>
            &ldquo;{archetype.tagline}&rdquo;
          </p>
        </div>

        {/* Card body */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <RadarChart dimScores={dimScores} color={archetype.color} size={220} />
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span
              className="stat-badge text-white"
              style={{ backgroundColor: archetype.color }}
            >
              Top {percentile}%
            </span>
            <span className="stat-badge bg-gray-100 text-gray-600">
              Score: {totalScore}/40
            </span>
            <span className="stat-badge bg-gray-100 text-gray-600">
              Best: {topDimension.label}
            </span>
          </div>
        </div>

        {/* Card footer */}
        <div className="px-6 pb-6 text-center">
          <p className="font-heading text-xs text-gray-400">
            jsalinas.org &middot; Take yours free
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center no-print">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="share-btn bg-brand-dark text-white hover:bg-gray-800"
        >
          <Download className="w-4 h-4" />
          {downloading ? 'Generating...' : 'Download Card'}
        </button>

        <button
          onClick={handleCopyLink}
          className={`share-btn ${copiedLink ? 'bg-green-600 text-white' : 'bg-white text-brand-dark border-2 border-brand-border hover:border-brand-terracotta'}`}
        >
          {copiedLink ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
          {copiedLink ? 'Link Copied!' : 'Copy Results Link'}
        </button>

        <button
          onClick={handleChallenge}
          className={`share-btn ${copiedChallenge ? 'bg-green-600 text-white' : 'text-white'}`}
          style={copiedChallenge ? {} : { backgroundColor: archetype.color }}
        >
          {copiedChallenge ? <Check className="w-4 h-4" /> : <Users className="w-4 h-4" />}
          {copiedChallenge ? 'Copied! Share it!' : 'Challenge a Colleague'}
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 font-body no-print">
        Share your archetype on LinkedIn and challenge others to discover theirs.
      </p>
    </div>
  );
}
