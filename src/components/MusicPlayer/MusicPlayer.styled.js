import styled from 'styled-components';

export const MusicPlayerWrapper = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
  opacity: 0.85;
`;
