import React from 'react';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-mocha-600 dark:bg-mocha-700 text-cream-200 py-16 px-4 sm:px-6 no-print">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🧁</span>
              <div>
                <div className="font-accent text-2xl font-bold text-cream-100">SweetCrumb</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-mocha-200 font-body">Artisan Bakery Recipes</div>
              </div>
            </div>
            <p className="font-body text-sm text-mocha-200 leading-relaxed">
              Premium artisan recipes for cookies and cinnamon rolls, crafted with love and tested with family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'All Recipes', id: 'recipes' },
                { label: 'Cookies', id: 'cookies' },
                { label: 'Cinnamon Rolls', id: 'cinnamon' },
                { label: 'Beginner Guide', id: 'guide' },
                { label: 'Baking Tips', id: 'tips' },
                { label: 'Favourites', id: 'favourites' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-sm text-mocha-200 hover:text-cream-100 transition-colors"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipe Categories */}
          <div>
            <h4 className="font-display font-bold text-cream-100 mb-4">Our Recipes</h4>
            <div className="space-y-2 font-body text-sm text-mocha-200">
              <div>🍪 Classic Chocolate Chip</div>
              <div>🍫 Double Chocolate</div>
              <div>🌾 Oatmeal Raisin</div>
              <div>✨ Brown Butter</div>
              <div>🌀 Classic Cinnamon Rolls</div>
              <div>🧀 Cream Cheese Glazed</div>
              <div>⚡ Quick Beginner Rolls</div>
              <div>🍯 Caramel Pecan Rolls</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-mocha-300 text-center sm:text-left">
            © {new Date().getFullYear()} SweetCrumb Bakery. Made with ❤️ for family.
          </p>
          <p className="font-body text-xs text-mocha-300">
            🌿 All recipes are original and family-tested
          </p>
        </div>
      </div>
    </footer>
  );
}
