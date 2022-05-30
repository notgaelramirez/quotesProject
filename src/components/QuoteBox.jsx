import React, { useState } from 'react'
import quoteFile from './src/json/quotes.json'


const QuoteBox = ({colors, random}) => {

  const quotesRandom = Math.round(Math.random() * quoteFile.length)

  console.log(quoteFile.length)
  console.log(quotesRandom)

  let [quote, setQuote] = useState(quoteFile[0].quote)
  let [author, setAuthor] = useState(quoteFile[0].author)
  const quoteChange = () =>{
    setQuote(quote = quoteFile[quotesRandom].quote)
    setAuthor(author = quoteFile[quotesRandom].author)
  }

  console.log(quote)

  
  

  console.log(quote)
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <div className='quote__box' style={{color: `${colors[random]}`}}>
        <p className='quote'>{quote}</p>
        <p className="author">{author}</p>
        <button className='button' style={{backgroundColor: `${colors[random]}`}} onClick={quoteChange}><i className='bx bx-dice-3'></i></button>
      </div>
    </div>
  )
}

export default QuoteBox