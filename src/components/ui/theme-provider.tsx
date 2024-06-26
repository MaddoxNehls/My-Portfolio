'use client';

import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import React, { useEffect, useState } from 'react';

const getMuiTheme = (theme: string) => {
  return createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light'
    }
  });
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme } = useTheme();
  const [muiTheme, setMuiTheme] = useState(createTheme());

  useEffect(() => {
    if (resolvedTheme) {
      setMuiTheme(getMuiTheme(resolvedTheme));
    }
  }, [resolvedTheme]);

  return (
    <NextThemesProvider {...props}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextThemesProvider>
  );
}
