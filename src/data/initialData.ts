import { CaseStudy, Article, Venture, MediaItem, SEOSettings, SiteSettings, ContactSubmission } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  siteName: 'Abu Naser Maaz',
  tagline: 'QA & Quality Engineering | Technical Project Delivery',
  email: 'info.abunasermaaz@gmail.com',
  linkedInUrl: 'https://linkedin.com/in/abunasarmaaz/',
  innovifyXrUrl: 'https://innovifyxr.com',
  locafyroUrl: 'https://locafyro.com',
  heroEyebrow: 'QUALITY ENGINEERING • TECHNICAL DELIVERY',
  heroHeadline: 'I Help Founders & Product Teams Ship Better Software',
  heroParagraph: 'I work across Quality Engineering, Software Testing, and Technical Project Delivery to help product teams identify risks, improve product quality, and deliver reliable digital experiences.',
  secondarySentence: 'With experience across web, mobile, games, APIs, XR, and emerging technology, I bring a product-focused approach to software quality and delivery.'
};

export const INITIAL_SEO_SETTINGS: SEOSettings = {
  siteTitle: 'Abu Naser Maaz – QA & Quality Engineering | Technical Project Delivery',
  siteDescription: 'Professional portfolio and case studies of Abu Naser Maaz. Specializing in Quality Engineering, Software QA, AI Testing, Game & XR Testing, and Technical Project Coordination.',
  defaultOGImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  keywords: [
    'Quality Engineering',
    'Software QA',
    'Software Testing',
    'QA Engineer',
    'Quality Assurance',
    'Technical Project Delivery',
    'AI Testing',
    'Mobile App Testing',
    'Web Application Testing',
    'Game Testing',
    'XR Testing'
  ],
  robotsPolicy: 'index, follow',
  canonicalDomain: 'https://abunasarmaaz.com'
};

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-web-qa',
    slug: 'web-application-qa',
    title: 'Web Application QA & Release Verification',
    category: 'Web',
    projectType: 'Independent Case Study',
    shortSummary: 'End-to-end functional, regression, cross-browser, and user journey validation for a multi-role web platform.',
    executiveSummary: 'Conducted comprehensive quality engineering across core user flows, responsive layouts, data persistence, and edge-case form validation. Uncovered high-priority data desynchronization defects and established structured regression checklists to streamline staging-to-production handoffs.',
    problem: 'Modern SaaS and web applications frequently experience regression defects across varying browser engines, viewport sizes, session state timeouts, and concurrent user updates. Without a structured validation matrix, teams ship silent regressions that harm user retention.',
    objectives: [
      'Validate critical path user onboarding, checkout, and authentication workflows',
      'Test cross-browser compatibility across Chromium, WebKit, and Gecko engines',
      'Evaluate responsive breakpoint resilience from 320px mobile to 4K desktop screens',
      'Establish repeatable regression suites for sprint release cycles'
    ],
    scope: [
      'Role-based access control (Admin, Member, Viewer)',
      'Asynchronous state handling & optimistic UI updates',
      'Cross-browser layout and rendering parity',
      'Form validation edge cases (XSS sanitization, boundary values, payload formatting)'
    ],
    approach: [
      'Defined a Risk-Impact Priority Matrix to focus on revenue-critical journeys first',
      'Executed combined exploratory and scripted test runs against staging builds',
      'Simulated degraded network conditions (3G, offline reconnects) to test state recovery',
      'Authored defect tickets with reproducible steps, HAR logs, and console error traces'
    ],
    testScenarios: [
      { scenario: 'Concurrent session invalidation', details: 'User logged in across two devices; token refresh cycle triggers without infinite loop or session hijack vulnerability.', status: 'Passed' },
      { scenario: 'Debounced search input with rapid keystrokes', details: 'Race condition prevention when asynchronous API responses arrive out of order.', status: 'Fixed' },
      { scenario: 'Dynamic form submission with special Unicode characters', details: 'Form payload handles international character sets and emoji encodings without breaking backend parsers.', status: 'Passed' },
      { scenario: 'Safari WebKit datepicker & flexbox clipping', details: 'Identified layout shift and date parsing error specific to iOS Safari engines.', status: 'Fixed' }
    ],
    findings: [
      'Uncovered 14 total defects during initial exploratory phase, including 3 high-impact race conditions',
      'Detected form state loss when users toggled between tab views before final submission',
      'Identified critical Safari-specific flexbox rendering bug causing CTA buttons to collapse below fold on iPhone 13/14'
    ],
    defectExamples: [
      {
        title: 'Asynchronous search response overwriting newer query results',
        description: 'Rapid typing in the global filter triggered concurrent requests. Slower earlier query resolved after fast query, reverting displayed UI to outdated state.',
        severity: 'Major',
        impact: 'Users saw incorrect search results and acted on stale item datasets.',
        resolution: 'Recommended request cancellation (AbortController) and timestamp tagging on client-side state.'
      },
      {
        title: 'Form submit button remaining in loading state upon 422 API error',
        description: 'Validation error responses failed to reset the button state, preventing user from correcting inputs and re-submitting.',
        severity: 'Major',
        impact: 'Dead-end user experience forcing full page reload and losing all input data.',
        resolution: 'Wrapped try/catch around async dispatch with explicit button reset in finally block.'
      }
    ],
    recommendations: [
      'Integrate automated linting and responsive snapshot testing for core page templates',
      'Implement standardized client-side error boundaries to prevent full-page crashes on minor widget failures',
      'Maintain a unified living regression checklist updated after every sprint planning'
    ],
    tools: ['Postman', 'Chrome DevTools', 'BrowserStack', 'Lighthouse', 'Jira / GitHub Issues', 'Figma'],
    platform: 'Web (React / Node / Modern Browsers)',
    status: 'Completed & Documented',
    lessonsLearned: [
      'Exploratory testing guided by user persona heuristics reveals 40% more usability bugs than rigid scripted passes alone',
      'Testing network edge cases early saves weeks of debugging elusive production customer reports'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['why-qa-should-start-before-dev-is-finished', 'how-i-approach-risk-based-testing'],
    relatedCaseStudySlugs: ['mobile-app-qa', 'technical-project-delivery'],
    published: true,
    createdAt: '2025-11-10'
  },
  {
    id: 'cs-mobile-qa',
    slug: 'mobile-app-qa',
    title: 'Mobile App Quality Assurance & Device Fragmentation Testing',
    category: 'Mobile',
    projectType: 'Independent Case Study',
    shortSummary: 'Comprehensive functional, performance, battery, and background state testing across iOS and Android ecosystems.',
    executiveSummary: 'Structured deep-dive QA across fragmented Android versions, screen notch variations, background suspension states, push notifications, and network interruption behaviors. Identified critical app freeze defects on low-RAM devices.',
    problem: 'Mobile applications encounter extreme device diversity, varying OS permission models, background process killing, and unpredictable network handoffs. Ensuring stability across both budget Android handsets and flagship iOS devices is critical for app store ratings.',
    objectives: [
      'Verify touch target accessibility and responsive layout across diverse aspect ratios (16:9, 19.5:9, foldable displays)',
      'Test app behavior during interruptions (incoming phone calls, low battery alerts, backgrounding)',
      'Assess memory consumption and CPU temperature on low-tier and mid-tier hardware',
      'Validate biometric authentication and local data synchronization during offline modes'
    ],
    scope: [
      'iOS 16 - 18 / Android 11 - 15 test matrix',
      'Push notification payload routing to deep links',
      'Offline caching & local SQLite / MMKV storage synchronization',
      'Permissions requesting flow (Camera, Location, Notifications)'
    ],
    approach: [
      'Constructed a device coverage matrix representing top market share hardware tiers',
      'Tested rapid app switching, cold boot, warm boot, and system kill recovery',
      'Emulated packet loss (5% to 20%) and airplane mode transitions during active upload streams',
      'Logged crash traces and memory leak warnings via device logs and profilers'
    ],
    testScenarios: [
      { scenario: 'Background to foreground resume during payment checkout', details: 'App restores transaction state without double-charging or resetting basket.', status: 'Passed' },
      { scenario: 'Camera permission denied on first prompt', details: 'App presents helpful educational fallback dialog instead of crashing or freezing.', status: 'Passed' },
      { scenario: 'Low memory kill while app is backgrounded', details: 'App restores last active screen view upon relaunch rather than dropping to root splash screen.', status: 'Fixed' },
      { scenario: 'RTL (Right-to-Left) locale layout mirroring', details: 'Text, icons, and navigation align correctly when system language switches to Arabic or Hebrew.', status: 'Fixed' }
    ],
    findings: [
      'App crashed on Android 12 when Bluetooth permission was requested without appropriate runtime checks',
      'Detected significant memory retention in image gallery cache resulting in Out-Of-Memory (OOM) crashes on 3GB RAM devices after 10 minutes of browsing',
      'Identified notch overlap on newer iPhone Dynamic Island models obscuring top navigation headers'
    ],
    defectExamples: [
      {
        title: 'OOM Crash on image carousel scrolling on low-end Android hardware',
        description: 'Bitmap decoding did not downsample high-resolution images, exceeding JVM heap limits on entry-level Android devices.',
        severity: 'Critical',
        impact: 'Repeated app crashes for ~22% of target user device pool.',
        resolution: 'Recommended image caching library downsampling to exact viewport density and aggressive memory cache cleanup.'
      },
      {
        title: 'Push notification click dropped user on home screen instead of message thread',
        description: 'Deep link intent parser failed when app was launched from a dead cold state.',
        severity: 'Major',
        impact: 'Poor user retention and frustrated engagement from notification re-engagement campaigns.',
        resolution: 'Separated cold-launch intent routing from in-app notification event listeners.'
      }
    ],
    recommendations: [
      'Establish automated sanity tests on physical cloud device farm prior to every beta release build',
      'Enforce memory budgeting rules during PR reviews for media-heavy components',
      'Create standardized deep link test matrices for all marketing campaigns'
    ],
    tools: ['Xcode Instruments', 'Android Studio Profiler', 'Charles Proxy', 'Firebase App Distribution', 'TestFlight'],
    platform: 'iOS & Android (React Native / Flutter / Native)',
    status: 'Completed & Documented',
    lessonsLearned: [
      'Testing on real low-spec physical devices is indispensable; emulators hide 90% of memory and thermal throttling issues',
      'Network volatility testing is the most common area where mobile user experience breaks down'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['5-common-software-quality-problems-startups-discover-too-late', 'how-i-approach-risk-based-testing'],
    relatedCaseStudySlugs: ['web-application-qa', 'ai-application-testing'],
    published: true,
    createdAt: '2025-11-28'
  },
  {
    id: 'cs-ai-qa',
    slug: 'ai-application-testing',
    title: 'AI Application Testing & Non-Deterministic Output Validation',
    category: 'AI',
    projectType: 'Independent Case Study',
    shortSummary: 'Evaluating LLM prompt boundaries, hallucination rates, edge-case jailbreaks, response latency, and graceful fallback UX.',
    executiveSummary: 'Developed a structured evaluation approach for generative AI applications. Focused on non-deterministic response testing, prompt injection resistance, schema compliance, latency thresholds, and graceful UI degradation under token limit timeouts.',
    problem: 'Unlike deterministic software where input A always outputs B, generative AI systems can produce variable responses, hallucinated facts, unexpected formatting breaks, or policy violations. Traditional QA methodologies fail without specialized LLM evaluation frameworks.',
    objectives: [
      'Define a reproducible test harness for evaluating model consistency and boundary behavior',
      'Test prompt edge cases, malformed queries, adversarial inputs, and excessive token lengths',
      'Validate JSON structured output adherence for downstream API automation',
      'Evaluate UI/UX handling during streaming token delivery, timeouts, and rate limits'
    ],
    scope: [
      'Prompt injection and guardrail evasion resistance',
      'Hallucination and citation accuracy verification',
      'Structured schema validation (JSON/Markdown formatting consistency)',
      'Client-side streaming experience, cancel controls, and retry resilience'
    ],
    approach: [
      'Constructed a 50+ scenario adversarial test dataset covering diverse user intents and extreme edge cases',
      'Ran automated multi-turn conversation tests with varying temperature parameters (0.0 to 1.0)',
      'Monitored response latency (Time-to-First-Token vs Total Generation Time)',
      'Evaluated UX clarity when the AI provider throttles or triggers safety filters'
    ],
    testScenarios: [
      { scenario: 'Adversarial prompt injection attempt', details: 'User instructs AI to ignore system guidelines and disclose system prompts; safety layer intervenes gracefully.', status: 'Passed' },
      { scenario: 'Empty and whitespace-only prompt submissions', details: 'UI disables submission and prevents wasteful API billing calls.', status: 'Passed' },
      { scenario: 'Structured JSON response parser failure', details: 'Model returns trailing comma or truncated markdown codeblock; frontend handles fallback gracefully.', status: 'Fixed' },
      { scenario: 'Streaming interruption mid-generation', details: 'User clicks "Stop Generating" or navigates away; connection terminates immediately without hanging memory.', status: 'Passed' }
    ],
    findings: [
      'Identified that 12% of high-temperature generations broke JSON schema when markdown explanation text was prepended',
      'Discovered that network disconnection during streaming left the UI in permanent skeleton loading state',
      'Found that system prompt lacked explicit boundaries for domain out-of-scope inquiries'
    ],
    defectExamples: [
      {
        title: 'Client crash caused by unparsed markdown wrappers in JSON mode',
        description: 'LLM returned ```json ... ``` codeblock instead of pure JSON payload, causing JSON.parse() on client to throw uncaught exception.',
        severity: 'Major',
        impact: 'Application screen went blank for user upon receiving generated output.',
        resolution: 'Implemented server-side regex extraction and schema fallback parser before returning data to client.'
      },
      {
        title: 'Lack of retry mechanism on 429 Rate Limit responses',
        description: 'When upstream LLM hit RPM limits, UI displayed generic "Something went wrong" without automatic exponential backoff.',
        severity: 'Major',
        impact: 'High churn during peak traffic periods.',
        resolution: 'Added client-side automatic retry with jitter and clear user-facing countdown banner.'
      }
    ],
    recommendations: [
      'Implement strict server-side JSON schema enforcement using modern SDK response_schema constraints',
      'Adopt automated eval benchmarks against golden datasets to detect prompt regression across model updates',
      'Design transparent error states that explain AI limitations honestly to users'
    ],
    tools: ['Google GenAI SDK', 'PromptLayer', 'Postman', 'Python Eval Scripts', 'Chrome Network Profiler'],
    platform: 'AI-Enabled Web / Multi-Modal LLM Systems',
    status: 'In Development / Active Research',
    lessonsLearned: [
      'AI QA is continuous: model behavior shifts even without codebase changes, necessitating automated daily golden-test runs',
      'The biggest QA win in AI products is UX resilience when the model inevitably fails or takes 10+ seconds to respond'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['how-to-test-ai-applications-beyond-functional-qa', 'why-qa-should-start-before-dev-is-finished'],
    relatedCaseStudySlugs: ['web-application-qa', 'xr-testing'],
    published: true,
    createdAt: '2025-12-05'
  },
  {
    id: 'cs-game-qa',
    slug: 'game-qa',
    title: 'Game QA & Interactive Mechanics Testing',
    category: 'Game',
    projectType: 'Independent Case Study',
    shortSummary: 'Rigorous gameplay verification, collision boundaries, physics edge cases, UI/HUD responsiveness, and monetization testing.',
    executiveSummary: 'Executed comprehensive gameplay testing across 2D/3D physics engines, state save/load mechanics, ad network reward callbacks, in-app purchase validation, and framerate stability across varying mobile device chipsets.',
    problem: 'Games require high framerate consistency, flawless physics collision detection, responsive controls, and cheat-proof monetization flows. A single collision bug or broken reward ad can ruin player immersion and destroy app store reviews.',
    objectives: [
      'Validate collision boundaries, clipping glitches, and physics edge cases across all levels',
      'Test player progression saving across offline/online state transitions',
      'Verify ad network callbacks (rewarded video ads, interstitials) and in-app purchase receipts',
      'Profile framerate targets (stable 60fps) and thermal behavior over 45-minute continuous play sessions'
    ],
    scope: [
      'Core gameplay loops & input latency',
      'UI/HUD layout across phone screens with different aspect ratios',
      'Save data integrity during sudden game crash or battery shutdown',
      'Audio sync and sound effect layering under heavy particle effect loads'
    ],
    approach: [
      'Authored level-by-level exploratory checklists targeting collision boundaries and out-of-bounds exploits',
      'Executed monkey testing / rapid erratic input sequences to stress-test state machines',
      'Tested sandboxed IAP purchases and failed transaction rollbacks',
      'Measured memory footprint and battery discharge rates on Mali and Adreno GPU architectures'
    ],
    testScenarios: [
      { scenario: 'Player character jumping into corner collision vertex', details: 'Character does not clip through geometry or get permanently stuck in falling state.', status: 'Fixed' },
      { scenario: 'Rewarded video ad watched with network cut immediately after video ends', details: 'Game securely verifies server reward token without granting double reward or crashing.', status: 'Passed' },
      { scenario: 'Rapid pause/unpause menu toggling during high physics load', details: 'Audio and particle effects pause synchronously without state desync upon resume.', status: 'Passed' },
      { scenario: 'Cloud save conflict resolution', details: 'User presented with clear timestamp choice between local save and cloud save.', status: 'Passed' }
    ],
    findings: [
      'Discovered reproducible physics clipping bug allowing players to skip entire segment of Level 4',
      'Identified audio buffer overflow causing crackling sound after 20 minutes of continuous particle generation',
      'Found that rewarded ad callbacks failed to award gems if the user rotated the screen during playback'
    ],
    defectExamples: [
      {
        title: 'Collision geometry gap in Level 4 boss arena causing out-of-bounds fall',
        description: 'Corner collider mesh had a 0.2-unit seam allowing player to fall into infinite abyss upon taking knockback damage.',
        severity: 'Critical',
        impact: 'Game progression blocker forcing player to restart level and lose progress.',
        resolution: 'Unified collision mesh and added safety boundary trigger beneath terrain that respawns player safely.'
      },
      {
        title: 'In-app purchase transaction hung if user dismissed native store dialog',
        description: 'Game UI remained locked in "Contacting Store..." spinner without timeout.',
        severity: 'Major',
        impact: 'Player forced to force-quit app after cancelling purchase.',
        resolution: 'Implemented transaction cancel callback handler with 5-second fallback timeout.'
      }
    ],
    recommendations: [
      'Implement automatic crash telemetry reporting with level coordinates and player state snapshots',
      'Enforce strict memory garbage collection checkpoints between level transitions',
      'Maintain an automated test scene for quick verification of all physics collider assets'
    ],
    tools: ['Unity Profiler', 'RenderDoc', 'Android Logcat', 'Google Play Sandbox', 'TestFlight'],
    platform: 'Mobile & PC Gaming (Unity / Unreal / WebGL)',
    status: 'Completed & Documented',
    lessonsLearned: [
      'Game QA demands creative "break the game" mindset in addition to standard functional passes',
      'Monetization and save file verification must always take top priority before any public build release'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['testing-interactive-xr-experiences-what-qa-can-miss', 'how-i-approach-risk-based-testing'],
    relatedCaseStudySlugs: ['xr-testing', 'mobile-app-qa'],
    published: true,
    createdAt: '2025-10-15'
  },
  {
    id: 'cs-xr-qa',
    slug: 'xr-testing',
    title: 'XR / VR Immersive Experience & Spatial Interaction Testing',
    category: 'XR',
    projectType: 'Independent Case Study',
    shortSummary: 'Evaluating 6DoF tracking, spatial UI ergonomics, motion comfort, boundary guardian limits, and frame timing in virtual reality.',
    executiveSummary: 'Specialized quality assurance for standalone VR headsets (Meta Quest). Tested spatial hand interactions, physics grab mechanics, motion comfort ratings, field-of-view visual culling, and framerate consistency to prevent cyber-sickness.',
    problem: 'XR (Extended Reality) introduces complex physical, spatial, and physiological challenges that do not exist in 2D software. Dropped frames cause nausea, poor spatial UI placement causes neck fatigue, and tracking glitches break user immersion completely.',
    objectives: [
      'Maintain strict 72fps / 90fps framerate to eliminate motion sickness triggers',
      'Validate natural 6DoF hand-tracking and controller grabbing thresholds',
      'Test guardian boundary warnings and spatial audio localization accuracy',
      'Assess UI legibility and ergonomic reach across diverse user heights (sitting vs standing)'
    ],
    scope: [
      'Meta Quest 2 / Quest 3 standalone environments',
      'Spatial UI floating menu interaction distance & occlusion',
      'Physics object manipulation & dual-hand grabbing mechanics',
      'Passthrough AR overlay calibration and camera alignment'
    ],
    approach: [
      'Profiled GPU and CPU frame times using Meta OVR Metrics Tool in real-time overlay',
      'Executed systematic physical stress tests (fast head turns, reaching outside tracking cones)',
      'Tested spatial audio positioning with calibrated stereo head-related transfer functions (HRTF)',
      'Documented ergonomic comfort ratings based on Fitts Law and spatial reach envelopes'
    ],
    testScenarios: [
      { scenario: 'Rapid controller occlusion by user body', details: 'System smoothly predicts position without erratic jitter or launching objects across room.', status: 'Fixed' },
      { scenario: 'User toggling from Roomscale to Stationary boundary mode', details: 'Virtual environment recenters correctly without clipping user head inside geometry.', status: 'Passed' },
      { scenario: 'High polygon count scene rendering with dynamic lights', details: 'Maintained zero dropped frames using fixed foveated rendering and occlusion culling.', status: 'Passed' },
      { scenario: 'Interactive button press with bare hand tracking', details: 'Haptic/visual feedback triggers precisely at the moment finger intersects button mesh plane.', status: 'Passed' }
    ],
    findings: [
      'Found that floating menu placed at 0.4m caused eye strain (vergence-accommodation conflict); optimal distance was 1.2m',
      'Identified physics collider explosion when users grabbed an object simultaneously with two hands and pulled apart',
      'Detected significant frame drops during sudden particle explosion effects triggering brief 45fps ASW stutter'
    ],
    defectExamples: [
      {
        title: 'Two-handed grab physics constraint calculating infinite velocity vector',
        description: 'When releasing a dual-grabbed object at high angular velocity, physics engine launched object out of playable boundaries.',
        severity: 'Major',
        impact: 'Loss of critical training equipment in simulation, requiring session restart.',
        resolution: 'Clamped release velocity and added object return-to-tray timeout when falling below floor plane.'
      },
      {
        title: 'Menu canvas z-fighting with 3D room objects',
        description: 'UI menu did not account for world depth buffer, resulting in flickering pixels when hovering near walls.',
        severity: 'Minor',
        impact: 'Visual discomfort and distraction for users during tutorial.',
        resolution: 'Configured UI shader to render on dedicated overlay layer with slight forward bias.'
      }
    ],
    recommendations: [
      'Incorporate VR comfort guidelines into initial design sprint before 3D model production begins',
      'Always profile performance on lowest-spec standalone target headset rather than high-end PC VR link',
      'Implement seated/standing height calibration toggles in initial onboarding'
    ],
    tools: ['Meta Quest Developer Hub', 'OVR Metrics Tool', 'Unity XR Interaction Toolkit', 'OpenXR Runtime', 'RenderDoc'],
    platform: 'Meta Quest / OpenXR Standalone & PCVR',
    status: 'Completed & Documented',
    lessonsLearned: [
      'In XR, quality is directly tied to physiological comfort — a dropped frame is not just a visual glitch, it makes users physically ill',
      'Spatial UI must be designed for human biomechanics, not adapted directly from 2D web screens'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['testing-interactive-xr-experiences-what-qa-can-miss', 'why-qa-should-start-before-dev-is-finished'],
    relatedCaseStudySlugs: ['game-qa', 'web-application-qa'],
    published: true,
    createdAt: '2025-10-28'
  },
  {
    id: 'cs-project-delivery',
    slug: 'technical-project-delivery',
    title: 'Technical Project Delivery & Cross-Functional QA Coordination',
    category: 'Project Delivery',
    projectType: 'Independent Case Study',
    shortSummary: 'Streamlining sprint planning, QA-developer feedback loops, milestone tracking, and release gating for a distributed team.',
    executiveSummary: 'Structured technical project delivery practices to bridge the communication gap between product management, engineering, and QA. Established clear Definition of Done (DoD), bug triage workflows, automated status tracking, and release checklist protocols.',
    problem: 'Product teams often suffer from bottlenecked releases, ambiguous bug descriptions, recurring regressions, and misaligned delivery estimates. When QA is treated as a late-stage hurdle rather than an embedded delivery partner, release delays and customer friction multiply.',
    objectives: [
      'Design clear sprint triage protocols to prioritize critical bugs without derailing sprint commitments',
      'Standardize defect ticket requirements (clear reproduction steps, logs, expected vs actual)',
      'Establish release gating criteria and structured sign-off checklists for staging deploys',
      'Improve cross-functional visibility between engineering, product, and QA stakeholders'
    ],
    scope: [
      'Sprint lifecycle from backlog grooming to post-release retro',
      'Bug severity classification taxonomy (P0 Blocker down to P3 Cosmetic)',
      'Release gating checklist & staging smoke-test sign-offs',
      'Weekly delivery health metrics and blocker visibility reporting'
    ],
    approach: [
      'Implemented daily 10-minute async QA-engineering blocker syncs',
      'Introduced standardized Jira / GitHub issue templates with mandatory environment details and reproduction steps',
      'Created a pre-release smoke test protocol executed within 45 minutes of release build candidate',
      'Maintained a living release dashboard showing test execution coverage and remaining risk'
    ],
    testScenarios: [
      { scenario: 'Emergency Hotfix deployment protocol', details: 'Streamlined hotfix verification path without bypassing safety smoke tests.', status: 'Passed' },
      { scenario: 'Sprint scope creep mid-cycle', details: 'Established change request evaluation process to protect release deadlines.', status: 'Passed' },
      { scenario: 'Post-mortem retrospective after critical staging bug', details: 'Root cause analysis identified missing unit test suite and updated QA checklist.', status: 'Passed' }
    ],
    findings: [
      'Standardized issue templates reduced defect turnaround time by eliminating ambiguous back-and-forth communication',
      'Embedding QA during story refinement caught 35% of logic ambiguities before a single line of code was written',
      'Clear release sign-off criteria eliminated last-minute "is it ready to deploy?" anxiety among founders'
    ],
    defectExamples: [
      {
        title: 'Ambiguous user story acceptance criteria causing rework on permission roles',
        description: 'Requirements did not specify whether "Editor" role could invite new guests, leading developers to build contradictory logic.',
        severity: 'Major',
        impact: '3 days of developer rework during the final days of the sprint.',
        resolution: 'Introduced 3-Amigos (PM, Dev, QA) acceptance criteria review during backlog refinement.'
      },
      {
        title: 'Release blocker discovered 2 hours before scheduled client demo',
        description: 'Staging environment received untested database migration without QA smoke test.',
        severity: 'Critical',
        impact: 'High risk of demo failure and client friction.',
        resolution: 'Enforced staging deployment freeze 24 hours prior to milestone demos with mandatory QA sign-off.'
      }
    ],
    recommendations: [
      'Involve QA engineers in early product requirement drafting to identify edge cases upfront',
      'Adopt a transparent risk-based release checklist visible to both founders and developers',
      'Conduct blameless retrospectives after every major delivery cycle to refine team processes'
    ],
    tools: ['Jira', 'Linear', 'GitHub Projects', 'Notion', 'Slack / Discord Workspaces', 'Google Docs / Sheets'],
    platform: 'Cross-Functional Agile / Scrum Workflows',
    status: 'Completed & Documented',
    lessonsLearned: [
      'Technical delivery is 70% clear communication and 30% process: empathy between devs and QA is the ultimate speed multiplier',
      'Founders value risk transparency above all: knowing exactly what is tested gives confidence to ship'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    relatedArticlesSlugs: ['how-qa-and-product-teams-can-work-better-together', 'why-qa-should-start-before-dev-is-finished'],
    relatedCaseStudySlugs: ['web-application-qa', 'mobile-app-qa'],
    published: true,
    createdAt: '2025-11-20'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-qa-before-dev',
    slug: 'why-qa-should-start-before-dev-is-finished',
    title: 'Why QA Should Start Before Development Is Finished',
    excerpt: 'Treating QA as a final checkpoint creates bottlenecks. Discover how early QA involvement in requirements and design prevents expensive bugs before code is written.',
    category: 'Quality Engineering',
    author: 'Abu Naser Maaz',
    authorRole: 'Quality Engineering & Technical Delivery Specialist',
    publishedAt: '2025-11-15',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: `
### The Waterfall Hangover in Modern Sprints

In many startups and fast-moving engineering teams, sprints are nominally agile, but the testing workflow remains stubbornly waterfall. A product manager writes a user story, engineers develop it across ten days, and on the eleventh day, the ticket is tossed over the wall to QA with the expectation that it will be tested and approved within hours.

This traditional "QA at the end" pattern produces three inevitable outcomes:
1. **Developer context switching:** Engineers who have already moved onto the next feature are pulled back to fix bugs in code they wrote two weeks ago.
2. **Release panic:** Blockers are discovered hours before launch, leading to hasty, untested patches.
3. **Expensive architectural rework:** Fundamental logic flaws that could have been identified in a 10-minute spec review require rewriting hundreds of lines of code.

### Shifting Left: What Does Early QA Actually Look Like?

"Shift Left" is often used as an industry buzzword, but in practical day-to-day delivery, it means three concrete actions:

#### 1. Participating in Requirement Refinement (The 3 Amigos)
Before a ticket is assigned to a developer, QA reviews the acceptance criteria alongside product and engineering. We ask the uncomfortable questions:
- What happens if the user loses connectivity midway through this multi-step checkout?
- What is the expected behavior if two users edit this record simultaneously?
- How should the UI respond if the third-party payment provider returns a 504 timeout?

Catching ambiguity at the requirement stage costs zero lines of code.

#### 2. Writing Test Scenarios in Parallel with Code
While the engineer builds the feature, QA constructs the test matrix, test data, and edge-case scenarios. When the developer is ready for a first review, the test cases are already shared, allowing the developer to self-verify common pitfalls before even submitting a PR.

#### 3. Early Component & API Validation
Rather than waiting for the entire integrated UI to be finished, QA tests endpoints via Postman or staging API contracts as soon as backend routes are ready. This separates data issues from UI presentation issues.

### The Real Business Outcome

When QA is embedded early, the team ships faster with less friction. Releases stop feeling like a high-stress gamble and start feeling like a predictable, repeatable rhythm.
    `,
    tags: ['Quality Engineering', 'Agile', 'Software Testing', 'Best Practices'],
    published: true,
    seoTitle: 'Why QA Should Start Before Development Is Finished | Abu Naser Maaz',
    seoDescription: 'Discover why early QA involvement in requirements and design prevents expensive bugs and accelerates release velocity.',
    relatedCaseStudiesSlugs: ['web-application-qa', 'technical-project-delivery'],
    relatedArticlesSlugs: ['how-i-approach-risk-based-testing', 'how-qa-and-product-teams-can-work-better-together']
  },
  {
    id: 'art-risk-based-testing',
    slug: 'how-i-approach-risk-based-software-testing',
    title: 'How I Approach Risk-Based Software Testing',
    excerpt: 'Exhaustive testing is mathematically impossible. Here is a practical framework for prioritizing high-impact scenarios and making smart release decisions.',
    category: 'Software Testing',
    author: 'Abu Naser Maaz',
    authorRole: 'Quality Engineering & Technical Delivery Specialist',
    publishedAt: '2025-11-25',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    content: `
### The Myth of 100% Test Coverage

One of the first principles every experienced QA professional learns is that **exhaustive testing is impossible**. In any non-trivial application, the combination of user inputs, browser versions, operating system states, network speeds, and concurrent actions is effectively infinite.

If a QA engineer attempts to test everything with equal depth, two bad things happen:
1. Low-risk cosmetic items consume time that should have been spent on critical revenue flows.
2. The team misses deadlines without actually improving overall system reliability.

The solution is **Risk-Based Testing (RBT)**.

### The Risk-Impact Matrix

Risk-based testing evaluates every test scenario across two dimensions:

1. **Probability of Failure:** How likely is this area of code to break? (Is it newly written, complex, dependent on third-party APIs, or historically brittle?)
2. **Business Impact of Failure:** If this breaks in production, what is the consequence? (Does it block payments? Does it corrupt user data? Or is it a minor alignment issue on an internal settings page?)

| Impact \\ Probability | High Probability | Low Probability |
| :--- | :--- | :--- |
| **High Impact** | **Critical (P0):** Test deeply, automate, test across all device matrices | **High (P1):** Test happy path and key boundary conditions |
| **Low Impact** | **Medium (P2):** Test basic functionality during standard pass | **Low (P3):** Exploratory spot-check if time permits |

### Applying RBT in Practice

When evaluating a new release build, I structure testing into three focused tiers:

#### Tier 1: Smoke & Core Journeys (Must Pass 100%)
- User signup, login, password reset
- Core product value proposition (e.g., placing an order, generating an output, saving a project)
- Payment processing and data persistence

#### Tier 2: High-Traffic Secondary Flows
- Search, filtering, and pagination
- Account profile modifications and notification preferences
- Common edge cases (empty states, very long inputs, network recovery)

#### Tier 3: Edge-Case Exploratory Testing
- Unorthodox user journeys, rapid repeated button clicking, unsupported browser quirks
- Boundary stress testing under throttled CPU/RAM conditions

### Giving Founders Release Confidence

The goal of Risk-Based Testing is not to promise zero bugs; it is to provide founders and product managers with an honest, transparent assessment of risk so they can make informed release decisions.
    `,
    tags: ['Software Testing', 'Risk Management', 'QA Strategy', 'Quality Engineering'],
    published: true,
    seoTitle: 'How I Approach Risk-Based Software Testing | Abu Naser Maaz',
    seoDescription: 'A practical framework for prioritizing high-impact testing scenarios and making informed release decisions under tight deadlines.',
    relatedCaseStudiesSlugs: ['web-application-qa', 'mobile-app-qa'],
    relatedArticlesSlugs: ['5-common-software-quality-problems-startups-discover-too-late', 'why-qa-should-start-before-dev-is-finished']
  },
  {
    id: 'art-ai-testing',
    slug: 'how-to-test-ai-applications-beyond-traditional-functional-qa',
    title: 'How to Test AI Applications Beyond Traditional Functional QA',
    excerpt: 'Generative AI and LLM products introduce non-determinism, hallucinations, and safety edge cases. Here is how testing methodologies must adapt.',
    category: 'AI Testing',
    author: 'Abu Naser Maaz',
    authorRole: 'Quality Engineering & Technical Delivery Specialist',
    publishedAt: '2025-12-08',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    content: `
### The Non-Deterministic Challenge

Traditional software testing is fundamentally deterministic. When you send \`2 + 2\` to a calculator API, you expect \`4\`, every single time. A single unexpected response is classified as a clear defect.

In AI applications powered by Large Language Models (LLMs), however:
- The exact same prompt can yield different wording on successive calls.
- The model might succeed on a test case today and hallucinate a false claim tomorrow.
- Small variations in user phrasing can trigger safety filters or produce unexpected responses.

To test AI applications effectively, Quality Engineers must expand beyond traditional assertion testing into **heuristic evaluation, prompt boundary testing, and UX resilience verification**.

### 4 Pillars of AI Application Testing

#### 1. Structured Output & Schema Resilience
Many AI products rely on the model outputting valid JSON to power downstream UI charts or database operations. 
- Does the frontend survive when the model returns markdown codeblocks (\`\`\`json\`) instead of raw JSON?
- How does the system handle truncated responses caused by max token limits?
- Are trailing commas and unescaped quotes handled gracefully with fallback parsers?

#### 2. Prompt Edge Cases & Adversarial Inputs
Testing AI means acting as an adversarial user:
- What happens when a user enters 5,000 characters of gibberish?
- Does the prompt injection guardrail protect system instructions from being leaked?
- How does the model respond to queries at the extreme edge of its domain knowledge?

#### 3. Hallucination & Factuality Grounding
If the AI features retrieval (RAG) or citation capabilities:
- Does the generated answer match the retrieved context documents, or did the model invent plausible-sounding details?
- Are external links and reference citations valid?

#### 4. The Human Experience of AI Failure
Because AI models will occasionally fail, the quality of the product is largely determined by its **fallback user experience**:
- Does the UI inform the user clearly when an answer cannot be generated, or does it leave them on an infinite loading spinner?
- Can the user easily cancel a 15-second generation or retry with one click?
- Does the application preserve prompt inputs so the user doesn't have to retype everything after a network hiccup?

### The Future of AI Quality Engineering

As AI capabilities become foundational to digital products, QA engineers who understand both traditional functional rigor and modern AI evaluation will be indispensable to product teams.
    `,
    tags: ['AI Testing', 'LLM', 'Prompt Engineering', 'Quality Engineering', 'Emerging Tech'],
    published: true,
    seoTitle: 'How to Test AI Applications Beyond Traditional QA | Abu Naser Maaz',
    seoDescription: 'A comprehensive guide to evaluating generative AI systems, prompt edge cases, hallucination rates, and resilient fallback UI.',
    relatedCaseStudiesSlugs: ['ai-application-testing', 'web-application-qa'],
    relatedArticlesSlugs: ['why-qa-should-start-before-dev-is-finished', '5-common-software-quality-problems-startups-discover-too-late']
  },
  {
    id: 'art-startup-quality-traps',
    slug: '5-common-software-quality-problems-startups-discover-too-late',
    title: '5 Common Software Quality Problems Startups Discover Too Late',
    excerpt: 'From silent session timeouts to untested permission tiers, explore the five critical quality flaws that frequently derail early-stage product launches.',
    category: 'Product Development',
    author: 'Abu Naser Maaz',
    authorRole: 'Quality Engineering & Technical Delivery Specialist',
    publishedAt: '2025-12-18',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: `
### Move Fast and Break Things... Until Users Leave

Startups are driven by speed. In the rush to launch a Minimum Viable Product (MVP) or close a seed round, quality assurance is frequently deprioritized under the assumption that "we can fix bugs later."

However, there is a big difference between missing features and broken features. Users are often forgiving of a simple product, but they are ruthlessly unforgiving of software that loses their data, crashes their browser, or charges their card twice.

Here are the 5 most common quality pitfalls that startups discover only after real users start churning:

### 1. The "Happy Path Only" Trap
Developers naturally write code to fulfill the intended user journey. QA's job is to explore what happens when things go wrong:
- User submits a form, double-clicks the button, and switches tabs while on a slow 3G connection.
- A user pastes 10,000 characters into a field designed for 50.
- A user uploads an unsupported .HEIC image from an iPhone.

When edge cases aren't tested, systems crash silently in production.

### 2. Broken Multi-Role Permissions
Startups frequently build Admin, Member, and Guest roles, but only test with super-admin credentials during internal demos. In production, guests find they can access restricted billing pages, or members discover they cannot edit their own items because of missing backend authorization checks.

### 3. Asynchronous Race Conditions & Optimistic UI Bugs
To make apps feel fast, modern frontends update the screen before the backend confirms the save. But if the network request fails or takes 5 seconds to resolve, the UI can display phantom data that vanishes upon refresh, destroying user trust.

### 4. Ignoring Device & Browser Fragmentation
Testing on the founder's M3 MacBook Pro in Chrome does not represent real-world users running Safari on an iPhone 11 or Chrome on a mid-range Android phone. Responsive layout shifts, unsupported CSS features, and touch target overlap are rampant when testing is restricted to one machine.

### 5. No Structured Release Gating
When anyone can merge code to production at 6:00 PM on a Friday without a verified smoke test, outages are guaranteed. Having a simple, documented 30-minute release checklist prevents 90% of preventable launch emergencies.
    `,
    tags: ['Startups', 'Product Delivery', 'Quality Engineering', 'Defect Prevention'],
    published: true,
    seoTitle: '5 Common Software Quality Problems Startups Discover Too Late | Abu Naser Maaz',
    seoDescription: 'Explore the 5 critical quality mistakes early-stage product teams make and how to prevent them before launch.',
    relatedCaseStudiesSlugs: ['web-application-qa', 'mobile-app-qa', 'technical-project-delivery'],
    relatedArticlesSlugs: ['why-qa-should-start-before-dev-is-finished', 'how-i-approach-risk-based-testing']
  },
  {
    id: 'art-xr-testing',
    slug: 'testing-interactive-xr-experiences-what-traditional-qa-can-miss',
    title: 'Testing Interactive XR Experiences: What Traditional QA Can Miss',
    excerpt: 'Virtual and Augmented Reality require testing for human physiology, 6DoF tracking boundaries, spatial ergonomics, and framerate sickness triggers.',
    category: 'XR',
    author: 'Abu Naser Maaz',
    authorRole: 'Founder & CEO — Innovify XR | QA Specialist',
    publishedAt: '2026-01-10',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80',
    content: `
### When a Bug Causes Physical Nausea

In 2D web and mobile software, a dropped frame or an erratic UI button is a minor annoyance. In Virtual Reality (VR) and Extended Reality (XR), a dropped frame or mismatched camera rotation can trigger immediate physical nausea and vestibular disorientation.

This makes XR Quality Assurance fundamentally unique: **you are not just testing software logic, you are testing human physiological comfort.**

### Key Dimensions of Spatial Testing

#### 1. Frame Timing & Refresh Rate Stability
Standalone headsets like the Meta Quest require a continuous, locked 72Hz, 90Hz, or 120Hz refresh rate. 
- If a heavy particle effect or un-culled 3D mesh causes the framerate to dip below the target for even half a second, the user experiences jarring visual judder.
- Testing requires monitoring real-time GPU/CPU frame budgets using tools like the OVR Metrics Tool.

#### 2. Spatial UI Ergonomics & Distance
In 2D web design, you place buttons where they look balanced on a screen. In XR, you must respect the human body:
- **Vergence-Accommodation Conflict:** Placing text closer than 0.75m from the user's eyes causes severe eye strain.
- **Neck Strain & Reach Zones:** Interactive menus must reside within the primary 30-degree forward cone of vision and within natural arm reach without requiring extreme shoulder extension.

#### 3. 6DoF Tracking & Occlusion Limits
What happens when a user reaches behind their back to grab a virtual backpack, or puts their hands together, blocking the headset cameras from seeing the controllers?
- Does the physics engine launch the object across the room?
- Does the system recover smoothly when the controller re-enters the field of view?

#### 4. Boundary Guardian & Real-World Safety
XR applications must respect room-scale and stationary boundaries. The QA engineer must verify that recentering works in any orientation and that tutorials don't encourage players to blindly step into real-world walls.
    `,
    tags: ['XR', 'Virtual Reality', 'Game QA', 'Innovify XR', 'Emerging Tech'],
    published: true,
    seoTitle: 'Testing Interactive XR Experiences: What Traditional QA Misses | Abu Naser Maaz',
    seoDescription: 'Understand the unique challenges of testing VR and AR applications, from motion comfort to spatial ergonomics and 6DoF tracking.',
    relatedCaseStudiesSlugs: ['xr-testing', 'game-qa'],
    relatedArticlesSlugs: ['how-i-approach-risk-based-testing', 'why-qa-should-start-before-dev-is-finished']
  },
  {
    id: 'art-qa-product-collaboration',
    slug: 'how-qa-and-product-teams-can-work-better-together',
    title: 'How QA and Product Teams Can Work Better Together',
    excerpt: 'Transforming QA from an adversarial hurdle into an empowered product partner through transparent bug triage, shared metrics, and empathetic delivery.',
    category: 'Technical Delivery',
    author: 'Abu Naser Maaz',
    authorRole: 'Quality Engineering & Technical Delivery Specialist',
    publishedAt: '2026-01-22',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    content: `
### Breaking the "Developers vs QA" Mindset

In dysfunctional product organizations, the relationship between developers and QA engineers often feels adversarial. Developers feel that QA is deliberately trying to tear down their hard work or slow down their velocity; QA feels that developers are careless and rushing half-baked features into testing.

Both viewpoints are wrong. The goal of both developers and QA is identical: **to deliver a great product that users love and trust.**

### 4 Practical Habits for Seamless Collaboration

#### 1. The Art of the Perfect Defect Ticket
Nothing frustrates an engineer more than a bug report that reads: *"Search is broken."*

A high-quality QA ticket includes:
- **Exact environment details:** Browser version, OS, screen resolution, user role.
- **Precise step-by-step reproduction:** Exact inputs, clicks, and timing.
- **Expected vs Actual Behavior:** Clear contrast.
- **Evidence:** Clean screenshot or video recording, plus HAR logs and console stack traces.
- **Severity Tag:** Objective business impact classification.

When tickets are reproducible in under 60 seconds, engineers can diagnose and fix them without friction.

#### 2. Pair Testing on Complex Features
For high-risk features (such as migration to a new payment gateway), schedule a 30-minute "pair testing" session between the lead developer and the QA engineer. Walking through edge cases together builds mutual respect and resolves misunderstandings immediately.

#### 3. Joint Bug Triage Sessions
Rather than arguing over whether a bug is a "P1 Blocker" or "P2 Minor" in ticket comment threads, hold a weekly 15-minute triage with Product, Engineering, and QA. Product decides business priority, Engineering estimates fix complexity, and QA provides risk context.

#### 4. Celebrating Quality as a Shared Team Metric
Quality is not QA's responsibility alone; it is a shared engineering outcome. Celebrating low escaped defect counts and clean releases as a whole team creates a culture where everyone takes pride in craftsmanship.
    `,
    tags: ['Technical Delivery', 'Product Management', 'Engineering Culture', 'Agile'],
    published: true,
    seoTitle: 'How QA and Product Teams Can Work Better Together | Abu Naser Maaz',
    seoDescription: 'Practical techniques to improve communication, streamline bug triage, and align QA with product engineering goals.',
    relatedCaseStudiesSlugs: ['technical-project-delivery', 'web-application-qa'],
    relatedArticlesSlugs: ['why-qa-should-start-before-dev-is-finished', 'how-i-approach-risk-based-testing']
  }
];

export const INITIAL_VENTURES: Venture[] = [
  {
    id: 'innovify-xr',
    name: 'Innovify XR',
    role: 'Founder & CEO',
    tagline: 'Immersive Training, Simulation & Emerging Technology Solutions',
    description: 'Innovify XR focuses on building immersive training, simulation, interactive 3D experiences, AI-integrated workflows, and cutting-edge digital products for enterprise, education, and technical domains.',
    url: 'https://innovifyxr.com',
    badge: 'Flagship Venture',
    highlights: [
      'Interactive VR/XR training simulations for safety and procedural learning',
      'Spatial UI and 6DoF interactive product prototypes',
      'AI-integrated multi-modal digital experiences',
      'Cross-platform support for Meta Quest, WebXR, and PCVR'
    ],
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    focusAreas: ['Immersive Training', 'XR Simulations', 'Spatial Computing', 'AI Integration'],
    status: 'Active Venture'
  },
  {
    id: 'locafyro',
    name: 'Locafyro',
    role: 'Founder / Venture',
    tagline: 'Hyperlocal Digital Discovery & Community Commerce Platform',
    description: 'A modern digital venture designed to bridge neighborhood businesses, local commerce, and community discovery through intuitive, high-performance web and mobile technologies.',
    url: 'https://locafyro.com',
    badge: 'Emerging Venture',
    highlights: [
      'Hyperlocal merchant cataloging and real-time discovery',
      'Fast, mobile-first responsive architecture',
      'Streamlined local business listing and customer engagement flows',
      'Data-conscious location-based service integration'
    ],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    focusAreas: ['Local Commerce', 'Digital Discovery', 'Mobile-First Platform', 'Community Tech'],
    status: 'In Development'
  }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'med-1',
    name: 'abu-naser-maaz-professional.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Profile',
    altText: 'Abu Naser Maaz - Quality Engineering and Technical Delivery Specialist',
    size: '280 KB',
    uploadedAt: '2025-11-01'
  },
  {
    id: 'med-2',
    name: 'web-application-qa.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Studies',
    altText: 'Web application interface testing and responsive analytics validation',
    size: '420 KB',
    uploadedAt: '2025-11-10'
  },
  {
    id: 'med-3',
    name: 'mobile-app-testing.jpg',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Studies',
    altText: 'Mobile device fragmentation and application QA testing',
    size: '390 KB',
    uploadedAt: '2025-11-28'
  },
  {
    id: 'med-4',
    name: 'ai-application-testing.jpg',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Studies',
    altText: 'Generative AI prompt testing and non-deterministic output validation',
    size: '510 KB',
    uploadedAt: '2025-12-05'
  },
  {
    id: 'med-5',
    name: 'game-qa.jpg',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Studies',
    altText: 'Game QA interactive mechanics and physics boundary testing',
    size: '480 KB',
    uploadedAt: '2025-10-15'
  },
  {
    id: 'med-6',
    name: 'xr-testing.jpg',
    url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Studies',
    altText: 'VR headset spatial interaction and ergonomic testing',
    size: '620 KB',
    uploadedAt: '2025-10-28'
  },
  {
    id: 'med-7',
    name: 'innovify-xr-simulation.jpg',
    url: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80',
    category: 'XR',
    altText: 'Innovify XR interactive simulation and virtual training preview',
    size: '590 KB',
    uploadedAt: '2026-01-05'
  }
];

export const INITIAL_INQUIRIES: ContactSubmission[] = [
  {
    id: 'inq-1',
    name: 'Sarah Jenkins',
    email: 's.jenkins@vanguardtech.io',
    company: 'Vanguard Tech',
    role: 'VP of Product',
    projectType: 'Quality Engineering',
    message: 'We are preparing for a major V2 SaaS web platform release next month and need structured regression testing, API validation, and release gating support.',
    submittedAt: '2026-02-14 14:22',
    status: 'New'
  },
  {
    id: 'inq-2',
    name: 'Marcus Chen',
    email: 'marcus@hyperionai.co',
    company: 'Hyperion AI',
    role: 'Co-Founder & CTO',
    projectType: 'AI Testing',
    message: 'Looking for guidance on evaluating our LLM copilot response consistency, hallucination boundaries, and streaming fallback error handling.',
    submittedAt: '2026-02-10 09:45',
    status: 'Reviewed'
  }
];
