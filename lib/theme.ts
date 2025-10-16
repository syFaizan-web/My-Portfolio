export const themeTokens = {
  colors: {
    'bg-dark': '#0a0a0f',
    'panel-alpha': 0.42,
    'accent-start': '#00d4ff',
    'accent-end': '#8b5cf6',
    'glass': 'rgba(255,255,255,0.04)',
  },
} as const;

export const useTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  
  return 'dark'; // default
};

export const setTheme = (theme: 'light' | 'dark') => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  document.documentElement.className = theme;
};
