import React from 'react'
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

const AppContainer =  ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  const Root = require('./Root.tsx').default;
  console.log("==---------------Root---------");
  console.log(Root);
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
});
