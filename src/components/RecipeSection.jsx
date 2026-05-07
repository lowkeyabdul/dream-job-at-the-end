import React, { useState, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

const FILTERS = [
  { id: 'all', label: 'All Recipes', emoji: '✨' },
  { id: 'cookie', label: 'Cookies', emoji: '🍪' },
  { id: 'cinnamon', label: 'Cinnamon Rolls', emoji: '🌀' },
  { id: 'beginner', label: 'Beginner', emoji: '🌱' },
];

export default function RecipeSection({ recipes, favourites, onToggleFavourite, sectionId, title, subtitle, category }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(category || 'all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filtered = useMemo(() => {
    let result = recipes;
    if (filter === 'beginner') {
      result = result.filter(r => r.beginner || r.difficulty === 'Easy');
    } else if (filter !== 'all') {
      result = result.filter(r => r.category === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [recipes, filter, search]);

  return (
    <section id={sectionId} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          {subtitle && (
            <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">{subtitle}</span>
          )}
          <h2 className="section-title mb-4">{title}</h2>
          <div className="divider-fancy max-w-xs mx-auto">
            <span className="text-warm-400 text-sm">🍰</span>
          </div>
        </div>

        {/* Search & Filters */}
        {sectionId === 'recipes' && (
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mocha-300 dark:text-mocha-200">🔍</span>
              <input
                type="text"
                placeholder="Search recipes…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/70 dark:bg-mocha-600/50 border border-warm-200/50 dark:border-white/10 font-body text-sm text-mocha-600 dark:text-cream-100 placeholder-mocha-300 dark:placeholder-mocha-300 focus:outline-none focus:ring-2 focus:ring-warm-400/50 transition-all"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-mocha-300 hover:text-mocha-500 transition-colors">✕</button>
              )}
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-body font-bold transition-all duration-200 ${
                    filter === f.id
                      ? 'bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-lg shadow-warm-500/25'
                      : 'bg-white/70 dark:bg-mocha-600/40 text-mocha-400 dark:text-cream-300 hover:bg-warm-50 dark:hover:bg-white/10 border border-warm-200/50 dark:border-white/10'
                  }`}
                >
                  <span>{f.emoji}</span>
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recipe grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="font-display text-xl text-mocha-400 dark:text-cream-300">No recipes found</p>
            <p className="font-body text-sm text-mocha-300 dark:text-mocha-200 mt-2">Try a different search or filter</p>
            <button onClick={() => { setSearch(''); setFilter('all'); }} className="btn-secondary mt-4 text-sm">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavourite={favourites.includes(recipe.id)}
                onToggleFavourite={onToggleFavourite}
                onOpen={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Recipe Modal */}
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
