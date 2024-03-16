
import './App.css'
import Header from './Component/Header/Header'
import Cards from './Component/Header/Main/Cards'
import Carts from './Component/Header/Main/Carts'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-center gap-6 mt-10 '>
        <div>
        <Cards></Cards>
        </div>
        <div>
          <Carts></Carts>
        </div>
      </div>
    </>
  )
}

export default App
