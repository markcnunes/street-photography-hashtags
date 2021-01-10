import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
