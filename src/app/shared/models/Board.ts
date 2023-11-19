export interface Board {
  id: string;
  firstPlayerPits: number[];
  firstPlayerMancala: number;
  secondPlayerPits: number[];
  secondPlayerMancala: number;
  winner: number;
  playerTurn: number;
}
