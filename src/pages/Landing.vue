<template>
  <div class="min-h-screen bg-gradient-to-b from-background to-gray-50 dark:from-gray-950 dark:to-black">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-indigo-600 rounded-lg"></div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">Zippy</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">Features</a>
            <a href="#benefits" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">Benefits</a>
            <a href="#technology" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">Technology</a>
            <router-link to="/signin" class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center scroll-animate opacity-0 translate-y-10">
          <div class="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <span class="text-sm font-medium text-primary">AI-Powered CRM Platform</span>
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Zero-Click CRM
            <span class="block text-primary mt-2">That Works For You</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            Eliminate manual data entry forever. Zippy automatically ingests, analyzes, and provides intelligent insights from all your customer interactions across email, Slack, WhatsApp, and more.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link to="/signin" class="px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition">
              Start Free Trial
            </router-link>
            <a href="#features" class="px-8 py-4 text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-lg transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center scroll-animate opacity-0 translate-y-10">
            <div class="text-4xl font-bold text-primary mb-2">90%+</div>
            <div class="text-gray-600 dark:text-gray-400">Reduction in data entry time</div>
          </div>
          <div class="text-center scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="text-4xl font-bold text-primary mb-2">Real-time</div>
            <div class="text-gray-600 dark:text-gray-400">AI-powered analysis</div>
          </div>
          <div class="text-center scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="text-4xl font-bold text-primary mb-2">360°</div>
            <div class="text-gray-600 dark:text-gray-400">Customer view</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Problem with Traditional CRMs
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sales teams waste countless hours on manual data entry and struggle to maintain complete customer context
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Manual Data Entry</h3>
            <p class="text-gray-600 dark:text-gray-400">Time-consuming and error-prone manual updates reduce productivity</p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fragmented Data</h3>
            <p class="text-gray-600 dark:text-gray-400">Interactions scattered across email, Slack, calls, and more</p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Missed Opportunities</h3>
            <p class="text-gray-600 dark:text-gray-400">Critical signals and opportunities lost in the noise</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Intelligent Features That Work Automatically
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Zippy uses advanced AI to automate your entire customer interaction lifecycle
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multi-Channel Ingestion</h3>
            <p class="text-gray-600 dark:text-gray-400">Automatically captures interactions from email, Slack, WhatsApp, video, and audio</p>
          </div>
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Analysis</h3>
            <p class="text-gray-600 dark:text-gray-400">Google Gemini AI extracts requirements, sentiment, budgets, and KPIs automatically</p>
          </div>
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Intelligent Chat Assistant</h3>
            <p class="text-gray-600 dark:text-gray-400">Ask questions in natural language and get contextual, cited answers</p>
          </div>
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proactive Alerts</h3>
            <p class="text-gray-600 dark:text-gray-400">Automatic alerts for urgent issues, sentiment changes, and opportunities</p>
          </div>
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Semantic Search</h3>
            <p class="text-gray-600 dark:text-gray-400">Find information using natural language, not just keywords</p>
          </div>
          <div class="group p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Insights & Analytics</h3>
            <p class="text-gray-600 dark:text-gray-400">Trend analysis, sentiment tracking, and actionable insights</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real Results for Your Team
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 scroll-animate opacity-0 translate-y-10">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eliminate Manual Work</h3>
                <p class="text-gray-600 dark:text-gray-400">Zero-click ingestion reduces data entry time by 90%+ so your team can focus on selling</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Never Miss an Opportunity</h3>
                <p class="text-gray-600 dark:text-gray-400">AI automatically identifies urgent issues, sentiment changes, and business opportunities</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Complete Customer Context</h3>
                <p class="text-gray-600 dark:text-gray-400">360° view with all interactions, history, and insights in one place</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data-Driven Decisions</h3>
                <p class="text-gray-600 dark:text-gray-400">Trend analysis and aggregated insights support strategic planning</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-primary/10 to-indigo-500/10 dark:from-primary/20 dark:to-indigo-500/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <div class="space-y-6">
              <div class="bg-white dark:bg-black rounded-xl p-6 shadow-lg">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Time Saved</span>
                  <span class="text-2xl font-bold text-primary">90%+</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full bg-primary w-[90%]"></div>
                </div>
              </div>
              <div class="bg-white dark:bg-black rounded-xl p-6 shadow-lg">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Data Completeness</span>
                  <span class="text-2xl font-bold text-primary">100%</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full bg-primary w-full"></div>
                </div>
              </div>
              <div class="bg-white dark:bg-black rounded-xl p-6 shadow-lg">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Response Speed</span>
                  <span class="text-2xl font-bold text-primary">Real-time</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full bg-primary w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section id="technology" class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built with Modern Technology
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade architecture powered by cutting-edge AI and scalable infrastructure
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI & Intelligence</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Google Gemini AI (gemini-2.0-flash-001)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Vector embeddings for semantic search</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Web search retrieval for real-time context</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Automatic transcription for audio/video</span>
              </li>
            </ul>
          </div>
          <div class="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Infrastructure</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Vue.js 3 with TypeScript</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Supabase for database and storage</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">RESTful API with OpenAPI docs</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Enterprise-scale security with RLS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Zippy Works
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From data ingestion to actionable insights in three simple steps
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="relative scroll-animate opacity-0 translate-y-10">
            <div class="text-center">
              <div class="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Connect & Ingest</h3>
              <p class="text-gray-600 dark:text-gray-400">Connect your communication channels. Zippy automatically ingests every interaction—emails, Slack, WhatsApp, calls, and more.</p>
            </div>
            <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
          <div class="relative scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="text-center">
              <div class="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Analysis</h3>
              <p class="text-gray-600 dark:text-gray-400">Google Gemini AI extracts requirements, sentiment, budgets, timelines, and KPIs from every conversation automatically.</p>
            </div>
            <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
          <div class="text-center scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Insights</h3>
            <p class="text-gray-600 dark:text-gray-400">Ask questions, get alerts, view trends, and make data-driven decisions—all without manual data entry.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Sales Teams
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how teams are transforming their workflow with Zippy
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">"Zippy cut our data entry time by 95%. Our team can finally focus on what matters—building relationships and closing deals."</p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">SJ</div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Sales Director, TechCorp</div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">"The AI-powered alerts have saved us multiple times. We never miss urgent client needs or opportunities anymore."</p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">MC</div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Michael Chen</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">VP Sales, GrowthLabs</div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6">"Having all customer context in one place changed everything. Our onboarding for new reps is now 10x faster."</p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">EP</div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Emily Parker</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Head of Sales, InnovateCo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">How does zero-click ingestion work?</h3>
            <p class="text-gray-600 dark:text-gray-400">Zippy connects to your communication channels (email, Slack, WhatsApp, etc.) and automatically captures every customer interaction. No manual data entry required—everything is ingested and analyzed in real-time.</p>
          </div>
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:100ms;">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Is my data secure?</h3>
            <p class="text-gray-600 dark:text-gray-400">Yes. We use enterprise-grade security with Row Level Security (RLS), encrypted storage, and comply with industry standards. Your data is always protected and never shared with third parties.</p>
          </div>
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">What channels does Zippy support?</h3>
            <p class="text-gray-600 dark:text-gray-400">Zippy supports email, Slack, WhatsApp, phone calls, video recordings, and more. We're constantly adding new channels based on customer feedback.</p>
          </div>
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:300ms;">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">How accurate is the AI analysis?</h3>
            <p class="text-gray-600 dark:text-gray-400">Zippy uses Google Gemini AI with advanced prompting techniques to ensure high accuracy. The AI continuously learns and improves, and you can always review and adjust any extracted information.</p>
          </div>
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10" style="transition-delay:400ms;">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I try Zippy before committing?</h3>
            <p class="text-gray-600 dark:text-gray-400">Absolutely! We offer a free trial so you can experience the power of zero-click CRM firsthand. No credit card required to get started.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div class="max-w-4xl mx-auto">
        <div class="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-indigo-600 rounded-3xl p-12 text-center scroll-animate opacity-0 translate-y-10">
          <div class="absolute inset-0 bg-black/10 dark:bg-white/5"></div>
          <div class="relative">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your CRM?
            </h2>
            <p class="text-xl text-white/90 mb-8">
              Join forward-thinking teams using AI to automate customer relationship management
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <router-link to="/signin" class="px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Free Trial
              </router-link>
              <a href="mailto:contact@zippy.app" class="px-8 py-4 text-base font-semibold text-white border-2 border-white hover:bg-white/10 rounded-lg transition-all hover:scale-105">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-primary to-indigo-600 rounded-lg"></div>
              <span class="text-xl font-bold text-gray-900 dark:text-white">Zippy</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Zero-Click CRM powered by AI</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text:white mb-4">Product</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#features" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Features</a></li>
              <li><a href="#benefits" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Benefits</a></li>
              <li><a href="#technology" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Technology</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">About</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Docs</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">API</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">© {{ new Date().getFullYear() }} Zippy. All rights reserved.</p>
          <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" class="hover:text-primary transition">Privacy</a>
            <a href="#" class="hover:text-primary transition">Terms</a>
            <a href="#" class="hover:text-primary transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// Simple IntersectionObserver to add fade-in animation on scroll
let observer: IntersectionObserver | null = null

onMounted(() => {
  const options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        el.classList.add('animate-fade-in')
        el.classList.remove('opacity-0', 'translate-y-10')
        observer?.unobserve(el)
      }
    })
  }, options)

  document.querySelectorAll('.scroll-animate').forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
