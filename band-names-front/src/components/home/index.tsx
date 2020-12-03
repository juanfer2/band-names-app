import React, { useState, useEffect } from 'react'
import { map, filter, mergeMap, delay } from 'rxjs/operators'
import { from } from 'rxjs'
import { userList } from '../../data'

import { useFetchSocket } from './useHome'
import Bands from '../bands'
import AlertConnection from '../alertConnection'


function Home() {
  const {online, bands, loanding, createBand, voteBand} = useFetchSocket()
  return (
    <div>
      <h1>Bands</h1>
      <AlertConnection online={online} />
      <Bands bands={bands} loanding={loanding} createBand={createBand} voteBand={voteBand} />
    </div>
  )
}

export default Home
