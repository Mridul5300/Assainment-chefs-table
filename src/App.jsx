
import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Cards from './Component/Header/Main/Cards'
import Carts from './Component/Header/Main/Carts'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



  function App() {
    <ToastContainer />
  const [handle, setHandle] = useState([])
  const [currentcoook, setCurrentCook] = useState ([])
  

  const handleEvent = cart => {
        const newHandle = [...handle, cart];
        const isExist = handle.find(item => item.recipe_id == cart.recipe_id);
        if(!isExist) {
          setHandle(newHandle)
        }
      else{
        toast('Already Exist')
      }  
  }

  const currentHandle =(current) => {
  
         const wenCurrent = [...currentcoook,current]
         setCurrentCook(wenCurrent)
        
  }

      function clickMe (cart){
        currentHandle (cart,cart.preparing_time,cart.calories)
        console.log('add');
        currentHandledelet(cart.recipe_id)
      } 


    const currentHandledelet = (recipe_id) => {
      const newhandle = handle.filter(item=>item.recipe_id!= recipe_id)
      setHandle(newhandle)
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
          <Carts handle={handle} currentcoook={currentcoook} clickMe={clickMe} ></Carts>
        
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
