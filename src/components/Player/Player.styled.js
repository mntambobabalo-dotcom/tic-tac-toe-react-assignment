import styled from 'styled-components';

export const PlayerWrapper = styled.section`
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    margin: 2rem 0;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const AvatarWrapper = styled.div`
  padding: 0.35rem;
  border-radius: 50%;
  border: ${({ isPlayerActive, accent }) =>
    isPlayerActive ? `4px solid ${accent}` : '4px solid transparent'};
  transition: filter 180ms ease, border-color 180ms ease;

  > div {
    width: 9rem !important;
    height: 9rem !important;
    filter: ${({ isPlayerActive }) => (isPlayerActive ? 'none' : 'grayscale(100%)')};

    ${({ theme }) => theme.media.mobile} {
      width: 6rem !important;
      height: 6rem !important;
    }
  }
`;

export const Score = styled.strong`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.35rem;
  font-weight: 500;
`;
