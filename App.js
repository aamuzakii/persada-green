import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppChild from './AppChild'

export default function App() {
  return (
    <PaperProvider>
      <AppChild/>
    </PaperProvider>
  );
}

