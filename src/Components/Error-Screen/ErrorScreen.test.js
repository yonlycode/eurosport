import React from 'react';
import ReactDOM from 'react-dom';
import ErrorScreen from './ErrorScreen';
import TestRenderer from 'react-test-renderer';

it('renders error screen without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorScreen />, div);
});

it('show error message', () => {
    let testValue = "this is a test"
    const testRenderer = TestRenderer.create(<ErrorScreen error={testValue}  />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({id: "error_message"}).children).toEqual([testValue]);
    });