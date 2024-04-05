import './Hero.css'
import heroImage from '../../../assets/shop-hero.png'
import { Link } from 'react-router-dom'
import arrowBlackRight from '../../../assets/arrow-black.svg'

const Hero = () => {
  return (
    <section className='shop-hero'>
        <div className="img-container">
            <img src={heroImage} />
        </div>
        <div className='text-cont'>
            <h1>Shop</h1>
            <p><Link to='/'>Home</Link> <img src={arrowBlackRight} /> Shop</p>
        </div>
    </section>
  )
}

export default Hero