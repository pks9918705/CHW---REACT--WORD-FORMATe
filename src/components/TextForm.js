import React,{useState} from 'react'



export default function TextForm(props) {

  const [text,setText]=useState("Enter text here")


  const handleUpClick=()=>{
    console.log('Button clicked');
    setText("You have clicked on Button")
    let newText=text.toUpperCase()
    setText(newText)
    
  }
   
  const handleOnChange=(event) => {
    console.log('On change');
  
    setText(event.target.value)

    

  }
  return (
    <div className="container my-5">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
     
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

    </div>

  )
}

