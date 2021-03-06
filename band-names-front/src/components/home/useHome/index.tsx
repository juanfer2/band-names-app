import { type } from 'os';
import { useState, useEffect } from 'react';
import { UseFetchSocketInterface, BandInterface } from '../../../interfaces/bands.interface';
import {connectSocketServer} from '../../../socketConnection'


export const useFetchSocket = (): UseFetchSocketInterface => {

  const [socket, setSocket] = useState<SocketIOClient.Socket >( connectSocketServer('http://localhost:8080') )
  const [online, setOnline] = useState(false)
  const [loanding, setLoanding] = useState(false)
  const [bands, setBands] = useState([])

  const createBand = (name: string) => {
    socket.emit('add-band', name)
  }

  const voteBand = (id: string) => {
    console.log('vote band')
    socket.emit('vote-band', id)
  }

  useEffect(() => {
    setOnline( socket.connected );
  }, [socket])

  useEffect( () => {
    socket.on('connect', () => {
      setOnline( true );
    })
  }, [socket])

  useEffect( () => {
    socket.on('disconnect', () => {
      setOnline( false );
    })
  }, [ socket ])

  useEffect( () => {
    socket.on('current-bands', (bands: any) => {
      setBands( bands );
    })
  }, [ socket ])

  return {
    online,
    bands,
    loanding,
    createBand,
    voteBand
  }
}
