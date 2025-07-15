import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Уникаємо hydration mismatch
  useEffect(() => {
    setMounted(true);
    console.log('ThemeSwitcher mounted, initial theme:', theme);
  }, [theme]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-elements dark:border-gray-600 bg-white dark:bg-gray-700"></div>
    );
  }

  const handleClick = () => {
    console.log('Current theme:', theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    setTheme(newTheme);

    // Також перевіримо, чи клас додається до html
    setTimeout(() => {
      console.log(
        'HTML classes after theme change:',
        document.documentElement.className,
      );
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-elements dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-hover dark:hover:bg-gray-600 transition-colors shadow-md"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <span className="text-lg">🌞</span>
      ) : (
        <span className="text-lg">🌚</span>
      )}
    </button>
  );
};
