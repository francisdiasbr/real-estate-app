import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppProviders from './src/AppProviders';
import RealEstateApp from './src/RealEstateApp';

export default function App() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <RealEstateApp />
    </AppProviders>
  );
}