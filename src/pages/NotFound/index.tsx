import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import LayoutDefault from 'components/LayoutDefault';

const StyledContent = styled.div(({ theme }) => ({
  color: theme.colors.white,
  textAlign: 'center',
  a: {
    color: theme.colors.white,
  },
}));

export const NotFoundPage: FC = () => {
  return (
    <LayoutDefault title='Whoops!'>
      <StyledContent>
        <p>Sorry, the page can't be found.</p>
        <p>Not to worry. You can head over to our homepage.</p>
        <img
          src='https://media.giphy.com/media/S8CNdWPtQAg1nj7QVw/source.gif'
          alt='there is no place like home'
        />

        <p>
          <Link to='/' className='button button--primary'>
            Take me back to the homepage
          </Link>
        </p>
      </StyledContent>
    </LayoutDefault>
  );
};
