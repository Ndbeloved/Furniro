import './NavBar.css'
import logo from '../../assets/logo.svg'
import account from '../../assets/account.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import menu_icon from '../../assets/menu.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  //closes hamburger when link changes
  useEffect(()=>{
    const links = document.querySelectorAll('a')
    links.forEach(link=>{
      link.addEventListener('click', ()=>{
        setMenuOpen(false)
      })
    })
  }, [])
  return (
    <nav className='navbar'>
        <div className='logo-wrapper'>
            <img src={logo}/>
        </div>

        <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <div className="account-cart-wrapper">
            <Link to="/login"><img src={account} /></Link>
            <Link to="/"><img src={search} /></Link>
            <Link to="/"><img src={heart} /></Link>
            <Link to="/cart" ><img src={cart} /></Link>        
        </div>

        <div className="mobile harmburger-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <img src={menu_icon} />
        </div>

        <div className={menuOpen ? "mobile harmburger open" : "mobile harmburger"}>
            <Link to="/" className='active'>Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login"><img src={account} /> Account</Link>
            <Link to="/"><img src={heart} /> Favourites</Link>
            <Link to="/cart"><img src={cart} /> Cart</Link>    
        </div>

    </nav>
  )
}

export default NavBar