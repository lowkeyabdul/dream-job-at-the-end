import React from 'react';

const categoryGradients = {
  cookie: 'from-amber-100 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10',
  cinnamon: 'from-orange-100 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10',
};

const categoryColors = {
  cookie: 'tag-cookie',
  cinnamon: 'tag-cinnamon',
};

const categoryLabels = {
  cookie: 'Cookie',
  cinnamon: 'Cinnamon Roll',
};

const difficultyDots = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

export default function RecipeCard({ recipe, isFavourite, onToggleFavourite, onOpen }) {
  return (
    <div className="recipe-card cursor-pointer group" onClick={onOpen}>
      {/* Card top color block */}
      <div className={`bg-gradient-to-br ${categoryGradients[recipe.category]} p-6 flex items-center justify-between`}>
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{recipe.emoji}</span>
        <div className="text-right">
          <span className={`tag ${categoryColors[recipe.category]} block mb-2`}>
            {categoryLabels[recipe.category]}
          </span>
          {recipe.beginner && (
            <span className="tag tag-beginner block">
              Beginner
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-bold text-mocha-600 dark:text-cream-100 leading-tight group-hover:text-warm-600 transition-colors">
            {recipe.name}
          </h3>
          <button
            onClick={e => { e.stopPropagation(); onToggleFavourite(recipe.id); }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all text-lg hover:scale-110 ${isFavourite ? '' : 'opacity-40 hover:opacity-100'}`}
            aria-label="Toggle favourite"
          >
            {isFavourite ? '❤️' : '🤍'}
          </button>
        </div>

        <p className="font-body text-sm text-mocha-400 dark:text-cream-300 leading-relaxed mb-4 line-clamp-2">
          {recipe.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-mocha-300 dark:text-mocha-200 font-body mb-4">
          <span className="flex items-center gap-1">⏱️ {recipe.prepTime}</span>
          <span className="opacity-30">·</span>
          <span className="flex items-center gap-1">🔥 {recipe.bakeTime}</span>
          <span className="opacity-30">·</span>
          <span className="flex items-center gap-1">👥 {recipe.servings}</span>
        </div>

        {/* Difficulty */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map(dot => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full transition-all ${dot <= difficultyDots[recipe.difficulty] ? 'bg-warm-500' : 'bg-mocha-100 dark:bg-mocha-500'}`}
              />
            ))}
            <span className="text-xs font-body text-mocha-300 dark:text-mocha-200 ml-1">{recipe.difficulty}</span>
          </div>

          <span className="text-xs font-body text-warm-500 dark:text-warm-300 font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
            View Recipe <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
