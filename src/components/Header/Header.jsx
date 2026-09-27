import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/tic-tac-toe.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LogoButton, ThemeButton } from './Header.styled';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <LogoButton type="button" onClick={() => navigate('/')} aria-label="Go to home page">
        <Logo />
      </LogoButton>

      <ThemeButton type="button" onClick={toggleTheme} aria-label="Toggle colour theme">
        {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </ThemeButton>
    </HeaderWrapper>
  );
}

export default Header;
