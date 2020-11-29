import React, { useEffect } from 'react'
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { env } from './contants/api.constant'
/** Actions */
import { healtAction } from './flux/actions/healt.action'

import Home from './components/home'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)
  }, [])
  console.log(state)

  return (
    <div className="">
      <Home />
    </div>
  )
}

export default App
