export default function createPlayerMock(playerId, game) {
  function start() {
    setInterval(movePlayerRandomly, 500)
  }

  function movePlayerRandomly() {
    const moveDirection = getMoveDirection()

    const command = createMoveCommand(moveDirection)

    game.movePlayer(command)
  }

  function getMoveDirection() {
    const directions = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']

    return directions[getRandomIntBetween(0,3)]
  }

  function getRandomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function createMoveCommand(direction) {
    return {
      type: 'move-player',
      playerId,
      keyPressed: direction,
    }
  }

  return {
    start
  }
}