<template>
  <div class="min-h-screen bg-white dark:bg-black overflow-hidden relative">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-40 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 4s;"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full glass z-50 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-3 group">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
              <div class="relative w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                <span class="text-xl font-bold gradient-text">Z</span>
              </div>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Zippy</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Features</a>
            <a href="#pricing" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#benefits" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Benefits</a>
            <a href="#technology" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Technology</a>
            <router-link to="/signin" class="relative group px-6 py-2.5 rounded-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></div>
              <span class="relative text-sm font-bold text-white">Get Started →</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center relative z-10">
          <div class="inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-8 animate-slide-up border border-white/20">
            <div class="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-glow"></div>
            <span class="text-sm font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI-Powered Zero-Click CRM</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-slide-up" style="animation-delay: 0.1s;">
            <span class="block text-gray-900 dark:text-white mb-2">Zero-Click CRM</span>
            <span class="block gradient-text">That Works For You</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
            Eliminate manual data entry forever. Zippy automatically <span class="font-bold text-gray-900 dark:text-white">ingests, analyzes, and delivers</span> intelligent insights from all your customer interactions.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s;">
            <router-link to="/signin" class="group relative px-10 py-5 rounded-2xl overflow-hidden hover-lift">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span class="relative text-lg font-bold text-white flex items-center gap-2">
                Start Free Trial
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </router-link>
            <a href="#features" class="px-10 py-5 text-lg font-bold text-gray-900 dark:text-white glass rounded-2xl hover-lift border border-white/20">
              Explore Features
            </a>
          </div>

          <!-- Visual Elements -->
          <div class="mt-20 relative animate-slide-up" style="animation-delay: 0.4s;">
            <div class="relative mx-auto max-w-5xl">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
              <div class="relative glass rounded-3xl p-8 border border-white/20">
                <div class="grid grid-cols-3 gap-4">
                  <div class="glass rounded-2xl p-6 border border-cyan-500/30 hover-lift">
                    <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-gray-900 dark:text-white">Instant Analysis</p>
                  </div>
                  <div class="glass rounded-2xl p-6 border border-purple-500/30 hover-lift" style="animation-delay: 0.1s;">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-gray-900 dark:text-white">Zero Manual Work</p>
                  </div>
                  <div class="glass rounded-2xl p-6 border border-pink-500/30 hover-lift" style="animation-delay: 0.2s;">
                    <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-gray-900 dark:text-white">Smart Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="relative group scroll-animate opacity-0">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-cyan-500/20 hover-lift">
              <div class="text-6xl font-black gradient-text mb-3">90%+</div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Time Saved</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Reduction in manual data entry time</div>
              <div class="absolute top-4 right-4 w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="relative group scroll-animate opacity-0" style="animation-delay:0.1s;">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-purple-500/20 hover-lift">
              <div class="text-6xl font-black gradient-text mb-3">Real-time</div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Analysis</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Instant insights powered by AI</div>
              <div class="absolute top-4 right-4 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="relative group scroll-animate opacity-0" style="animation-delay:0.2s;">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-pink-500/20 hover-lift">
              <div class="text-6xl font-black gradient-text mb-3">360°</div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Complete View</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Unified customer insights</div>
              <div class="absolute top-4 right-4 w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Logos Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0">
          <p class="text-sm font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Trusted By Industry Leaders</p>
          <div class="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-12 scroll-animate opacity-0" style="animation-delay:0.1s;">
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
            <div class="relative glass rounded-2xl px-8 py-4 border border-white/10 hover-lift">
              <svg class="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 120 30" fill="currentColor">
                <rect x="10" y="5" width="100" height="20" rx="4" class="text-gray-700 dark:text-gray-300"/>
                <text x="60" y="20" font-size="14" font-weight="bold" text-anchor="middle" class="fill-white dark:fill-gray-900">TechCorp</text>
              </svg>
            </div>
          </div>
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
            <div class="relative glass rounded-2xl px-8 py-4 border border-white/10 hover-lift">
              <svg class="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 120 30" fill="currentColor">
                <circle cx="20" cy="15" r="10" class="text-gray-700 dark:text-gray-300"/>
                <text x="40" y="20" font-size="14" font-weight="bold" class="fill-gray-700 dark:fill-gray-300">InnovateCo</text>
              </svg>
            </div>
          </div>
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
            <div class="relative glass rounded-2xl px-8 py-4 border border-white/10 hover-lift">
              <svg class="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 120 30" fill="currentColor">
                <rect x="5" y="10" width="15" height="15" class="text-gray-700 dark:text-gray-300"/>
                <text x="30" y="22" font-size="14" font-weight="bold" class="fill-gray-700 dark:fill-gray-300">GrowthLabs</text>
              </svg>
            </div>
          </div>
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
            <div class="relative glass rounded-2xl px-8 py-4 border border-white/10 hover-lift">
              <svg class="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 120 30" fill="currentColor">
                <path d="M15,5 L25,15 L15,25 Z" class="text-gray-700 dark:text-gray-300"/>
                <text x="35" y="20" font-size="14" font-weight="bold" class="fill-gray-700 dark:fill-gray-300">ScaleTech</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-950/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 scroll-animate opacity-0">
          <div class="inline-block px-4 py-2 glass rounded-full mb-6 border border-white/10">
            <span class="text-sm font-bold text-gray-700 dark:text-gray-300">The Challenge</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Traditional CRMs Are
            <span class="block gradient-text mt-2">Holding You Back</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sales teams lose valuable time to manual processes while critical insights slip through the cracks
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="group relative scroll-animate opacity-0">
            <div class="absolute inset-0 bg-red-500/5 dark:bg-red-500/10 rounded-3xl"></div>
            <div class="relative glass rounded-3xl p-8 border border-red-500/20 hover-lift">
              <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Manual Data Entry</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Hours wasted on repetitive data entry that pulls teams away from selling</p>
              <div class="mt-6 flex items-center text-sm font-semibold text-red-600 dark:text-red-400">
                <span>Critical time drain</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.1s;">
            <div class="absolute inset-0 bg-red-500/5 dark:bg-red-500/10 rounded-3xl"></div>
            <div class="relative glass rounded-3xl p-8 border border-red-500/20 hover-lift">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Fragmented Data</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Customer interactions scattered across platforms create incomplete views</p>
              <div class="mt-6 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400">
                <span>Insight gaps</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.2s;">
            <div class="absolute inset-0 bg-red-500/5 dark:bg-red-500/10 rounded-3xl"></div>
            <div class="relative glass rounded-3xl p-8 border border-red-500/20 hover-lift">
              <div class="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Missed Opportunities</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Critical signals buried in noise lead to lost deals and revenue</p>
              <div class="mt-6 flex items-center text-sm font-semibold text-pink-600 dark:text-pink-400">
                <span>Revenue at risk</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="relative py-28 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 scroll-animate opacity-0">
          <div class="inline-block px-4 py-2 glass rounded-full mb-6 border border-white/10">
            <span class="text-sm font-bold gradient-text">Intelligent Automation</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Features That Work
            <span class="block gradient-text mt-2">While You Focus on Selling</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Advanced AI automates your entire customer interaction lifecycle
          </p>
        </div>
        
        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1 - Large -->
          <div class="lg:col-span-2 lg:row-span-2 group relative scroll-animate opacity-0">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-10 border border-cyan-500/20 hover-lift h-full flex flex-col">
              <div class="flex items-start justify-between mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                </div>
                <div class="flex gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full animate-glow"></div>
                  <span class="text-xs font-bold text-cyan-600 dark:text-cyan-400">Active</span>
                </div>
              </div>
              <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-4">Multi-Channel Ingestion</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 flex-grow">Automatically captures and processes interactions from email, Slack, WhatsApp, video calls, and audio recordings in real-time</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full">Email</span>
                <span class="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full">Slack</span>
                <span class="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full">WhatsApp</span>
                <span class="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full">Video</span>
                <span class="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full">Audio</span>
              </div>
            </div>
          </div>
          
          <!-- Feature 2 -->
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.1s;">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-purple-500/20 hover-lift h-full">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-black text-gray-900 dark:text-white mb-3">AI Analysis</h3>
              <p class="text-gray-600 dark:text-gray-400">Extracts requirements, sentiment, budgets, and KPIs automatically</p>
            </div>
          </div>
          
          <!-- Feature 3 -->
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.15s;">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-pink-500/20 hover-lift h-full">
              <div class="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-black text-gray-900 dark:text-white mb-3">Smart Chat</h3>
              <p class="text-gray-600 dark:text-gray-400">Ask questions in natural language, get contextual answers with citations</p>
            </div>
          </div>
          
          <!-- Feature 4 -->
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.2s;">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-cyan-500/20 hover-lift h-full">
              <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </div>
              <h3 class="text-xl font-black text-gray-900 dark:text-white mb-3">Proactive Alerts</h3>
              <p class="text-gray-600 dark:text-gray-400">Automatic notifications for urgent issues and opportunities</p>
            </div>
          </div>
          
          <!-- Feature 5 -->
          <div class="lg:col-span-2 group relative scroll-animate opacity-0" style="animation-delay:0.25s;">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-purple-500/20 hover-lift h-full flex items-center gap-8">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3">Semantic Search</h3>
                <p class="text-lg text-gray-600 dark:text-gray-400">Find anything using natural language queries, not just keywords. Our AI understands context and intent.</p>
              </div>
            </div>
          </div>
          
          <!-- Feature 6 -->
          <div class="group relative scroll-animate opacity-0" style="animation-delay:0.3s;">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div class="relative glass rounded-3xl p-8 border border-pink-500/20 hover-lift h-full">
              <div class="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-black text-gray-900 dark:text-white mb-3">Insights & Analytics</h3>
              <p class="text-gray-600 dark:text-gray-400">Trend analysis, sentiment tracking, and actionable intelligence</p>
            </div>
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
          <div class="relative scroll-animate opacity-0 translate-y-10" style="transition-delay:200ms;">
            <div class="text-center">
              <div class="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Insights</h3>
              <p class="text-gray-600 dark:text-gray-400">Ask questions, get alerts, view trends, and make data-driven decisions—all without manual data entry.</p>
            </div>
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

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs. All plans include core features.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Starter Plan -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10 hover:border-primary transition">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Perfect for small teams getting started</p>
            </div>
            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
              <span class="text-gray-600 dark:text-gray-400">/user/month</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Up to 5 users</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Multi-channel ingestion</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">AI-powered analysis</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Basic alerts</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Email support</span>
              </li>
            </ul>
            <router-link to="/signin" class="block w-full px-6 py-3 text-center font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition">
              Start Free Trial
            </router-link>
          </div>

          <!-- Professional Plan (Featured) -->
          <div class="bg-gradient-to-br from-primary to-indigo-600 rounded-2xl p-8 border-2 border-primary scroll-animate opacity-0 translate-y-10 relative shadow-xl transform scale-105">
            <div class="absolute top-0 right-6 -translate-y-1/2">
              <span class="inline-block px-4 py-1 bg-white text-primary text-xs font-bold rounded-full shadow-lg">MOST POPULAR</span>
            </div>
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Professional</h3>
              <p class="text-white/90 text-sm">For growing teams that need more</p>
            </div>
            <div class="mb-6">
              <span class="text-4xl font-bold text-white">$99</span>
              <span class="text-white/80">/user/month</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Up to 25 users</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Everything in Starter</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Advanced analytics</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Custom integrations</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">Priority support</span>
              </li>
            </ul>
            <router-link to="/signin" class="block w-full px-6 py-3 text-center font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg transition shadow-lg">
              Start Free Trial
            </router-link>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 scroll-animate opacity-0 translate-y-10 hover:border-primary transition" style="transition-delay:100ms;">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">For large organizations with custom needs</p>
            </div>
            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Unlimited users</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Everything in Professional</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Dedicated account manager</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">SLA & 24/7 support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Custom AI models</span>
              </li>
            </ul>
            <a href="mailto:contact@zippy.app" class="block w-full px-6 py-3 text-center font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Chat Demo Section -->
    <AiChatDemo />

    <!-- ROI Calculator Section -->
    <ROICalculator />

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
    <section class="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div class="max-w-5xl mx-auto relative z-10">
        <div class="relative overflow-hidden rounded-3xl">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient"></div>
          <div class="relative glass border border-white/20 p-16 text-center">
            <div class="mb-8 flex justify-center">
              <div class="inline-flex items-center gap-2 px-5 py-2 glass rounded-full border border-white/30">
                <div class="w-2 h-2 bg-white rounded-full animate-glow"></div>
                <span class="text-sm font-bold text-white">Start Your Free Trial Today</span>
              </div>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your CRM?
            </h2>
            <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking teams using AI to automate customer relationship management and focus on what matters most—selling.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <router-link to="/signin" class="group relative px-10 py-5 rounded-2xl overflow-hidden hover-lift">
                <div class="absolute inset-0 bg-white"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span class="relative text-lg font-black bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
                  Start Free Trial
                  <svg class="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </router-link>
              <a href="mailto:contact@zippy.app" class="px-10 py-5 text-lg font-bold text-white glass rounded-2xl hover-lift border border-white/30">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-6 group">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                <div class="relative w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                  <span class="text-lg font-bold gradient-text">Z</span>
                </div>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Zippy</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">Zero-Click CRM powered by AI. Transform how you manage customer relationships.</p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 hover-lift group">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-cyan-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 hover-lift group">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 hover-lift group">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-6">Product</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#features" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#pricing" class="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#benefits" class="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Benefits</a></li>
              <li><a href="#technology" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Technology</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-6">Company</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Careers</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-6">Resources</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">API Reference</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">© {{ new Date().getFullYear() }} Zippy. All rights reserved.</p>
          <div class="flex items-center gap-6 text-sm">
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-medium">Privacy Policy</a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium">Terms of Service</a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium">Security</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AiChatDemo from '@/components/landing/AiChatDemo.vue'
import ROICalculator from '@/components/landing/ROICalculator.vue'

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
