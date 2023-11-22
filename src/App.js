
import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

 const[mode , setMode]=useState("light")
 
 const [alert ,setAlert] = useState(null);
 const showAlert = ( message , type)=>{
  setAlert(
    {
      msg : message,
    typ : type
    }
  )
  setTimeout(() => {
    setAlert(null)
  }, 1500);
 }

 
  let toggleMode = ()=>{
  if(mode === "light"){
    setMode  ("dark")
    document.body.style.backgroundColor = "lightgray"
    showAlert("Dark mode enabled" ,"success")
    document.title = "TextUtils - Dark"
  }
  else{
    setMode  ("light")
    document.body.style.backgroundColor = "white"
    showAlert("light mode enabled","success")
    document.title = "TextUtils - light"

  }
 }
  
 const blue =()=>{
  document.body.style.backgroundColor = "Blue"
  showAlert("blue mode enabled","success")
  document.title = "TextUtils - Blue"
}
const red =()=>{
  document.body.style.backgroundColor = "red"
  showAlert("red mode enabled","success")
  document.title = "TextUtils - Red"
}
const green =()=>{
  document.body.style.backgroundColor = "green"
  showAlert("green mode enabled","success")
  document.title = "TextUtils - Green"
}
  return (
  <>
    <Navbar title="TextUtils" red = {red}  green = {green} blue = {blue} mode={mode} toggleMode={toggleMode}
    about = "About"/>
   <Alert alert ={alert} />
   <div className="container">

   <TextForm showAlert ={showAlert} heading="Enter the text to analyze below "/>
   </div>
 







  
  </>
  );
}

export default App;
