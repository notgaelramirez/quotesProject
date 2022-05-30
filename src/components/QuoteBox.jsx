import React, { useState } from 'react'
import quoteFile from '/src/json/quotes.json'


const QuoteBox = ({colors, random}) => {

  const quotesRandom = Math.round(Math.random() * quoteFile.length)

  console.log(quoteFile.length)
  console.log(quotesRandom)

  let randomColor = random(colors)

  let [quote, setQuote] = useState(quoteFile[0].quote)
  let [author, setAuthor] = useState(quoteFile[0].author)
  let [color, setColor] = useState(colors[randomColor])
  const background = {
    backgroundColor: color
  }
  const textColor = {
    color: color
  }

  let quoteChange = () =>{
    setQuote(quote = quoteFile[quotesRandom].quote)
    setAuthor(author = quoteFile[quotesRandom].author)
    setColor(color = colors[randomColor])
  }

  console.log(quote)
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <div className='quote__box' style={textColor}>
        <p className='quote'>{quote}</p>
        <p className="author">{author}</p>
        <button className='button' style={background} onClick={quoteChange}><i className='bx bx-dice-3'></i></button>
      </div>
      <div className="layer" style={background}></div>
    </div>
  )
}

export default QuoteBox