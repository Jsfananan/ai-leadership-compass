import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import ContextForm from './components/ContextForm';
import Assessment from './components/Assessment';
import Reveal from './components/Reveal';
import Results from './components/Results';
import { getArchetype, getArchetypeById } from './data/archetypes';
import { calculateScores, getDimensionPercentages, getTopDimension, getPercentileEstimate } from './utils/scoring';
import { decodeResults, getChallengeInfo } from './utils/sharing';

const SCREENS = {
  LANDING: 'landing',
  CONTEXT: 'context',
  ASSESSMENT: 'assessment',
  REVEAL: 'reveal',
  RESULTS: 'results',
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING);
  const [context, setContext] = useState({ role: '', industry: '', goal: '' });
  const [scores, setScores] = useState(null);
  const [archetype, setArchetype] = useState(null);
  const [challengerName, setChallengerName] = useState(null);
  const [challengerArchetype, setChallengerArchetype] = useState(null);

  // Check URL for shared results or challenge on mount
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

  const handleStart = () => setScreen(SCREENS.CONTEXT);

  const handleContextSubmit = (ctx) => {
    setContext(ctx);
    setScreen(SCREENS.ASSESSMENT);
  };

  const handleAssessmentComplete = (answers) => {
    const result = calculateScores(answers);
    const arch = getArchetype(result.totalScore);
    setScores(result);
    setArchetype(arch);
    setScreen(SCREENS.REVEAL);
  };

  const handleRevealComplete = () => {
    setScreen(SCREENS.RESULTS);
  };

  const handleRestart = () => {
    setScreen(SCREENS.LANDING);
    setContext({ role: '', industry: '', goal: '' });
    setScores(null);
    setArchetype(null);
    setChallengerName(null);
    setChallengerArchetype(null);
  };

  const topDimension = scores ? getTopDimension(scores.dimScores) : null;
  const percentile = scores ? getPercentileEstimate(scores.totalScore) : null;

  switch (screen) {
    case SCREENS.LANDING:
      return <Landing onStart={handleStart} challengerName={challengerName} />;

    case SCREENS.CONTEXT:
      return (
        <ContextForm
          onSubmit={handleContextSubmit}
          onBack={() => setScreen(SCREENS.LANDING)}
        />
      );

    case SCREENS.ASSESSMENT:
      return (
        <Assessment
          onComplete={handleAssessmentComplete}
          onBack={() => setScreen(SCREENS.CONTEXT)}
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
