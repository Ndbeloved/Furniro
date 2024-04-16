import './PopUpCart.css'
import icon_gray from '../../assets/cart_gray.svg'
import logo from '../../assets/logo.svg'
import backgroundImage from '../../assets/shop-hero.png'
import { Link } from 'react-router-dom'
import arrowBlackRight from '../../assets/arrow-black.svg'

const PopUpCart = () => {
  return (
    <section className="popup-section">
        <div className="header">
            <img src={backgroundImage} id='bg-image' />
            <div id='content'>
                <img src={logo} />
                <h2>Cart</h2>
                <p><Link to="/">Home </Link><img src={arrowBlackRight} /> Cart</p>
            </div>
        </div>

        <div className="cart-wrapper">
            <div className="items">
                <p1>item</p1>
            </div>
            <div className="checkout-wrapper">
                <div className="main">
                    <p id='checkout-heading'>Cart Totals</p>
                    <p id='subtotal'>subtotal <span id='price'>N250000</span></p>
                    <p id='total'>Total <span id='total-price'>N250000</span></p>
                    <Link to='/cart'>Checkout</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopUpCart