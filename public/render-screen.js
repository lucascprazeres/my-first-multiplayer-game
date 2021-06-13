export default function renderScreen(screen, game, requestAnimationFrame, playerId) {
  const context = screen.getContext('2d')
  
  context.fillStyle = 'white'
  context.clearRect(0, 0, 10, 10)

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId]
    context.fillStyle = '#5690FF'
    context.fillRect(player.x, player.y, 1, 1)
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId]
    context.fillStyle = '#E83F5B',
      context.fillRect(fruit.x, fruit.y, 1, 1)
  }

  const currentPlayer = game.state.players[playerId]

  if (currentPlayer) {
    context.fillStyle = '#4CD62B'
    context.fillRect(currentPlayer.x, currentPlayer.y, 1, 1)
  }

  requestAnimationFrame(() => renderScreen(screen, game, requestAnimationFrame, playerId))
}