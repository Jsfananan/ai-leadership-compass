// Dimension deep-dive content — score-dependent descriptions, gaps, and actions
// Scores are per-dimension (2–8, from 2 questions scored 1–4 each)

const dimensionInsights = {
  awareness: {
    label: 'AI Awareness',
    subtitle: 'Understanding AI capabilities, limitations, and the "jagged frontier"',
    icon: 'Eye',
    low: {
      range: [2, 4],
      headline: 'Building Your Foundation',
      description:
        'You\'re aware that AI is reshaping work, but the specifics — what it can do well, where it fails, and why that matters for your role — are still coming into focus. This is completely normal. Most leaders are in this space. The risk isn\'t being here; it\'s staying here while the landscape shifts beneath you.',
      gap: 'Without a clear mental map of AI\'s capabilities and blind spots, you may over-trust AI output (accepting errors) or under-trust it (missing opportunities). Research calls this the "jagged technological frontier" — AI is brilliant at some tasks and surprisingly poor at others, and the boundary isn\'t intuitive.',
      actions: [
        'Spend 20 minutes exploring one AI tool (ChatGPT or Claude) with tasks from your actual work — not tutorials, your real deliverables',
        'Read one article per week about AI in your specific industry to build contextual awareness',
        'When you encounter AI output, practice asking: "What might be wrong here?" to build critical evaluation instincts',
      ],
    },
    mid: {
      range: [5, 6],
      headline: 'Sharpening Your Lens',
      description:
        'You have a working understanding of AI\'s strengths and limitations — you\'re not naively impressed or dismissively skeptical. You can identify some situations where AI adds genuine value versus where it falls short. This places you ahead of most professionals, but there\'s significant upside in deepening this awareness.',
      gap: 'Your understanding may be broad but not yet deep in your specific domain. The leaders who pull ahead are the ones who can map AI\'s exact capabilities and failures to their particular workflow — knowing not just that AI "can write" but exactly which writing tasks it handles well and which require human judgment.',
      actions: [
        'Create a personal "AI capability map" — list 10 tasks from your role and rate AI\'s effectiveness at each from your direct experience',
        'Test AI on a task you believe it can\'t do well — you may be surprised, and the experiment builds calibration',
        'Follow 2–3 thought leaders in AI + your industry to stay current on the evolving frontier',
      ],
    },
    high: {
      range: [7, 8],
      headline: 'Frontier Navigator',
      description:
        'You possess a sophisticated understanding of AI\'s "jagged frontier" — you know where it excels, where it stumbles, and crucially, where it\'s rapidly improving. This calibrated awareness is one of the rarest and most valuable skills in AI leadership. You can evaluate new tools quickly because you understand the underlying patterns.',
      gap: 'Your primary risk is complacency — the frontier moves weekly. Models that failed at reasoning six months ago may now outperform. Your awareness advantage only persists if you actively maintain it. Additionally, your knowledge may be concentrated in your domain; cross-pollinating from adjacent fields could reveal unexpected opportunities.',
      actions: [
        'Dedicate 30 minutes weekly to testing the newest model releases against your known benchmarks',
        'Document and share your frontier map with your team — your calibration is an organizational asset',
        'Explore AI capabilities in an adjacent field to yours to find cross-domain innovation opportunities',
      ],
    },
  },

  proficiency: {
    label: 'Tool Proficiency',
    subtitle: 'Hands-on skill with AI tools, prompting, and workflows',
    icon: 'Wrench',
    low: {
      range: [2, 4],
      headline: 'Getting Your Hands Dirty',
      description:
        'Your hands-on experience with AI tools is still in the early stages. You may have tried a tool once or twice, but it hasn\'t become part of your working rhythm. This is the gap that closes fastest — tool proficiency is a skill, not a talent, and it compounds remarkably quickly with practice.',
      gap: 'Without regular hands-on practice, AI remains theoretical. The difference between knowing AI "can help with writing" and having a prompt template that produces excellent first drafts of your quarterly report is the difference between awareness and capability. Proficiency is where awareness converts to actual time savings.',
      actions: [
        'Commit to using AI for one recurring task every day this week — even if it takes longer at first',
        'Save every prompt that works well in a simple document — this becomes your personal prompt library',
        'Watch one 10-minute YouTube tutorial on prompting techniques specific to your most common task type',
      ],
    },
    mid: {
      range: [5, 6],
      headline: 'Building Muscle Memory',
      description:
        'You\'re developing real proficiency — AI is moving from "thing I try sometimes" to "tool I reach for regularly." You have some prompting instincts, know which tools work for which tasks, and are building the muscle memory that separates occasional users from effective ones.',
      gap: 'You\'re likely still working with individual prompts rather than prompt chains and workflows. The next leap in proficiency comes from connecting AI tasks into sequences — using output from one prompt as input to the next, building templates for complex recurring work, and developing a systematic approach rather than ad-hoc usage.',
      actions: [
        'Build 3 prompt templates for your highest-frequency tasks and save them somewhere accessible',
        'Try prompt chaining: take AI output from step 1, refine it, feed it into step 2 for a different task',
        'Experiment with a second AI tool for comparison — different tools excel at different tasks',
      ],
    },
    high: {
      range: [7, 8],
      headline: 'Power User',
      description:
        'You\'ve developed advanced tool mastery. You chain prompts, iterate systematically, work across multiple AI tools, and have built workflows that would take a beginner hours to replicate. Your prompting isn\'t guesswork — it\'s a practiced skill with a library of proven templates.',
      gap: 'At your level, the marginal returns from "better prompting" diminish. Your next frontier is automation and system design — connecting AI tools to each other, building repeatable workflows that others can use, and potentially exploring custom AI solutions (custom GPTs, AI agents, API integrations).',
      actions: [
        'Document your best workflows as step-by-step systems that a colleague could follow',
        'Explore AI agent frameworks or automation tools (Zapier AI, Make.com) to connect your workflows',
        'Identify which of your workflows could become a team-wide standard and propose it',
      ],
    },
  },

  strategy: {
    label: 'Strategic Integration',
    subtitle: 'Using AI for high-leverage strategic work, not just tactical tasks',
    icon: 'Target',
    low: {
      range: [2, 4],
      headline: 'From Tactical to Strategic',
      description:
        'AI hasn\'t yet entered your strategic planning, decision-making, or high-leverage work. If you use AI at all, it\'s for isolated tasks rather than as part of how you think about and approach your most important work. This is the most common pattern — and the most expensive gap to leave open.',
      gap: 'When AI stays tactical (drafting emails, basic research), you capture maybe 10% of its value. The remaining 90% lives in strategic applications: scenario planning, competitive analysis, synthesizing complex information for decisions, and designing AI-enhanced processes. Leaders who integrate AI strategically see 4x the productivity gains.',
      actions: [
        'Before your next big decision or project, ask AI to map out the key considerations, risks, and options as a thinking exercise',
        'Use AI to analyze a recent business outcome — what patterns does it see that you might have missed?',
        'Identify your single highest-stakes recurring deliverable and redesign the process with AI at each stage',
      ],
    },
    mid: {
      range: [5, 6],
      headline: 'Strategic Momentum',
      description:
        'You\'re beginning to connect AI to strategic outcomes — it\'s not just about task completion but about better thinking, faster decisions, and higher-quality output on the work that matters most. You\'re crossing the threshold from AI as assistant to AI as strategic thought partner.',
      gap: 'Your strategic use may still be reactive — you turn to AI when you think of it, rather than designing your strategic processes around AI from the start. The leaders who see transformative results are the ones who ask "Where does AI fit?" at the beginning of every strategic initiative, not as an afterthought.',
      actions: [
        'Map your top 5 strategic responsibilities and design an AI-enhanced workflow for each',
        'Use AI for your next strategic presentation: research, analysis, scenario modeling, and narrative structure',
        'Start measuring the quality and speed of your strategic output with vs. without AI involvement',
      ],
    },
    high: {
      range: [7, 8],
      headline: 'Strategic Architect',
      description:
        'AI is woven into your strategic thinking. You don\'t add AI to your strategy — you design strategy with AI as a core capability from the start. You see opportunities others miss because you understand how AI changes what\'s possible. Your strategic output has likely accelerated significantly.',
      gap: 'You may be designing strategies that rely on your personal AI capabilities rather than scalable AI integration. The next level is embedding AI-enhanced strategic thinking into your team and organization\'s DNA — making it institutional, not individual.',
      actions: [
        'Create an "AI Strategy Playbook" for your team that embeds AI into every strategic process',
        'Identify where AI enables entirely new strategies (not just faster old ones) — new markets, products, or models',
        'Mentor another leader on strategic AI integration to pressure-test and refine your own frameworks',
      ],
    },
  },

  collaboration: {
    label: 'Human-AI Collaboration',
    subtitle: 'Working with AI as a thought partner, not just a tool',
    icon: 'Handshake',
    low: {
      range: [2, 4],
      headline: 'Finding Your Dynamic',
      description:
        'You\'re still finding the right working dynamic with AI. You may use it passively — accepting output at face value or not knowing how to push back on it. The collaboration between your expertise and AI\'s capabilities hasn\'t clicked yet. This is the dimension that transforms everything else once it develops.',
      gap: 'Harvard researchers identified that people who use AI without critical judgment actually perform 19% worse than those who don\'t use it at all. The key isn\'t using AI more — it\'s developing the "collaboration instinct" to know when to trust AI, when to override it, and when to use it as a springboard for your own thinking.',
      actions: [
        'For your next AI-assisted task, treat the output as a first draft from a smart but inexperienced intern — edit aggressively',
        'Practice the "Yes, and..." technique: take AI output, identify what\'s good, then add what only your expertise can provide',
        'Start noticing the patterns: where does AI consistently need your correction? That\'s your unique value.',
      ],
    },
    mid: {
      range: [5, 6],
      headline: 'Developing Partnership',
      description:
        'You\'ve developed a productive collaboration style with AI — you don\'t accept output blindly, you iterate, and you know how to layer your expertise onto AI\'s contributions. Researchers would place you in early "Centaur mode" — a clear division of labor between human and AI based on respective strengths.',
      gap: 'The gap between Centaur mode (clear division of labor) and Cyborg mode (seamless integration) is significant. In Cyborg mode, you move fluidly between AI and your own thinking mid-task, mid-paragraph, mid-analysis. This isn\'t just a skill difference — it\'s a fundamentally different relationship with the technology.',
      actions: [
        'During your next complex task, deliberately alternate between your thinking and AI input every few minutes',
        'When AI gives output, ask it to critique its own work — then critique that critique with your expertise',
        'Build a personal "collaboration protocol" — your rules for when AI leads, when you lead, and when you co-create',
      ],
    },
    high: {
      range: [7, 8],
      headline: 'Seamless Integration',
      description:
        'You\'ve achieved what researchers call "Cyborg mode" — a seamless integration where you move fluidly between your thinking and AI\'s contributions. You don\'t think of AI as a separate step; it\'s part of how you think. Your judgment shapes AI\'s output and AI\'s capabilities extend your judgment in a continuous loop.',
      gap: 'At this level, your collaboration advantage is deeply personal — tied to your specific expertise and instincts. The risk is that this remains tacit knowledge. The challenge now is making your collaboration approach legible to others so it can be taught and scaled.',
      actions: [
        'Articulate your collaboration "moves" — what exactly do you do when you shift between AI and your own thinking?',
        'Create a demonstration workflow that shows others what seamless human-AI collaboration looks like in practice',
        'Push into new task categories where you haven\'t yet applied your collaboration skills — the patterns will transfer',
      ],
    },
  },

  leadership: {
    label: 'Change Leadership',
    subtitle: 'Leading others through AI transformation and adoption',
    icon: 'Flag',
    low: {
      range: [2, 4],
      headline: 'Leading from Within',
      description:
        'You\'re focused on your own AI learning right now, and that\'s the right starting point. You can\'t lead others to a destination you haven\'t explored yourself. But the transition from personal learning to visible advocacy doesn\'t require mastery — it requires willingness to learn in public.',
      gap: '82% of young leaders already use AI at work, while senior leaders lag significantly. This creates what MIT calls a "competency inversion" — where less experienced team members outpace leaders. The risk isn\'t that you can\'t learn; it\'s that waiting too long to lead on AI cedes influence to others.',
      actions: [
        'Share one AI learning or discovery with your team this week — vulnerability builds trust and models the learning mindset',
        'Ask a younger colleague or team member to show you how they use AI — this builds connection and accelerates your learning',
        'Identify one team process that would benefit from AI and propose exploring it together',
      ],
    },
    mid: {
      range: [5, 6],
      headline: 'Visible Advocate',
      description:
        'You\'re becoming a visible advocate for AI adoption — sharing discoveries, encouraging others to experiment, and starting to influence how your team or organization thinks about AI. People are beginning to see you as someone who "gets it." This is a pivotal position.',
      gap: 'Advocacy is valuable, but it\'s different from systematic leadership. The gap between sharing tips and designing an AI adoption strategy — with training, resources, metrics, and cultural change — is where most organizations stall. Someone needs to own the transformation, not just encourage it.',
      actions: [
        'Draft a simple AI adoption proposal for your team: what to try, how to measure it, and what success looks like',
        'Identify and cultivate 2–3 AI champions in your organization who can help you build momentum',
        'Create a monthly "AI learning session" (even 30 minutes) to systematize knowledge sharing',
      ],
    },
    high: {
      range: [7, 8],
      headline: 'Transformation Leader',
      description:
        'You\'re actively leading AI transformation — mentoring others, designing adoption strategies, and building the systems and culture that help others integrate AI effectively. You don\'t just use AI well; you multiply that capability across people. This is the rarest and most valuable form of AI leadership.',
      gap: 'Your risk is burnout and bottleneck — if you\'re the sole AI champion, the organization\'s transformation depends on your bandwidth. The next evolution is building self-sustaining systems: training programs, documentation, communities of practice that continue generating momentum without you driving every initiative.',
      actions: [
        'Train two people to be AI trainers — build a multiplier, not a dependency',
        'Create lasting AI adoption infrastructure: a wiki, a Slack channel, a monthly showcase, or a resource hub',
        'Develop a measurement framework for AI adoption — what metrics show real organizational AI maturity?',
      ],
    },
  },
};

export function getDimensionInsight(dimensionId, score) {
  const dim = dimensionInsights[dimensionId];
  if (!dim) return null;

  let level;
  if (score <= 4) level = dim.low;
  else if (score <= 6) level = dim.mid;
  else level = dim.high;

  return {
    ...dim,
    level: level,
    score,
    maxScore: 8,
    percentage: Math.round((score / 8) * 100),
  };
}

// Cross-dimension insight patterns
const crossPatterns = [
  {
    condition: (s) => s.collaboration >= 6 && s.strategy <= 4,
    title: 'The Capable Executor',
    insight:
      'Your strong Human-AI Collaboration paired with developing Strategic Integration tells a clear story: you\'re highly effective at working with AI on individual tasks, but you haven\'t yet channeled that skill into your highest-leverage strategic work. You\'re a sports car driving in first gear. The skill is there — the application needs to expand.',
    action: 'Take your best AI collaboration workflow and apply it to your single most important strategic deliverable this quarter.',
  },
  {
    condition: (s) => s.awareness >= 6 && s.proficiency <= 4,
    title: 'The Informed Observer',
    insight:
      'You understand AI\'s possibilities and limitations intellectually, but your hands-on experience hasn\'t caught up to your knowledge. This is like someone who reads extensively about swimming but rarely gets in the pool. Your awareness is a genuine asset — and it will make your learning curve steeper once you commit to daily practice.',
    action: 'Block 15 minutes daily for the next 2 weeks to use AI on real work tasks. Your knowledge will convert to skill faster than you expect.',
  },
  {
    condition: (s) => s.strategy >= 6 && s.leadership <= 4,
    title: 'The Silent Strategist',
    insight:
      'You\'ve integrated AI deeply into your own strategic thinking, but you haven\'t yet brought others along on the journey. This is a common pattern among high-performers — you\'re moving fast and may not realize how far ahead you\'ve pulled. The risk: your AI-enhanced strategies outpace your team\'s ability to execute them.',
    action: 'Share your AI strategy process with one colleague this week. Teaching it will sharpen your own approach and begin closing the gap.',
  },
  {
    condition: (s) => s.leadership >= 6 && s.proficiency <= 4,
    title: 'The Inspirational Gap',
    insight:
      'You\'re inspiring AI adoption and leading the conversation — but your own technical proficiency doesn\'t yet match your leadership ambition. This isn\'t fatal, but it is fragile. Teams eventually notice when a leader advocates for something they can\'t demonstrate. Closing this gap will make your leadership unassailable.',
    action: 'Dedicate focused time to building your personal AI workflow — then demonstrate it publicly. Lead by example, not just by vision.',
  },
  {
    condition: (s) => s.proficiency >= 6 && s.awareness <= 4,
    title: 'The Productive Blind Spot',
    insight:
      'You\'re highly productive with AI tools, but your understanding of AI\'s fundamental capabilities and limitations may have gaps. This creates risk: you might over-rely on AI in areas where it\'s unreliable, or miss emerging capabilities that could transform your workflow. Proficiency without calibrated awareness is powerful but brittle.',
    action: 'Deliberately test AI on tasks you assume it can\'t do, and critically evaluate tasks you assume it handles well. Recalibrate your mental model.',
  },
  {
    condition: (s) => s.collaboration >= 6 && s.leadership >= 6,
    title: 'The Multiplier',
    insight:
      'Your combination of strong Human-AI Collaboration and Change Leadership is exceptionally rare — and exceptionally valuable. You don\'t just work well with AI; you can teach others to do the same. This combination is what organizations desperately need: someone who can model the behavior and then scale it.',
    action: 'Create a "collaboration masterclass" that demonstrates your AI working style to others. Your tacit knowledge is an organizational asset.',
  },
  {
    condition: (s) => s.awareness >= 6 && s.strategy >= 6,
    title: 'The Visionary Strategist',
    insight:
      'Your deep AI awareness combined with strategic integration means you\'re not just using AI for today\'s work — you\'re seeing how it reshapes what\'s possible tomorrow. You can spot opportunities others miss because you understand both the technology and the strategic landscape. This foresight is your superpower.',
    action: 'Write down your 3 boldest predictions for how AI changes your industry in 24 months. Then build a strategy around the most actionable one.',
  },
  {
    condition: (s) => {
      const vals = Object.values(s);
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      return vals.every((v) => Math.abs(v - avg) <= 1.5);
    },
    title: 'The Balanced Leader',
    insight:
      'Your scores are remarkably balanced across all five dimensions — a rare profile. Most people have sharp peaks and valleys. Your evenness suggests a holistic, well-rounded approach to AI leadership. The advantage: no critical blind spots. The consideration: balanced growth can feel slower than focused sprinting, but it builds the most durable leadership foundation.',
    action: 'Identify the one dimension where even a small improvement would have the biggest impact on your primary goal, and focus your energy there.',
  },
];

export function getCrossDimensionInsights(dimScores) {
  const matches = crossPatterns.filter((p) => p.condition(dimScores));

  // Return top 2 most relevant (first matched = most specific)
  return matches.slice(0, 2);
}

export function getTopAndBottomDimensions(dimScores) {
  const entries = Object.entries(dimScores).sort((a, b) => b[1] - a[1]);
  return {
    top: { id: entries[0][0], score: entries[0][1] },
    bottom: { id: entries[entries.length - 1][0], score: entries[entries.length - 1][1] },
  };
}
