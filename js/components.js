/**
 * SynapseCS // Reusable Neo-Brutalist Component Library
 * Returns pure, accessible HTML strings adhering to exact DESIGN_SPEC tokens:
 * Yellow (#ffe17c), Dark (#171e19), Sage (#b7c6c2), White (#ffffff), Black (#000000)
 */

window.SynapseComponents = (function () {

  // 1. NEO-BRUTALIST BUTTON
  function NeoBrutalButton({
    text = 'Click Here',
    variant = 'yellow', // 'yellow' | 'dark' | 'sage' | 'white'
    icon = '',
    id = '',
    className = '',
    onClickAttr = '',
    extraAttrs = ''
  } = {}) {
    let bgClass = 'bg-[#ffe17c] text-[#171e19]';
    if (variant === 'dark') bgClass = 'bg-[#171e19] text-white';
    else if (variant === 'sage') bgClass = 'bg-[#b7c6c2] text-[#171e19]';
    else if (variant === 'white') bgClass = 'bg-white text-[#171e19]';

    const idAttr = id ? `id="${id}"` : '';
    const clickAttr = onClickAttr ? `onclick="${onClickAttr}"` : '';

    return `
      <button 
        ${idAttr} 
        ${clickAttr} 
        ${extraAttrs}
        class="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono font-bold text-xs uppercase tracking-wider border-2 border-black hard-shadow btn-press rounded-lg cursor-pointer select-none ${bgClass} ${className}"
      >
        ${icon ? `<span class="text-base">${icon}</span>` : ''}
        <span>${text}</span>
      </button>
    `;
  }

  // 2. BROWSER WINDOW MOCKUP
  function BrowserWindowMockup({
    title = 'synapse-visualizer.sh',
    content = '',
    headerBg = '#171e19',
    windowId = ''
  } = {}) {
    return `
      <div ${windowId ? `id="${windowId}"` : ''} class="w-full bg-[#171e19] border-2 border-black rounded-xl hard-shadow-lg overflow-hidden">
        <!-- Window Titlebar -->
        <div class="px-4 py-3 bg-[#0f1411] border-b-2 border-black flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black inline-block"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black inline-block"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black inline-block"></span>
          </div>
          <div class="text-[11px] font-mono font-semibold text-zinc-300 truncate max-w-[200px] sm:max-w-none">
            ${title}
          </div>
          <div class="w-12"></div>
        </div>
        <!-- Window Body -->
        <div class="p-4 sm:p-6 bg-[#171e19]">
          ${content}
        </div>
      </div>
    `;
  }

  // 3. TOPIC CARD
  function TopicCard({
    id,
    title,
    icon = '📦',
    description = '',
    questionCount = 0,
    completedCount = 0,
    onClick = ''
  }) {
    const isDone = questionCount > 0 && completedCount === questionCount;
    const pct = questionCount > 0 ? Math.round((completedCount / questionCount) * 100) : 0;

    return `
      <div 
        onclick="${onClick}"
        class="group p-5 bg-white border-2 border-black rounded-xl hard-shadow btn-press cursor-pointer flex flex-col justify-between transition-all"
      >
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 rounded-lg bg-[#b7c6c2] border-2 border-black flex items-center justify-center text-lg hard-shadow-sm">
              ${icon}
            </div>
            <span class="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded border border-black ${isDone ? 'bg-[#b7c6c2] text-[#171e19]' : 'bg-[#ffe17c] text-[#171e19]'}">
              ${completedCount}/${questionCount} Solved
            </span>
          </div>
          <h3 class="font-bold text-base text-[#171e19] mb-1.5 group-hover:text-black">
            ${title}
          </h3>
          <p class="text-xs text-zinc-600 leading-relaxed mb-4">
            ${description}
          </p>
        </div>

        <div>
          <!-- Progress Mini Bar -->
          <div class="w-full h-2 bg-zinc-200 border border-black rounded-full overflow-hidden mb-3">
            <div class="h-full bg-[#ffe17c] border-r border-black" style="width: ${pct}%"></div>
          </div>
          <div class="flex items-center justify-between text-[11px] font-mono font-bold text-[#171e19]">
            <span>Explore Topic</span>
            <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
          </div>
        </div>
      </div>
    `;
  }

  // 4. HOW IT WORKS STEP
  function HowItWorksStep({
    stepNumber = '01',
    title = 'Learn',
    description = '',
    borderColor = 'sage' // 'sage' | 'yellow' | 'white'
  }) {
    let borderCss = 'border-[#b7c6c2]';
    let badgeBg = 'bg-[#b7c6c2] text-[#171e19]';
    if (borderColor === 'yellow') {
      borderCss = 'border-[#ffe17c]';
      badgeBg = 'bg-[#ffe17c] text-[#171e19]';
    } else if (borderColor === 'white') {
      borderCss = 'border-white';
      badgeBg = 'bg-white text-[#171e19]';
    }

    return `
      <div class="p-6 bg-[#171e19] text-white border-2 ${borderCss} rounded-xl hard-shadow-md flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-mono font-bold px-2.5 py-1 rounded border border-black ${badgeBg}">
            ${stepNumber}
          </span>
          <span class="w-2.5 h-2.5 rounded-full ${badgeBg}"></span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2 text-white">
            ${title}
          </h3>
          <p class="text-xs text-zinc-300 leading-relaxed font-sans">
            ${description}
          </p>
        </div>
      </div>
    `;
  }

  // 5. DIFFICULTY CARD (Persona Card replacement)
  function DifficultyCard({
    level = 'BASIC',
    title = 'Basic & Easy',
    subtitle = 'Pointers, Arrays, Loops & Stacks',
    icon = '🌱',
    variant = 'sage', // 'sage' | 'yellow' | 'dark'
    onClick = ''
  }) {
    let bg = 'bg-[#b7c6c2] text-[#171e19]';
    let subtitleColor = 'text-zinc-800';
    if (variant === 'yellow') {
      bg = 'bg-[#ffe17c] text-[#171e19]';
      subtitleColor = 'text-zinc-800';
    } else if (variant === 'dark') {
      bg = 'bg-[#171e19] text-white';
      subtitleColor = 'text-zinc-300';
    }

    return `
      <div 
        onclick="${onClick}"
        class="p-6 border-2 border-black rounded-xl hard-shadow btn-press cursor-pointer flex flex-col justify-between ${bg}"
      >
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-2xl">${icon}</span>
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-black bg-white text-[#171e19]">
              ${level}
            </span>
          </div>
          <h3 class="font-bold text-lg mb-1">
            ${title}
          </h3>
          <p class="text-xs font-medium ${subtitleColor} leading-relaxed">
            ${subtitle}
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-black/30 flex items-center justify-between text-xs font-mono font-bold">
          <span>Filter Questions</span>
          <span>&rarr;</span>
        </div>
      </div>
    `;
  }

  // 6. PROGRESS SUMMARY CARD (Testimonial replacement)
  function ProgressCard({
    totalSolved = 0,
    totalQuestions = 62,
    streak = 1,
    topicsCompleted = 0
  }) {
    const pct = totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0;

    return `
      <div class="p-6 bg-white border-2 border-black rounded-xl hard-shadow-md">
        <div class="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
          <div>
            <span class="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Learner Dashboard</span>
            <h3 class="font-bold text-xl text-[#171e19]">Your Progress</h3>
          </div>
          <span class="px-3 py-1 bg-[#ffe17c] text-[#171e19] border border-black rounded-md text-xs font-mono font-bold">
            ${pct}% Complete
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
          <div class="p-3 bg-[#fbfbf8] border-2 border-black rounded-lg">
            <div class="text-2xl font-bold font-mono text-[#171e19]">${totalSolved}</div>
            <div class="text-[10px] font-mono text-zinc-600 uppercase font-semibold">Solved</div>
          </div>
          <div class="p-3 bg-[#fbfbf8] border-2 border-black rounded-lg">
            <div class="text-2xl font-bold font-mono text-[#171e19]">${totalQuestions}</div>
            <div class="text-[10px] font-mono text-zinc-600 uppercase font-semibold">Total</div>
          </div>
          <div class="p-3 bg-[#fbfbf8] border-2 border-black rounded-lg">
            <div class="text-2xl font-bold font-mono text-[#171e19]">${streak} <span class="text-sm">🔥</span></div>
            <div class="text-[10px] font-mono text-zinc-600 uppercase font-semibold">Day Streak</div>
          </div>
          <div class="p-3 bg-[#fbfbf8] border-2 border-black rounded-lg">
            <div class="text-2xl font-bold font-mono text-[#171e19]">${topicsCompleted}</div>
            <div class="text-[10px] font-mono text-zinc-600 uppercase font-semibold">Mastered</div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="w-full h-3 bg-zinc-200 border-2 border-black rounded-full overflow-hidden">
          <div class="h-full bg-[#ffe17c] border-r-2 border-black transition-all duration-300" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  }

  // 7. FINAL CTA COMPONENT
  function FinalCTA({ onStartLearning = "window.SynapseApp.switchView('topics')" }) {
    return `
      <section class="py-16 px-4 bg-[#ffe17c] border-y-2 border-black dot-pattern">
        <div class="max-w-4xl mx-auto p-8 sm:p-12 bg-white border-2 border-black rounded-2xl hard-shadow-xl text-center space-y-6">
          <span class="inline-block px-3 py-1 bg-[#171e19] text-white text-[11px] font-mono font-bold uppercase rounded border border-black">
            Zero Install • Works Offline
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#171e19] tracking-tight">
            Ready to Master Data Structures &amp; Algorithms?
          </h2>
          <p class="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Stop memorizing LeetCode problems blindly. Start seeing pointer movements, memory offsets, and stack frames with interactive step-by-step physical models.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            ${NeoBrutalButton({
              text: 'Start Learning Now',
              variant: 'yellow',
              icon: '🚀',
              onClickAttr: onStartLearning
            })}
            ${NeoBrutalButton({
              text: 'Browse All Topics',
              variant: 'white',
              icon: '📚',
              onClickAttr: onStartLearning
            })}
          </div>
        </div>
      </section>
    `;
  }

  // 8. ACCESSIBLE NAVBAR WITH LANGUAGE SELECTION
  function Navbar({ activeView = 'home', currentLang = 'python' } = {}) {
    const langMeta = (window.DSA_LANG_META && window.DSA_LANG_META[currentLang]) || { name: 'Python', color: '#3776ab' };

    return `
      <header class="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <!-- Logo Brand -->
          <div class="flex items-center gap-2.5 cursor-pointer" onclick="location.hash = '#/'">
            <div class="w-9 h-9 bg-[#ffe17c] border-2 border-black rounded-lg flex items-center justify-center font-mono font-black text-lg hard-shadow-sm">
              S
            </div>
            <div class="flex flex-col">
              <span class="font-extrabold text-base tracking-tight text-[#171e19]">SynapseCS</span>
              <span class="text-[9px] font-mono font-bold uppercase text-zinc-500 tracking-wider -mt-1">Interactive DSA Lab</span>
            </div>
          </div>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-1">
            <button onclick="location.hash = '#/'" class="px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded border-2 ${activeView === 'home' ? 'bg-[#ffe17c] border-black hard-shadow-sm' : 'border-transparent hover:border-black hover:bg-zinc-100'}">
              Home
            </button>
            <button onclick="location.hash = '#/languages'" class="px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded border-2 ${activeView === 'languages' ? 'bg-[#ffe17c] border-black hard-shadow-sm' : 'border-transparent hover:border-black hover:bg-zinc-100'}">
              Languages
            </button>
            <button onclick="location.hash = '#/learn/' + (window.SynapseApp ? window.SynapseApp.currentLang : 'python')" class="px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded border-2 ${activeView === 'topics' ? 'bg-[#ffe17c] border-black hard-shadow-sm' : 'border-transparent hover:border-black hover:bg-zinc-100'}">
              Curriculum
            </button>
            <button onclick="location.hash = '#/progress'" class="px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded border-2 ${activeView === 'progress' ? 'bg-[#ffe17c] border-black hard-shadow-sm' : 'border-transparent hover:border-black hover:bg-zinc-100'}">
              Progress
            </button>
          </nav>

          <!-- Language Badge & Actions -->
          <div class="flex items-center gap-3">
            <!-- Active Language Button -->
            <button 
              onclick="location.hash = '#/languages'" 
              title="Change active programming language"
              class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-black uppercase rounded-lg border-2 border-black bg-[#fbfbf8] hover:bg-[#ffe17c] hard-shadow-sm btn-press transition-colors cursor-pointer"
            >
              <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${langMeta.color};"></span>
              <span>${langMeta.name}</span>
              <span class="text-[10px] text-zinc-500 font-normal">Change ⇄</span>
            </button>

            <!-- Desktop Start Learning CTA -->
            <div class="hidden sm:block">
              ${NeoBrutalButton({
                text: 'Start Learning',
                variant: 'yellow',
                onClickAttr: "window.SynapseApp.startLearning()"
              })}
            </div>
            
            <!-- Mobile Menu Button -->
            <button 
              id="mobile-nav-toggle-btn"
              onclick="window.SynapseApp.toggleMobileNav()"
              class="md:hidden p-2 rounded-lg border-2 border-black bg-white hard-shadow-sm btn-press flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-nav-drawer" class="hidden md:hidden border-t-2 border-black bg-white p-4 space-y-2">
          <button onclick="location.hash = '#/'; window.SynapseApp.toggleMobileNav();" class="w-full text-left px-4 py-2 font-mono font-bold text-xs uppercase border-2 border-black rounded-lg ${activeView === 'home' ? 'bg-[#ffe17c]' : 'bg-zinc-100'}">
            Home
          </button>
          <button onclick="location.hash = '#/languages'; window.SynapseApp.toggleMobileNav();" class="w-full text-left px-4 py-2 font-mono font-bold text-xs uppercase border-2 border-black rounded-lg ${activeView === 'languages' ? 'bg-[#ffe17c]' : 'bg-zinc-100'}">
            Languages (${langMeta.name})
          </button>
          <button onclick="location.hash = '#/learn/' + window.SynapseApp.currentLang; window.SynapseApp.toggleMobileNav();" class="w-full text-left px-4 py-2 font-mono font-bold text-xs uppercase border-2 border-black rounded-lg ${activeView === 'topics' ? 'bg-[#ffe17c]' : 'bg-zinc-100'}">
            Curriculum
          </button>
          <button onclick="location.hash = '#/progress'; window.SynapseApp.toggleMobileNav();" class="w-full text-left px-4 py-2 font-mono font-bold text-xs uppercase border-2 border-black rounded-lg ${activeView === 'progress' ? 'bg-[#ffe17c]' : 'bg-zinc-100'}">
            My Progress
          </button>
          <div class="pt-2">
            ${NeoBrutalButton({
              text: 'Start Learning',
              variant: 'yellow',
              className: 'w-full',
              onClickAttr: "window.SynapseApp.startLearning(); window.SynapseApp.toggleMobileNav();"
            })}
          </div>
        </div>
      </header>
    `;
  }

  // 9. LANGUAGE CARD (Neo-Brutalist Spec)
  function LanguageCard({ lang, questionCount = 0, completedCount = 0 }) {
    const isAvail = questionCount > 0;
    const isDone = isAvail && completedCount === questionCount;

    return `
      <div 
        ${isAvail ? `onclick="window.SynapseApp.selectLanguage('${lang.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.SynapseApp.selectLanguage('${lang.id}');}"` : 'tabindex="-1" aria-disabled="true"'}
        class="group p-6 bg-white border-2 border-black rounded-xl hard-shadow flex flex-col justify-between transition-all select-none h-full focus:outline-none focus:ring-4 focus:ring-[#ffe17c] md:last:col-span-2 md:last:max-w-md md:last:mx-auto md:last:w-full lg:last:col-start-2 lg:last:col-span-1 lg:last:max-w-none ${
          isAvail ? 'cursor-pointer btn-press hover:bg-zinc-50' : 'opacity-60 cursor-not-allowed bg-zinc-100 border-dashed'
        }"
      >
        <div>
          <!-- Card Header -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center font-mono font-black text-lg hard-shadow-sm text-white" style="background-color: ${lang.color};">
                ${lang.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 class="font-black text-xl text-[#171e19] group-hover:text-black">
                  ${lang.name}
                </h3>
                <span class="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                  ${lang.extension} file format
                </span>
              </div>
            </div>

            <span class="px-2.5 py-1 text-[10px] font-mono font-black uppercase rounded border border-black ${
              !isAvail ? 'bg-zinc-200 text-zinc-600' : isDone ? 'bg-[#b7c6c2] text-[#171e19]' : 'bg-[#ffe17c] text-[#171e19]'
            }">
              ${!isAvail ? 'Coming Soon' : `${completedCount}/${questionCount} Solved`}
            </span>
          </div>

          <!-- Description -->
          <p class="text-xs text-zinc-700 leading-relaxed font-sans mb-6">
            ${lang.description}
          </p>
        </div>

        <!-- Footer Action -->
        <div class="pt-4 border-t-2 border-black flex items-center justify-between">
          <span class="text-xs font-mono font-bold ${isAvail ? 'text-[#171e19]' : 'text-zinc-500'}">
            ${isAvail ? `${questionCount} questions available` : 'Coming soon'}
          </span>
          <span class="font-mono font-black text-xs uppercase px-3 py-1.5 rounded border border-black ${
            isAvail ? 'bg-[#ffe17c] text-[#171e19]' : 'bg-zinc-200 text-zinc-500'
          }">
            ${isAvail ? 'Select Language →' : 'Locked'}
          </span>
        </div>
      </div>
    `;
  }

  // 10. HELLO WORLD MINI LESSON
  function HelloWorldMiniLesson({ langMeta }) {
    if (!langMeta || !langMeta.helloWorld) return '';
    return `
      <div class="p-6 bg-white border-2 border-black rounded-xl hard-shadow-md mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b-2 border-black">
          <div class="flex items-center gap-3">
            <span class="w-3.5 h-3.5 rounded-full inline-block" style="background-color: ${langMeta.color};"></span>
            <h2 class="text-lg font-black text-[#171e19]">Welcome to ${langMeta.name} Learning Track</h2>
          </div>
          <span class="px-2.5 py-0.5 bg-[#ffe17c] border border-black rounded text-[10px] font-mono font-bold uppercase">
            Quickstart Mini-Lesson
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span class="text-[10px] font-mono text-zinc-500 font-bold uppercase block mb-1">Standard Entry Point (${langMeta.extension}):</span>
            <pre class="p-3 bg-[#171e19] text-[#ffe17c] rounded-lg border-2 border-black font-mono text-xs overflow-x-auto"><code>${langMeta.helloWorld.code}</code></pre>
          </div>
          <div>
            <span class="text-[10px] font-mono text-zinc-500 font-bold uppercase block mb-1">How To Run Locally:</span>
            <pre class="p-3 bg-zinc-100 text-[#171e19] rounded-lg border-2 border-black font-mono text-xs overflow-x-auto"><code>$ ${langMeta.helloWorld.howToRun}</code></pre>
            <p class="text-[11px] text-zinc-600 mt-2 font-sans">
              All question solutions in this track will render exclusively in ${langMeta.name} syntax with matching memory pointers and step explanations.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // 11. NOT FOUND 404 VIEW
  function NotFoundView() {
    return `
      <div class="max-w-2xl mx-auto py-16 px-4 text-center space-y-6">
        <div class="inline-block px-3 py-1 bg-[#ff5f56] text-white border-2 border-black rounded-lg font-mono font-black text-sm uppercase hard-shadow-sm">
          404 // ROUTE NOT FOUND
        </div>
        <h1 class="text-4xl sm:text-5xl font-black text-[#171e19] tracking-tight">
          Lost in Heap Memory?
        </h1>
        <p class="text-sm text-zinc-600 font-sans leading-relaxed">
          The requested URL does not match any registered language, topic, or question in SynapseCS.
        </p>
        <div class="pt-4 flex items-center justify-center gap-4">
          <button onclick="location.hash = '#/languages'" class="px-6 py-3 font-mono font-bold text-xs uppercase bg-[#ffe17c] text-[#171e19] border-2 border-black hard-shadow btn-press rounded-lg">
            ← Browse Languages
          </button>
          <button onclick="location.hash = '#/'" class="px-6 py-3 font-mono font-bold text-xs uppercase bg-white text-[#171e19] border-2 border-black hard-shadow btn-press rounded-lg">
            Return Home
          </button>
        </div>
      </div>
    `;
  }

  // 9. FOOTER
  function Footer() {
    return `
      <footer class="bg-[#171e19] text-white border-t-2 border-black pt-12 pb-8 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-zinc-800">
          
          <!-- Col 1: Brand & Bio -->
          <div class="space-y-3">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-[#ffe17c] text-[#171e19] border-2 border-black rounded-lg flex items-center justify-center font-mono font-black text-base hard-shadow-sm">
                S
              </div>
              <span class="font-extrabold text-lg text-white">SynapseCS</span>
            </div>
            <p class="text-xs text-zinc-300 leading-relaxed max-w-sm">
              An open-source interactive computer science learning platform teaching Data Structures &amp; Algorithms through physical memory simulation and multi-language synchronization.
            </p>
          </div>

          <!-- Col 2: Navigation -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#ffe17c] mb-3">Core Topics</h4>
            <ul class="space-y-2 text-xs font-mono text-zinc-300">
              <li><a href="#" onclick="window.SynapseApp.selectTopic('linked-list'); return false;" class="hover:text-[#ffe17c] transition-colors">Linked Lists</a></li>
              <li><a href="#" onclick="window.SynapseApp.selectTopic('stack'); return false;" class="hover:text-[#ffe17c] transition-colors">Stacks</a></li>
              <li><a href="#" onclick="window.SynapseApp.selectTopic('queue'); return false;" class="hover:text-[#ffe17c] transition-colors">Queues &amp; Deques</a></li>
              <li><a href="#" onclick="window.SynapseApp.selectTopic('hashing'); return false;" class="hover:text-[#ffe17c] transition-colors">Hash Tables</a></li>
              <li><a href="#" onclick="window.SynapseApp.selectTopic('trees'); return false;" class="hover:text-[#ffe17c] transition-colors">Binary Trees &amp; BST</a></li>
            </ul>
          </div>

          <!-- Col 3: Resources & Repository -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#ffe17c] mb-3">Project &amp; Source</h4>
            <ul class="space-y-2 text-xs font-mono text-zinc-300">
              <li><a href="https://github.com/Samarth7887/Learning" target="_blank" class="hover:text-[#ffe17c] transition-colors flex items-center gap-1.5">GitHub Repository &rarr;</a></li>
              <li><a href="TESTS.md" target="_blank" class="hover:text-[#ffe17c] transition-colors">Test Verification (TESTS.md)</a></li>
              <li><a href="AUDIT.md" target="_blank" class="hover:text-[#ffe17c] transition-colors">Architecture Audit (AUDIT.md)</a></li>
              <li><a href="README.md" target="_blank" class="hover:text-[#ffe17c] transition-colors">Documentation (README.md)</a></li>
            </ul>
          </div>

        </div>

        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <p>&copy; 2026 SynapseCS. Open-source educational tool under MIT License.</p>
          <div class="flex items-center gap-4">
            <span class="text-[10px] text-zinc-500 font-mono">Zero Build • Standalone file://</span>
          </div>
        </div>
      </footer>
    `;
  }

  return {
    NeoBrutalButton,
    BrowserWindowMockup,
    TopicCard,
    HowItWorksStep,
    DifficultyCard,
    ProgressCard,
    FinalCTA,
    Navbar,
    LanguageCard,
    HelloWorldMiniLesson,
    NotFoundView,
    Footer
  };

})();
