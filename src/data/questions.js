export const dimensions = [
  { id: 'awareness', label: 'AI Awareness', description: 'Understanding AI capabilities and limitations' },
  { id: 'proficiency', label: 'Tool Proficiency', description: 'Hands-on experience with AI tools' },
  { id: 'strategy', label: 'Strategic Integration', description: 'Using AI for strategy, not just tasks' },
  { id: 'collaboration', label: 'Human-AI Collaboration', description: 'Working with AI as a thought partner' },
  { id: 'leadership', label: 'Change Leadership', description: 'Leading others through AI transformation' },
];

export const questions = [
  // Dimension 1: AI Awareness (3 questions)
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
  {
    id: 3,
    dimension: 'awareness',
    text: "How well can you separate AI hype from real capability?",
    options: [
      { value: 1, label: "I mostly rely on what media and social media say" },
      { value: 2, label: "I can tell the difference sometimes but not always" },
      { value: 3, label: "I evaluate claims against what I've seen AI actually do" },
      { value: 4, label: "I regularly debunk overpromises and spot underappreciated capabilities" },
    ],
  },
  // Dimension 2: Tool Proficiency (3 questions)
  {
    id: 4,
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
    id: 5,
    dimension: 'proficiency',
    text: "Your approach to AI prompts is...",
    options: [
      { value: 1, label: "I type whatever comes to mind and hope for the best" },
      { value: 2, label: "I've learned a few good formats that work" },
      { value: 3, label: "I have saved templates for my most common tasks" },
      { value: 4, label: "I chain prompts together and iterate systematically" },
    ],
  },
  {
    id: 6,
    dimension: 'proficiency',
    text: "When an AI tool doesn't give you what you want, you...",
    options: [
      { value: 1, label: "Give up or switch to doing it manually" },
      { value: 2, label: "Try rephrasing my request once or twice" },
      { value: 3, label: "Iterate on my prompt, add context, or break the task into steps" },
      { value: 4, label: "Debug systematically \u2014 adjust parameters, chain tools, or switch models" },
    ],
  },
  // Dimension 3: Strategic Integration (3 questions)
  {
    id: 7,
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
    id: 8,
    dimension: 'strategy',
    text: "Your team or colleagues see you as...",
    options: [
      { value: 1, label: "Someone still exploring what AI can do" },
      { value: 2, label: "Someone who uses AI and shares tips occasionally" },
      { value: 3, label: "The go-to person when they have AI questions" },
      { value: 4, label: "The one redesigning how your team works with AI" },
    ],
  },
  {
    id: 9,
    dimension: 'strategy',
    text: "How do you measure the impact of AI on your work?",
    options: [
      { value: 1, label: "I haven't thought about measuring it" },
      { value: 2, label: "I have a general sense that it saves me time" },
      { value: 3, label: "I can point to specific tasks where AI measurably improved output" },
      { value: 4, label: "I track ROI across multiple workflows and report on it" },
    ],
  },
  // Dimension 4: Human-AI Collaboration (3 questions)
  {
    id: 10,
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
    id: 11,
    dimension: 'collaboration',
    text: "The balance between your thinking and AI's contribution is...",
    options: [
      { value: 1, label: "I haven't found the right balance yet" },
      { value: 2, label: "AI does the heavy lifting, I review the output" },
      { value: 3, label: "I lead the thinking, AI accelerates execution" },
      { value: 4, label: "Seamless \u2014 I move fluidly between AI and my own judgment" },
    ],
  },
  {
    id: 12,
    dimension: 'collaboration',
    text: "When you're stuck on a complex problem, AI is...",
    options: [
      { value: 1, label: "Not something I'd think to use for problem-solving" },
      { value: 2, label: "A starting point \u2014 I'll ask it for ideas" },
      { value: 3, label: "A thinking partner \u2014 I iterate back and forth to refine solutions" },
      { value: 4, label: "Deeply integrated \u2014 I use it to stress-test assumptions and explore blind spots" },
    ],
  },
  // Dimension 5: Change Leadership (3 questions)
  {
    id: 13,
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
    id: 14,
    dimension: 'leadership',
    text: "Your vision for AI in your field over the next 2 years is...",
    options: [
      { value: 1, label: "Unclear \u2014 things are moving too fast to predict" },
      { value: 2, label: "Hopeful but still forming" },
      { value: 3, label: "Specific \u2014 I know which areas will be most impacted" },
      { value: 4, label: "Actionable \u2014 I'm already preparing for the shifts" },
    ],
  },
  {
    id: 15,
    dimension: 'leadership',
    text: "If your organization asked you to lead an AI initiative, you'd feel...",
    options: [
      { value: 1, label: "Unprepared \u2014 I'd need to learn a lot first" },
      { value: 2, label: "Somewhat ready \u2014 I could contribute but would need support" },
      { value: 3, label: "Confident \u2014 I have enough experience to guide a team" },
      { value: 4, label: "Excited \u2014 I already have a roadmap in my head" },
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
