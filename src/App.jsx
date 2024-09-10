import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Myfrem from './component/Myfrem';
import Position from './component/Position';
import Education from './component/Education';
import Skill from './component/Skill';
import Project from './component/Project';

function App() {
  
  return (
    <>
      <Header></Header>
     <Myfrem></Myfrem>
     <hr></hr>
     <Position></Position>
    
     <Education></Education>
     <hr/>
     <Skill></Skill>
     <Project></Project>
     <Footer></Footer>
    </>
  );
}

export default App
