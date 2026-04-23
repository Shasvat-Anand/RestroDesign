import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import MovingItem from './components/MovingItem/MovingItem.jsx'
import PopularDish from './components/PopularDish/PopularDish.jsx'

import Starter from './components/Starter/Starter.jsx'
import Sweets from './components/Sweets/Sweets.jsx'

import Aboutus from './components/Aboutus/Aboutus.jsx'
import Footer from './components/Footer/Footer.jsx'
 

 
import './App.css'

function App() {
  

  return (
    <>
    <div className='web'>
    <Header />
    <MovingItem />
    <Aboutus/>

    <PopularDish/>
    <Starter/>

    <Sweets/>
    
    <Footer/>
    
      </div>
     
      
    </>
  )
}

export default App
