import React from 'react';
import {render} from 'react-dom';
import Search from './Search';

const renderSearch = () => {
  render (<Search />, document.getElementById ('app'));
};
renderSearch ();

if (module.hot) {
  module.hot.accept ('./Search', () => {
    renderSearch ();
  });
}
