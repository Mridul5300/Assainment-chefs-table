
import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Cards from './Component/Header/Main/Cards'
import Carts from './Component/Header/Main/Carts'


function App() {
  const [handle, setHandle] = useState([])
  const [currentcoook, setCurrentCook] = useState ([])
  

  const handleEvent = cart => {
        const newHandle = [...handle, cart];
        setHandle(newHandle);
  }

  const currentHandle = current => {
          
         const wenCurrent = [...currentcoook,current]
         setCurrentCook(wenCurrent)
      
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-center gap-6 mt-10 '>
        <div>
        <Cards  
        handleEvent={handleEvent}
      
        ></Cards>
        </div>
        <div>
          <Carts handle={handle} currentcoook={currentcoook}  currentHandle={currentHandle}></Carts>
        
        </div>
      </div>
    </>
  )
}

export default App
