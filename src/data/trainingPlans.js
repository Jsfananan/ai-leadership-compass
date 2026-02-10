const roleKeywords = {
  'Author / Writer': {
    tasks: ['manuscript development', 'research synthesis', 'editing workflows', 'publishing strategy'],
    keywords: ['AI writing tools', 'research automation', 'AI-assisted editing'],
    focus: 'enhancing writing quality and creative output',
  },
  'Business Leader / Manager': {
    tasks: ['strategic planning', 'team communication', 'performance analysis', 'decision-making'],
    keywords: ['leadership AI', 'business intelligence', 'team productivity AI'],
    focus: 'driving team performance and strategic clarity',
  },
  'Church Leader / Pastor': {
    tasks: ['sermon preparation', 'pastoral care', 'community outreach', 'volunteer coordination'],
    keywords: ['ministry AI tools', 'sermon research', 'pastoral productivity'],
    focus: 'deepening ministry impact and community connection',
  },
  'Consultant / Freelancer': {
    tasks: ['client research', 'proposal writing', 'project delivery', 'knowledge synthesis'],
    keywords: ['consulting AI', 'client intelligence', 'proposal automation'],
    focus: 'delivering higher value to clients faster',
  },
  'Creator / Content Creator': {
    tasks: ['content ideation', 'script writing', 'audience research', 'distribution strategy'],
    keywords: ['content AI tools', 'creative automation', 'audience analytics'],
    focus: 'scaling creative output and audience engagement',
  },
  'Doctor / Healthcare Professional': {
    tasks: ['clinical documentation', 'research review', 'patient communication', 'continuing education'],
    keywords: ['healthcare AI', 'clinical decision support', 'medical documentation AI'],
    focus: 'improving patient care and clinical efficiency',
  },
  'Educator / Teacher': {
    tasks: ['lesson planning', 'student assessment', 'curriculum design', 'personalized feedback'],
    keywords: ['educational AI', 'adaptive learning', 'AI-assisted grading'],
    focus: 'enhancing student outcomes and teaching effectiveness',
  },
  'Entrepreneur / Solopreneur': {
    tasks: ['business planning', 'marketing execution', 'customer service', 'product development'],
    keywords: ['startup AI tools', 'business automation', 'solopreneur AI stack'],
    focus: 'scaling operations without scaling headcount',
  },
  'Marketing / Sales Professional': {
    tasks: ['campaign strategy', 'lead nurturing', 'content creation', 'data analysis'],
    keywords: ['marketing AI', 'sales automation', 'customer analytics AI'],
    focus: 'increasing conversion and customer engagement',
  },
  'Non-Profit Leader': {
    tasks: ['grant writing', 'impact measurement', 'donor engagement', 'program evaluation'],
    keywords: ['nonprofit AI', 'grant writing AI', 'impact analytics'],
    focus: 'maximizing social impact with limited resources',
  },
  'Software Developer / Engineer': {
    tasks: ['code generation', 'debugging', 'architecture planning', 'documentation'],
    keywords: ['AI coding assistants', 'AI pair programming', 'automated testing AI'],
    focus: 'accelerating development velocity and code quality',
  },
  'Other': {
    tasks: ['daily workflows', 'communication', 'planning', 'analysis'],
    keywords: ['AI productivity', 'workflow automation', 'professional AI tools'],
    focus: 'improving overall work efficiency and capabilities',
  },
};

function getRoleData(role) {
  return roleKeywords[role] || roleKeywords['Other'];
}

export function generateTrainingPlan(role, archetype, goal, industry) {
  const rd = getRoleData(role);
  const levelMultiplier = archetype.id === 'observer' ? 0 : archetype.id === 'explorer' ? 1 : archetype.id === 'integrator' ? 2 : archetype.id === 'architect' ? 3 : 4;

  const months = [
    {
      month: 1,
      title: levelMultiplier <= 1 ? 'AI Foundation & First Wins' : 'Sharpen Your Edge',
      theme: levelMultiplier <= 1 ? 'Start small, build confidence' : 'Deepen what works, drop what doesn\u2019t',
      researchStat: '92% of daily AI users report productivity benefits, compared to just 58% of infrequent users.',
      statSource: 'PwC Global Workforce Survey, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Bookmark 3 AI tools relevant to ${role.toLowerCase()} (start with ChatGPT or Claude)`,
            `Use AI to draft one ${rd.tasks[0]} deliverable this week`,
            `Save your best prompt as a template for reuse`,
            `Subscribe to one AI newsletter in ${industry.toLowerCase()}`,
          ]
        : [
            `Audit your current AI workflows \u2014 identify the 3 highest-ROI uses`,
            `Build a prompt library: 5 templates for your top ${rd.tasks[0]} tasks`,
            `Test a new AI tool you haven\u2019t tried for ${rd.tasks[1]}`,
            `Share one AI win with a colleague or on LinkedIn`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `When I sit down to work on ${rd.tasks[0]}, I will open an AI tool first and spend 5 minutes experimenting before doing it the old way.`
        : `When I start my ${rd.tasks[0]} work, I will use my saved prompt template instead of starting from scratch.`,
      studyKeywords: levelMultiplier <= 1
        ? [`AI basics for ${role.toLowerCase()}`, 'prompt engineering 101', rd.keywords[0]]
        : [`advanced ${rd.keywords[0]}`, 'AI workflow design', rd.keywords[1]],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry} who is just starting to use AI. My primary goal is to ${goal.toLowerCase()}. Help me identify the 3 most impactful ways I can use AI this week for my ${rd.tasks[0]} and ${rd.tasks[1]} tasks. For each: (1) Which free AI tool to use, (2) A specific prompt I can copy-paste right now, (3) What a good result looks like. Keep it simple and actionable.`
        : `I'm a ${role} in ${industry} with regular AI experience. My goal is to ${goal.toLowerCase()}. I want to optimize my AI workflows for ${rd.focus}. Audit my current approach: I use AI for ${rd.tasks.slice(0, 3).join(', ')}. For each area, suggest: (1) Advanced prompt techniques I might be missing, (2) A more sophisticated workflow, (3) How to measure improvement. Push me beyond basics.`,
    },
    {
      month: 2,
      title: levelMultiplier <= 1 ? 'Building Daily Habits' : 'Strategic AI Integration',
      theme: levelMultiplier <= 1 ? 'Make AI part of your rhythm' : 'From tool user to strategic thinker',
      researchStat: 'Without reinforcement, people forget 70% of new information within 24 hours. Spaced practice improves retention by 150%.',
      statSource: 'Ebbinghaus Forgetting Curve / eLearning Industry, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Use AI at least 3 times this week for ${rd.tasks[1]} tasks`,
            `Create 2 more prompt templates for your common needs`,
            `Try a second AI tool and compare results to your first one`,
            `Track your time: note how long tasks take with vs. without AI`,
          ]
        : [
            `Map ALL your ${role.toLowerCase()} responsibilities to potential AI solutions`,
            `Build a multi-step AI workflow for your most complex recurring task`,
            `Experiment with AI for ${rd.tasks[3]} \u2014 a task you haven\u2019t tried AI for yet`,
            `Start a simple AI log: track what works, what fails, and why`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `When I open my laptop each morning, I will spend the first 10 minutes using AI to plan or draft my most important task for the day.`
        : `When I face a complex ${rd.tasks[2]} challenge, I will use AI as my first thinking partner before consulting other resources.`,
      studyKeywords: levelMultiplier <= 1
        ? ['AI daily habits', `${rd.keywords[1]}`, 'prompt templates']
        : ['AI strategy canvas', rd.keywords[2], 'multi-tool AI workflows'],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry} building daily AI habits. I've been using AI for 4 weeks for basic ${rd.tasks[0]} tasks. Now I want to expand. Design a daily AI routine for me that takes no more than 30 minutes and covers: (1) Morning planning prompt, (2) Midday task acceleration prompt, (3) End-of-day reflection prompt. Make each prompt specific to my role and goal: ${goal.toLowerCase()}.`
        : `I'm a ${role} in ${industry} ready to use AI strategically for ${rd.focus}. Create an 'AI Strategy Canvas' for my role that includes: (1) My 5 biggest professional challenges and how AI addresses each, (2) A multi-step workflow combining 2-3 AI tools for my most complex recurring project, (3) Metrics to track my AI ROI, (4) Gaps in my current approach. Be specific to ${industry}.`,
    },
    {
      month: 3,
      title: levelMultiplier <= 1 ? 'Going Deeper' : 'Building Systems',
      theme: levelMultiplier <= 1 ? 'From casual user to intentional practitioner' : 'Create frameworks others can follow',
      researchStat: 'AI-exposed occupations see skills changing 66% faster than non-exposed roles. Continuous learning is no longer optional.',
      statSource: 'PwC AI Jobs Barometer, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Create a prompt chain: use AI output from one task as input for the next`,
            `Use AI to analyze or summarize data relevant to your ${rd.tasks[2]} work`,
            `Share your best AI discovery with your team or network`,
            `Evaluate 2 paid AI tools \u2014 decide if the upgrade is worth it`,
          ]
        : [
            `Design a repeatable AI system for your top revenue/impact-generating activity`,
            `Create a 1-page AI playbook for your team or collaborators`,
            `Present an AI efficiency win to your leadership or peers`,
            `Experiment with AI agents or multi-step automation tools`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `When I complete an AI-assisted task, I will spend 2 minutes refining the prompt and saving the improved version for next time.`
        : `When I design a new process or workflow, I will first ask: 'Where does AI fit in this?' before building it manually.`,
      studyKeywords: levelMultiplier <= 1
        ? ['prompt chaining', `AI for ${rd.tasks[2]}`, 'AI tool comparison']
        : ['AI systems design', 'AI team adoption', `${rd.keywords[0]} advanced`],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry} who has been using AI for 3 months. I'm comfortable with basic prompting and want to level up. Teach me prompt chaining: show me a 3-step prompt chain specific to my ${rd.tasks[2]} work that takes output from step 1 as input to step 2, and so on. Include the exact prompts and explain the logic behind each step.`
        : `I'm a ${role} in ${industry} building AI systems for my team. Help me create a comprehensive AI Playbook that includes: (1) The 5 AI workflows every ${role.toLowerCase()} should know, (2) Prompt templates for each, (3) Quality checkpoints, (4) Common pitfalls, (5) A 30-day onboarding plan for someone new to AI. Make this ready to share with colleagues.`,
    },
    {
      month: 4,
      title: levelMultiplier <= 1 ? 'Expanding Your Toolkit' : 'Innovation & Influence',
      theme: levelMultiplier <= 1 ? 'Discover what\u2019s possible beyond basics' : 'Push boundaries, lead the conversation',
      researchStat: '42% of firms abandoned most AI initiatives in 2025 \u2014 not because AI failed, but because leaders weren\u2019t prepared to guide adoption.',
      statSource: 'MIT Sloan Management Review, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Try AI for a task you never thought to automate in ${rd.tasks[3]}`,
            `Use AI to prepare for your next important meeting or presentation`,
            `Build a 'second brain' system: use AI to organize and retrieve your notes`,
            `Find and join an AI community in your industry`,
          ]
        : [
            `Design an innovative AI-powered solution for a persistent challenge in your field`,
            `Create content about your AI journey (LinkedIn post, blog, or internal presentation)`,
            `Mentor one person who is earlier in their AI journey`,
            `Explore cutting-edge: AI agents, custom GPTs, or voice-to-workflow tools`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `When I prepare for any important meeting, I will use AI to research, summarize background, and draft my talking points first.`
        : `When I encounter a recurring problem in my work, I will spend 20 minutes designing an AI-powered solution before defaulting to the manual approach.`,
      studyKeywords: levelMultiplier <= 1
        ? ['AI for meetings', 'second brain AI', `${rd.keywords[2]}`]
        : ['AI agents', 'custom GPTs', `AI innovation in ${industry.toLowerCase()}`],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry}, 4 months into my AI journey. I want to build an AI-powered 'second brain' system for my work. Help me design a system that: (1) Captures and organizes my notes, ideas, and research, (2) Uses AI to surface relevant information when I need it, (3) Helps me prepare for meetings and projects faster, (4) Grows smarter as I add more content. Recommend specific tools and setup steps.`
        : `I'm an advanced ${role} in ${industry}. I want to design an AI innovation project that could reshape how ${role.toLowerCase()}s work. Help me: (1) Identify a significant unsolved problem in ${industry}, (2) Design an AI-powered solution combining multiple tools, (3) Create an implementation roadmap, (4) Define success metrics, (5) Write a compelling pitch for this idea. Make this genuinely innovative, not incremental.`,
    },
    {
      month: 5,
      title: levelMultiplier <= 1 ? 'Teaching & Leading' : 'Thought Leadership',
      theme: levelMultiplier <= 1 ? 'The best way to learn is to teach' : 'Your voice shapes how others see AI',
      researchStat: '82% of young leaders use AI at work, while senior leaders lag significantly \u2014 creating a competency inversion in organizations.',
      statSource: 'MIT Sloan / Deloitte, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Teach one colleague how to use AI for a specific task you\u2019ve mastered`,
            `Create a simple guide or video showing your favorite AI workflow`,
            `Use AI to draft a thought leadership piece about your field`,
            `Evaluate your progress: compare your efficiency now vs. 5 months ago`,
          ]
        : [
            `Publish or present your AI perspective to your professional network`,
            `Develop your personal AI ethics and best practices framework`,
            `Build a network of AI-forward professionals through outreach`,
            `Design a training program for your team or organization`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `When a colleague asks how I completed something quickly, I will take 5 minutes to show them the AI workflow I used.`
        : `When I have a strong opinion about AI in my field, I will draft and publish it within 48 hours instead of keeping it to myself.`,
      studyKeywords: levelMultiplier <= 1
        ? ['AI teaching methods', 'AI thought leadership', `AI trends in ${industry.toLowerCase()}`]
        : ['AI ethics framework', 'AI training design', 'AI public speaking'],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry} who has been learning AI for 5 months and want to start teaching others. Help me create a 30-minute workshop I can deliver to colleagues who are AI beginners. Include: (1) Opening hook that addresses their fears, (2) 3 live demonstrations using tools I know, (3) Hands-on exercise they can do in 5 minutes, (4) Resources to continue learning. Make it engaging and non-intimidating.`
        : `I'm an advanced ${role} in ${industry} building my AI thought leadership platform. Help me create: (1) A unique point of view on AI in ${industry} that differentiates me, (2) A content strategy (3 LinkedIn posts, 1 long-form article, 1 presentation outline) that establishes my expertise, (3) An AI ethics framework specific to my field, (4) A 'signature talk' outline I could deliver at conferences. Make my perspective bold and substantive.`,
    },
    {
      month: 6,
      title: levelMultiplier <= 1 ? 'Your AI-Enhanced Future' : 'The Amplified Leader',
      theme: levelMultiplier <= 1 ? 'From learner to practitioner' : 'Sustained excellence, continuous evolution',
      researchStat: 'AI is projected to save professionals 12 hours per week by 2029. The leaders who start now will capture that value first.',
      statSource: 'Thomson Reuters, 2025',
      weeklyActions: levelMultiplier <= 1
        ? [
            `Create your personal 12-month AI roadmap for continued growth`,
            `Identify 3 advanced AI skills you want to develop next`,
            `Build a curated resource list for others in your field`,
            `Set a recurring weekly 'AI exploration hour' on your calendar`,
          ]
        : [
            `Develop your 12-month AI evolution roadmap with specific milestones`,
            `Create an AI resource hub or playbook for your professional community`,
            `Set quarterly AI skill goals and accountability structures`,
            `Begin exploring how to build custom AI solutions for your specific needs`,
          ],
      implementationIntention: levelMultiplier <= 1
        ? `Every Friday at 3pm, I will spend 30 minutes exploring one new AI capability or tool that could benefit my work next quarter.`
        : `Every month on the 1st, I will review my AI workflows, retire what\u2019s outdated, and adopt one new approach based on the latest developments.`,
      studyKeywords: levelMultiplier <= 1
        ? ['AI career planning', `future of AI in ${industry.toLowerCase()}`, 'continuous AI learning']
        : ['AI agents and orchestration', `emerging AI for ${role.toLowerCase()}`, 'custom AI solutions'],
      customPrompt: levelMultiplier <= 1
        ? `I'm a ${role} in ${industry} completing a 6-month AI learning journey. My goal was to ${goal.toLowerCase()}. Create my personalized 'AI Leader Roadmap' for the next 12 months that includes: (1) Monthly skill milestones building on what I\u2019ve learned, (2) 3 stretch goals that push me into advanced territory, (3) Key AI trends in ${industry} I should watch, (4) A reading/learning list, (5) How to measure my continued growth. Make this ambitious but achievable.`
        : `I'm an advanced ${role} in ${industry} who has spent 6 months deepening my AI mastery. Create my 'AI Amplifier Manifesto' \u2014 a strategic document that includes: (1) My core principles for ethical, effective AI leadership, (2) A 12-month vision for staying at the cutting edge, (3) How I\u2019ll mentor and elevate my professional community, (4) Specific goals for building custom AI solutions, (5) My unique perspective on how AI will reshape ${industry} by 2028. Make this a document I\u2019d be proud to publish.`,
    },
  ];

  return months;
}
