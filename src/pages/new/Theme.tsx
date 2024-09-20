import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const AnimatedThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Here you would also update your app's theme
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative cursor-pointer w-11 h-11 rounded-xl bg-white shadow-box text-secondary overflow-hidden"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          isDark ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <Sun className="absolute inset-0 h-full w-full p-3" />
      </div>
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          isDark ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Moon className="absolute inset-0 h-full w-full p-3" />
      </div>
    </button>
  );
};

export default AnimatedThemeToggle;