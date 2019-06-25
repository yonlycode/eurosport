import React from 'react';
import ReactDOM from 'react-dom';
import ActivityIndicator from './ActivityIndicator';

it('renders activity indicator without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActivityIndicator />, div);
});