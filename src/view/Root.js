import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../common/store/configureStore';
import Browser from './browser/app/App';
import Mobile from './mobile/app/App';
const { store, persistor } = configureStore();

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {isMobile ? <Mobile /> : <Browser />}
        </PersistGate>
      </Provider>
    );
  }
}
