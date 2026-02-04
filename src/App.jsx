import { useState } from 'react'
import Header from './components/Header.jsx'
import MovingItem from './components/MovingItem.jsx'
import PopularDish from './components/PopularDish.jsx'

import Starter from './components/Starter.jsx'
import Sweets from './components/Sweets.jsx'

import Footer from './components/Footer.jsx'
 

 
import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <MovingItem />

    <PopularDish/>
    <Starter/>

    <Sweets/>
    
    <Footer/>
    
     
      
    </>
  )
}

export default App
