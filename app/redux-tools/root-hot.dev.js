import React, { Component } from 'react';
import { Provider } from 'react-redux';
import router from '../router'
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          {router}
          <DevTools />
        </div>
      </Provider>
    );
  }
}
