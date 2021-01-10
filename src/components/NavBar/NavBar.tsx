import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled('nav')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: 20,
  border: 0,
  outline: 0,
  cursor: 'pointer',
  borderRadius: 5,
  textDecoration: 'none',
  a: {
    textDecoration: 'none',
    color: theme.colors.white,
    padding: 10,
    border: '1px solid transparent',
    borderRadius: theme.radii[2],
    '&.is-active': {
      borderColor: theme.colors.muted,
    },
    '&:hover': {
      borderColor: 'currentColor',
    },
    '& + a': {
      marginLeft: 10,
    },
  },
}));

const Navbar = () => {
  return (
    <StyledNavbar role='navigation' aria-label='main navigation'>
      <NavLink className='navbar-item' activeClassName='is-active' to='/' exact>
        Categories
      </NavLink>

      <NavLink className='navbar-item' activeClassName='is-active' to='/about'>
        About
      </NavLink>

      <NavLink
        className='navbar-item'
        activeClassName='is-active'
        to='/contribution'
      >
        Contribution
      </NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
