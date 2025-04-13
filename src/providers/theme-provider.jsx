'use client';

import createThemeConfig from '@/themes';
import { ConfigProvider } from 'antd';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { useMemo } from 'react';
import { APP_VERSION } from '@/common';

function ThemeConfig({ children }) {
  const theme = useTheme();

  const config = useMemo(
    () => createThemeConfig({ theme: theme.resolvedTheme }),
    [theme],
  );

  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
}

function ThemeProvider({ children }) {
  // eslint-disable-next-line no-console
  console.log('App Version : ', APP_VERSION);
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme={false}
      enableSystem
    >
      <ThemeConfig>{children}</ThemeConfig>
    </NextThemeProvider>
  );
}

export default ThemeProvider;
