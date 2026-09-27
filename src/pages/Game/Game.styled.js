import styled from 'styled-components';

export const GameCenter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Status = styled.p`
  min-height: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.05rem;
  font-weight: 500;
`;

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${({ theme }) => theme.media.mobile} {
    gap: 1rem;
  }
`;

export const AssignmentControls = styled.section`
  width: min(100%, 34rem);
  margin-top: 1rem;
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.default}66;
`;

export const HistoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.88rem;
  font-weight: 500;
`;

export const HistoryList = styled.ol`
  margin-top: 0.5rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
`;

export const HistoryButton = styled.button`
  padding: 0.35rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.default};
  border-radius: 999px;
  background: ${({ theme, active }) =>
    active ? theme.colors.secondary : 'transparent'};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  font-size: 0.72rem;
  cursor: pointer;
`;

export const RestartButton = styled.button`
  margin: 0.25rem 0 0.75rem;
  padding: 0.65rem 1.4rem;
  border: 0;
  border-radius: 0.65rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.purple};
  }
`;
