import { useState } from 'react'
import Header from './components/Header.jsx'
import MovingItem from './components/MovingItem.jsx'
import PopularDish from './components/PopularDish.jsx'

import Starter from './components/Starter.jsx'

 
import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <MovingItem />

    <PopularDish/>
    <Starter/>
    
     
      
    </>
  )
}

export default App
