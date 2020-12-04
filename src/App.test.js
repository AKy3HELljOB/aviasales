import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App shouldn`t crashed', () => {
  render(<App />);
});
