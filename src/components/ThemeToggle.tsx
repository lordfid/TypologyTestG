import type { ThemeMode } from '../services/storage';

interface Props {
  theme: ThemeMode;
  onChange: (theme: ThemeMode) => void;
}

export default function ThemeToggle({ theme, onChange }: Props) {
  return (
    <button className="theme-toggle" onClick={() => onChange(theme === 'dark' ? 'light' : 'dark')} aria-label="Ganti tema">
      {theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
    </button>
  );
}
