// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';

const mockNextThemes = {
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    theme: 'light',
    setTheme: () => {},
  }),
};

jest.mock('next-themes', () => mockNextThemes);