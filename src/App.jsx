import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import ContextForm from './components/ContextForm';
import Assessment from './components/Assessment';
import Reveal from './components/Reveal';
import EmailGate from './components/EmailGate';
import Results from './components/Results';
import { getArchetype, getArchetypeById } from './data/archetypes';
import { calculateScores, getDimensionPercentages, getTopDimension, getPercentileEstimate } from './utils/scoring';
import { decodeResults, getChallengeInfo } from './utils/sharing';

const SCREENS = {
  LANDING: 'landing',
  ASSESSMENT: 'assessment',
  CONTEXT: 'context',
  REVEAL: 'reveal',
  EMAIL_GATE: 'email_gate',
  RESULTS: 'results',
};

const STORAGE_KEY = 'ai-compass-state';

function saveState(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING);
  const [context, setContext] = useState({ role: '', industry: '', goal: '' });
  const [scores, setScores] = useState(null);
  const [archetype, setArchetype] = useState(null);
  const [challengerName, setChallengerName] = useState(null);
  const [challengerArchetype, setChallengerArchetype] = useState(null);
  const [answers, setAnswers] = useState(null);

  // Check URL for shared results or challenge on mount, then check localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const decoded = decodeResults(params);
    const challenge = getChallengeInfo(params);

    if (challenge.isChallenge && challenge.challengerName) {
      setChallengerName(challenge.challengerName);
      if (decoded) {
        setChallengerArchetype(getArchetypeById(decoded.archetypeId));
      }
    } else if (decoded && !challenge.isChallenge) {
      // Direct link to results — show them
      const arch = getArchetypeById(decoded.archetypeId);
      const totalScore = Object.values(decoded.dimScores).reduce((a, b) => a + b, 0);
      setArchetype(arch);
      setScores({
        dimScores: decoded.dimScores,
        totalScore,
      });
      setContext({
        role: decoded.role,
        industry: decoded.industry,
        goal: decoded.goal,
      });
      setScreen(SCREENS.RESULTS);
    } else {
      // Check localStorage for saved progress
      const saved = loadState();
      if (saved && saved.scores && saved.archetype) {
        setScores(saved.scores);
        setArchetype(getArchetypeById(saved.archetype));
        setContext(saved.context || { role: '', industry: '', goal: '' });
        setScreen(saved.screen || SCREENS.RESULTS);
      }
    }

    // Clean URL without reload
    if (params.toString()) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen]);

  // New flow: Landing → Assessment → Context → Reveal → EmailGate → Results
  const handleStart = () => setScreen(SCREENS.ASSESSMENT);

  const handleAssessmentComplete = (ans) => {
    const result = calculateScores(ans);
    const arch = getArchetype(result.totalScore);
    setScores(result);
    setArchetype(arch);
    setAnswers(ans);
    // Save progress
    saveState({ scores: result, archetype: arch.id, screen: SCREENS.CONTEXT });
    setScreen(SCREENS.CONTEXT);
  };

  const handleContextSubmit = (ctx) => {
    setContext(ctx);
    saveState({ scores, archetype: archetype.id, context: ctx, screen: SCREENS.REVEAL });
    setScreen(SCREENS.REVEAL);
  };

  const handleRevealComplete = () => {
    saveState({ scores, archetype: archetype.id, context, screen: SCREENS.EMAIL_GATE });
    setScreen(SCREENS.EMAIL_GATE);
  };

  const handleEmailGateComplete = () => {
    saveState({ scores, archetype: archetype.id, context, screen: SCREENS.RESULTS });
    setScreen(SCREENS.RESULTS);
  };

  const handleRestart = () => {
    setScreen(SCREENS.LANDING);
    setContext({ role: '', industry: '', goal: '' });
    setScores(null);
    setArchetype(null);
    setAnswers(null);
    setChallengerName(null);
    setChallengerArchetype(null);
    clearState();
  };

  const topDimension = scores ? getTopDimension(scores.dimScores) : null;
  const percentile = scores ? getPercentileEstimate(scores.totalScore) : null;

  switch (screen) {
    case SCREENS.LANDING:
      return <Landing onStart={handleStart} challengerName={challengerName} />;

    case SCREENS.ASSESSMENT:
      return (
        <Assessment
          onComplete={handleAssessmentComplete}
          onBack={() => setScreen(SCREENS.LANDING)}
        />
      );

    case SCREENS.CONTEXT:
      return (
        <ContextForm
          onSubmit={handleContextSubmit}
          onBack={() => setScreen(SCREENS.ASSESSMENT)}
        />
      );

    case SCREENS.REVEAL:
      return (
        <Reveal
          archetype={archetype}
          dimScores={scores.dimScores}
          totalScore={scores.totalScore}
          percentile={percentile}
          topDimension={topDimension}
          onComplete={handleRevealComplete}
        />
      );

    case SCREENS.EMAIL_GATE:
      return (
        <EmailGate
          archetype={archetype}
          onContinue={handleEmailGateComplete}
        />
      );

    case SCREENS.RESULTS:
      return (
        <Results
          archetype={archetype}
          dimScores={scores.dimScores}
          totalScore={scores.totalScore}
          percentile={percentile}
          topDimension={topDimension}
          role={context.role}
          industry={context.industry}
          goal={context.goal}
          onRestart={handleRestart}
        />
      );

    default:
      return <Landing onStart={handleStart} />;
  }
}
