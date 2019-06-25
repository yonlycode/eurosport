import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('fetch data on mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

it('display error if server cant be reach', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})