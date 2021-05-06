import express from "express"
import http from "http"
import createGame from "./public/game.js"
import socketio from "socket.io"

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

const game = createGame()

console.log(game.state)

sockets.on("connection", socket => {
  const playerId = socket.id
  console.log(`Player connected on server with id: ${playerId}`)

  socket.emit("setup", game.state)
})

app.use(express.static('public'))

server.listen(3000, () => console.log('> server listening on port 3000'))