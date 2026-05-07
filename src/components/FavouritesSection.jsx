import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

export default function FavouritesSection({ recipes, favourites, onToggleFavourite }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const favouriteRecipes = recipes.filter(r => favourites.includes(r.id));

  return (
    <section id="favourites" className="py-20 px-4 sm:px-6 lg:px-8 section-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-accent text-warm-500 dark:text-warm-300 text-2xl block mb-2">Your Collection</span>
          <h2 className="section-title mb-4">Favourite Recipes</h2>
          <div className="divider-fancy max-w-xs mx-auto">
            <span className="text-warm-400 text-sm">❤️</span>
          </div>
        </div>

        {favouriteRecipes.length === 0 ? (
          <div className="text-center py-16 glass rounded-3xl max-w-lg mx-auto">
            <span className="text-6xl block mb-4">🤍</span>
            <h3 className="font-display text-xl font-bold text-mocha-500 dark:text-cream-200 mb-2">
              No favourites yet
            </h3>
            <p className="font-body text-sm text-mocha-400 dark:text-cream-300 mb-6">
              Tap the heart on any recipe to save it here for quick access!
            </p>
            <button
              onClick={() => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              🍪 Browse Recipes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favouriteRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavourite={true}
                onToggleFavourite={onToggleFavourite}
                onOpen={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        )}
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
