import React from "react";
import Converter from "./Converter";
import Header from "./Header";
import "./App.css"
import Sign from "./Sign";
import Login from "./Login";
import {Route,Routes} from 'react-router-dom'
import Exchange from "./Exchange";
import About from "./About";
import Home from "./Home";

function App(){

  return(
    <div className="App">
    <Header/>
   <Routes>

     
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/convert" element={<Converter/>}></Route>
    <Route path="/sign" element={<Sign/>}></Route>
    <Route path="/exchange" element={<Exchange/>}></Route>
   </Routes>
   </div>
  )
}

export default App;