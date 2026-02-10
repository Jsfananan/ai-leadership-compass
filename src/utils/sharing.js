export function encodeResults(archetype, dimScores, role, industry, goal) {
  const scores = [
    dimScores.awareness || 0,
    dimScores.proficiency || 0,
    dimScores.strategy || 0,
    dimScores.collaboration || 0,
    dimScores.leadership || 0,
  ].join(',');

  const params = new URLSearchParams({
    t: archetype.id,
    s: scores,
    r: encodeURIComponent(role),
    i: encodeURIComponent(industry),
    g: encodeURIComponent(goal),
  });

  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

export function decodeResults(searchParams) {
  const t = searchParams.get('t');
  const s = searchParams.get('s');
  const r = searchParams.get('r');
  const i = searchParams.get('i');
  const g = searchParams.get('g');

  if (!t || !s) return null;

  const scores = s.split(',').map(Number);
  return {
    archetypeId: t,
    dimScores: {
      awareness: scores[0] || 0,
      proficiency: scores[1] || 0,
      strategy: scores[2] || 0,
      collaboration: scores[3] || 0,
      leadership: scores[4] || 0,
    },
    role: r ? decodeURIComponent(r) : 'Professional',
    industry: i ? decodeURIComponent(i) : 'General',
    goal: g ? decodeURIComponent(g) : 'Improve AI skills',
  };
}

export function generateChallengeUrl(archetype, dimScores, role, industry, goal, name) {
  const base = encodeResults(archetype, dimScores, role, industry, goal);
  const challengeParams = new URLSearchParams({ challenge: '1', from: encodeURIComponent(name || 'A colleague') });
  return `${base}&${challengeParams.toString()}`;
}

export function getChallengeInfo(searchParams) {
  const isChallenge = searchParams.get('challenge') === '1';
  const from = searchParams.get('from');
  return {
    isChallenge,
    challengerName: from ? decodeURIComponent(from) : null,
  };
}

export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  }
}

export function generateShareText(archetype) {
  return `I just took the AI Leadership Compass and I'm "${archetype.name}" \u2014 ${archetype.tagline}\n\nWhat's YOUR AI Leadership Archetype? Take the free 2-minute assessment:`;
}

export function generateFullPlanText(archetype, dimScores, role, industry, goal, months) {
  let text = `AI LEADERSHIP COMPASS \u2014 Your Personalized Growth Plan\n`;
  text += `${'='.repeat(50)}\n\n`;
  text += `Archetype: ${archetype.name}\n`;
  text += `"${archetype.tagline}"\n\n`;
  text += `Role: ${role}\n`;
  text += `Industry: ${industry}\n`;
  text += `Goal: ${goal}\n\n`;
  text += `Dimension Scores:\n`;
  text += `  AI Awareness: ${dimScores.awareness}/8\n`;
  text += `  Tool Proficiency: ${dimScores.proficiency}/8\n`;
  text += `  Strategic Integration: ${dimScores.strategy}/8\n`;
  text += `  Human-AI Collaboration: ${dimScores.collaboration}/8\n`;
  text += `  Change Leadership: ${dimScores.leadership}/8\n\n`;
  text += `${'='.repeat(50)}\n`;
  text += `YOUR 6-MONTH TRAINING GUIDE\n`;
  text += `${'='.repeat(50)}\n\n`;

  months.forEach((m) => {
    text += `\u2500\u2500\u2500 MONTH ${m.month}: ${m.title.toUpperCase()} \u2500\u2500\u2500\n`;
    text += `Theme: ${m.theme}\n\n`;
    text += `Research Insight: "${m.researchStat}" \u2014 ${m.statSource}\n\n`;
    text += `Weekly Actions:\n`;
    m.weeklyActions.forEach((a, i) => {
      text += `  ${i + 1}. ${a}\n`;
    });
    text += `\nImplementation Intention:\n  "${m.implementationIntention}"\n\n`;
    text += `Study Keywords: ${m.studyKeywords.join(', ')}\n\n`;
    text += `Custom Prompt (copy into ChatGPT or Claude):\n  "${m.customPrompt}"\n\n`;
    text += `${'='.repeat(50)}\n\n`;
  });

  text += `Created with AI Leadership Compass by Leadership in Change\n`;
  text += `https://leadershipinchange.com\n`;
  return text;
}
