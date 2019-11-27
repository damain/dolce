import React from 'react'

export default ({word}) => {
    
    const speakWord = () => {
        let utter = new SpeechSynthesisUtterance()
        utter.text = word
        utter.rate = .5
        window.speechSynthesis.speak(utter)
    }
  return (
    <div>
      <div onClick={speakWord} className=""><i className="medium material-icons">play_arrow</i></div>
    </div>
  )
}
