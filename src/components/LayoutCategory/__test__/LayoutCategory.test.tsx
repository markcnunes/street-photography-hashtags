import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from 'utils/test-utils';
import LayoutCategory from '../LayoutCategory';
import mockData from '../__mock__/mockData';

const { category, icon, keywords } = mockData;

describe('<LayoutCategory />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <LayoutCategory category={category} icon={icon} keywords={keywords} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(
      <LayoutCategory category={category} icon={icon} keywords={keywords} />,
    );
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByTestId(icon)).toBeInTheDocument();
    expect(screen.getAllByTitle(/on Instagram/i)).toHaveLength(30);
  });
  it('show filter for category All', () => {
    const categoryAll = 'all';
    render(
      <LayoutCategory category={categoryAll} icon={icon} keywords={keywords} />,
    );
    expect(screen.getByText(/filter/i)).toBeInTheDocument();
  });
});
