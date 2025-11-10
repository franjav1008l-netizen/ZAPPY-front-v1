<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
    <!-- Clean Background with Subtle Gradient -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20"></div>
      <div class="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-purple-50/30 to-transparent dark:from-purple-950/10"></div>
    </div>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
              <span class="text-xl font-bold text-white">Z</span>
            </div>
            <span class="text-2xl font-bold text-gray-900 dark:text-white">Zippy</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Features</a>
            <a href="#pricing" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Pricing</a>
            <a href="#demo" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Demo</a>
            <a href="#calculator" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">ROI Calculator</a>
            <router-link to="/signin" class="btn-primary-clean">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center relative z-10 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 dark:bg-brand-500/15 rounded-full mb-8 border border-brand-100 dark:border-brand-500/30">
            <div class="w-2 h-2 bg-brand-500 rounded-full"></div>
            <span class="text-sm font-semibold text-brand-600 dark:text-brand-400">AI-Powered Zero-Click CRM</span>
          </div>
          
          <h1 class="fade-in-on-scroll mb-6 text-gray-900 dark:text-white">
            Drive growth with AI<br/>powered solutions
          </h1>
          
          <p class="text-body-lg fade-in-on-scroll text-gray-600 dark:text-gray-400 mb-10">
            Grow your business fast using our curated tools.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <router-link to="/signin" class="btn-primary-clean text-base">
              Get 14 Days Free Trial
            </router-link>
            <a href="#demo" class="btn-secondary-clean text-base">
              Book A Demo
            </a>
          </div>

          <!-- Floating Product Cards -->
          <div class="relative mt-20">
            <div class="flex justify-center items-center gap-6 flex-wrap">
              <!-- Card 1: Event Card -->
              <div class="clean-card p-6 w-80 animate-float" style="animation-delay: 0s;">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Upcoming event</div>
                      <div class="text-sm font-semibold text-gray-900 dark:text-white">4 Members</div>
                    </div>
                  </div>
                  <div class="text-xs text-gray-500">16:00 - 16:30</div>
                </div>
                <button class="w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  Invite members
                </button>
                <div class="mt-4 space-y-2">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Cameron Williamson</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Savannah Nguyen</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Ronald Richards</span>
                  </div>
                </div>
              </div>

              <!-- Card 2: Statistics Card -->
              <div class="clean-card p-6 w-80 bg-gray-900 dark:bg-gray-800 animate-float" style="animation-delay: 1s;">
                <div class="text-white mb-4">
                  <div class="text-sm mb-4">General statistics</div>
                  <div class="text-sm opacity-60 mb-1">of Project tasks.</div>
                </div>
                <div class="flex items-end gap-8 mb-6">
                  <div>
                    <div class="text-5xl font-bold text-white mb-1">37</div>
                    <div class="text-sm text-white/60">Closed tasks</div>
                  </div>
                  <div>
                    <div class="text-5xl font-bold text-white mb-1">73</div>
                    <div class="text-sm text-white/60">Open tasks</div>
                  </div>
                </div>
                <div class="space-y-2 mb-4">
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-2 bg-white/20 rounded-full">
                      <div class="w-1/3 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-2 bg-white/20 rounded-full">
                      <div class="w-2/3 h-2 bg-brand-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="flex-1 py-2 bg-white text-gray-900 rounded-lg text-xs font-semibold">1 day</button>
                  <button class="flex-1 py-2 bg-white/10 text-white rounded-lg text-xs font-semibold">Week</button>
                  <button class="flex-1 py-2 bg-white/10 text-white rounded-lg text-xs font-semibold">Month</button>
                  <button class="flex-1 py-2 bg-white/10 text-white rounded-lg text-xs font-semibold">Year</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Trusted by thousands of business worldwide</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-12 opacity-60">
          <svg class="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
            <rect x="10" y="5" width="100" height="20" rx="4" class="text-gray-700 dark:text-gray-400"/>
            <text x="60" y="20" font-size="12" font-weight="bold" text-anchor="middle" class="fill-white dark:fill-gray-900">TechCorp</text>
          </svg>
          <svg class="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
            <circle cx="20" cy="15" r="10" class="text-gray-700 dark:text-gray-400"/>
            <text x="40" y="20" font-size="12" font-weight="bold" class="fill-gray-700 dark:fill-gray-400">InnovateCo</text>
          </svg>
          <svg class="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
            <rect x="5" y="10" width="15" height="15" class="text-gray-700 dark:text-gray-400"/>
            <text x="30" y="22" font-size="12" font-weight="bold" class="fill-gray-700 dark:fill-gray-400">GrowthLabs</text>
          </svg>
          <svg class="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
            <path d="M15,5 L25,15 L15,25 Z" class="text-gray-700 dark:text-gray-400"/>
            <text x="35" y="20" font-size="12" font-weight="bold" class="fill-gray-700 dark:fill-gray-400">ScaleTech</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center stagger-item">
            <div class="text-5xl font-bold text-brand-500 mb-3">90%+</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Time Saved</div>
            <div class="text-small text-gray-600 dark:text-gray-400">Reduction in manual data entry</div>
          </div>
          <div class="text-center stagger-item">
            <div class="text-5xl font-bold text-brand-500 mb-3">Real-time</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Analysis</div>
            <div class="text-small text-gray-600 dark:text-gray-400">Instant insights powered by AI</div>
          </div>
          <div class="text-center stagger-item">
            <div class="text-5xl font-bold text-brand-500 mb-3">360°</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Complete View</div>
            <div class="text-small text-gray-600 dark:text-gray-400">Unified customer insights</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems Section -->
    <section id="features" class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 slide-up-on-scroll">
          <div class="inline-block px-4 py-2 bg-white dark:bg-gray-800 rounded-full mb-6 border border-gray-200 dark:border-gray-700">
            <span class="text-small font-semibold text-gray-700 dark:text-gray-300">The Challenge</span>
          </div>
          <h2 class="text-gray-900 dark:text-white mb-4">
            Traditional CRMs Are<br/>
            <span class="text-brand-500">Holding You Back</span>
          </h2>
          <p class="text-body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sales teams lose valuable time to manual processes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Manual Data Entry</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Hours wasted on repetitive data entry that pulls teams away from selling</p>
          </div>
          
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Fragmented Data</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Customer interactions scattered across platforms create incomplete views</p>
          </div>
          
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Delayed Insights</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">By the time you see reports, opportunities have already passed</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - Bento Box Style -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 slide-up-on-scroll">
          <h2 class="text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p class="text-body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to streamline your workflow
          </p>
        </div>
        
        <!-- Bento Box Grid - Layout asimétrico moderno -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Feature 1 - Span 2 columns -->
          <div class="clean-card p-8 md:col-span-2 stagger-item">
            <div class="w-12 h-12 bg-brand-50 dark:bg-brand-500/15 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Automatic Ingestion</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Automatically capture data from emails, calls, and meetings without manual input</p>
          </div>

          <!-- Feature 2 -->
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">AI Insights</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Get intelligent recommendations and predictions</p>
          </div>

          <!-- Feature 3 -->
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Smart Automation</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Automate repetitive tasks and focus on what matters</p>
          </div>

          <!-- Feature 4 -->
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Real-time Analytics</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Track performance with live dashboards</p>
          </div>

          <!-- Feature 5 - Span 2 columns -->
          <div class="clean-card p-8 md:col-span-2 stagger-item">
            <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Custom Workflows</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Build workflows that match your process and automate your entire sales pipeline</p>
          </div>

          <!-- Feature 6 -->
          <div class="clean-card p-8 stagger-item">
            <div class="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-gray-900 dark:text-white mb-3">Team Collaboration</h3>
            <p class="text-body text-gray-600 dark:text-gray-400">Work together seamlessly in real-time</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 slide-up-on-scroll">
          <h2 class="text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p class="text-body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Starter Plan -->
          <div class="clean-card p-8">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                <span class="text-gray-600 dark:text-gray-400">/month</span>
              </div>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Up to 5 team members</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Basic AI features</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Email support</span>
              </li>
            </ul>
            <button class="w-full btn-secondary-clean">Get Started</button>
          </div>

          <!-- Professional Plan -->
          <div class="clean-card p-8 relative border-2 border-brand-500">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
                <span class="text-gray-600 dark:text-gray-400">/month</span>
              </div>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Up to 20 team members</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Advanced AI features</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Priority support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Custom integrations</span>
              </li>
            </ul>
            <button class="w-full btn-primary-clean">Get Started</button>
          </div>

          <!-- Enterprise Plan -->
          <div class="clean-card p-8">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
              </div>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Unlimited team members</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">All AI features</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">24/7 dedicated support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Custom development</span>
              </li>
            </ul>
            <button class="w-full btn-secondary-clean">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Chat Demo Section -->
    <section id="demo" class="relative py-24 px-4 sm:px-6 lg:px-8">
      <AiChatDemo />
    </section>

    <!-- ROI Calculator Section -->
    <section id="calculator" class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <ROICalculator />
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="clean-card p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 fade-in-on-scroll">
          <h2 class="text-gray-900 dark:text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p class="text-body-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of teams already using Zippy
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link to="/signin" class="btn-primary-clean text-base">
              Start Free Trial
            </router-link>
            <a href="#demo" class="btn-secondary-clean text-base">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                <span class="text-xl font-bold text-white">Z</span>
              </div>
              <span class="text-2xl font-bold">Zippy</span>
            </div>
            <p class="text-gray-400 text-sm">
              AI-powered CRM that works for you
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#demo" class="text-gray-400 hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8">
          <p class="text-center text-sm text-gray-400">
            © 2024 Zippy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AiChatDemo from '@/components/landing/AiChatDemo.vue';
import ROICalculator from '@/components/landing/ROICalculator.vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

// Inicializar animaciones de scroll
const { initScrollAnimations } = useScrollAnimation();

onMounted(() => {
  // Pequeño delay para asegurar que el DOM esté renderizado
  setTimeout(() => {
    initScrollAnimations();
  }, 200);
});
</script>
