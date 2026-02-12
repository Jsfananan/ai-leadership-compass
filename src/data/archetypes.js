export const archetypes = {
  observer: {
    id: 'observer',
    name: 'The Observer',
    tagline: 'You see the wave coming. Now it\u2019s time to ride it.',
    color: '#8b95a5',
    colorLight: '#e8edf2',
    range: [10, 16],
    description: `You see the landscape clearly \u2014 the headlines, the hype, the genuine opportunities. Where others react impulsively, you\u2019ve been watching with the careful eye of someone who values substance over noise.

Your strength isn\u2019t that you\u2019re behind. It\u2019s that when you move, you\u2019ll move with intention. The leaders who truly transform their fields aren\u2019t always the first to adopt \u2014 they\u2019re the ones who adopt wisely.

Your awareness is already an advantage most people don\u2019t have. You\u2019re not starting from zero. You\u2019re starting from clarity.`,
    strengths: [
      'Thoughtful decision-making under pressure',
      'Ability to separate hype from genuine opportunity',
      'Natural skepticism that protects against costly mistakes',
    ],
    growth: [
      'Move from observation to experimentation',
      'Start with one AI tool for one specific task this week',
      'Let yourself be imperfect \u2014 learning beats planning',
    ],
    stat: 'Leaders who adopt AI intentionally (not reactively) achieve 40% higher ROI on AI initiatives.',
    statSource: 'Deloitte, 2024',
  },
  explorer: {
    id: 'explorer',
    name: 'The Explorer',
    tagline: 'Your curiosity is your greatest asset. Channel it.',
    color: '#d4883e',
    colorLight: '#f5e6d3',
    range: [17, 22],
    description: `You\u2019ve already done what most won\u2019t \u2014 you\u2019ve started. While others debate whether AI matters, you\u2019ve been testing, learning, and building your intuition for what works.

Explorers like you have a rare combination: the curiosity to experiment and the humility to learn from what doesn\u2019t work. This is the stage where breakthroughs happen \u2014 not in mastery, but in discovery.

The next phase for you isn\u2019t about learning more tools. It\u2019s about going deeper with the right ones.`,
    strengths: [
      'Natural curiosity that drives continuous learning',
      'Willingness to experiment and tolerate ambiguity',
      'Growing intuition for where AI adds real value',
    ],
    growth: [
      'Choose 2\u20133 tools and master them deeply instead of sampling many',
      'Build repeatable workflows, not one-off experiments',
      'Start sharing what you learn \u2014 teaching accelerates mastery',
    ],
    stat: 'AI fluency demand has grown 7x in two years \u2014 from 1 million to 7 million jobs requiring AI skills.',
    statSource: 'McKinsey, 2025',
  },
  integrator: {
    id: 'integrator',
    name: 'The Integrator',
    tagline: 'You\u2019re building the bridge others will cross.',
    color: '#C4563A',
    colorLight: '#f5e0d5',
    range: [23, 28],
    description: `AI isn\u2019t a novelty for you \u2014 it\u2019s becoming part of how you think and work. You\u2019ve moved past experimentation into real integration, and people around you are starting to notice.

What makes Integrators powerful isn\u2019t just tool proficiency \u2014 it\u2019s the ability to see connections between AI capabilities and real human challenges. You\u2019re building the bridge that others will eventually cross.

The question now isn\u2019t whether AI fits into your work. It\u2019s how far you\u2019re willing to let it amplify what you do best.`,
    strengths: [
      'Consistent AI integration into real workflows',
      'Ability to connect AI capabilities to human needs',
      'Growing influence as others seek your guidance',
    ],
    growth: [
      'Document your workflows so others can follow your path',
      'Push into strategic AI use, not just operational',
      'Begin leading AI adoption conversations in your organization',
    ],
    stat: 'GPT-4 boosted consultant task completion by 12%, speed by 25%, and quality by 40% in a Harvard study of 758 professionals.',
    statSource: 'Harvard Business School / BCG, 2024',
  },
  architect: {
    id: 'architect',
    name: 'The Architect',
    tagline: 'You don\u2019t just use AI \u2014 you design how others will.',
    color: '#3b6fa0',
    colorLight: '#dce8f3',
    range: [29, 34],
    description: `You don\u2019t just use AI \u2014 you design systems around it. While others are learning prompts, you\u2019re building workflows, training teams, and rethinking processes.

Architects are rare: you combine deep tool knowledge with strategic vision, seeing not just what AI can do today, but how it reshapes what\u2019s possible tomorrow. The influence you\u2019re building isn\u2019t just personal \u2014 it\u2019s organizational.

The frameworks you create now will define how others work for years to come.`,
    strengths: [
      'Systems thinking that connects AI to organizational strategy',
      'Ability to train and uplift others at scale',
      'Vision for how AI reshapes your entire field',
    ],
    growth: [
      'Formalize your frameworks into teachable systems',
      'Explore AI agent workflows and multi-tool orchestration',
      'Position yourself as a visible thought leader in your domain',
    ],
    stat: 'Only 2% of board members are highly knowledgeable about AI. Leaders like you fill a critical gap.',
    statSource: 'MIT Sloan Management Review, 2025',
  },
  amplifier: {
    id: 'amplifier',
    name: 'The Amplifier',
    tagline: 'AI doesn\u2019t replace your leadership. It radiates it.',
    color: '#7b5ea7',
    colorLight: '#ebe4f3',
    range: [35, 40],
    description: `AI doesn\u2019t just support your work \u2014 it radiates your impact. You\u2019ve reached the stage where the technology dissolves into the background, and what people see is extraordinary output, deeper thinking, and a presence that feels ahead of the curve.

Amplifiers don\u2019t work harder with AI. They work with a clarity and speed that others can\u2019t quite explain. But here\u2019s what truly sets you apart: you don\u2019t hoard this advantage. You\u2019re drawn to lifting others into it.

You\u2019re not just AI-enhanced. You\u2019re AI-supercharged.`,
    strengths: [
      'Seamless human-AI collaboration (true Cyborg mode)',
      'Multiplied output without sacrificing depth or authenticity',
      'Natural drive to mentor and elevate others',
    ],
    growth: [
      'Build public thought leadership content (write, speak, teach)',
      'Explore cutting-edge: AI agents, multi-model orchestration, custom AI',
      'Create the playbooks that will define your industry\u2019s AI future',
    ],
    stat: 'Workers with strong AI skills earn a 56% wage premium \u2014 up from 25% the prior year.',
    statSource: 'PwC AI Jobs Barometer, 2025',
  },
};

export function getArchetype(totalScore) {
  if (totalScore <= 16) return archetypes.observer;
  if (totalScore <= 22) return archetypes.explorer;
  if (totalScore <= 28) return archetypes.integrator;
  if (totalScore <= 34) return archetypes.architect;
  return archetypes.amplifier;
}

export function getArchetypeById(id) {
  return archetypes[id] || archetypes.integrator;
}
