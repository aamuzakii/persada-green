import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AppChild from './AppChild'

export default function App() {

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#301b92',
      accent: '#f1c40f',
    },
  };

  return (
    <PaperProvider theme={theme} >
      <AppChild/>
    </PaperProvider>
  );
}

