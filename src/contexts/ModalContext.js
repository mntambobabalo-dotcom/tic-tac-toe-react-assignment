import { createContext, useCallback, useMemo, useState } from 'react';
import ModalTemplate from '../components/Modal/ModalTemplate';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const [content, setContent] = useState(null);
  const handleModal = useCallback((nextContent) => setContent(nextContent), []);
  const closeModal = useCallback(() => setContent(null), []);
  const value = useMemo(() => ({ handleModal, closeModal }), [handleModal, closeModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {content && <ModalTemplate>{content}</ModalTemplate>}
    </ModalContext.Provider>
  );
}
