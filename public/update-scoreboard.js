export default function updateScoreboard(document, game, currentPlayerId) {
  const board = getScoreboardFromDOM(document)

  removePlayersFrom(board)

  for (const playerId in game.state.players) {
    const { score } = game.state.players[playerId]
    let playerRow = createPlayerRow(playerId, score)
    if (playerId === currentPlayerId) {
      playerRow = getHighlightedPlayer(playerRow)
    }
    appendPlayerOnScoreboard(playerRow, board)
  }

}

function removePlayersFrom(board) {
  const playerRowCollection = getPlayerHTMLCollectionFrom(board)
  const playerRowList = Array.from(playerRowCollection)

  for (const player of playerRowList) {
    player.remove()
  }
}

function getPlayerHTMLCollectionFrom(board) {
  return board.getElementsByClassName("player-row")
}

function getScoreboardFromDOM(document) {
  return document.getElementById("scoreboard")
}

function createPlayerRow(playerId, score) {
  const playerRow = document.createElement("tr")
  playerRow.classList.add("player-row")

  const playerIdCell = document.createElement("td")
  const playerIdText = document.createTextNode(playerId)

  const playerScoreCell = document.createElement("td")
  const playerScoreText = document.createTextNode(String(score))

  playerIdCell.appendChild(playerIdText)
  playerScoreCell.appendChild(playerScoreText)

  playerRow.appendChild(playerIdCell)
  playerRow.appendChild(playerScoreCell)

  return playerRow
}

function appendPlayerOnScoreboard(playerRow, board) {
  board.appendChild(playerRow)
}

function getHighlightedPlayer(playerRow) {
  playerRow.classList.add("current")
  return playerRow
}