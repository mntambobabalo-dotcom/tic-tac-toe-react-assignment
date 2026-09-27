import React, { useContext } from 'react';
import { ReactComponent as IconO } from '../../assets/svgs/icon-o.svg';
import { ReactComponent as OIconOutline } from '../../assets/svgs/icon-o-outline.svg';
import { ReactComponent as IconX } from '../../assets/svgs/icon-x.svg';
import { ReactComponent as XIconOutline } from '../../assets/svgs/icon-x-outline.svg';
import { GameContext } from '../../contexts/GameContext';
import { CellStyle } from './GameCell.styled';

function GameCell({ cellItem, index, isWinningCell }) {
  const { updateBoard, game } = useContext(GameContext);
  const disabled = Boolean(cellItem || game.roundWinner || game.draw);

  const handleClick = () => {
    if (!disabled) updateBoard(index);
  };

  return (
    <CellStyle
      type="button"
      onClick={handleClick}
      disabled={disabled}
      isWinningCell={isWinningCell ?? false}
      aria-label={cellItem ? `Cell ${index + 1}: ${cellItem}` : `Cell ${index + 1}: empty`}
    >
      {cellItem === 'x' && <IconX className="markedItem" />}
      {cellItem === 'o' && <IconO className="markedItem" />}
      {!cellItem && game.turn === 'x' && <XIconOutline className="outlineIcon" />}
      {!cellItem && game.turn === 'o' && <OIconOutline className="outlineIcon" />}
    </CellStyle>
  );
}

export default GameCell;
