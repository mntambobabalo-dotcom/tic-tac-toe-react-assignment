import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 10vh;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: 0;
  padding: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  path, circle {
    fill: currentColor;
    stroke: currentColor;
  }
`;

export const ThemeButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary}12;
  }
`;
