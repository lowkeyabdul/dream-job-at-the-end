import React, { useState } from 'react';
import RecipeModal from './RecipeModal';

export default function FeaturedSection({ recipes, favourites, onToggleFavourite }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const featured = recipes.filter(r => r.featured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">Staff Picks</span>
          <h2 className="section-title mb-4">Featured Recipes</h2>
          <div className="divider-fancy max-w-xs mx-auto">
            <span className="text-warm-400 text-sm">⭐</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((recipe, i) => (
            <div
              key={recipe.id}
              className="recipe-card cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedRecipe(recipe)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Featured badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-bold bg-gradient-to-r from-warm-500 to-warm-600 text-white px-3 py-1 rounded-full shadow">
                  ⭐ Featured
                </span>
              </div>

              {/* Image placeholder with gradient */}
              <div className={`h-40 flex items-center justify-center relative overflow-hidden ${
                recipe.category === 'cookie'
                  ? 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20'
                  : 'bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 dark:from-orange-900/30 dark:to-amber-900/20'
              }`}>
                {/* Decorative circles */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/20 dark:bg-white/5" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/20 dark:bg-white/5" />
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500 relative z-10">
                  {recipe.emoji}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl font-bold text-mocha-600 dark:text-cream-100 group-hover:text-warm-600 transition-colors leading-tight">
                    {recipe.name}
                  </h3>
                  <button
                    onClick={e => { e.stopPropagation(); onToggleFavourite(recipe.id); }}
                    className={`flex-shrink-0 text-xl hover:scale-125 transition-all ${favourites.includes(recipe.id) ? '' : 'opacity-40 hover:opacity-100'}`}
                    aria-label="Toggle favourite"
                  >
                    {favourites.includes(recipe.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <p className="font-body text-sm text-mocha-400 dark:text-cream-300 leading-relaxed mb-4">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-mocha-300 dark:text-mocha-200 font-body">
                    <span>⏱️ {recipe.prepTime}</span>
                    <span>·</span>
                    <span>🔥 {recipe.bakeTime}</span>
                    <span>·</span>
                    <span>👥 {recipe.servings}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-mocha-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-mocha-300 dark:text-mocha-200">
                    {recipe.difficulty}
                  </span>
                  <span className="text-xs font-body text-warm-500 dark:text-warm-300 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Open Recipe <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavourite={favourites.includes(selectedRecipe.id)}
          onToggleFavourite={onToggleFavourite}
        />
      )}
    </section>
  );
}
