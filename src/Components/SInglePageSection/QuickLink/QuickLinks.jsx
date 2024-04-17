import './QuickLinks.css'
import arrowBlackRight from '../../../assets/arrow-black.svg'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div id='single-page-quick-links'>
        <Link to="/">Home</Link>
        <img src={arrowBlackRight} />
        <Link to="/shop">Shop</Link>
        <img src={arrowBlackRight} />
        <p>Product name</p>
    </div>
  )
}

export default QuickLinks