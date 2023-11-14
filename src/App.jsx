import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value}) {
  return <button className="square">1</button>;
}


function App() {
  

  return (
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div> 
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div> 
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    </>
  )
}
export default App 




