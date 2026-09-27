import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.black};
`;

export const ModalCard = styled.div`
  width: min(100%, 430px);
  padding: 2rem;
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
`;
