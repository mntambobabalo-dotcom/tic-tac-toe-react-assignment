import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ columnBased }) => (columnBased ? 'column' : 'row')};
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.mobile} {
    min-height: auto;
    padding: 2rem 1rem 4rem;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  font-family: 'Pacifico', cursive;
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 400;
  line-height: 1.15;
  background: transparent;
`;

export const Subtitle = styled.h2`
  color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  font-size: 1.3rem;
  font-weight: 200;
  background: transparent;
  padding: 0.6rem;
`;

export const Text = styled.p`
  color: ${({ theme, primary }) =>
    primary ? theme.colors.secondary : theme.colors.text};
  font-size: 1rem;
  background: transparent;
  padding: 0.5rem;
`;
