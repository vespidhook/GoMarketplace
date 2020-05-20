import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <>
    <AppContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Routes />
    </AppContainer>
  </>
);

export default App;
