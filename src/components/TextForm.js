import React, { useState } from 'react'



export default function TextForm(props) {

  const [text, setText] = useState("")


  const handleUpClick = () => {
    console.log('Button clicked');
    setText("You have clicked on Button")
    let newText = text.toUpperCase()
    setText(newText)

  }

  const handleOnChange = (event) => {
    console.log('On change');

    setText(event.target.value)

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)

  }
  const handleToRev = () => {

    var reversedString = '';
    for (let i = text.length - 1; i >= 0; i--) {
      reversedString += text[i];
    }

    let newText =  reversedString
    setText(newText)
     
  }



  return (
    <div className="container my-5">
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleToRev}>Reverse Text</button>

      {/* counter  */}
      <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
        <p>{0.16 * (text.split(" ").length - 1)} Min required to read</p>
      </div>

    </div>

  )
}

