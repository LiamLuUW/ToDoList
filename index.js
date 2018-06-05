import { AppRegistry,View } from 'react-native';
import App from './app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';

import { reducer } from './app/redux/todoListRedux'
const store = createStore(reducer)

const AppWithStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('mToDoList', () => AppWithStore);
