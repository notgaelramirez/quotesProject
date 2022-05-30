import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {

  const colors = ['blue', 'green', 'cadetblue', 'red', 'orange', 'purple', 'brown', 'blueviolet', 'tomato', 'darkblue']

  const random = Math.round(Math.random() * colors.length)

  return (
    <div className="App">

      <QuoteBox 
      colors = {colors}
      random = {random}
      />

      <video className='video__background' muted autoPlay loop>
        <source src='./src/assets/thunderstorm.mp4'
        type='video/mp4'/>
      </video>
      <div className="layer" style={{'backgroundColor': `${colors[random]}`}}></div>
    </div>
  )
}

export default App
