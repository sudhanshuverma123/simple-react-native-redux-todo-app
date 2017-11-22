import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/store';

import Main from './src/components/Main.js'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}
