import './Hero.css'
import bgImage from '../../assets/hero-background.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className='bg-wrapper'>
            <img src={bgImage} alt="" />
        </div>

        <div className="empty-space"></div>
        <div className="caption-wrapper">
            <div className="main-wrapper">
                <p id='sm-caption'>New Arrival</p>
                <p id='lg-caption'>Discover Our</p>
                <p id='lg-caption'>New Collection</p>
                <p id='md-caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum ducimus eum ex autem nulla sunt, voluptates nam voluptatum officiis?</p>
                <Link to="/shop">Buy Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero