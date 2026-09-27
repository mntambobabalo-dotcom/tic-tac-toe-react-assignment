import { createContext, useContext, useMemo, useReducer } from 'react';
import { genConfig } from 'react-nice-avatar';
import { checkForWinner, getTurnForMove } from '../utils/GameUtils';

export const GameContext = createContext({});

const emptyBoard = () => Array(9).fill(null);

const createPlayer = (choice, name, color) => ({
  choice,
  name,
  score: 0,
  color,
  avatarConfig: genConfig()
});

export const createInitialGame = () => ({
  board: emptyBoard(),
  player1: createPlayer('x', 'Player1', '#8437F9'),
  player2: createPlayer('o', 'Player2', '#F9C811'),
  turn: 'x',
  roundWinner: '',
  winningCombo: [],
  draw: false,
  history: [emptyBoard()],
  moveNumber: 0
});

export const initialGame = createInitialGame();

export const GAME_ACTIONS = {
  MAKE_MOVE: 'MAKE_MOVE',
  RESET: 'RESET',
  JUMP_TO_MOVE: 'JUMP_TO_MOVE'
};

export function gameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.MAKE_MOVE: {
      const index = action.payload;

      // Ignore illegal clicks: occupied cells and completed games cannot change.
      if (state.board[index] || state.roundWinner || state.draw) {
        return state;
      }

      const nextBoard = [...state.board];
      nextBoard[index] = state.turn;

      const result = checkForWinner(nextBoard);
      const truncatedHistory = state.history.slice(0, state.moveNumber + 1);

      let player1 = state.player1;
      let player2 = state.player2;

      if (result.winner === 'x') {
        player1 = { ...player1, score: player1.score + 1 };
      }

      if (result.winner === 'o') {
        player2 = { ...player2, score: player2.score + 1 };
      }

      return {
        ...state,
        board: nextBoard,
        player1,
        player2,
        turn: result.winner ? state.turn : state.turn === 'x' ? 'o' : 'x',
        roundWinner:
          result.winner && result.winner !== 'draw' ? result.winner : '',
        winningCombo: result.winningCombo,
        draw: result.winner === 'draw',
        history: [...truncatedHistory, nextBoard],
        moveNumber: state.moveNumber + 1
      };
    }

    case GAME_ACTIONS.RESET:
      return createInitialGame();

    case GAME_ACTIONS.JUMP_TO_MOVE: {
      const moveNumber = action.payload;
      const board = [...state.history[moveNumber]];
      const result = checkForWinner(board);

      return {
        ...state,
        board,
        turn: result.winner
          ? getTurnForMove(Math.max(moveNumber - 1, 0))
          : getTurnForMove(moveNumber),
        roundWinner:
          result.winner && result.winner !== 'draw' ? result.winner : '',
        winningCombo: result.winningCombo,
        draw: result.winner === 'draw',
        moveNumber
      };
    }

    default:
      return state;
  }
}

export function GameContextProvider({ children }) {
  const [game, dispatch] = useReducer(gameReducer, undefined, createInitialGame);

  const updateBoard = (index) =>
    dispatch({ type: GAME_ACTIONS.MAKE_MOVE, payload: index });

  const resetBoard = () => dispatch({ type: GAME_ACTIONS.RESET });

  const restartGame = resetBoard;

  const jumpToMove = (move) =>
    dispatch({ type: GAME_ACTIONS.JUMP_TO_MOVE, payload: move });

  const value = useMemo(
    () => ({ game, dispatch, updateBoard, resetBoard, restartGame, jumpToMove }),
    [game]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  return useContext(GameContext);
}
