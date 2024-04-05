import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Shop from './Pages/Shop/Shop'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shop' element= {<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
