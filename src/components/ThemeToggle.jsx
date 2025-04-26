
import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--bg-color', '#333');
      document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#f0f0f0');
      document.documentElement.style.setProperty('--text-color', '#333');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemeToggle;
