import React, { useState, useEffect } from 'react';

export default function RecipeModal({ recipe, onClose, isFavourite, onToggleFavourite }) {
  const [checkedIngredients, setCheckedIngredients] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const difficultyColor = {
    Easy: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400',
    Medium: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400',
    Hard: 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400',
  };

  const isSectionHeader = (ingredient) =>
    ingredient.startsWith('For ') || ingredient.startsWith('Same ');

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center no-print" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-mocha-700/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-2xl sm:mx-4 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-cream-50 dark:bg-mocha-600 shadow-2xl animate-slide-up"
        onClick={e => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass rounded-t-3xl sm:rounded-t-3xl px-6 py-4 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{recipe.emoji}</span>
            <div>
              <h2 className="font-display text-lg font-bold text-mocha-600 dark:text-cream-100 leading-tight">{recipe.name}</h2>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${difficultyColor[recipe.difficulty]}`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavourite(recipe.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all text-xl ${isFavourite ? 'bg-red-50 dark:bg-red-900/20' : 'hover:bg-warm-100 dark:hover:bg-white/10'}`}
              aria-label="Toggle favourite"
            >
              {isFavourite ? '❤️' : '🤍'}
            </button>
            <button
              onClick={handlePrint}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-100 dark:hover:bg-white/10 transition-all text-lg"
              aria-label="Print recipe"
            >
              🖨️
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-100 dark:hover:bg-white/10 transition-all text-lg text-mocha-400 dark:text-cream-300"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Description */}
          <p className="font-body text-mocha-400 dark:text-cream-300 leading-relaxed italic">{recipe.description}</p>

          {/* Meta info */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: '⏱️', label: 'Prep', value: recipe.prepTime },
              { icon: '🔥', label: 'Bake', value: recipe.bakeTime },
              { icon: '👥', label: 'Serves', value: recipe.servings },
              { icon: '📊', label: 'Level', value: recipe.difficulty },
            ].map(info => (
              <div key={info.label} className="text-center glass rounded-2xl p-3">
                <div className="text-xl mb-1">{info.icon}</div>
                <div className="font-display font-bold text-mocha-600 dark:text-cream-100 text-sm">{info.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-mocha-300 dark:text-mocha-200 font-body">{info.label}</div>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="bg-warm-50 dark:bg-warm-700/20 border border-warm-200 dark:border-warm-700/40 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">💡</span>
              <div>
                <span className="font-display font-bold text-warm-600 dark:text-warm-300 text-sm block mb-1">Pro Tip</span>
                <p className="font-body text-sm text-mocha-500 dark:text-cream-300 leading-relaxed">{recipe.tip}</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-display text-xl font-bold text-mocha-600 dark:text-cream-100 mb-4 flex items-center gap-2">
              <span>🧺</span> Ingredients
            </h3>
            <div className="space-y-1">
              {recipe.ingredients.map((ingredient, i) => (
                isSectionHeader(ingredient)
                  ? (
                    <div key={i} className="pt-3 pb-1">
                      <span className="font-display font-bold text-warm-600 dark:text-warm-300 text-sm uppercase tracking-wide">{ingredient}</span>
                    </div>
                  ) : (
                    <label key={i} className={`ingredient-check rounded-xl px-3 hover:bg-warm-50 dark:hover:bg-white/5 transition-colors ${checkedIngredients[i] ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={!!checkedIngredients[i]}
                        onChange={() => toggleIngredient(i)}
                      />
                      <span className="font-body text-sm text-mocha-500 dark:text-cream-300 transition-all duration-200">
                        {ingredient}
                      </span>
                    </label>
                  )
              ))}
            </div>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-display text-xl font-bold text-mocha-600 dark:text-cream-100 mb-4 flex items-center gap-2">
              <span>📋</span> Method
            </h3>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-warm-400 to-warm-600 text-white font-display font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="pt-0.5">
                    <span className="font-display font-semibold text-mocha-600 dark:text-cream-100 text-sm block mb-1">{step.title}</span>
                    <p className="font-body text-sm text-mocha-400 dark:text-cream-300 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
