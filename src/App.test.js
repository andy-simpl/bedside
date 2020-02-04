import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bedside Procedures/i);
  expect(linkElement).toBeInTheDocument();
});
