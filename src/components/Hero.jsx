import React from 'react';

export default function Hero({ onBrowseRecipes, onScrollToGuide }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-20 left-[8%] text-5xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>🍪</span>
        <span className="absolute top-32 right-[10%] text-4xl opacity-15 animate-float" style={{ animationDelay: '0.8s' }}>🌀</span>
        <span className="absolute bottom-40 left-[15%] text-3xl opacity-20 animate-float" style={{ animationDelay: '1.6s' }}>✨</span>
        <span className="absolute bottom-32 right-[8%] text-5xl opacity-15 animate-float" style={{ animationDelay: '2.4s' }}>🧁</span>
        <span className="absolute top-[45%] left-[4%] text-3xl opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>🍫</span>
        <span className="absolute top-[30%] right-[5%] text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🍯</span>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-warm-200/30 dark:bg-warm-700/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cream-300/40 dark:bg-mocha-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="text-sm font-body text-warm-600 dark:text-cream-300 tracking-wide">
            🌿 Handcrafted with love · Small batch recipes
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="block text-mocha-600 dark:text-cream-100">Bake Something</span>
          <span className="block text-gradient font-italic italic">Wonderful</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-mocha-400 dark:text-cream-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}>
          Premium artisan recipes for soft, golden cookies and pillowy cinnamon rolls —
          tested, perfected, and ready to fill your home with the most incredible aromas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <button onClick={onBrowseRecipes} className="btn-primary text-base px-8 py-4">
            🍪 Browse All Recipes
          </button>
          <button onClick={onScrollToGuide} className="btn-secondary text-base px-8 py-4">
            📖 Beginner's Guide
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          {[
            { num: '8', label: 'Recipes' },
            { num: '100%', label: 'Tested' },
            { num: '∞', label: 'Joy' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient">{stat.num}</div>
              <div className="text-xs font-body uppercase tracking-widest text-mocha-300 dark:text-mocha-200 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
          <span className="text-xs font-body text-mocha-400 uppercase tracking-widest">Scroll</span>
          <span className="text-mocha-400">↓</span>
        </div>
      </div>
    </section>
  );
}
