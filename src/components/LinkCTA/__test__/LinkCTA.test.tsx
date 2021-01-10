import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from 'utils/test-utils';
import LinkCTA from '../LinkCTA';
import mockData from '../__mock__/mockData';

const { category, icon } = mockData;

describe('<LinkCTA />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <LinkCTA category={category} icon={icon} />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(
      <BrowserRouter>
        <LinkCTA category={category} icon={icon} />
      </BrowserRouter>,
    );
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByTestId(icon)).toBeInTheDocument();
  });
});
