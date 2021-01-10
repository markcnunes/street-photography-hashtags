import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
