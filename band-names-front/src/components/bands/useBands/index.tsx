import { type } from 'os';
import { useState, useEffect } from 'react';
import { BandInterface } from '../../../interfaces/bands.interface';
import {connectSocketServer} from '../../../socketConnection'


export const useBands = (): BandInterface[] => {

  const [socket, setSocket] = useState<SocketIOClient.Socket >( connectSocketServer() )
  const [bands, setBands] = useState<BandInterface[]>([])

  useEffect(() => {
    if(socket.connected){
      socket.on('current-bands', (bandsData: BandInterface[]) => {
        setBands( bandsData );
      })  
    }
  }, [socket])

  
  return bands
}