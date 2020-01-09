import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotrongConfig';
import Routes from '~/routes.js';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}