import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotrongConfig';
import { store, persistor } from './store';
import Routes from '~/routes.js';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
