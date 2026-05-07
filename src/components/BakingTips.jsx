import React from 'react';
import { bakingTips } from '../data/recipes';

export default function BakingTips() {
  return (
    <section id="tips" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">Expert Secrets</span>
          <h2 className="section-title mb-4">Baking Tips</h2>
          <p className="font-body text-mocha-400 dark:text-cream-300 max-w-xl mx-auto">
            Little-known techniques that separate good baking from extraordinary baking.
          </p>
          <div className="divider-fancy max-w-xs mx-auto mt-4">
            <span className="text-warm-400 text-sm">💡</span>
          </div>
        </div>

        {/* Tips as staggered list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {bakingTips.map((tip, i) => (
            <div
              key={i}
              className="flex gap-5 glass rounded-2xl p-5 hover:shadow-md transition-all duration-300 group hover:-translate-x-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-warm-400 to-warm-600 flex items-center justify-center text-xl shadow-lg shadow-warm-500/25">
                {tip.emoji}
              </div>
              <div>
                <h3 className="font-display font-bold text-mocha-600 dark:text-cream-100 mb-1">
                  {tip.title}
                </h3>
                <p className="font-body text-sm text-mocha-400 dark:text-cream-300 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic text-mocha-400 dark:text-cream-300 max-w-2xl mx-auto leading-relaxed">
            "Baking is love made edible."
          </blockquote>
          <div className="font-accent text-warm-500 dark:text-warm-300 mt-3">— SweetCrumb Kitchen</div>
        </div>
      </div>
    </section>
  );
}
