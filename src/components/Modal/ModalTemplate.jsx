import React from 'react';
import { ModalBackdrop, ModalCard } from './Modal.styled';
import useModal from '../../hooks/useModal';

function ModalTemplate({ children }) {
  const { closeModal } = useModal();
  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalCard onClick={(event) => event.stopPropagation()}>{children}</ModalCard>
    </ModalBackdrop>
  );
}

export default ModalTemplate;
