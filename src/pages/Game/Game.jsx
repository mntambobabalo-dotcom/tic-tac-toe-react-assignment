import React, { useContext, useEffect } from 'react';
import GameCell from '../../components/GameCell/GameCell';
import RoundOverModal from '../../components/Modal/RoundOverModal/RoundOverModal';
import Player from '../../components/Player/Player';
import { GameContext } from '../../contexts/GameContext';
import { ModalContext } from '../../contexts/ModalContext';
import { Container } from '../../styles/General.styled';
import {
  AssignmentControls,
  GameBoardStyle,
  GameCenter,
  HistoryButton,
  HistoryList,
  HistoryTitle,
  RestartButton,
  Status
} from './Game.styled';

function Game() {
  const { game, resetBoard, jumpToMove } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  useEffect(() => {
    if (game.roundWinner || game.draw) {
      handleModal(<RoundOverModal />);
    }
  }, [game.roundWinner, game.draw, handleModal]);

  let status = `Next Player: ${game.turn.toUpperCase()}`;
  if (game.roundWinner) status = `Winner: ${game.roundWinner.toUpperCase()}`;
  if (game.draw) status = 'Draw!';

  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn && !game.roundWinner && !game.draw}
      />

      <GameCenter>
        <Status>{status}</Status>

        <GameBoardStyle>
          {game.board.map((item, index) => (
            <GameCell
              key={index}
              cellItem={item}
              index={index}
              isWinningCell={game.winningCombo.includes(index)}
            />
          ))}
        </GameBoardStyle>

        <AssignmentControls>
          <RestartButton type="button" onClick={resetBoard}>
            Restart Game
          </RestartButton>

          <HistoryTitle>Move history / time travel</HistoryTitle>
          <HistoryList>
            {game.history.map((_, move) => (
              <li key={move}>
                <HistoryButton
                  type="button"
                  onClick={() => jumpToMove(move)}
                  active={game.moveNumber === move}
                >
                  {move === 0 ? 'Start' : `Move ${move}`}
                </HistoryButton>
              </li>
            ))}
          </HistoryList>
        </AssignmentControls>
      </GameCenter>

      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn && !game.roundWinner && !game.draw}
      />
    </Container>
  );
}

export default Game;
