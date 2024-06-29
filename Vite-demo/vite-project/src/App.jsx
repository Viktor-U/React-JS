import { useState } from 'react'
import Navigation from './components/Navigation'
import Sections from './components/Sections'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
        <Navigation/>
        <Sections/>
        <Footer/>
        
  </>

    
  )
}

export default App
