import React from 'react'
import Speak from "./Speak"


export default ({word}) => {
  return (
    <div>
      <div>
          <h1>{word}</h1>
      </div>
      <div>
        <Speak word={word}/>
      </div>
    </div>
  )
}
