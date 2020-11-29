import io from 'socket.io-client'
export const connectSocketServer = () => {
  var socket: SocketIOClient.Socket = io.connect('http://localhost:8080',{
    transports: ['websocket']
  })
  return socket
}

