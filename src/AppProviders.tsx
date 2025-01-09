import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

import { store } from './app/store';
import { theme } from './theme/styledTheme';
interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <ReduxProvider store={store}>
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PaperProvider>
  </ReduxProvider>
);

export default AppProviders;
