import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root-hot.dev';
import store from '../store';

render(
  <AppContainer>
    <Root store={ store } />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./root-hot.dev', () => {
    const Root = require('./root-hot.dev').default;
    render(
      <AppContainer>
        <Root store={ store }/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
