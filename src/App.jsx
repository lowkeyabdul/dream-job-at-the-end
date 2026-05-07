import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import RecipeSection from './components/RecipeSection';
import BeginnerGuide from './components/BeginnerGuide';
import BakingTips from './components/BakingTips';
import FavouritesSection from './components/FavouritesSection';
import About from './components/About';
import Footer from './components/Footer';
import { recipes } from './data/recipes';

// Safely read from localStorage
function loadFavourites() {
  try {
    const stored = localStorage.getItem('sweetcrumb-favourites');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // ignore
  }
  return [];
}

// Safely write to localStorage
function saveFavourites(favs) {
  try {
    localStorage.setItem('sweetcrumb-favourites', JSON.stringify(favs));
  } catch {
    // ignore
  }
}

// Safely read dark mode preference
function loadDarkMode() {
  try {
    const stored = localStorage.getItem('sweetcrumb-darkmode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

export default function App() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const [favourites, setFavourites] = useState(loadFavourites);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('sweetcrumb-darkmode', String(darkMode));
    } catch {
      // ignore
    }
  }, [darkMode]);

  const toggleFavourite = useCallback((id) => {
    setFavourites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      saveFavourites(next);
      return next;
    });
  }, []);

  const scrollToRecipes = () => {
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGuide = () => {
    document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cookieRecipes = recipes.filter(r => r.category === 'cookie');
  const cinnamonRecipes = recipes.filter(r => r.category === 'cinnamon');

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero onBrowseRecipes={scrollToRecipes} onScrollToGuide={scrollToGuide} />

      <FeaturedSection
        recipes={recipes}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />

      {/* All Recipes with search/filter */}
      <RecipeSection
        sectionId="recipes"
        title="All Recipes"
        subtitle="The Collection"
        recipes={recipes}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />

      {/* Cookies only */}
      <section id="cookies" className="section-bg-alt">
        <RecipeSection
          sectionId="cookies-inner"
          title="Cookie Recipes"
          subtitle="Golden & Chewy"
          recipes={cookieRecipes}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          category="cookie"
        />
      </section>

      {/* Cinnamon Rolls only */}
      <RecipeSection
        sectionId="cinnamon"
        title="Cinnamon Rolls"
        subtitle="Pillowy & Sweet"
        recipes={cinnamonRecipes}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
        category="cinnamon"
      />

      <BeginnerGuide />

      <BakingTips />

      <FavouritesSection
        recipes={recipes}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />

      <About />

      <Footer />
    </div>
  );
}
