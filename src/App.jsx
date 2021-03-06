import './App.css'
import QuoteBox from './components/QuoteBox'
import thunderVideo from './assets/thunderstorm.mp4'

function App() {

  const colors = ['blue', 'green', 'cadetblue', 'red', 'orange', 'purple', 'brown', 'blueviolet', 'tomato', 'darkblue']

  const random = array => {
    return Math.floor(Math.random() * array.length)
  }

  return (
    <div className="App">

      <QuoteBox 
      colors = {colors}
      random = {random}
      />

      <video className='video__background' muted autoPlay loop>
        <source src={thunderVideo}/>
      </video>
      {/* stays here */}
      {/* <div className="layer" style={{'backgroundColor': `${colors[random]}`}}></div> */}
    </div>
  )
}

export default App
