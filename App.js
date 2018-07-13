import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRoot from './src/config/appRouter';
import appStore from './src/config/appStore';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
        <Provider store={appStore}>
            <AppRoot />
        </Provider>
    );
  }
}