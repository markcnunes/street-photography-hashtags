import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';

import Header from '../Header';

describe('<Header />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
