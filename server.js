import express from "express"
import http from "http"
import createGame from "./public/game.js"
import socketio from "socket.io"

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

const game = createGame()
game.start()

game.subscribe(command => {
  console.log(`> Emitting ${command.type}`)
  sockets.emit(command.type, command)
})

sockets.on("connection", socket => {
  const playerId = socket.id
  console.log(`> Player connected on server with id: ${playerId}`)
  
  game.addPlayer({ playerId });

  socket.emit("setup", game.state)

  socket.on("disconnect", () => {
    game.removePlayer({ playerId })
    console.log(`> Player ${playerId} has left the server`)
  })

  socket.on("move-player", (command) => {
    command.type = 'move-player'
    command.playerId = playerId
    game.movePlayer(command)
  })

})

app.use(express.static('public'))

server.listen(3000, () => console.log('> server listening on port 3000'))