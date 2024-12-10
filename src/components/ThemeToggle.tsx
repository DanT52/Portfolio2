import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-background-800/20 backdrop-blur-sm text-background-50 hover:bg-background-800/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon className="w-6 h-6 text-white" /> : <Sun className="w-6 h-6 text-black" />}
    </button>
  );
};