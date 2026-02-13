export const archetypes = {
  observer: {
    id: 'observer',
    name: 'The Observer',
    tagline: "You see the wave coming. Now it's time to ride it.",
    color: '#8b95a5',
    colorLight: '#e8edf2',
    range: [15, 24],
    description: "You see the landscape clearly \u2014 the headlines, the hype, the genuine opportunities. While others are scrambling, you're building clarity. You see what's real and what's hype. That clarity is your edge \u2014 and it compounds.\n\nThe leaders who truly transform their fields aren't always the first to adopt \u2014 they're the ones who adopt wisely. Your awareness is already an advantage most people don't have.\n\nYou're not starting from zero. You're starting from clarity.",
    strengths: [
      "You spot what others miss \u2014 the real opportunities hiding in the noise",
      "You move when the time is right, not when FOMO kicks in",
      "Your skepticism has saved your org money \u2014 more than once",
    ],
    growth: [
      "Move from observation to experimentation \u2014 pick one tool this week",
      "Start with one AI task for one specific workflow",
      "Let yourself be imperfect \u2014 learning beats planning every time",
    ],
    stat: 'Leaders who adopt AI intentionally (not reactively) achieve 40% higher ROI on AI initiatives.',
    statSource: 'Deloitte, 2024',
  },
  explorer: {
    id: 'explorer',
    name: 'The Explorer',
    tagline: "You're already ahead because you're willing to look stupid while learning.",
    color: '#d4883e',
    colorLight: '#f5e6d3',
    range: [25, 33],
    description: "While others debate whether AI matters, you're shipping. That matters. Your willingness to break things, learn fast, and iterate puts you ahead of 90% of leaders.\n\nExplorers like you have a rare combination: the curiosity to experiment and the guts to learn from what doesn't work. This is where breakthroughs happen \u2014 not in mastery, but in discovery.\n\nThe next phase isn't about learning more tools. It's about going deeper with the right ones.",
    strengths: [
      "You learn by doing, not by studying \u2014 and you learn fast",
      "You're building the intuition that others won't have for 2 years",
      "You fail small and iterate \u2014 that's how breakthroughs happen",
    ],
    growth: [
      "Choose 2\u20133 tools and master them instead of sampling many",
      "Build repeatable workflows, not one-off experiments",
      "Start sharing what you learn \u2014 teaching accelerates mastery",
    ],
    stat: 'AI fluency demand has grown 7x in two years \u2014 from 1 million to 7 million jobs requiring AI skills.',
    statSource: 'McKinsey, 2025',
  },
  integrator: {
    id: 'integrator',
    name: 'The Integrator',
    tagline: "You're building the bridge others will cross.",
    color: '#C4563A',
    colorLight: '#f5e0d5',
    range: [34, 42],
    description: "You've stopped treating AI as a tool. It's how you think now. The people around you are starting to notice \u2014 and they want what you have.\n\nWhat makes Integrators powerful isn't just tool proficiency \u2014 it's the ability to see connections between AI capabilities and real human challenges. You're building the bridge that others will eventually cross.\n\nThe question now isn't whether AI fits into your work. It's how far you're willing to let it amplify what you do best.",
    strengths: [
      "Your workflows now run on AI + human judgment (true collaboration)",
      "You see problems others can't solve and AI solutions they haven't considered",
      'People are starting to ask: "How did you do that so fast?"',
    ],
    growth: [
      "Document your workflows so others can follow your path",
      "Push into strategic AI use, not just operational",
      "Begin leading AI adoption conversations in your organization",
    ],
    stat: 'GPT-4 boosted consultant task completion by 12%, speed by 25%, and quality by 40% in a Harvard study of 758 professionals.',
    statSource: 'Harvard Business School / BCG, 2024',
  },
  architect: {
    id: 'architect',
    name: 'The Architect',
    tagline: "You don't just use AI \u2014 you design how others will.",
    color: '#3b6fa0',
    colorLight: '#dce8f3',
    range: [43, 51],
    description: "You don't just use AI \u2014 you design systems around it. While others are learning prompts, you're multiplying impact across your whole organization.\n\nArchitects are rare: you combine deep tool knowledge with strategic vision, seeing not just what AI can do today, but how it reshapes what's possible tomorrow. The influence you're building isn't just personal \u2014 it's organizational.\n\nThe frameworks you create now will define how thousands of people work.",
    strengths: [
      "You see organizational problems; others see bugs. You see systems; others see tasks.",
      "You're not building AI tools. You're building the infrastructure for how your field works.",
      "Your team runs on frameworks you created \u2014 and other organizations want them.",
    ],
    growth: [
      "Formalize your frameworks into teachable systems",
      "Explore AI agent workflows and multi-tool orchestration",
      "Position yourself as a visible thought leader in your domain",
    ],
    stat: 'Only 2% of board members are highly knowledgeable about AI. Leaders like you fill a critical gap.',
    statSource: 'MIT Sloan Management Review, 2025',
  },
  amplifier: {
    id: 'amplifier',
    name: 'The Amplifier',
    tagline: "AI doesn't replace your leadership. It radiates it.",
    color: '#7b5ea7',
    colorLight: '#ebe4f3',
    range: [52, 60],
    description: "People don't see the AI. They see you. Your output is so far ahead of where it should be that it almost doesn't make sense. That's Amplifier mode.\n\nAmplifiers don't work harder with AI. They work with a clarity and speed that others can't quite explain. But here's what truly sets you apart: you don't hoard this advantage. You're drawn to lifting others into it.\n\nYou're not just AI-enhanced. You're AI-supercharged.",
    strengths: [
      "Your thinking and AI's capabilities move together so smoothly it's just... you",
      "You're 10x more productive and 2x more thoughtful \u2014 not a tradeoff",
      "You're the person other leaders are quietly trying to figure out how to be",
    ],
    growth: [
      "Build public thought leadership content (write, speak, teach)",
      "Explore cutting-edge: AI agents, multi-model orchestration, custom AI",
      "Create the playbooks that will define your industry's AI future",
    ],
    stat: 'Workers with strong AI skills earn a 56% wage premium \u2014 up from 25% the prior year.',
    statSource: 'PwC AI Jobs Barometer, 2025',
  },
};

export function getArchetype(totalScore) {
  if (totalScore <= 24) return archetypes.observer;
  if (totalScore <= 33) return archetypes.explorer;
  if (totalScore <= 42) return archetypes.integrator;
  if (totalScore <= 51) return archetypes.architect;
  return archetypes.amplifier;
}

export function getArchetypeById(id) {
  return archetypes[id] || archetypes.integrator;
}
