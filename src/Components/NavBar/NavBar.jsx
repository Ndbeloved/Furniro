import './NavBar.css'
import logo from '../../assets/logo.svg'
import account from '../../assets/account.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import menu_icon from '../../assets/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='navbar'>
        <div className='logo-wrapper'>
            <img src={logo}/>
        </div>

        <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>

        <div className="account-cart-wrapper">
            <Link to="/"><img src={account} /></Link>
            <Link to="/"><img src={search} /></Link>
            <Link to="/"><img src={heart} /></Link>
            <Link to="/"><img src={cart} /></Link>        
        </div>

        <div className="mobile harmburger-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <img src={menu_icon} />
        </div>

        <div className={menuOpen ? "mobile harmburger open" : "mobile harmburger"}>
            <Link to="/" className='active'>Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/"><img src={account} /> Account</Link>
            <Link to="/"><img src={heart} /> Favourites</Link>
            <Link to="/"><img src={cart} /> Cart</Link>    
        </div>
    </nav>
  )
}

export default NavBar