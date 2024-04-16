import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { Suspense, lazy } from 'react'
import Loader from './Components/Loader/Loader'


function App() {
  const Shop = lazy(()=> import('./Pages/Shop/Shop'))
  const Cart = lazy(()=> import('./Components/PopUpCart/PopUpCart'))

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shop' element= {<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path= '/cart' element = {<Cart />} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
