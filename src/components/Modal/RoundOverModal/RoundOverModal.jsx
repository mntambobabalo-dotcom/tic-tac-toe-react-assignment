import React, { useContext } from 'react';
import { GameContext } from '../../../contexts/GameContext';
import useModal from '../../../hooks/useModal';
import Button from '../../Button/Button';
import { RoundOverWrapper } from './RoundOver.styled';

function RoundOverModal() {
  const { game, resetBoard } = useContext(GameContext);
  const { closeModal } = useModal();

  const message = game.draw ? 'Draw!' : `Winner: ${game.roundWinner.toUpperCase()}`;

  return (
    <RoundOverWrapper>
      <h2>{message}</h2>
      <Button onClick={() => { resetBoard(); closeModal(); }}>Restart Game</Button>
    </RoundOverWrapper>
  );
}

export default RoundOverModal;
