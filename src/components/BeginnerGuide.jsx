import React from 'react';
import { beginnerGuide } from '../data/recipes';

export default function BeginnerGuide() {
  return (
    <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8 section-bg-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">Start Here</span>
          <h2 className="section-title mb-4">Beginner Baking Guide</h2>
          <p className="font-body text-mocha-400 dark:text-cream-300 max-w-xl mx-auto">
            New to baking? These foundational skills will set you up for success before you even turn on the oven.
          </p>
          <div className="divider-fancy max-w-xs mx-auto mt-4">
            <span className="text-warm-400 text-sm">📚</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beginnerGuide.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-warm-100 to-cream-200 dark:from-warm-700/30 dark:to-mocha-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-mocha-600 dark:text-cream-100 mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-mocha-400 dark:text-cream-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center glass rounded-3xl p-8 max-w-2xl mx-auto">
          <span className="text-4xl block mb-4">🎓</span>
          <h3 className="font-display text-2xl font-bold text-mocha-600 dark:text-cream-100 mb-3">
            Ready to start baking?
          </h3>
          <p className="font-body text-mocha-400 dark:text-cream-300 mb-6">
            Begin with our Quick Beginner Cinnamon Rolls — no yeast, no long waits, just delicious results in under an hour.
          </p>
          <button
            onClick={() => document.getElementById('cinnamon')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            ⚡ Try the Easy Recipe
          </button>
        </div>
      </div>
    </section>
  );
}
