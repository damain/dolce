import React, {useRef} from 'react'

export default () => {
    let output  = useRef(null)
    let rec = () => {
        //var SpeechRecognition = webkitSpeechRecognition;
        
        var recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        let content = "hi"
        recognition.onresult = function(event) {
 
            var current = event.resultIndex;
           
            var transcript = event.results[current][0].transcript;
           
              content += transcript;
              output.current.innerHTML = content
              console.log(content)
            
        };
        recognition.onerror = (error) =>{
            output.current.innerHTML = content
        }
        recognition.start()
    }
  return (
    <div>
        <div ref={output}></div>
        <button onClick={rec} className="btn">speak</button>
    </div>
  )
}
