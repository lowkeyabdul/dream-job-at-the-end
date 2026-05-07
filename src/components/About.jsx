import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-warm-200/50 to-cream-300/30 dark:from-warm-700/20 dark:to-mocha-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cream-300/50 to-warm-200/30 dark:from-mocha-500/20 dark:to-warm-700/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="text-7xl mb-4 animate-float">🧁</div>
                <div className="font-accent text-3xl text-warm-600 dark:text-warm-300 mb-2">SweetCrumb</div>
                <div className="font-body text-xs uppercase tracking-[0.3em] text-mocha-300 dark:text-mocha-200">Artisan Bakery Recipes</div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { emoji: '🍪', label: 'Cookies' },
                    { emoji: '🌀', label: 'Cinnamon' },
                    { emoji: '❤️', label: 'Made with Love' },
                  ].map(item => (
                    <div key={item.label} className="text-center">
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-[10px] font-body uppercase tracking-wider text-mocha-300 dark:text-mocha-200">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                <div>
                  <div className="font-display font-bold text-sm text-mocha-600 dark:text-cream-100">100% Tested</div>
                  <div className="text-[10px] font-body text-mocha-300 dark:text-mocha-200">Every recipe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">Our Story</span>
            <h2 className="section-title mb-6">Baking, Perfected<br />with Patience</h2>

            <div className="space-y-4 font-body text-mocha-400 dark:text-cream-300 leading-relaxed">
              <p>
                SweetCrumb was born from a simple belief: that the best baked goods aren't found in expensive bakeries — they're made in home kitchens, filled with warmth and intention.
              </p>
              <p>
                Every recipe in this collection has been tested multiple times, refined through trial and error, and shared with family first. If it didn't earn enthusiastic approval from loved ones, it didn't make the cut.
              </p>
              <p>
                Whether you're a complete beginner or an experienced home baker, our goal is the same: to help you create something wonderful that fills your home with incredible aromas and your table with joy.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { emoji: '🌿', title: 'Real Ingredients', desc: 'No shortcuts, no artificial flavours' },
                { emoji: '🔬', title: 'Tested Recipes', desc: 'Made and refined multiple times' },
                { emoji: '💛', title: 'Made for Family', desc: 'Recipes worth sharing with loved ones' },
                { emoji: '📖', title: 'Clear Instructions', desc: 'Beginner-friendly every step' },
              ].map(value => (
                <div key={value.title} className="flex gap-3">
                  <span className="text-xl flex-shrink-0">{value.emoji}</span>
                  <div>
                    <div className="font-display font-bold text-sm text-mocha-600 dark:text-cream-100">{value.title}</div>
                    <div className="font-body text-xs text-mocha-300 dark:text-mocha-200">{value.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
