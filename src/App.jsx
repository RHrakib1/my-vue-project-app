import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './team'
import Users from './user'
import Friends from './friends'
import Friend from './friend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Friend></Friend>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
    </>
  )
}

export default App
