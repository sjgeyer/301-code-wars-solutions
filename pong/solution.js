class Pong {
  constructor(maxScore) {
    this.maxScore = maxScore;
    this.player1 = 0;
    this.player2 = 0;
    this.currentPlayer = 1;
  }

  play(ballPos, playerPos) {
    if ((this.player1 >= this.maxScore) || (this.player2 >= this.maxScore)) {
      return 'Game Over!';
    }
    const originalPlayer = this.currentPlayer;
    const hit = Math.abs(playerPos - ballPos) <= 3;
    const opponent = this.currentPlayer === 1 ? 2 : 1;
    this.currentPlayer = opponent;
    if (!hit) {
      this[`player${opponent}`] += 1;
      if (this[`player${opponent}`] >= this.maxScore) return `Player ${opponent} has won the game!`
      else {
        return `Player ${originalPlayer} has missed the ball!`;
      }
    }
    return `Player ${originalPlayer} has hit the ball!`;
  }
}