import React, {useMemo} from 'react'
import io from 'socket.io-client'

// 'http://localhost:8080'
export const connectSocketServer = (serverPath: string) => {
  var socket: SocketIOClient.Socket = io.connect(serverPath,{
    transports: ['websocket']
  })
  return socket
}

