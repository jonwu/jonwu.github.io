import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom'
import configureStore from 'common/store/configureStore';
import Platform from './Platform';
const { store, persistor } = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            <Platform/>
          
        </PersistGate>
      </Provider>
    );
  }
}
