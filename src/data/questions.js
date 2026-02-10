export const dimensions = [
  { id: 'awareness', label: 'AI Awareness', description: 'Understanding AI capabilities and limitations' },
  { id: 'proficiency', label: 'Tool Proficiency', description: 'Hands-on experience with AI tools' },
  { id: 'strategy', label: 'Strategic Integration', description: 'Using AI for strategy, not just tasks' },
  { id: 'collaboration', label: 'Human-AI Collaboration', description: 'Working with AI as a thought partner' },
  { id: 'leadership', label: 'Change Leadership', description: 'Leading others through AI transformation' },
];

export const questions = [
  // Dimension 1: AI Awareness
  {
    id: 1,
    dimension: 'awareness',
    text: "When you hear about a new AI tool, your first reaction is...",
    options: [
      { value: 1, label: "Interesting, but I wouldn't know where to start" },
      { value: 2, label: "I'll look into it when I have time" },
      { value: 3, label: "I evaluate whether it fits my current workflow" },
      { value: 4, label: "I test it immediately and compare it to my stack" },
    ],
  },
  {
    id: 2,
    dimension: 'awareness',
    text: "If someone asked you to explain what AI can't do well, you'd...",
    options: [
      { value: 1, label: "Struggle to name specific limitations" },
      { value: 2, label: "Share a few things you've noticed from experience" },
      { value: 3, label: "Give concrete examples from your own work" },
      { value: 4, label: "Map the 'jagged frontier' of AI strengths and gaps in your field" },
    ],
  },
  // Dimension 2: Tool Proficiency
  {
    id: 3,
    dimension: 'proficiency',
    text: "How often do you use AI tools in your work?",
    options: [
      { value: 1, label: "Rarely or never" },
      { value: 2, label: "A few times a month for specific tasks" },
      { value: 3, label: "Several times a week as part of my routine" },
      { value: 4, label: "Multiple times daily with custom workflows" },
    ],
  },
  {
    id: 4,
    dimension: 'proficiency',
    text: "Your approach to AI prompts is...",
    options: [
      { value: 1, label: "I type whatever comes to mind and hope for the best" },
      { value: 2, label: "I've learned a few good formats that work" },
      { value: 3, label: "I have saved templates for my most common tasks" },
      { value: 4, label: "I chain prompts together and iterate systematically" },
    ],
  },
  // Dimension 3: Strategic Integration
  {
    id: 5,
    dimension: 'strategy',
    text: "When tackling a big project, AI is...",
    options: [
      { value: 1, label: "Not part of my process yet" },
      { value: 2, label: "Helpful for specific tasks like drafting or research" },
      { value: 3, label: "Involved in planning, execution, and review" },
      { value: 4, label: "Central to my strategy \u2014 I design projects around AI capabilities" },
    ],
  },
  {
    id: 6,
    dimension: 'strategy',
    text: "Your team or colleagues see you as...",
    options: [
      { value: 1, label: "Someone still exploring what AI can do" },
      { value: 2, label: "Someone who uses AI and shares tips occasionally" },
      { value: 3, label: "The go-to person when they have AI questions" },
      { value: 4, label: "The one redesigning how your team works with AI" },
    ],
  },
  // Dimension 4: Human-AI Collaboration
  {
    id: 7,
    dimension: 'collaboration',
    text: "When AI gives you an output, you typically...",
    options: [
      { value: 1, label: "Use it as-is or aren't sure how to evaluate it" },
      { value: 2, label: "Read through and make basic edits" },
      { value: 3, label: "Critically evaluate, refine, and layer in your expertise" },
      { value: 4, label: "Treat it as raw material \u2014 reshape it with your judgment" },
    ],
  },
  {
    id: 8,
    dimension: 'collaboration',
    text: "The balance between your thinking and AI's contribution is...",
    options: [
      { value: 1, label: "I haven't found the right balance yet" },
      { value: 2, label: "AI does the heavy lifting, I review the output" },
      { value: 3, label: "I lead the thinking, AI accelerates execution" },
      { value: 4, label: "Seamless \u2014 I move fluidly between AI and my own judgment" },
    ],
  },
  // Dimension 5: Change Leadership
  {
    id: 9,
    dimension: 'leadership',
    text: "When it comes to AI adoption around you, you...",
    options: [
      { value: 1, label: "Watch what others do first" },
      { value: 2, label: "Experiment on your own, privately" },
      { value: 3, label: "Share discoveries and encourage others to try" },
      { value: 4, label: "Lead initiatives and actively mentor others" },
    ],
  },
  {
    id: 10,
    dimension: 'leadership',
    text: "Your vision for AI in your field over the next 2 years is...",
    options: [
      { value: 1, label: "Unclear \u2014 things are moving too fast to predict" },
      { value: 2, label: "Hopeful but still forming" },
      { value: 3, label: "Specific \u2014 I know which areas will be most impacted" },
      { value: 4, label: "Actionable \u2014 I'm already preparing for the shifts" },
    ],
  },
];

export const roles = [
  'Author / Writer',
  'Business Leader / Manager',
  'Church Leader / Pastor',
  'Consultant / Freelancer',
  'Creator / Content Creator',
  'Doctor / Healthcare Professional',
  'Educator / Teacher',
  'Entrepreneur / Solopreneur',
  'Marketing / Sales Professional',
  'Non-Profit Leader',
  'Software Developer / Engineer',
  'Other',
];

export const industries = [
  'Healthcare & Medical',
  'Technology & Software',
  'Finance & Banking',
  'Education & Training',
  'Marketing & Advertising',
  'Non-Profit & Social Impact',
  'Religious & Ministry',
  'Creative & Media',
  'Consulting & Professional Services',
  'Real Estate',
  'Manufacturing & Operations',
  'Retail & E-commerce',
  'Other',
];

export const goals = [
  'Save 5\u201310 hours per week',
  'Increase revenue or impact by 25%+',
  'Improve team productivity',
  'Enhance creative output',
  'Streamline daily operations',
  'Build thought leadership',
  'Stay ahead of industry shifts',
  'Automate repetitive tasks',
  'Improve decision-making speed',
  'Scale my business or impact',
];
