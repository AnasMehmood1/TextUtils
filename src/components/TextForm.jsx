import React, { useState } from 'react'

const TextForm = (props) => {
   
  const[text,setText] =useState("");
    
  const handleclick = ()=>{
  
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase" ,"Success")
    
  }
  const handleclicklower = ()=>{
  
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase" ,"Success")
  }
  const handleonchange = (event)=>{
    setText(event.target.value)
     
  }
  const cleartext  =()=>{
    const newText = text.slice(0,-1);
    setText(newText)
  }
  const clearall  =()=>{
   setText("")
  }
  return (
    <>
<div className="my-3" >
    <h1>{props.heading} </h1>
  <textarea className="form-control" value={text}  onChange={handleonchange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter the text'></textarea>
</div>
 <button className="btn btn-secondary btn-lg " onClick={handleclick} >  Convert to uppercase</button>
 <button className="btn btn-secondary btn-lg mx-3" onClick={handleclicklower} >  Convert to LowerCase</button>
 <button className="btn btn-secondary btn-lg mx-3" onClick={cleartext} >  Clear Text</button>
 <button className="btn btn-secondary btn-lg mx-3 my-3" onClick={clearall} >  Clear All</button>
 <div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length - 1} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length } Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text :"Enter something in the textbox above to preview it here"}</p>
 </div>
    </>
  )
}

export default TextForm
