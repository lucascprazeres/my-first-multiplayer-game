export default function updateScoreboard(document, game) {
  clearScoreBoard(document)
  
  const board = document.getElementById("scoreboard")

  for (const playerId in game.state.players) {
    const playerRow = document.createElement("tr")
    playerRow.className = "player-row"

    const playerIdCell = document.createElement("td")
    const playerIdText = document.createTextNode(playerId)
  
    const playerScoreCell = document.createElement("td")
    const playerScoreText = document.createTextNode("0")
    
    playerIdCell.appendChild(playerIdText)
    playerScoreCell.appendChild(playerScoreText)

    playerRow.appendChild(playerIdCell)
    playerRow.appendChild(playerScoreCell)

    board.appendChild(playerRow)
  }
}

function clearScoreBoard(document) {
  const board = document.getElementById("scoreboard")
  const playerRowCollection = board.getElementsByClassName("player-row")
  const playerRowList = Array.from(playerRowCollection)

  for(const player of playerRowList) {
    player.remove()
  }
}