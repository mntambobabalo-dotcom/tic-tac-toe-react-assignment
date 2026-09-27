import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  min-width: 260px;
  margin: 1.2rem;
  padding: 1.1rem 1.8rem;
  border: 0;
  border-radius: 0.65rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme, color }) => color || theme.colors.secondary};
  font-size: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  transition: box-shadow 160ms ease, transform 160ms ease;

  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.purple};
    transform: translateY(-1px);
  }

  ${({ theme }) => theme.media.mobile} {
    min-width: 180px;
  }
`;
