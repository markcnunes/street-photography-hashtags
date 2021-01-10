import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';

import CookieBanner from '../CookieBanner';

describe('<CookieBanner />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CookieBanner />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
