import styled from 'styled-components';

export const CellStyle = styled.button`
  width: 10rem;
  height: 10rem;
  padding: 3rem;
  border: 0;
  border-radius: 2.5rem;
  display: grid;
  place-items: center;
  background: ${({ theme, isWinningCell }) =>
    isWinningCell ? theme.colors.yellow : theme.colors.secondary};
  box-shadow: 5px 10px ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: transform 150ms ease;

  svg {
    width: 100%;
    height: 100%;
  }

  .markedItem path,
  .markedItem circle {
    fill: ${({ theme }) => theme.colors.primary};
    stroke: ${({ theme }) => theme.colors.primary};
  }

  .outlineIcon path,
  .outlineIcon circle {
    fill: none;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 0;
    transition: stroke-width 120ms ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:hover:not(:disabled) .outlineIcon path,
  &:hover:not(:disabled) .outlineIcon circle {
    stroke-width: 3;
  }

  ${({ theme }) => theme.media.mobile} {
    width: min(25vw, 8rem);
    height: min(25vw, 8rem);
    padding: 2.2rem;
    border-radius: 2rem;
  }
`;
