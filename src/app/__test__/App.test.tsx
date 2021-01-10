import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';
import App from '../App';

test('renders snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
