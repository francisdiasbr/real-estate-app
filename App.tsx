import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppProviders from './src/AppProviders';
import RealEstateApp from './src/RealEstateApp';
import { OPENAI_API_KEY } from '@env';

export default function App() {
  console.log('App iniciado');
  console.log('OPENAI_API_KEY:', OPENAI_API_KEY);
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <RealEstateApp />
    </AppProviders>
  );
}